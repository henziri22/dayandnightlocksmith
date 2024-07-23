export default {
  fontSize: "1.5rem",
};

const configByDomain = {
  "dayandnightlocksmith.com": {
    name: "Day And Night LockSmith",
    phone: "818-571-3096",
    logo: {
      path: "/daynightlocksmith.png",
      width: 280,
      height: 150,
    },
  },
  "hlocksmith.com": {
    name: "Harkins Lockmsith",
    phone: "323-740-3836",
    logo: {
      path: "/hlocksmith.png",
      width: 320,
      height: 130,
    },
  },
};

export type AppConfigKeys = keyof typeof configByDomain;

export const getAppConfig = (key: AppConfigKeys) => {
  return configByDomain[key] || configByDomain["dayandnightlocksmith.com"];
};
