import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {BiChevronLeft} from "react-icons/bi"
const ReviewOrder = () => {
  return (
    <Flex
      direction="column"
      gap="2px"
      px={{ base: "20px", sm: "50px", md: "100px", lg: "200px" }}
      pt="20px"
      pb="40px"
    >
      <Flex
        align="center"
        justify="space-between"
        background="#fafcfd"
        p="20px"
        borderTopRadius="5px"
      >
        <Heading as="h5" size="lg" fontWeight={600}>
          Review Order
        </Heading>
        <Link to="/cart">
          <Flex color="#4296cb" justifyContent="center" alignItems="center">
            <BiChevronLeft fontSize="25px" fontWeight="bold" />
            <Text fontSize="15px">Edit Cart</Text>
          </Flex>
        </Link>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        background="#fafcfd"
        p="20px"
        // borderTopRadius="5px"
      >
        <Text fontSize="12px" color="#7b7f92">
          ITEM
        </Text>
        <Text fontSize="12px" color=" #7b7f92">
          PRICE
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        background="#fafcfd"
        p="20px"
        // borderTopRadius="5px"
      >
        <Heading as="h2" size="sm" fontWeight={500}>
          7-Day Pass
        </Heading>

        <Text fontSize="15px">Edit Cart</Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        background="#fafcfd"
        p="20px"
        borderBottomRadius="5px"
      >
        <Heading as="h5" size="lg" fontWeight={600}>
          Order Total:
        </Heading>

        <Heading as="h5" size="lg" fontWeight={600}>
          $3.99
        </Heading>
      </Flex>
    </Flex>
  );
};

export default ReviewOrder;
