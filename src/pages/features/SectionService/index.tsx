import { Flex } from "@kuma-ui/core";
import Overlay from "../../components/Overlay";
import Section from "../../components/Section";
import appConfig from "../../../appConfig";
import Logo from "../../components/Logo";
import CallButton from "../../components/CallButton";

export default function SectionService() {
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
