import BulbOutlined from "@ant-design/icons/BulbOutlined";
import { Flex } from "@kuma-ui/core";
import Section from "../../components/Section";
import appConfig from "../../../appConfig";
import Overlay from "../../components/Overlay";

export default function SectionAutomtiveService() {
  return (
    <Section bg="section2.webp">
      <Overlay>
        <Flex justify="center" alignItems="center" fontSize={40}>
          <BulbOutlined />
        </Flex>
        <Flex as="h1" justify="center" alignItems="center" textAlign="center">
          Automotive Services
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          textAlign="center"
          fontSize={appConfig.fontSize}
        >
          We offer a wide range of automotive locksmith services, including car
          key replacement, key duplication, and lock repair. Our team of
          experienced technicians can work on all types of vehicles, including
          cars, trucks, and motorcycles.
        </Flex>
      </Overlay>
    </Section>
  );
}
