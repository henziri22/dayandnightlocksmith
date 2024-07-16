export default {
  fontSize: "1.5rem",
};

const configByDomain = {
  "dayandnightlocksmith.com": {
    name: "Day And Night LockSmith",
    phone: "818-571-3096",
  },
  "hlocksmith.com": {
    name: "Harkins Lockmsith",
    phone: "323-740-3836",
  },
};

export type AppConfigKeys = keyof typeof configByDomain;

export const getAppConfig = (key: AppConfigKeys) => {
  return configByDomain[key] || configByDomain["dayandnightlocksmith.com"];
};
