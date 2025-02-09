import { createClient, RedisClientType } from "redis";
import { ApiLimiterStorage } from "@mini-roostico/api-common";

let redisClient: RedisClientType;

const host = process.env.REDIS_HOST || "localhost";
const port = parseInt(process.env.REDIS_PORT as string) || 6379;

export async function RedisConfig() {
  redisClient = createClient({
    socket: {
      host: host,
      port: port,
    },
  });
  await redisClient.connect();
}

export default class RedisLimiterStorage implements ApiLimiterStorage {
  async exists(clientId: string): Promise<boolean> {
    if (!redisClient) {
      return false;
    }
    const exists = await redisClient.exists(clientId);
    return exists === 1;
  }

  async increaseEntry(clientId: string): Promise<number> {
    if (!redisClient) {
      return 0;
    }
    return await redisClient.incr(clientId);
  }

  async setExpiration(clientId: string, seconds: number): Promise<boolean> {
    if (!redisClient) {
      return false;
    }
    return redisClient.expire(clientId, seconds);
  }
}
