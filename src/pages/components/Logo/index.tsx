import { Flex } from "@kuma-ui/core";
import Image from "next/image";
import { useContext } from "react";
import DomainContext from "../../../DomainContext";
import { getAppConfig } from "../../../appConfig";

export default function Logo() {
  const { domain } = useContext(DomainContext);
  return (
    <Flex justify="center" alignItems="center">
      <Image
        src={getAppConfig(domain).logo.path}
        alt="logo"
        width={getAppConfig(domain).logo.width}
        height={getAppConfig(domain).logo.height}
      />
    </Flex>
  );
}
