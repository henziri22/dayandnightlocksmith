import { Flex } from "@kuma-ui/core";
import { Section } from "../../components/Section";
import { appConfig } from "../../commons/appConfig";
import { Overlay } from "../../components/Overlay";
import UnlockOutlined from "@ant-design/icons/UnlockOutlined";

export function SectionResidentialService() {
  return (
    <Section bg="section2.webp">
      <Overlay>
        <Flex justify="center" alignItems="center" fontSize={40}>
          <UnlockOutlined />
        </Flex>
        <Flex as="h1" justify="center" alignItems="center" textAlign="center">
          Residential Services
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          textAlign="center"
          fontSize={appConfig.fontSize}
        >
          We pride ourselves on providing fast and affordable residential
          locksmith services. Our experienced team will work quickly to get you
          back inside your home or install new locks to keep it secure.
          Regardless of the situation, we have the tools and expertise to get
          the job done right.
        </Flex>
      </Overlay>
    </Section>
  );
}
