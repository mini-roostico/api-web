import { readFileSync } from "fs";
import jwt, { SignOptions } from "jsonwebtoken";
import { BadRequestError } from "../../errors/errors.js";
import * as fs from "fs";

export type ConfigurationObject = {
  ATPrivateKeyPath?: string;
  RTPrivateKeyPath?: string;
};

export interface IJwtHandler {
  config(config: ConfigurationObject): void;
  setConfig(key: string, value: unknown): void;
  getConfig(key: string): unknown;
}

export interface IJwtHandlerInternal extends IJwtHandler {
  getInstance(config: ConfigurationObject | object): IJwtHandlerInternal;
  verifyAccessToken<T>(token: string): T | undefined;
  verifyRefreshToken<T>(token: string): T | undefined;
  signAccessToken(user, expiration: string | undefined): string;
  signRefreshToken(user, expiration: string | undefined): string;
}

export class JwtHandler {
  private static INSTANCE: JwtHandler | null = null;
  private internalConfiguration: ConfigurationObject;

  private signOptions: SignOptions = {
    issuer: "Subjekt",
    audience: "https://www.subjekt.com",
    algorithm: "RS256",
  };

  private constructor(
    config: ConfigurationObject | null | undefined = undefined,
  ) {
    if (!config) {
      this.internalConfiguration = {};
    } else {
      const paths = Object.values(config);
      paths.forEach((path: string) => this.checkPath(path));
      this.internalConfiguration = config;
    }
  }

  public static config(config: ConfigurationObject): void {
    this.INSTANCE = new JwtHandler(config);
  }

  public static getInstance(
    config: ConfigurationObject | object = {},
  ): JwtHandler {
    if (!this.INSTANCE) {
      this.INSTANCE = new JwtHandler(config);
    }
    return this.INSTANCE;
  }

  public setConfig(key: string, path: string): void {
    this.checkPath(path);
    this.internalConfiguration[key] = path;
  }

  public getConfig(key: string): unknown {
    return this.internalConfiguration[key];
  }

  public verifyAccessToken<T>(token: string): T | undefined {
    const privateKey: string = this.getKey("PR", "AT");
    return this.verifyJwt(token, privateKey) as T;
  }

  public verifyRefreshToken<T>(token: string): T | undefined {
    const privateKey = this.getKey("PR", "RT");
    const verifiedResponse = this.verifyJwt(token, privateKey) as T;

    const subscriber = (verifiedResponse as { sub: string }).sub;

    if (!subscriber) {
      throw new Error("Unable to verify the identity of the subscriber");
    }
    return verifiedResponse;
  }

  public signAccessToken(
    user,
    expiration: string | undefined = undefined,
  ): string {
    const privateKey: string = this.getKey("PR", "AT");
    if (!expiration) {
      expiration = "15m";
    }
    return this.signJwt({ sub: user }, privateKey, { expiresIn: expiration });
  }

  public signRefreshToken(
    user,
    expiration: string | undefined = undefined,
  ): string {
    const privateKey = this.getKey("PR", "RT");
    if (!expiration) {
      expiration = "30m";
    }
    return this.signJwt({ sub: user }, privateKey, { expiresIn: expiration });
  }

  private getKey(keyType: "PU" | "PR", tokenType: "AT" | "RT"): string {
    let keyPath: string | undefined;

    if (tokenType === "AT") {
      keyPath =
        this.internalConfiguration.ATPrivateKeyPath || process.env.AT_PRIVATE;
    } else {
      keyPath =
        this.internalConfiguration.RTPrivateKeyPath || process.env.RT_PRIVATE;
    }

    if (keyPath === undefined) {
      throw new Error(
        `Key path of type ${keyType} for token type ${tokenType} is not set`,
      );
    }

    return readFileSync(keyPath, "utf8");
  }

  private checkPath(path: string) {
    try {
      fs.accessSync(path);
    } catch {
      throw new Error("The path " + path + " doesn't exists");
    }
  }

  private signJwt(payload: object, pKey: string, options: SignOptions) {
    if (!("sub" in payload)) {
      throw new Error(
        "sub property should be present in the payload, assign the User class that is making the request",
      );
    }
    try {
      return jwt.sign(payload, pKey, { ...this.signOptions, ...options });
    } catch (error) {
      throw new Error("Error while creating a new payload: " + error.message);
    }
  }

  private verifyJwt<T>(token: string, pKey: string): T | null {
    return jwt.verify(token, pKey, (error, decoded) => {
      if (error) {
        throw new BadRequestError(error.message);
      }
      return decoded;
    }) as T;
  }
}
