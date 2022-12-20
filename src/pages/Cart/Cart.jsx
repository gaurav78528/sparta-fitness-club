// import {
//   Box,
//   Button,
//   Center,
//   Flex,
//   Heading,
//   Image,
//   Text,
//   Grid,
//   Divider,
// } from "@chakra-ui/react";
// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deletecart } from "../../store/Cart/CartAction";
// import { AiOutlineClose } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const Productarray = useSelector((store) => store.Product);
//   // const total = useSelector((store) => store.Product);
//   console.log(Productarray, "data");
//   const dispatch = useDispatch();
//   const navigate= useNavigate()

//   // console.log(total)
//   //   useEffect(()=>{
//   // if(Productarray.product.length>0){
//   //   // const totalPrice= Productarray.product.reduce((prev,next)=>{ return Number(prev)+ Number(next.price)},0)
//   //   // console.log(totalPrice)
//   // }

//   //   },[Productarray])

//   return (
//     <Box backgroundColor="rgb(241,245,246)">
//       <Heading p={10}>Shopping Bag</Heading>
//       <Box backgroundColor="white" width="80%" m="auto" p="10px">
//         <Flex
//           justifyContent={"space-between"}
//           bg={"white"}
//           py="13px"
//           px="30px"
//           boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
//         >
//           <Text>Item</Text>
//           <Text>Remove</Text>
//           <Text>Price</Text>
//         </Flex>
//         <Divider />
//         <Flex direction="column" justifyContent={"space-around"}>
//           {Productarray.product.length > 0 &&
//             Productarray.product.map((el) => {
//               return (
//                 <Box
//                   key={el.id}
//                   borderBottom="1px solid gray"
//                   py="20px"
//                   px="30px"
//                 >
//                   <Flex gap="15px" justify="space-between">
//                     <Flex gap="15px" justify="center" align="center">
//                       <Image
//                         width={["25%", "25%", "28%", "150px"]}
//                         src={el.image}
//                         alt=""
//                       />
//                       <Box>
//                         <p>FB PLUS PASS</p>

//                         <p>{el.pass}</p>

//                         <Text>Purchase:</Text>
//                         <Flex gap={3}>
//                           <Button
//                             borderRadius="2px"
//                             bg={"rgb(33,36,50)"}
//                             color={"white"}
//                             fontSize="13px"
//                           >
//                             FOR MYSELF
//                           </Button>
//                           <Button borderRadius="2px" fontSize="13px">
//                             {" "}
//                             AS A GIFT
//                           </Button>
//                         </Flex>
//                       </Box>
//                     </Flex>
//                     {/* <Flex >   */}
//                     <Button
//                       variant="ghost"
//                       onClick={() => dispatch(deletecart(el.id))}
//                       mt={5}
//                       mr="350px"
//                       fontWeight={"bold"}
//                     >
//                       <AiOutlineClose fontWeight="800" />
//                     </Button>
//                     <p style={{ marginTop: "25px" }}> ${el.price}</p>
//                     {/* </Flex> */}
//                   </Flex>
//                 </Box>
//               );
//             })}
//         </Flex>
//       </Box>
//       <Divider />
//       <Box w="78%" m="auto">
//         <Flex justifyContent="space-between">
//           <Heading>Total: </Heading>
//           <Box>${Productarray.TotalPrice}</Box>
//         </Box>

//           </Flex>
//     {/* <Flex >   */}
//       <Button variant="ghost" onClick={()=>dispatch(deletecart(el.id))} mt={5} mr="350px" fontWeight={"bold"}><AiOutlineClose fontWeight="800" /></Button>
//       <p style={{marginTop:"25px"}}> ${el.price}</p>
//       {/* </Flex> */}
//       </Flex>

//         </Box>
//         )
//       }

//       )
//     }
//         </Flex>
//       </Box>
//       <Center>
//         <Button bg="rgb(66,151,202)" m="auto" onClick={()=>navigate("/checkout")}>
//           Proceed to CheckOut
//         </Button>
//       </Center>
//     </Box>
//   );
// };

// export default Cart;

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Grid,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletecart } from "../../store/Cart/CartAction";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";

const Cart = () => {
  const Productarray = useSelector((store) => store.Product);
  // const total = useSelector((store) => store.Product);
  // console.log(Productarray);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Box backgroundColor="rgb(241,245,246)">
      <Heading p={10}>Shopping Bag</Heading>
      <Box backgroundColor="white" width="80%" m="auto" p="10px">
        <Flex
          justifyContent={"space-between"}
          bg={"white"}
          py="13px"
          px="30px"
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        >
          <Text>Item</Text>
          <Text>Remove</Text>
          <Text>Price</Text>
        </Flex>
        <Divider />
        <Flex direction="column" justifyContent={"space-around"}>
          {Productarray.product.length > 0 &&
            Productarray.product.map((el) => {
              return (
                <Box
                  key={el.id}
                  borderBottom="1px solid gray"
                  py="20px"
                  px="30px"
                >
                  <Flex gap="15px" justify="space-between">
                    <Flex gap="15px" justify="center" align="center">
                      <Image
                        width={["25%", "25%", "28%", "150px"]}
                        src={el.img}
                        alt=""
                      />
                      <Box>
                        <p>{el.desc}</p>

                        <p>{el.pass}</p>

                        <Text>Purchase:</Text>
                        <Flex gap={3}>
                          <Button
                            borderRadius="2px"
                            bg={"rgb(33,36,50)"}
                            color={"white"}
                            fontSize="13px"
                          >
                            FOR MYSELF
                          </Button>
                          <Button borderRadius="2px" fontSize="13px">
                            {" "}
                            AS A GIFT
                          </Button>
                        </Flex>
                      </Box>
                    </Flex>
                    {/* <Flex >   */}
                    <Button
                      variant="ghost"
                      onClick={() => dispatch(deletecart(el.id))}
                      mt={5}
                      mr="350px"
                      fontWeight={"bold"}
                    >
                      <AiOutlineClose fontWeight="800" />
                    </Button>
                    <p style={{ marginTop: "25px" }}> ${el.price}</p>
                    {/* </Flex> */}
                  </Flex>
                </Box>
              );
            })}
        </Flex>
      </Box>
      <Divider />
      <Box w="78%" m="auto">
        <Flex justifyContent="space-between" mt="30px">
          <Heading>Total: </Heading>
          <Box>${Math.ceil(Productarray.TotalPrice)}</Box>
        </Flex>
      </Box>
      <Center py="30px">
        <Button
          bg="rgb(66,151,202)"
          color="#fff"
          colorScheme="blue"
          borderRadius="5px"
          m="auto"
          onClick={() => navigate("/checkout")}
        >
          Proceed to CheckOut
        </Button>
      </Center>
    </Box>
  );
};

export default Cart;
