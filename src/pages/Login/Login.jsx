import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  border,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  // Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from "react-router-dom";

import "./login.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { async } from "@firebase/util";
const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = userInput;
  const { logIn, signInWithGoogle, signInWithFacebook } = useUserAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleSubmit = async () => {
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  // const handleSubmit = () => {};
  const handleGoogleSignIn = async () => {
    // e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  // const handleFacebookSignIn = () => {

  // };
  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box
      w={{ base: "100%", md: "80%", lg: "60%" }}
      // border="2px solid red"
      // borderColor="red"
      m="100px auto"
    >
      <Flex
        // bg="gray.100"
        justifyContent={"center"}
        alignItems="center"
        gap={10}
        direction="column"
        w="100%"
        // border="1px solid blue"
      >
        <Box>
          <Heading as="h2" size="xl" fontWeight={400}>
            Sign In
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
            // display={{base: "block", md: "inline", lg: "35%"}}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            onClick={handleFacebookSignIn}
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
            onClick={handleGoogleSignIn}
          >
            Google
          </Button>
        </Stack>
        {error && (
          <Alert status="error" w={{ base: "60%", md: "55%", lg: "60%" }}>
            <AlertIcon />
            <AlertTitle>Opps!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Stack
          spacing={3}
          w={{ base: "70%", md: "60%", lg: "45%" }}
          // border="1px solid red"
        >
          {/* <Input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
            placeholder="Username"
            _placeholder={{ fontSize: "14px" }}
            borderRadius="2px"
            size="md"
          /> */}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Email"
            _placeholder={{ fontSize: "14px" }}
            borderRadius="2px"
            size="md"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Password"
            _placeholder={{ fontSize: "14px" }}
            borderRadius="2px"
            size="md"
          />
          <Checkbox size="md" fontWeight={300}>
            Remember Me
          </Checkbox>
          <Button
            colorScheme="blue"
            bgColor="blue.500"
            size="md"
            fontWeight={500}
            letterSpacing="1.2px"
            fontSize="12px"
            borderRadius="4px"
            w="100%"
            mt="20px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            onClick={handleSubmit}
          >
            SIGN IN
          </Button>
          <Text color="blue.400" textAlign="center">
            Forget Password?
          </Text>
          <Text pt="50px" color="gray" fontWeight={300} textAlign="center">
            Not a member yet?{" "}
            <Link to="/join" style={{ color: "blue" }}>
              Join now -- it's free!
            </Link>
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
