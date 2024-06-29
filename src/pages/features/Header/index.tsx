import { Flex } from "@kuma-ui/core";

import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import appConfig from "../../../appConfig";

export default function Header() {
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
