import React from "react";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let memberShipTypes = [
  {
    title: "FB Plus",
    titleFontSize: "38.5px",
    descFontSize: "16.5px",
    desc: "Get exclusive content and access to programs and challenges, with advanced features to help you reach and maintain your goals.",
    more: "Learn More About FB Plus",
    linkColor: "rgb(66,162,216)",

    color: "rgb(78,82,98)",
    bgColor: "rgb(237,248,252)",
    btnText: "JOIN WITH PLUS",
    link: "#",
  },
  {
    title: "JOIN FOR FREE",
    titleFontSize: "38.5px",
    descFontSize: "16.5px",

    desc: "Enjoy hundreds of workout videos, articles, and recipes, with new content every week. No strings attached, no credit card required.",
    color: "rgb(78,82,98)",
    bgColor: "rgb(240,244,246)",
    btnText: "JOIN FOR FREE",
    link: "/join",
  },
];
const Card = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap={2}
    >
      {memberShipTypes.map((item) => (
        <GridItem
          key={item.title}
          w="100%"
          pb="40px"
          h="auto"
          bg={item.bgColor}
          pt="35px"
        >
          <Box display={"block"} m="auto" w="400px" textAlign={"center"}>
            <Text fontSize={item.titleFontSize} color={item.color} mb="10px">
              {item.title}
            </Text>
            <Text fontSize={item.descFontSize} color={item.color} mb="10px">
              {item.desc}
            </Text>
            <Box>
              <Link to={item.link}>
                <Button
                  bgColor={"rgb(33,36,50)"}
                  mt="20px"
                  mb="15px"
                  fontSize={"16px"}
                  letterSpacing="0.1px"
                  w={"200px"}
                  h="50px"
                  color={"white"}
                  _hover={{
                    bgGradient:
                      "linear(to right, rgb(43, 45, 53), rgb(66,70,87))",
                  }}
                >
                  {item.btnText}
                </Button>
              </Link>
            </Box>
            <Text
              //   _hover={{ cursor: "pointer", borderBottom: "1px" }}

              color={item.linkColor}
            >
              <span className="link_to_content_homepage">{item.more}</span>
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Card;
