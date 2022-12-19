import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { getMeal, getPilot, getProduct } from "../../store/workout/work.action";
import {
  Grid,
  GridItem,
  Heading,
  Box,
  Flex,
  Button,
  Collapse,
  useDisclosure,
  InputGroup,
  Input,
  InputRightElement,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  IconButton,
  Hide,
} from "@chakra-ui/react";

import { BiSearchAlt2 } from "react-icons/bi";
import {
  AddIcon,
  MinusIcon,
  SearchIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Pilot = () => {
  const products = useSelector((store) => store.prod);
  const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure();

    const pilots = useSelector((store) => store.pilot);
    
   
  
    useEffect(() => {
      
      dispatch(getPilot())
    },[])


  return (
    <div>
    <Box marginLeft={20} marginTop={"100px"} marginBottom={"20px"}>
      <Heading
        fontFamily={
          "Maison Neue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
        }
        fontSize={"40px"}
      >
        Pilot Program
      </Heading>
    </Box>
    <Box w="full">
      <Flex h={"full"} border="1px solid gray">
        <Box marginLeft={12} display="flex" >
          <Box>
            <Button onClick={onToggle}>
              Filter
              <TriangleDownIcon marginLeft={2} />
            </Button>
 
  return (
    <div>
      <Box marginLeft={20} marginTop={"100px"} marginBottom={"20px"}>
        <Heading
          fontFamily={
            "Maison Neue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
          }
          fontSize={"40px"}
        >
          Pilot Programs
        </Heading>
      </Box>
      <Box w="full">
        <Flex h={"full"} border="1px solid gray">
          <Box marginLeft={12} display="flex">
            <Box>
              <Button onClick={onToggle}>
                Filter
                <TriangleDownIcon marginLeft={2} />
              </Button>

              <Collapse in={isOpen} animateOpacity>
                <Box
                  p="40px"
                  color="black"
                  mt="4"
                  bg="gray.300"
                  rounded="md"
                  shadow="md"
                >
                  <h1>Hello Its Me!</h1>
                </Box>
              </Collapse>
            </Box>
          </Box>
          <Box>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <SearchIcon fontSize="20px" />
                        <Box as="span" flex="1" textAlign="left" marginLeft={2}>
                          <Hide below="1000px">
                            <Text fontSize={"20px"}>Search</Text>
                          </Hide>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex>
                        <Input
                          w={{ base: "100px", md: "300px", lg: "400px" }}
                          placeholder="Search Item"
                        />
                        <IconButton
                          aria-label="Search database"
                          icon={<SearchIcon />}
                        />
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Box>

    <Grid
      w={"95%"}
      m="auto"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      marginTop="20px"
      marginBottom={"20px"}
    >
      {pilots.pilot[0] &&  pilots.pilot[0].map((pro) => (
        <GridItem  key={pro.id} >
          <Link to={`/Pilot/${pro.id}`}>
            <Card
              
              min={pro.time}
              price={pro.price}
              des={pro.desc}
              src={pro.img}
              week={pro.week}
            />
          </Link>
        </GridItem>
      ))}
    </Grid>

    <Grid
        w={"95%"}
        m="auto"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        marginTop="20px"
        marginBottom={"20px"}
      >
        {products.product[0] &&
          products.product[0].map((pro) => (
            <GridItem key={pro.id}>
              <Link to={`/Pilot/${pro.id}`}>
                <Card
                  min={pro.time}
                  price={pro.price}
                  des={pro.desc}
                  src={pro.img}
                  week={pro.week}
                />
              </Link>
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};


export default Pilot;
