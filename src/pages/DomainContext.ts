import { createContext } from "react";
import { AppConfigKeys } from "../appConfig";

export const DomainContext = createContext<{ domain: AppConfigKeys }>({
  domain: "dayandnightlocksmith.com",
});
