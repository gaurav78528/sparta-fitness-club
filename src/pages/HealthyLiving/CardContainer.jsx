import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
// { category, description, image, label, time }
// const Card = ({ category, description, image, label, time, data }) => {
// const { category, description, image, label, time } = item;
// { fitness, health, nutrition, wellness }
const CardContainer = ({ data }) => {
  console.log(data);
  // const { fitness, health, nutrition, wellness } = data[0];
  // console.log(data);
  return (
    <Box py={"5rem"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        // border="1px solid red"
        // margin={"auto"}
      >
        <Heading as="h2" size="2xl" fontWeight={400} textTransform="capitalize">
          {data[0].category}
        </Heading>
        <Link to="/">
          <Text fontSize="md" color="#197bb9" fontWeight={500} textTransform="capitalize">
            {`View All 
            ${data[0].category}
              Articles`}
          </Text>
        </Link>
      </Flex>
      <Grid
        w={"full"}
        mt={"5rem"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {data.map((item, id) => (
          <Card key={id} {...item} />
        ))}
        {/* {fitness.map((item, id) => (
          <Card key={id} {...item} />
        ))}
        {health.map((item, id) => (
          <Card key={id} {...item} />
        ))}
        {wellness.map((item, id) => (
          <Card key={id} {...item} />
        ))} */}

        {/* 
        {fitness.map((item, id) => (
          <Card key={id} {...item} />
        ))}
        {fitness.map((item, id) => (
          <Card key={id} {...item} />
        ))} */}
      </Grid>
    </Box>
  );
};

export default CardContainer;
