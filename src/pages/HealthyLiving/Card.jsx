import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ image, category, description, time, label }) => {
  // console.log(item);
  return (
    <GridItem bgColor="#fff" minH="300px">
      {/* <Box bgColor="#fff"> */}
      <Box>
        <Image src={image} alt={`${category} article`} />
        <Text
          position="relative"
          bottom="10px"
          width="60px"
          borderRadius="30px"
          fontWeight="500"
          color="white"
          background="linear-gradient(to bottom right,#3a8d10 0%,#bfeb00 100%)"
        >
          {label}
        </Text>
      </Box>
      <Flex
        m="10px"
        mt={label === "" ? "19px" : "0px"}
        direction="column"
        gap="10px"
        // border="1px solid red"
      >
        <Text
          fontSize="sm"
          textAlign="justify"
          lineHeight="20px"
          fontWeight={400}
        >
          {description}
        </Text>
        <Text fontSize="xs" color={"#43a3de"} textAlign="left">
          Read Time • {time} Min
        </Text>
      </Flex>
      {/* </Box> */}
    </GridItem>
  );
};

export default Card;
