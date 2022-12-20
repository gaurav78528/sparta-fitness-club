import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCart } from "../../store/Cart/CartAction";

const getData = (url) => {
  //   const Productarray = useSelector((store) => store.Product);

  return fetch(url).then((res) => res.json());
};

export default function SinglePage() {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleAddToCart = (el) => {
    //dispatch(cart_length_fn())
    dispatch(getCart(el));
    toast({
      title: `Added to Cart`,
      status: "success",
      isClosable: true,
    });
  };

  const { id } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    getData(`https://fitness-handler.vercel.app/Products/${id}`).then(
      (res) => setState(res)
      //console.log(res)
    );
  }, [id]);
  // const {img} = state
  //    console.log(state)

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={state.img}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {state.desc}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {state.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("green.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Overview
            </Text>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {state.over}
              </Text>
              {/* <Text fontSize={'lg'}>
                   {state.difficult}
                </Text> */}
            </VStack>

            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("green.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Methodology and difficulty
            </Text>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{state.difficult}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("green.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Length:
                  </Text>{" "}
                  {state.week}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Avg. Duration:
                  </Text>{" "}
                  {state.time}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Difficulty:
                  </Text>{" "}
                  3-4
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Body Focus:
                  </Text>{" "}
                  Total Body
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Equipment:
                  </Text>{" "}
                  Dumbbell, Mat
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Training Type:
                  </Text>{" "}
                  Strength Training
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => handleAddToCart(state)}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
