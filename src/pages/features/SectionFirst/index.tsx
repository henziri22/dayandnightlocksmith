import { Flex } from "@kuma-ui/core";
import { useContext } from "react";
import appConfig, { getAppConfig } from "../../../appConfig";
import CallButton from "../../components/CallButton";
import Logo from "../../components/Logo";
import Overlay from "../../components/Overlay";
import Reviews from "../../components/Reviews";
import Section from "../../components/Section";
import  DomainContext  from "../../../DomainContext";

export default function SectionFirst() {
  const { domain } = useContext(DomainContext);
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
          {getAppConfig(domain).name} is here to provide you with the peace of
          mind you need when it comes to your security. We're a reliable and
          experienced locksmith company, offering services that range from key
          replacements to lock installations. Trust us to keep you safe!
        </Flex>
      </Overlay>
    </Section>
  );
}
