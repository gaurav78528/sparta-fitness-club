import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Container,
  Flex,
  Stack,
  Button,
  Divider,
  HStack,
  Input,
  Text,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  // Link,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import "./join.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
// import { registerInitiate } from "../../store/Auth/auth.actions";
const Join = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  // const dispatch = useDispatch();
  // const { currentUser } = useSelector((state) => state.auth);
  // const history = unstable_HistoryRouter();
  const navigate = useNavigate();
  const { firstName, lastName, email, username, password, passwordConfirm } =
    userInput;

  const { signUp } = useUserAuth();
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser]);
  // const handleSubmit = () => {
  //   if (password !== passwordConfirm) {
  //     return;
  //   }
  //   dispatch(registerInitiate(email, password, username));
  // };
  const handleSubmit = async () => {
    console.log(userInput);
    try {
      await signUp(email, username, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  // const handleGoogleSignIn = () => {};
  // const handleFacebookSignIn = () => {};
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  return (
    <Box w={{ base: "100%", md: "80%", lg: "60%" }} m="100px auto">
      <Flex
        // bg="gray.100"
        justifyContent={"center"}
        alignItems="center"
        gap={10}
        direction="column"
        w="100%"
      >
        <Box>
          <Heading as="h2" size="xl" fontWeight={400} noOfLines={1}>
            Join
          </Heading>
        </Box>
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row", lg: "row" }}
          align="center"
          w="100%"
          justify="center"
        >
          <Button
            colorScheme="blue"
            leftIcon={<FaFacebookF />}
            size="md"
            borderRadius="4px"
            w={{ base: "50%", md: "35%", lg: "35%" }}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            Facebook
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<FaGoogle />}
            borderRadius="4px"
            size="md"
            w={{ base: "50%", md: "35%", lg: "35%" }}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            Google
          </Button>
        </Stack>
        {error && (
          <Alert status="error" w="80%">
            <AlertIcon />
            <AlertTitle>Opps!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {/* <Divider orientation="horizontal" /> */}
        <Flex spacing="24px" gap={10} justifyContent="center" w="100%">
          <Stack spacing={3} w={{ base: "70%", md: "60%", lg: "45%" }}>
            <Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              _placeholder={{ fontSize: "14px" }}
              borderRadius="2px"
              size="md"
            />
            <Input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
              _placeholder={{ fontSize: "14px" }}
              size="md"
              borderRadius="2px"
              w="100%"
            />
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              _placeholder={{ fontSize: "14px" }}
              size="md"
              borderRadius="2px"
            />
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
              placeholder="Username"
              _placeholder={{ fontSize: "14px" }}
              size="md"
              borderRadius="2px"
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              placeholder="Password"
              _placeholder={{ fontSize: "14px" }}
              size="md"
              borderRadius="2px"
            />
            <Input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              _placeholder={{ fontSize: "14px" }}
              size="md"
              borderRadius="2px"
            />
          </Stack>
          <Flex
            direction="column"
            gap="30px"
            w="38%"
            // h="auto"
            display={{ base: "none", md: "block", lg: "block" }}
            p="30px"
            borderRadius="4px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Text fontSize="lg">Key Benefits:</Text>
            <Flex direction="column" gap="10px">
              <Flex gap="20px">
                <TiTick color="blue.100" />
                <Text fontSize="xs">Customizable fitness calendar</Text>
              </Flex>
              <Flex gap="20px">
                <TiTick color="blue.100" />
                <Text fontSize="xs">Daily progress tracking</Text>
              </Flex>
              <Flex gap="20px">
                <TiTick color="blue.100" />
                <Text fontSize="xs">Favorite workout videos</Text>
              </Flex>
              <Flex gap="20px">
                <TiTick color="blue.100" />
                <Text fontSize="xs">24/7 community support</Text>
              </Flex>
              <Flex gap="20px">
                <TiTick color="blue.100" />
                <Text fontSize="xs">
                  Helpful health, nutrition and fitness information
                </Text>
              </Flex>
              <Flex gap="20px">
                <TiTick color="blue.100" />
                <Text fontSize="xs">and much, much more…</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Checkbox
          size={{ base: "sm", md: "md", lg: "md" }}
          colorScheme="blue"
          textAlign="center"
        >
          I agree to the Sparta Fitness Club{" "}
          <Link color="blue.400">terms of service</Link> and{" "}
          <Link color="blue.400">privacy policy</Link>
        </Checkbox>
        <Button
          colorScheme="blue"
          bgColor="blue.500"
          size="md"
          fontWeight={500}
          letterSpacing="1.2px"
          fontSize="12px"
          borderRadius="4px"
          w="40%"
          mt="20px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          onClick={handleSubmit}
        >
          JOIN
        </Button>
        <Text mt="40px" color="gray" fontWeight={300}>
          Already a member?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Sign In
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Join;
