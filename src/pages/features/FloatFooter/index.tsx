import { Flex } from "@kuma-ui/core";
import CallButton from "../../components/CallButton";

export default function FloatFooter() {
  return (
    <Flex
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: 60,
      }}
    >
      <CallButton />
    </Flex>
  );
}
