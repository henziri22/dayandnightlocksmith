import { Flex } from "@kuma-ui/core";
import Image from "next/image";

export function Reviews() {
  return (
    <Flex gap={20} justify="center" alignItems="center">
      <Image src="/thumb.webp" alt="1" width={100} height={75} />
      <Image src="/google.webp" alt="1" width={120} height={75} />
      <Image src="/yelp.webp" alt="1" width={100} height={75} />
    </Flex>
  );
}
