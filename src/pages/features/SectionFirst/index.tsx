import Image from "next/image";
import { Reviews } from "../../components/Reviews";
import { Section } from "../../components/Section";
import { Flex } from "@kuma-ui/core";
import { appConfig } from "../../commons/appConfig";
import { Overlay } from "../../components/Overlay";
import { CallButton } from "../../components/CallButton";
import { Logo } from "../../components/Logo";

export function SectionFirst() {
  return (
    <Section bg="section1.webp">
      <Overlay>
        <Reviews />
        <CallButton />
        <Logo />
        <Flex
          justify="center"
          alignItems="center"
          textAlign="center"
          fontSize={appConfig.fontSize}
        >
          {appConfig.name} is here to provide you with the peace of mind you
          need when it comes to your security. We're a reliable and experienced
          locksmith company, offering services that range from key replacements
          to lock installations. Trust us to keep you safe!
        </Flex>
      </Overlay>
    </Section>
  );
}