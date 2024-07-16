import { Flex } from "@kuma-ui/core";

import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import { useContext } from "react";
import appConfig, { getAppConfig } from "../../../appConfig";
import { DomainContext } from "../../DomainContext";

export default function Header() {
  const { domain } = useContext(DomainContext);
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
      <a
        href={`tel:${getAppConfig(domain).phone}`}
        aria-label="call me now button"
      >
        Call now {getAppConfig(domain).phone}
      </a>
    </Flex>
  );
}
