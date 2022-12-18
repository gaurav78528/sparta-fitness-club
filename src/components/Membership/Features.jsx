import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const featuresArr = [
  {
    feature: "Hundreds of Professionally-Built Workout Videos",
    plus: true,
    free: true,
  },
  {
    feature: "Wide Selection of Healthy Living Articles",
    plus: true,
    free: true,
  },
  {
    feature: "Healthy and Convenient Recipes",
    plus: true,
    free: true,
  },
  {
    feature: "Interactive Workout Calendar",
    plus: true,
    free: true,
  },
  {
    feature: "Vlogs, Behind-the-Scenes Updates, Weekly Giveaways",
    plus: true,
    free: true,
  },
  {
    feature: "Search and Filter Videos to Find Exactly What You Need",
    plus: true,
    free: true,
  },
  {
    feature: "Save Your Favorite Videos",
    plus: true,
    free: true,
  },
  {
    feature: "Ads-Free Website and Videos",
    plus: true,
    free: false,
  },
  {
    feature: "Surprise Me Workout Selection Tool",
    plus: true,
    free: false,
  },
  {
    feature: "Statistics for Your Activities",
    plus: true,
    free: false,
  },
  {
    feature: "Enter and Track Custom Workouts",
    plus: true,
    free: false,
  },
  {
    feature: "Trackers to See Your Progress",
    plus: true,
    free: false,
  },
  {
    feature: "Exclusive Workouts",
    plus: true,
    free: false,
  },
  {
    feature: "Exclusive Workout Challenges",
    plus: true,
    free: false,
  },
  {
    feature: "See Workout History and Take Notes on Individual Workouts",
    plus: true,
    free: false,
  },
  {
    feature: "Additional Video Filters for More Refinement",
    plus: true,
    free: false,
  },
  {
    feature: "Tagging to Help Organize Videos",
    plus: true,
    free: false,
  },
  {
    feature: "Create, Save, and Repeat Personal Routines",
    plus: true,
    free: false,
  },
  {
    feature: "Ability to Mark Rest Day Complete",
    plus: true,
    free: false,
  },
  {
    feature: "One Click Access to Find Similar Workouts",
    plus: true,
    free: false,
  },
  {
    feature:
      "Custom Difficulty and Minute Tracking for more Accurate Workout Data",
    plus: true,
    free: false,
  },
  {
    feature: "Schedule Recipes on the Calendar",
    plus: true,
    free: false,
  },
  {
    feature: "Individual Recipe Dashboards with Tags and Notes",
    plus: true,
    free: false,
  },
  {
    feature: "Schedule Expert Articles on the Calendar",
    plus: true,
    free: false,
  },
  {
    feature: "Individual Expert Articles Dashboards with Tags and Notes",
    plus: true,
    free: false,
  },
  {
    feature: "Workout Program Shelf to help organization your active programs",
    plus: true,
    free: false,
  },
  {
    feature: "Interactive Meal Plans for Healthy Eating",
    plus: true,
    free: false,
  },
];

const Features = () => {
  return (
    <Box px="15px">
      <Box px="25px" mt="90px" mb="35px">
        <Text fontSize={"45px"}>All Membership Features</Text>
      </Box>
      <TableContainer>
        <Table size={{ base: "sm", md: "md", lg: "lg" }} fontSize={"18px"}>
          <Thead>
            <Tr>
              <Th fontSize={"16px"}>Features</Th>
              <Th fontSize={"16px"}>Plus</Th>
              <Th fontSize={"16px"}>Free</Th>
            </Tr>
          </Thead>
          <Tbody>
            {featuresArr.map((item) => (
              <Tr>
                <Td>{item.feature}</Td>
                <Td fontSize={"25px"}>
                  {<AiOutlineCheckCircle color="rgb(80,188,53)" />}
                </Td>
                <Td fontSize={"25px"}>
                  {item.free ? (
                    <AiOutlineCheckCircle color="rgb(80,188,53)" />
                  ) : (
                    ""
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th lineHeight={"20px"} textAlign={"center"}>
                <Text>Starting at</Text>
                <Text fontSize={"20px"}>$6.67</Text>
                <Text>Per Month</Text>
                <Text>Paid Annually</Text>
                <Button
                  bgColor={"rgb(33,36,50)"}
                  mt="15px"
                  color={"white"}
                  fontSize={"16px"}
                  letterSpacing="0.1px"
                  w={"145px"}
                  h="45px"
                  _hover={{
                    bgGradient:
                      "linear(to right, rgb(43, 45, 53), rgb(66,70,87))",
                  }}
                >
                  JOIN
                </Button>
              </Th>
              <Th>
                <Text fontSize={"20px"}>Free</Text>
                <Text>No Credit</Text>
                <Text>Card Required</Text>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Features;
