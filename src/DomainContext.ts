import { createContext } from "react";
import { AppConfigKeys } from "./appConfig";

export default createContext<{ domain: AppConfigKeys }>({
  domain: "www.dayandnightlocksmith.com",
});
