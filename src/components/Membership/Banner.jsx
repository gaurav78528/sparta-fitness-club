import React from "react";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      bgGradient="linear(to bottom right, rgb(204,231,255), rgb(254,236,204))"
      w="100%"
      h="auto"
      display={["block", "block", "block", "flex", "flex"]}
      color="rgb(33,36,50)"
    >
      <Center
        w={["100%", "100%", "100%", "50%", "50%"]}
        className="banner_left"
        p={["70px", "100px", "100px", "130px", "130px"]}
        alignContent="center"
        //   bgColor="blue"
      >
        <Center display={"block"}>
          <Text
            lineHeight={"40px"}
            fontSize={["40px", "40px", "40px", "45px", "45px"]}
            textAlign={["center", "center", "center", "left", "left"]}
          >
            A Membership
          </Text>
          <Text
            fontSize={["40px", "40px", "40px", "45px", "45px"]}
            textAlign={["center", "center", "center", "left", "left"]}
          >
            for Everyone
          </Text>
          <Text
            fontSize={"19px"}
            textAlign={["center", "center", "center", "left", "left"]}
          >
            We believe reliable fitness, nutrition, and wellness content should
            be accessible to everyone, regardless of income. That’s why full
            access to premium content and features starts as low as $6.67 per
            month, and part of the proceeds go toward providing hundreds of our
            workouts, articles, and recipes absolutely free.
          </Text>
        </Center>
      </Center>
      <Center
        w={["100%", "100%", "100%", "50%", "50%"]}
        // bgColor="gray"
        className="banner_right"
        pr="40px"
      >
        <Center>
          <Image
            src="https://cloudfront.fitnessblender.com/assets/img/memberships/memberships-720.webp"
            alt="memberships"
          />
        </Center>
      </Center>
    </Box>
  );
};

export default Banner;
