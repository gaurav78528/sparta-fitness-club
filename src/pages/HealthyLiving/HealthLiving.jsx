import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CardContainer from "./CardContainer";

const getData = async () => {
  let res = await fetch(`https://sparta-fitness-database.vercel.app/articles`);
  let data = await res.json();
  return data;
};
export default function HealthLiving() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(data);
  // const healthLivingData = useSelector((store) => store.healthLiving.data);
  // const dispatch = useDispatch();

  const getActualData = () => {
    getData().then((res) => setData(res));
  };

  useEffect(() => {
    getActualData();
  }, []);

  // if (loading) {
  //   return <h1>loading....</h1>;
  // }
  return (
    <>
      <Flex
        w={"100%"}
        h={{ base: "350px", md: "80vh", lg: "80vh" }}
        // justifyContent={"center"}
        backgroundImage={
          "url(https://d18zdz9g6n5za7.cloudfront.net/healthy_living/masthead-healthy-xs@2x.jpg)"
        }
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition="top center"
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          // justify={"center"}
          // m={{ base: "20% 0", md: "auto", lg: "80vh" }}
          bgGradient={"linear(to-r, blackAlpha.200, transparent)"}
        >
          <Stack
            // maxW={"2xl"}
            // m="170px 0"

            // border="2px solid red"
            w={{ base: "90%", md: "80%", lg: "70%" }}
          >
            <Box w={{ base: "80%", md: "85%", lg: "70%" }}>
              <Text color="#43a3de" fontWeight={500}>
                HEALTHY LIVING
              </Text>
              <Text
                color={"white"}
                fontSize={useBreakpointValue({
                  base: "3xl",
                  md: "4xl",
                  lg: "4xl",
                })}
              >
                Live Well, Feel Great and Look Great.
              </Text>
              <Text
                color={"white"}
                fontWeight={400}
                fontSize={useBreakpointValue({
                  base: "sm",
                  md: "md",
                  lg: "lg",
                })}
              >
                A huge selection of health and fitness content, healthy recipes
                and transformation stories to help you get fit and stay fit!
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Flex>
      <Flex background="#e3ebee" justifyContent={"center"}>
        <Box
          w={{ base: "95%", sm: "90%", md: "80%", lg: "80%" }}
          justifyContent="center"
          align={"center"}
        >
          {data.map((item, id) => {
            // console.log(item);
            return <CardContainer key={id} data={item.cat} />;
          })}
        </Box>
      </Flex>
    </>
  );
}
