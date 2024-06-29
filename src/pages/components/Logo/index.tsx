import { Flex } from "@kuma-ui/core";
import Image from "next/image";

export default function Logo() {
  return (
    <Flex justify="center" alignItems="center">
      <Image src="/logo.png" alt="logo" width={280} height={150} />
    </Flex>
  );
}
