import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function Footer() {
  return (
    <Box
      bg={useColorModeValue("#313443", "#313443")}
      color={useColorModeValue("white", "white")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
              WORKOUTS
            </Heading>
            <Link href={"#"} fontSize="13px">
              WORKOUT VIDEOS
            </Link>
            <Link href={"#"} fontSize="13px">
              CUSTOM WORKOUTS
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
              HEALTHY LIVING
            </Heading>
            <Link href={"#"} fontSize="13px">
              FITNESS
            </Link>
            <Link href={"#"} fontSize="13px">
              HEALTH
            </Link>
            <Link href={"#"} fontSize="13px">
              NUTRITION
            </Link>
            <Link href={"#"} fontSize="13px">
              HEALTHY RECIPES
            </Link>
            <Link href={"#"} fontSize="13px">
              EXPERTS
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
              ABOUT
            </Heading>
            <Link href={"#"} fontSize="13px">
              CAREERS
            </Link>
            <Link href={"#"} fontSize="13px">
              TUTORIALS
            </Link>
            <Link href={"#"} fontSize="13px">
              OUR TEAM
            </Link>
            <Link href={"#"} fontSize="13px">
              B2B OPTIONS
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb="20px">
              MEMBERSHIP
            </Heading>
            <Heading as="h5" size="sm">
              FB PLUS
            </Heading>
            <Heading as="h5" size="sm">
              COMMUNITY
            </Heading>
            <Heading as="h5" size="sm">
              BLOG
            </Heading>
            <Heading as="h5" size="sm">
              CONTACT US
            </Heading>
            <Heading as="h5" size="sm">
              FAQ
            </Heading>
            <Heading as="h5" size="sm">
              STORE
            </Heading>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            Copyright © 2022 Sparta Fitness Club. All rights reserved.
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
