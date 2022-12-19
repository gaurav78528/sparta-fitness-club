import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Hide,
  Image,
  Link,
  Show,
  Text,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdAccessibilityNew, MdEmojiPeople } from "react-icons/md";
import AboutSlide from "./AboutSlide";
import { AiOutlineFileProtect, AiOutlinePlayCircle } from "react-icons/ai";

const About = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <AboutSlide />
      <Box
        w={"full"}
        h="600px"
        alignItems="center"
        justifyContent={"center"}
        display="flex"
      >
        <Box w={"60%"} textAlign="center" p={4}>
          <Text fontSize={"50px"} marginBottom="35px">
            Created to help you live a better, happier, healthier life.
          </Text>
          <Text fontSize={"20px"} lineHeight="40px" color={"gray"}>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income level or access to a gym. That's why we offer
            hundreds of free, full-length workout videos, the most affordable
            and effective workout programs on the web, meal plans, and helpful
            health, nutrition and fitness information.
          </Text>
        </Box>
      </Box>
      <Box
        w={"full"}
        h="600px"
        bgImage={`url(https://d18zdz9g6n5za7.cloudfront.net/about/video.jpg)`}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/v43jy7-8z9c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        w={"full"}
        color={"white"}
        alignItems="center"
        justifyContent={"center"}
        display="flex"
        bg={"#222533"}
      >
        <Box w={"60%"} textAlign="center" p={4} marginTop="100px">
          <Text fontSize={"50px"} marginBottom="35px" color={"white"}>
            We believe in unbiased, gimmick-free, research-backed information
          </Text>
          <Text fontSize={"17px"} lineHeight="40px" color={"white"}>
            The only thing we endorse is eating unprocessed, whole foods, and
            working out for a strong, healthy body. As a business, we believe
            good things happen when you put people before profit.
          </Text>
          <Grid
            w={"95%"}
            m="auto"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={16}
            marginTop={"40px"}
            marginBottom={"100px"}
          >
            <GridItem>
              <Box p={2}>
                <Flex
                  textAlign={"center"}
                  alignItems="center"
                  justifyContent={"center"}
                  marginBottom="20px"
                >
                  <MdEmojiPeople fontSize={50} m="auto" />
                </Flex>
                <Text fontWeight={"bold"} fontSize={"20px"} marginBottom="20px">
                  POWERED BY YOU
                </Text>
                <Text>
                  Fitness Blender has reached tens of millions around the globe,
                  all from word of mouth; happy viewers sharing our content with
                  friends and family.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={2}>
                <Flex
                  textAlign={"center"}
                  alignItems="center"
                  justifyContent={"center"}
                  marginBottom="20px"
                >
                  <AiOutlineFileProtect fontSize={50} m="auto" />
                </Flex>
                <Text fontWeight={"bold"} fontSize={"20px"} marginBottom="20px">
                  PROGRAMS THAT WORK
                </Text>
                <Text>
                  Our workout plans use our online fitness calendar to provide
                  detailed, day-by-day plans, creating incredible, sustainable
                  results.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={2}>
                <Flex
                  textAlign={"center"}
                  alignItems="center"
                  justifyContent={"center"}
                  marginBottom="20px"
                >
                  <AiOutlinePlayCircle fontSize={50} m="auto" />
                </Flex>
                <Text fontWeight={"bold"} fontSize={"20px"} marginBottom="20px">
                  500+ FREE WORKOUTS
                </Text>
                <Text>
                  Over 500 free workouts range from 10-85 minutes long, from
                  beginner level to elite athlete, from HIIT to Pilates, and
                  strength training to bodyweight.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Grid
        w={"100%"}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <GridItem>
          <Image
            w={"full"}
            src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-01.jpg"
            alt="pro"
          />
        </GridItem>
        <GridItem>
          <Image
            w={"full"}
            src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-02.jpg"
            alt="pro"
          />
        </GridItem>
        <GridItem>
          <Image
            w={"full"}
            src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-03.jpg"
            alt="pro"
          />
        </GridItem>
        <GridItem>
          <Image
            w={"full"}
            src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-04.jpg"
            alt="pro"
          />
        </GridItem>
        <GridItem>
          <Image
            w={"full"}
            src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-05.jpg"
            alt="pro"
          />
        </GridItem>
        <GridItem>
          <Image
            w={"full"}
            src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-06.jpg"
            alt="pro"
          />
        </GridItem>
      </Grid>
      <Box
        display={"flex"}
        w={"full"}
        textAlign="center"
        marginTop={"50px"}
        marginBottom="50px"
        alignItems="center"
        justifyContent={"center"}
      >
        <Box w={"60%"}>
          <Heading marginBottom={"30px"} fontSize="55px">
            A little bit about who we are and how it all got started
          </Heading>
          <Text color={"gray"} fontSize="17px">
            Fitness Blender was created by just two people; a husband and wife
            team of personal trainers who thought fitness should be accessible
            to everyone, regardless of their income. Both Kelli and Daniel felt
            like there was a lack of reliable health and fitness information on
            the web, and too many people in the industry were more focused on
            monetary gain or appearance than they were on good health.
          </Text>
        </Box>
      </Box>
      <Hide below="lg">
        <Grid
          w={"100%"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <GridItem>
            <Box
              bgImage={`url(https://d18zdz9g6n5za7.cloudfront.net/about/bio-daniel.jpg)`}
              w="100%"
              bgSize={"cover"}
              h={"600px"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
            >
              <Box
                w={"50%"}
                bg="white"
                textAlign="center"
                p={4}
                marginTop="300px"
              >
                <Text fontWeight={"bold"}>Daniel Segars</Text>
                <Text>
                  Daniel has worked in the fitness industry since 2000, and has
                  a degree in Food and Nutrition.
                </Text>
                <Link color={"blue"}>Train with Daniel</Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bgImage={`url(https://d18zdz9g6n5za7.cloudfront.net/about/bio-kelli.jpg)`}
              w="100%"
              bgSize={"cover"}
              h={"600px"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
            >
              <Box
                w={"50%"}
                bg="white"
                textAlign="center"
                p={4}
                marginTop="300px"
              >
                <Text fontWeight={"bold"}>Kelli Segars</Text>
                <Text>
                  Kelli has worked in the fitness industry since 2006 and has
                  degrees in both Psychology and Sociology.
                </Text>
                <Link color={"blue"}>Train with Kelli</Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Hide>

      <Show below="lg">
        <Grid
          w={"100%"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
          }}
        >
          <GridItem>
            <Image
              w={"100%"}
              src="https://d18zdz9g6n5za7.cloudfront.net/about/bio-daniel.jpg"
              alt="pro"
            />
          </GridItem>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
          >
            <Box
              w={"50%"}
              bg="white"
              textAlign="center"
              p={4}
              marginTop={"50px"}
              marginBottom="50px"
            >
              <Text fontWeight={"bold"}>Daniel Segars</Text>
              <Text>
                Daniel has worked in the fitness industry since 2000, and has a
                degree in Food and Nutrition.
              </Text>
              <Link color={"blue"}>Train with Daniel</Link>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              w={"100%"}
              src="https://d18zdz9g6n5za7.cloudfront.net/about/bio-kelli.jpg"
              alt="pro"
            />
          </GridItem>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
          >
            <Box
              w={"50%"}
              bg="white"
              textAlign="center"
              p={4}
              marginTop={"50px"}
              marginBottom="50px"
            >
              <Text fontWeight={"bold"}>Kelli Segars</Text>
              <Text>
                Kelli has worked in the fitness industry since 2006 and has
                degrees in both Psychology and Sociology.
              </Text>
              <Link color={"blue"}>Train with Kelli</Link>
            </Box>
          </GridItem>
        </Grid>
      </Show>

      <Grid
        w={"100%"}
        h="200px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        m="auto"
        alignItems="center"
        justifyContent={"center"}
        bg="#32b0cd "
      >
        <GridItem display="flex" justifyContent={"center"}>
          <Text color={"white"} fontSize={"30px"}>
            Ready to try a Fitness Blender workout?
          </Text>
        </GridItem>
        <GridItem display="flex" justifyContent={"center"}>
          <Button color={"white"} bg={"#212432"} p={6} w="300px">
            GET STARTED TODAY
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default About;
