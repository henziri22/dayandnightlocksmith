import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import appConfig, { getAppConfig } from "../../../appConfig";
import { Flex } from "@kuma-ui/core";
import { useContext } from "react";
import { DomainContext } from "../../DomainContext";

export default function CallButton() {
  const { domain } = useContext(DomainContext);
  return (
    <Flex
      as="a"
      href={`tel:${getAppConfig(domain).phone}}`}
      color="white"
      fontSize={appConfig.fontSize}
      textAlign="center"
      gap={10}
      justify="center"
      alignItems="center"
      h="60px"
      w="100%"
      backgroundColor="#56b456"
    >
      <PhoneOutlined />
      Call Now
    </Flex>
  );
}
