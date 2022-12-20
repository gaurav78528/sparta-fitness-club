import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { getCart } from "../../store/Cart/CartAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllgift, getAllpassess } from "../../store/shop/action";

const Shop = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const giftstore = useSelector((store) => store.gift);
  // console.log(giftstore.gift[0], "rtyukl");
  // console.log(giftstore.gift[1], "Alaha");
  useEffect(() => {
    dispatch(getAllpassess());
    dispatch(getAllgift());
  }, []);
  // const [data,setdata]=useState([])
  // const [isError,seterr]=useState("")
  // useEffect(()=>{
  //   axios.get(" http://localhost:8080/gift")
  //   .then((res)=>setdata(res.data))

  // },[])

  const handelCart = (el) => {
    //dispatch(cart_length_fn())
    dispatch(getCart(el));
    toast({
      title: `Added to Cart`,
      status: "success",
      isClosable: true,
    });
  };
  const cartdata = useSelector((store) => store.product);

  useEffect(() => {
    console.log(cartdata);
  }, [cartdata]);

  return (
    <div style={{ backgroundColor: "rgb(241,245,246)" }}>
      <div style={{ padding: "100px", width: "70%" }}>
        <Heading a="b">FB Plus Passes</Heading>
        <p>
          Passes give you full access to everything FB Plus has to offer,
          without a long-term subscription. Choose a pass that fits your budget
          and your schedule, and extend your access with another pass at any
          time. Multiple passes can be purchased at once for longer access.
        </p>
      </div>
      <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={2}
      >
        {giftstore.gift[0] &&
          giftstore.gift[0].map((el) => (
            <Center key={el.id}>
              <Box bg="white" p={2}>
                <Image src={el.img} />
                <p style={{ fontSize: "10px" }}>FB PLUS PASS</p>
                <p>{el.pass}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <p>${el.price}</p>
                  <Button bg={"rgb(62,156,204)"} onClick={() => handelCart(el)}>
                    ADD TO BAG
                  </Button>
                </div>
              </Box>
            </Center>
          ))}
      </Grid>

      <Box p={10}>
        Passes cannot be used at the same time as a monthly or yearly FB Plus
        subscription.
      </Box>
      <hr style={{ color: "white", height: "2px" }} />

      <div style={{ padding: "20px", marginTop: "30px", width: "70%" }}>
        <Heading>Fitness Blender eGift Cards</Heading>
        <br />
        <br />

        <p>
          Give the gift of health and fitness with Fitness Blender eGift Cards.
          Send an electronic card via email and the recipient can log in, redeem
          your gift and buy any of our Workout Programs, calendar-based Meal
          Plans, or a membership to FB Plus!
        </p>
      </div>

      <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={2}
      >
        {giftstore.gift[1] &&
          giftstore.gift[1].map((el) => (
            <Center key={el.id}>
              <Box bg="white" p={4}>
                <Image src={el.img} />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <p style={{ marginTop: "15px" }}>${el.price}</p>
                  <Button
                    bg={"rgb(62,156,204)"}
                    colorScheme={"gray"}
                    color={"white"}
                    onClick={() => handelCart(el)}
                  >
                    ADD TO BAG
                  </Button>
                </Box>
              </Box>
            </Center>
          ))}
      </Grid>

      <Box p={10}>
        Fitness Blender eGift Cards can only be used on fitnessblender.com.
      </Box>
      {/* <Grid bg={"white"}  gap={20} border={"4px solid black"} > */}
      {/* <Box  gap={20}  border={"2px solid red"}> */}
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"100%"}
        flexWrap={"wrap"}
        bg={"white"}
      >
        <Box>
          <Image
            w={"565px"}
            src="https://cloudfront.fitnessblender.com/assets/img/workout-complete/shirts-20200224.jpg"
          />
        </Box>
        <Box>
          <Heading fontStyle={"unset"}>Fitness Blender Gear</Heading>
          <Text>NEW STORE COMING SOON</Text>
        </Box>
      </Flex>

      {/* </Box> */}

      {/* </Grid> */}
      <Box p={20}>
        <Center>
          <Heading>Other Shopping Options</Heading>
        </Center>
        <Center>
          <Text>
            Explore Workout Programs, Meal Plans, and FB Plus memberships.
          </Text>
        </Center>
        <Center gap={3} marginTop={10}>
          <Button bg={"rgb(62,156,204)"}>PROGRAMS</Button>
          <Button bg={"rgb(62,156,204)"}>MEALS PLANS</Button>
          <Button bg={"rgb(62,156,204)"}>FB PLUS </Button>
        </Center>
      </Box>
    </div>
  );
};

export default Shop;
