import { Flex } from "@kuma-ui/core";
import { useContext } from "react";
import appConfig, { getAppConfig } from "../../../appConfig";
import  DomainContext  from "../../../DomainContext";

export default function Footer() {
  const { domain } = useContext(DomainContext);
  return (
    <Flex
      padding={20}
      fontSize={appConfig.fontSize}
      flexDir="column"
      alignItems="center"
      justify="center"
      textAlign="center"
      paddingBottom={80}
    >
      <a href={`tel:${getAppConfig(domain).phone}`}>
        {getAppConfig(domain).phone}
      </a>
      <p>© 2024 {getAppConfig(domain).name}. All rights reserved.</p>
    </Flex>
  );
}
