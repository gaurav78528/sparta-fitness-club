import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiCalendar, BiHeart, BiSearchAlt2 } from "react-icons/bi";
import {
  MdAdd,
  MdDashboard,
  MdExitToApp,
  MdFavorite,
  MdListAlt,
  MdNotifications,
  MdOutlineSelfImprovement,
  MdOutlineShoppingBag,
  MdSettings,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import "./navbar.css";
import { json, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import customWorkouts from "../../assets/custom-workouts.png";
import workoutVideo from "../../assets/workout-videos.png";
import workoutPrograms from "../../assets/workout-programs.png";
import mealPlans from "../../assets/meal-plans.png";
import pilotPrograms from "../../assets/pilot-programs.png";
import expertArticles from "../../assets/expert-articles.png";
import healthyRecipes from "../../assets/healthy-recipes.png";
import wellnessVideos from "../../assets/wellness-videos.png";
import community from "../../assets/community.png";
import blog from "../../assets/blog.png";
import about from "../../assets/about.png";
import careers from "../../assets/careers.png";
import tutorials from "../../assets/Tutorials.png";
import ourTeam from "../../assets/our-team.png";
import whatsNew from "../../assets/whats-new.png";
import { useUserAuth } from "../../context/UserAuthContext";
 

const Navbar = () => {
  const [styleworkout, setStyle] = useState({ display: "none" });
  const [styleprograms, setStyleprograms] = useState({ display: "none" });
  const [styleAbout, setStyleAbout] = useState({ display: "none" });
  const [styleCommunity, setStyleCommunity] = useState({ display: "none" });
  const [styleHealthy_living, setStyleHealthy_living] = useState({
    display: "none",
  });
  const [styleSignUp, setStyleSignUp] = useState({ display: "none" });
  const [styleSeachBar, setStyleSeachBar] = useState({ display: "none" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let data = JSON.parse(localStorage.getItem("auth")) || "";

  // const cartData = JSON.parse(localStorage.getItem("cartArray")) || [];
  let cartData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  useEffect(() => {}, [data]);
  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Flex
        color="white"
        h={"100px"}
        pos="sticky"
        top={"0px"}
        zIndex="27"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      >
        <Box bg="rgb(255 255 255)" w={["34px", "34px", "34px", "74px", "74px"]}>
          <Text>Box 2</Text>
        </Box>
        <Center w="174px" bg="rgb(255, 255, 255)">
          <Link to={"/"}>
            <Box>
              <Image src={logo} alt="mainlogo" />
            </Box>
          </Link>
        </Center>
        <Box
          w="59.8%"
          justifyContent={"space-between"}
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Flex
            justify="center"
            align="center"
            gap="1.5rem"
            className="navbar_main_menu_items"
          >
            <div
              className="navbar_main_menu_items_workout"
              onMouseEnter={(e) => {
                setStyle({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
              }}
            >
              <Link to="/workout">
                <h4 className="navbar_main_menu_items_workout_text">
                  WORKOUTS
                </h4>
              </Link>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_programs"
              onMouseEnter={(e) => {
                setStyleprograms({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleprograms({ display: "none" });
              }}
            >
              <Link to="/programs">
                <h4 className="navbar_main_menu_items_programs_text">
                  PROGRAMS
                </h4>
              </Link>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_healthy_living"
              onMouseEnter={(e) => {
                setStyleHealthy_living({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleHealthy_living({ display: "none" });
              }}
            >
              <Link to="/healthy-living">
                <h4 className="navbar_main_menu_items_healthy_living_text">
                  HEALTHY LIVING
                </h4>
              </Link>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_community"
              onMouseEnter={(e) => {
                setStyleCommunity({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleCommunity({ display: "none" });
              }}
            >
              <h4 className="navbar_main_menu_items_community_text">
                COMMUNITY
              </h4>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>
            <div
              className="navbar_main_menu_items_about"
              onMouseEnter={(e) => {
                setStyleAbout({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleAbout({ display: "none" });
              }}
            >
              <Link to="/about">
                <h4 className="navbar_main_menu_items_about_text">ABOUT</h4>
              </Link>
              <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
            </div>

            <div className="navbar_main_menu_items_store">
              <Link to={"/store"}>
                <h4 className="navbar_main_menu_items_store_text">STORE</h4>
              </Link>
            </div>
            <div className="navbar_main_menu_items_membership">
              <Link to={"/membership"}>
                <h4 className="navbar_main_menu_items_membership_text">
                  MEMBERSHIP
                </h4>
              </Link>
            </div>
          </Flex>
        </Box>
        {/* small screen */}
        <Box
          display={["flex", "flex", "flex", "none", "none"]}
          // pl="57%"
          px={{ base: "30px", md: "50px", lg: "60px" }}
          justifyContent="flex-end"
          bgColor="white"
          w="100%"
        >
          <div
            className="navbar_main_menu_items_respons_signup"
            onMouseEnter={(e) => {
              setStyleSignUp({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyleSignUp({ display: "none" });
            }}
          >
            <FaRegUserCircle
              color="rgb(33,36,50)"
              size={"25px"}
              fontWeight="100"
            />
            <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
          </div>

          <Button
            ref={btnRef}
            colorScheme="rgb(255 255 255)"
            alignSelf={"center"}
            onClick={onOpen}
          >
            <GiHamburgerMenu
              color="rgb(33,36,50)"
              size={"25px"}
              fontWeight="100"
            />
          </Button>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          bgColor=""
        >
          <DrawerOverlay />
          <DrawerCloseButton />
          <DrawerContent w={"100%"} bgColor="rgb(33,36,50)">
            <DrawerBody w={"100%"}>
              <Box
                display={"flex"}
                w="116%"
                mt="-7px"
                bgColor={"rgb(49,52,67)"}
                h="80px"
                ml="-22px"
              >
                <InputGroup w={"230px"} pl="15px">
                  <Input
                    variant="unstyled"
                    placeholder="KEYWORD SEARCH"
                    fontWeight={"600"}
                    w="95%"
                    h="70px"
                    color={"rgb(255 255 255)"}
                    fontSize="14px"
                    pl={"10px"}
                  />
                  <InputRightElement
                    children={
                      <BiSearchAlt2 color="rgb(255,255,255)" size={"22px"} />
                    }
                    mt="20px"
                  />
                </InputGroup>
                <Center height="100%">
                  <Divider orientation="vertical" />
                </Center>
                <Box pt="27px" pl="26px">
                  <Link to={"/cart"}>
                    <MdOutlineShoppingBag
                      color="rgb(255,255,255)"
                      size={"24px"}
                    />
                  </Link>
                </Box>
              </Box>
              <Link to={"/membership"}>
                <Text color="rgb(66, 150, 203)" pt="40px" pb="15px">
                  MEMBERSHIP
                </Text>
              </Link>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to={"/workout"}>
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"} >
                  WORKOUTS
                </Text>
              </Link>
              <Link to="/workoutvideos">
                <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}  >
              <Link to="/workout-videos">
                <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                  WORKOUT VIDEOS
                </Text>
              </Link>
              <Link to={"/custom-workout"}>
                <Text
                  color="rgb(167,170,174)"
                  pt="10px"
                  pb="10px"
                  fontSize={"14px"}
                >
                  CUSTOM WORKOUTS
                </Text>
              </Link>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to="/programs">
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  PROGRAMS
                </Text>
              </Link>
              <Link to="/plans">
                <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                  WORKOUT PROGRAMS
                </Text>
              </Link>
              <Link to="/meal-plan">
                <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                  MEAL PLANS
                </Text>
              </Link>
              <Link to="/pilot">
                <Text
                  color="rgb(167,170,174)"
                  pt="10px"
                  pb="10px"
                  fontSize={"14px"}
                >
                  PILOT PLANS
                </Text>
              </Link>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to="/healthy-living">
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  HEALTHY LIVING
                </Text>
              </Link>

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                EXPERT ARTICLES
              </Text>
              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                HEALTHY RECIPES
              </Text>
              <Text
                color="rgb(167,170,174)"
                pt="10px"
                pb="10px"
                fontSize={"14px"}
              >
                WELLNESS VIDEOS
              </Text>
              <Divider orientation="horizontal" w={"90%"} />
              <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                COMMUNITY
              </Text>

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                BLOG
              </Text>
              <Text
                color="rgb(167,170,174)"
                pt="10px"
                pb="10px"
                fontSize={"14px"}
              >
                WHATS'S NEW
              </Text>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to="/about">
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  ABOUT
                </Text>
              </Link>

              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                CAREERS
              </Text>
              <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
                TUTORIALS
              </Text>
              <Text
                color="rgb(167,170,174)"
                pt="10px"
                pb="10px"
                fontSize={"14px"}
              >
                OUR TEAM
              </Text>
              <Divider orientation="horizontal" w={"90%"} />
              <Link to={"/store"}>
                <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
                  STORE
                </Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box
          // flex="1.5"
          // padding="32px 15px 0px 15px"
          // margin="auto"
          display={["none", "none", "none", "flex", "flex"]}
          bgColor="white"
        >
          <div
            className="navbar_main_menu_items_signup"
            onMouseEnter={(e) => {
              {
                user
                  ? setStyleSignUp({ display: "none" })
                  : setStyleSignUp({ display: "block" });
              }
            }}
            onMouseLeave={(e) => {
              setStyleSignUp({ display: "none" });
            }}
          >
            <h4 className="navbar_main_menu_items_hiSign_text">
              Hi! {user ? user.email : "Sign In"}{" "}
            </h4>
            <div className="navbar_main_menu_items_myfitness_text_box">
              {user ? (
                <Button
                  colorScheme="blue"
                  variant="link"
                  // bgColor="blue.400"
                  mt="10px"
                  size="sm"
                  borderRadius="4px"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <div className="navbar_main_menu_items_myfitness_text">
                    MY FITNESS
                    <BsFillCaretDownFill
                      color="rgb(66,150,203)"
                      size={"10px"}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Box>
        <Box
          flex={"1"}
          display={["none", "none", "none", "flex", "flex"]}
          bgColor="white"
        >
          <div className="navbar_main_menu_items_right_most">
            <div
              className="navbar_main_menu_items_search"
              onClick={(e) => {
                setStyleSeachBar({ display: "flex" });
              }}
              onMouseLeave={(e) => {
                setStyleSeachBar({ display: "none" });
              }}
            >
              <BiSearchAlt2 color="black" size={"22px"} />
            </div>

            <div className="navbar_main_menu_items_shopping_bag">
              <Link to={"/cart"}>
                <MdOutlineShoppingBag color="black" size={"22px"} />
              </Link>
              <span className="navbar_main_menu_items_shopping_bag_cart_number">
                {cartData.length > 0 ? cartData.length : null}
              </span>
            </div>
          </div>
        </Box>
      </Flex>
      {/* BLACK BOX WORKOUT***************** */}
      <div
        className="navbar_main_menu_blackbox-workout"
        style={styleworkout}
        onMouseEnter={(e) => {
          setStyle({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <Link to={"/workout-videos"}>
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              {/* <Image
                src={workoutVideo}
                alt="workoutVideo"
                boxSize="50px"
                objectFit="cover"
                  
              /> */}
              <MdOutlineSelfImprovement color="white" fontSize={50} />
              <i class="icon -workout-videos" aria-hidden="true"></i>
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">WORKOUT VIDEOS</h4>
            </div>
          </div>
        </Link>
        <Link to={"/custom-workout"}>
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              <Image
                src={customWorkouts}
                alt="customWorkouts"
                boxSize="50px"
                objectFit="cover"
              />
             <i class="icon -custom-workouts" aria-hidden="true"></i>
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">CUSTOM WORKOUTS</h4>
            </div>
          </div>
        </Link>
      </div>
      {/* PROGRAMS*********************************** */}

      <div
        className="navbar_main_menu_blackbox-programs"
        style={styleprograms}
        onMouseEnter={(e) => {
          setStyleprograms({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleprograms({ display: "none" });
        }}
      >
        <Link to="/plans">
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              {/* <Image
                src={workoutPrograms}
                alt="workoutPrograms"
                boxSize="50px"
                objectFit="cover"
              /> */}
              <MdListAlt color="white" fontSize={50}/>
              <i class="icon -workout-programs" aria-hidden="true"></i>
                                        
              
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">WORKOUT PROGRAMS</h4>
            </div>
          </div>
        </Link>
        <Link to="/meal-plan">
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              {/* <Image
                src={mealPlans}
                alt="mealPlans"
                boxSize="50px"
                objectFit="cover"
              /> */}
              <i class="icon -nutrition-programs" aria-hidden="true"></i>
                                       
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">MEAL PLANS</h4>
            </div>
          </div>
        </Link>
        <Link to="/pilot">
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              {/* <Image
                src={pilotPrograms}
                alt="pilotPrograms"
                boxSize="50px"
                objectFit="cover"
              /> */}
              <i class="icon -pilot-programs" aria-hidden="true"></i>
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">PILOT PROGRAMS</h4>
            </div>
          </div>
        </Link>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={customWorkouts}
              alt="customWorkouts"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -routines" aria-hidden="true"></i>
                                        
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">ROUTINES</h4>
        <Link to="/routine">
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              <Image
                src={customWorkouts}
                alt="customWorkouts"
                boxSize="50px"
                objectFit="cover"
              />
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">ROUTINES</h4>
            </div>
          </div>
        </Link>
      </div>
      {/************************  about  ********************* */}
      <div
        className="navbar_main_menu_blackbox-about"
        style={styleAbout}
        onMouseEnter={(e) => {
          setStyleAbout({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleAbout({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
          <i class="icon -about" aria-hidden="true"></i>
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">ABOUT</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={careers}
              alt="careers"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -careers" aria-hidden="true"></i>
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">CAREERS</h4>
        <Link to="/careers">
          <div className="navbar_main_menu_blackbox-workout_items">
            <div className="navbar_main_menu_blackbox-workout_image_box">
              <Image
                src={careers}
                alt="careers"
                boxSize="50px"
                objectFit="cover"
              />
            </div>
            <div className="navbar_main_menu_blackbox-workout_text_box">
              <h4 className="navbar_main_menu_blackbox_h4">CAREERS</h4>
            </div>
          </div>
        </Link>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={tutorials}
              alt="tutorials"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -tutorials" aria-hidden="true"></i>
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">TUTORIALS</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={ourTeam}
              alt="ourTeam"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -team" aria-hidden="true"></i>
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">OUR TEAM</h4>
          </div>
        </div>
      </div>
      {/* healthy living *********************************/}
      <div
        className="navbar_main_menu_blackbox-healthy_living"
        style={styleHealthy_living}
        onMouseEnter={(e) => {
          setStyleHealthy_living({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleHealthy_living({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={expertArticles}
              alt="expertArticles"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -experts" aria-hidden="true"></i>
                                       
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={healthyRecipes}
              alt="healthyRecipes"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -healthy-recipes" aria-hidden="true"></i>
                                        
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">HEALTHY RECIPES</h4>
          </div>
        </div>{" "}
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={wellnessVideos}
              alt="wellnessVideos"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -health" aria-hidden="true"></i>
                                       
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">WELLNESS VIDEOS</h4>
          </div>
        </div>
      </div>

      {/* community */}
      <div
        className="navbar_main_menu_blackbox-community"
        style={styleCommunity}
        onMouseEnter={(e) => {
          setStyleCommunity({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleCommunity({ display: "none" });
        }}
      >
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={expertArticles}
              alt="expertArticles"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -community" aria-hidden="true"></i>
                                        
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={community}
              alt="community"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -blog" aria-hidden="true"></i>
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
        <div className="navbar_main_menu_blackbox-workout_items">
          <div className="navbar_main_menu_blackbox-workout_image_box">
            {/* <Image
              src={whatsNew}
              alt="whatsNew"
              boxSize="50px"
              objectFit="cover"
            /> */}
            <i class="icon -whats-new" aria-hidden="true"></i>
          </div>
          <div className="navbar_main_menu_blackbox-workout_text_box">
            <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
          </div>
        </div>
      </div>
      {/* membership */}
      {user ? (
        <>
          <div
            className="navbar_main_menu_blackbox_signup"
            style={styleSignUp}
            onMouseEnter={(e) => {
              setStyleSignUp({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyleSignUp({ display: "none" });
            }}
          >
            <div className="navbar_main_menu_blackbox_signup_items_join_btn">
              <Flex
                direction={"column"}
                justify="center"
                align="center"
                gap={"15px"}
              >
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<MdDashboard />}
                >
                  DASHBOARD
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<BiCalendar fontSize={"30px"} />}
                  textDecoration="none"
                >
                  CALENDAR
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<BiHeart />}
                >
                  MY PROGRAMS
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<MdFavorite />}
                >
                  FAVOURITES
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<MdNotifications />}
                >
                  NOTIFICATIONS
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<MdSettings />}
                >
                  ACCOUNT
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<MdAdd />}
                >
                  SFC PLUS
                </Button>
                <Button
                  w="100%"
                  variant={"link"}
                  color={"gray"}
                  leftIcon={<MdExitToApp />}
                  onClick={handleLogout}
                >
                  SIGN OUT
                </Button>
              </Flex>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="navbar_main_menu_blackbox_signup"
            style={styleSignUp}
            onMouseEnter={(e) => {
              setStyleSignUp({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyleSignUp({ display: "none" });
            }}
          >
            <div className="navbar_main_menu_blackbox_signup_items">
              <p className="navbar_main_menu_blackbox_text_h4">
                JOIN FOR FREE!
              </p>
            </div>
            <div className="navbar_main_menu_blackbox_signup_items">
              <p className="navbar_main_menu_blackbox_text_p">
                Join for free and start building and tracting your workouts, get
                support from other Fitness Blender members and more!
              </p>
            </div>
            <div className="navbar_main_menu_blackbox_signup_items_join_btn">
              <Link to="/membership">
                <Button
                  w="100%"
                  color={"rgb(255, 255, 255)"}
                  bgColor={"rgb(66,150,203)"}
                  mt="15px"
                  fontSize={"16px"}
                  letterSpacing="0.1px"
                  h="45px"
                  _hover={{
                    bgGradient:
                      "linear(to right,rgb(48,179,205), rgb(63,154,203))",
                  }}
                >
                  JOIN
                </Button>
              </Link>
            </div>
            <div className="navbar_main_menu_blackbox_signup_items_signin_btn">
              <Link to="/login">
                <Button
                  w="100%"
                  color={"rgb(255, 255, 255)"}
                  bgColor={"rgb(49,52,67)"}
                  border="1px"
                  borderColor={"rgb(66,150,203)"}
                  mt="15px"
                  fontSize={"16px"}
                  letterSpacing="0.1px"
                  h="45px"
                  _hover={{
                    bgGradient:
                      "linear(to right, rgb(48,179,205), rgb(63,154,203))",
                  }}
                >
                  SIGN IN
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
      <div
        className="navbar_main_menu_blackbox-community"
        style={styleSeachBar}
        onMouseEnter={(e) => {
          setStyleSeachBar({ display: "flex" });
        }}
        onMouseLeave={(e) => {
          setStyleSeachBar({ display: "none" });
        }}
      >
        <InputGroup w="40%">
          <Input
            variant="flushed"
            placeholder="KEYWORD SEARCH"
            fontWeight={400}
            h="70px"
            mt="20px"
            color={"rgb(255 255 255)"}
            fontSize="14px"
          />
          <InputRightElement
            children={<BiSearchAlt2 color="rgb(255 255 255)" size={"20px"} />}
            mt="35px"
          />
        </InputGroup>
      </div>
    </>
  );
};

export default Navbar;
