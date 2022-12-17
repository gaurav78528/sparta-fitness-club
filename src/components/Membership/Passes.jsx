import React from 'react'
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
const Passes = () => {
  return (
    <Box
    bgGradient="linear(to top right, rgb(239,230,248), rgb(246,230,246))"
    w="100%"
    h="auto"
    display={["block", "block", "block", "flex", "flex"]}
    color="rgb(33,36,50)"
  >
    <Center
      w={["100%", "100%", "100%", "50%", "50%"]}
      className="banner_left"
      p={["70px","100px", "100px", "130px", "130px"]}
      alignContent="center"
      //   bgColor="blue"
    >
      <Center display={"block"}>
        <Text
          lineHeight={"40px"}
          fontSize={["40px", "40px", "40px", "45px", "45px"]}
          textAlign={["center", "center", "center", "left", "left"]}
        >
          Feel Great.
        </Text>
        <Text
          fontSize={["40px", "40px", "40px", "45px", "45px"]}
          textAlign={["center", "center", "center", "left", "left"]}
        >
          Body and Mind.
        </Text>
        <Text
          fontSize={"19px"}
          textAlign={["center", "center", "center", "left", "left"]}
        >
          Choose from hundreds of workouts, healthy recipes, relaxing
          meditations, and expert articles, for a whole body and mind approach
          to feeling great.
        </Text>
        <Button
          bgColor={"rgb(33,36,50)"}
          mt="15px"
          color="white"
          fontSize={"16px"}
          letterSpacing="0.1px"
          w={"145px"}
          h="45px"
          _hover={{
            bgGradient: "linear(to right, rgb(43, 45, 53), rgb(66,70,87))",
          }}
        >
          BUY A PASS
        </Button>
      </Center>
    </Center>
    <Center
      w={["100%", "100%", "100%", "50%"]}
      //   bgColor="red"
      className="banner_right"
      pr="40px"
    >
      <Center>
        <Image src="https://cloudfront.fitnessblender.com/assets/img/memberships/passes-720.webp" alt="membership-passes" />
      </Center>
    </Center>
  </Box>
  )
}

export default Passes