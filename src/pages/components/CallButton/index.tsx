import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import { appConfig } from "../../commons/appConfig";
import { Flex } from "@kuma-ui/core";

export function CallButton() {
  return (
    <Flex
      as="a"
      href={`tel:${appConfig.phone}`}
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
