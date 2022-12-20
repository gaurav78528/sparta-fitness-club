import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const CartItem = ({ desc, price }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      background="#fafcfd"
      p="20px"
      // borderTopRadius="5px"
    >
      <Heading as="h2" size="sm" fontWeight={500}>
        hello
      </Heading>
      <Heading as="h2" size="sm" fontWeight={500}>
        $3434
      </Heading>
    </Flex>
  );
};

export default CartItem;
