import { Flex } from "@kuma-ui/core";
import { appConfig } from "../../commons/appConfig";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";

export function Header() {
  return (
    <Flex
      justify="center"
      alignItems="center"
      textAlign="center"
      as="header"
      background="black"
      fontSize={appConfig.fontSize}
      h={70}
      gap={10}
    >
      <PhoneOutlined />
      <a href={`tel:${appConfig.phone}`} aria-label="call me now button">
        Call now {appConfig.phone}
      </a>
    </Flex>
  );
}
