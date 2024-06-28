import { Flex } from "@kuma-ui/core";
import { appConfig } from "../../commons/appConfig";

export function Footer() {
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
      <a href={`tel:${appConfig.phone}`}>{appConfig.phone}</a>
      <p>© 2024 {appConfig.name}. All rights reserved.</p>
    </Flex>
  );
}
