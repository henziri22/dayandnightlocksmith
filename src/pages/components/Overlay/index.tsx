import { Flex } from "@kuma-ui/core";
import { ReactNode } from "react";

type OverlayProps = {
  children?: ReactNode;
  transparent?: boolean;
};

export default function Overlay({ children, transparent }: OverlayProps) {
  return (
    <Flex
      flexDirection="column"
      gap={30}
      style={{
        padding: 20,
        color: "white",
        backgroundColor: transparent ? "none" : "rgba(0, 0, 0, 0.74444)",
      }}
    >
      {children}
    </Flex>
  );
}
