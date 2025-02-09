import { AccessControl } from "accesscontrol";

const grantsObject = {
  admin: {
    users: {
      "read:any": ["*"],
      "update:any": ["*", "!role"],
      "delete:any": ["*"],
    },
    sources: {
      "read:any": ["*"],
      "create:own": ["*"],
      "delete:own": ["*"],
      "update:own": ["*"],
    },
  },
  user: {
    users: {
      "read:own": ["*"],
      "update:own": ["*", "!role"],
      "delete:own": ["*"],
    },
    sources: {
      "read:own": ["*"],
      "create:own": ["*"],
      "delete:own": ["*"],
      "update:own": ["*"],
    },
  },
};

const acObject: AccessControl = new AccessControl(grantsObject);
acObject.lock();

export { acObject as ac };
