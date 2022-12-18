import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const buttons = [
  {
    id: 1,
    text: "PROGRAMS",
    link: "/programs",
  },
  {
    id: 2,
    text: "MEAL PLANS",
    link: "/meal-plan",
  },
  {
    id: 3,
    text: "FB PLUS",
    link: "/",
  },
  {
    id: 4,
    text: "GIFT CARDS",
    link: "/",
  },
];

const EmptyCart = () => {
  return (
    <Box
      w={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
      m="100px auto"
      h="auto"
      background="#e6f0f8"
    >
      <Box
        w="80%"
        m="auto"
        // border="2px solid red"
        textAlign="center"
        py="100px"
      >
        <Heading
          as="h1"
          size={{ base: "xl", sm: "xl", md: "xl", lg: "2xl" }}
          fontWeight={400}
        >
          Your Shopping Bag is Empty
        </Heading>
        <Text color="#4e5262" mt="20px">
          Explore the site for programs, gifts, or FB Plus subscriptions
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
          gap={"20px"}
          mt="20px"
        >
          {buttons.map(({ id, text, link }) => (
            <GridItem key={id}>
              <Link to={link}>
                <Button
                  backgroundColor="#4296cb"
                  color="#fff"
                  colorScheme="blackAlpha"
                  borderRadius="4px"
                  w="100%"
                >
                  {text}
                </Button>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EmptyCart;
