import { createContext } from "react";
import { AppConfigKeys } from "../../appConfig";

export default createContext<{ domain: AppConfigKeys }>({
  domain: "dayandnightlocksmith.com",
});
