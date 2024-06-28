import { Flex } from "@kuma-ui/core";
import Image from "next/image";
import { appConfig } from "../../commons/appConfig";
import { CallButton } from "../../components/CallButton";
import { Overlay } from "../../components/Overlay";
import { Section } from "../../components/Section";
import { Logo } from "../../components/Logo";

export function SectionService() {
  return (
    <Section>
      <Overlay transparent>
        <Flex
          justify="center"
          alignItems="center"
          textAlign="center"
          fontSize={appConfig.fontSize}
        >
          Serving Clients in Los Angeles and the Surrounding Areas
        </Flex>
        <Logo />
        <Flex justify="center" alignItems="center" textAlign="center"></Flex>
        <CallButton />
      </Overlay>
    </Section>
  );
}
