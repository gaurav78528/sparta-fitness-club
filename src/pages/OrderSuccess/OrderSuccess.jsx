import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" py="100px" px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Your Order Has Been Placed.
      </Heading>
      <Text mt="40px" color={"gray.500"}>
        Thank You for Shopping With Us
      </Text>
      <Button
        variant="link"
        mt="40px"
        color="#4296cb"
        onClick={() => navigate("/store")}
      >
        Continue
        <BiChevronRight />
      </Button>
    </Box>
  );
};

export default OrderSuccess;
