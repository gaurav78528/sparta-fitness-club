import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Heading } from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import logo from "../../assets/logo.png";
import customWorkouts from "../../assets/custom-workouts.png";
import workoutVideo from "../../assets/workout-video.png";
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

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="wrapper">
      <div className="mega-menu">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-items">
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
            <li>
              <div>
                <a href="#">workouts</a>
                <IoMdArrowDropdown />
              </div>

              <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-list-box">
                    <img src={workoutVideo} alt="" />
                    <a href="">workout videos</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={customWorkouts} alt="" />
                    <a href="">custom workouts</a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div>
                <a href="#">programs</a>
                <IoMdArrowDropdown />
              </div>
              <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-list-box">
                    <img src={workoutPrograms} alt="" />
                    <a href="">workout programs</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={mealPlans} alt="" />
                    <a href="">Meal Plans</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={pilotPrograms} alt="" />
                    <a href="">pilot programs</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={customWorkouts} alt="" />
                    <a href="">routines</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <a href="#">healthy living</a>
                <IoMdArrowDropdown />
              </div>
              <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-list-box">
                    <img src={expertArticles} alt="" />
                    <a href="">expert articles</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={healthyRecipes} alt="" />
                    <a href="">healthy recipes</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={wellnessVideos} alt="" />
                    <a href="">wellness videos</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <a href="#">community</a>
                <IoMdArrowDropdown />
              </div>
              <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-list-box">
                    <img src={community} alt="" />
                    <a href="">Community</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={blog} alt="" />
                    <a href="">Blog</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={whatsNew} alt="" />
                    <a href="">what's new</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <a href="#">about</a>
                <IoMdArrowDropdown />
              </div>
              <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-list-box">
                    <img src={about} alt="" />
                    <a href="">about</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={careers} alt="" />
                    <a href="">careers</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={tutorials} alt="" />
                    <a href="">tutorials</a>
                  </div>
                  <div className="dropdown-list-box">
                    <img src={ourTeam} alt="" />
                    <a href="">our team</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <a href="#">store</a>
              </div>
            </li>
            <li id="membership">
              <div>
                <a href="#">membership</a>
              </div>
            </li>
          </ul>
          <button className="mobile-menu-btn">
            {isMobile ? (
              <IoCloseCircleOutline onClick={() => setIsMobile(false)} />
            ) : (
              <FaBars onClick={() => setIsMobile(!isMobile)} />
            )}
          </button>
        </div>
        <div className="user-details">
          <a href="#">
            <span>Hi! Sign In</span>
            <Heading as="h6" size="xs" fontSize="14px">
              MY FITNESS <IoMdArrowDropdown />
            </Heading>
          </a>
          <div className="user-details-dropdown">
            <Heading as="h4" size="md">
              JOIN FOR FREE!
            </Heading>
            <p>
              Join for free and start building and tracking your workouts, get
              support from other Sparta Fitness Club members and more!
            </p>
            <button>JOIN</button>
            <button>SIGN IN</button>
          </div>
        </div>
        <div className="nav-cart">
          <AiOutlineSearch />
          <a href="">
            <BiShoppingBag />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Center,
//   Divider,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   Flex,
//   Image,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import MainLogo from "../HomePageAssets/fitness_center_main_logo-no_bg.png";
// import LadyOnYogaMat from "../HomePageAssets/lady_on_yoga_mat-removebg-preview.png";
// import WorkoutFingerPrint from "../HomePageAssets/workout_fingerprint-removebg-preview.png";
// import ProgramTickyes from "../HomePageAssets/task_tick_yes-removebg-preview.png";
// import MealPlanApple from "../HomePageAssets/meal_Plan_apple-removebg-preview.png";
// import PilotPlanGear from "../HomePageAssets/pilot_plan_gear-removebg-preview.png";
// import RoutineFingerPrint from "../HomePageAssets/routine_fingerprint-removebg-preview.png";
// import ExpertArticlesBrain from "../HomePageAssets/expert_article_brain-removebg-preview.png";
// import RecipeSoupBowl from "../HomePageAssets/healthy_recipes_soup_bowl-removebg-preview.png";
// import WellnessVideosHeart from "../HomePageAssets/wellness_videos_heart-removebg-preview.png";
// import CommunityChatBubble from "../HomePageAssets/community_chat-removebg-preview.png";
// import CommunityBlogPencil from "../HomePageAssets/community_blog_pencil-removebg-preview.png";
// import CommunityExclamation from "../HomePageAssets/community_whats_new_exclamation-removebg-preview.png";
// import AboutTutorialGradHat from "../HomePageAssets/about_tutorial_grad_hat-removebg-preview.png";
// import AboutCareerSuitcase from "../HomePageAssets/about_careers_suicase_start-removebg-preview.png";
// import AboutTeamCrowd from "../HomePageAssets/about_team_crowd-removebg-preview.png";
// import AboutFavicon from "../HomePageAssets/favicon_logo.png";

// import { BsFillCaretDownFill } from "react-icons/bs";
// import { BiSearchAlt2 } from "react-icons/bi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaRegUserCircle } from "react-icons/fa";
// import "./navbar.css";
// import { json, Link } from "react-router-dom";
// import { useEffect } from "react";

// const Navbar = () => {
//   const [styleworkout, setStyle] = useState({ display: "none" });
//   const [styleprograms, setStyleprograms] = useState({ display: "none" });
//   const [styleAbout, setStyleAbout] = useState({ display: "none" });
//   const [styleCommunity, setStyleCommunity] = useState({ display: "none" });
//   const [styleHealthy_living, setStyleHealthy_living] = useState({
//     display: "none",
//   });
//   const [styleSignUp, setStyleSignUp] = useState({ display: "none" });
//   const [styleSeachBar, setStyleSeachBar] = useState({ display: "none" });
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   let data = JSON.parse(localStorage.getItem("auth")) || "";

//   const cartData = JSON.parse(localStorage.getItem("cartArray")) || [];

//   useEffect(() => {}, [data]);

//   return (
//     <>
//       <Flex color="white" h={"100px"} pos="sticky" top={"0px"} zIndex="27">
//         <Box bg="rgb(255 255 255)" w={["34px", "34px", "34px", "74px", "74px"]}>
//           <Text>Box 2</Text>
//         </Box>
//         <Center w="174px" bg="rgb(255, 255, 255)">
//           <Link to={"/"}>
//             <Box>
//               <Image src={logo} alt="mainlogo" />
//             </Box>
//           </Link>
//         </Center>
//         <Box
//           w="59.8%"
//           justifyContent={"space-between"}
//           display={["none", "none", "none", "flex", "flex"]}
//         >
//           <div className="navbar_main_menu_items">
//             <div
//               className="navbar_main_menu_items_workout"
//               onMouseEnter={(e) => {
//                 setStyle({ display: "flex" });
//               }}
//               onMouseLeave={(e) => {
//                 setStyle({ display: "none" });
//               }}
//             >
//               <Link to="/workout">
//                 <h4 className="navbar_main_menu_items_workout_text">
//                   WORKOUTS
//                 </h4>
//               </Link>
//               <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//             </div>
//             <div
//               className="navbar_main_menu_items_programs"
//               onMouseEnter={(e) => {
//                 setStyleprograms({ display: "flex" });
//               }}
//               onMouseLeave={(e) => {
//                 setStyleprograms({ display: "none" });
//               }}
//             >
//               <Link to="/programs">
//                 <h4 className="navbar_main_menu_items_programs_text">
//                   PROGRAMS
//                 </h4>
//               </Link>
//               <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//             </div>
//             <div
//               className="navbar_main_menu_items_healthy_living"
//               onMouseEnter={(e) => {
//                 setStyleHealthy_living({ display: "flex" });
//               }}
//               onMouseLeave={(e) => {
//                 setStyleHealthy_living({ display: "none" });
//               }}
//             >
//               <h4 className="navbar_main_menu_items_healthy_living_text">
//                 HEALTHY LIVING
//               </h4>
//               <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//             </div>
//             <div
//               className="navbar_main_menu_items_community"
//               onMouseEnter={(e) => {
//                 setStyleCommunity({ display: "flex" });
//               }}
//               onMouseLeave={(e) => {
//                 setStyleCommunity({ display: "none" });
//               }}
//             >
//               <h4 className="navbar_main_menu_items_community_text">
//                 COMMUNITY
//               </h4>
//               <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//             </div>
//             <div
//               className="navbar_main_menu_items_about"
//               onMouseEnter={(e) => {
//                 setStyleAbout({ display: "flex" });
//               }}
//               onMouseLeave={(e) => {
//                 setStyleAbout({ display: "none" });
//               }}
//             >
//               <h4 className="navbar_main_menu_items_about_text">ABOUT</h4>
//               <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//             </div>

//             <div className="navbar_main_menu_items_store">
//               <Link to={"/store"}>
//                 <h4 className="navbar_main_menu_items_store_text">STORE</h4>
//               </Link>
//             </div>
//             <div className="navbar_main_menu_items_membership">
//               <Link to={"/membership"}>
//                 <h4 className="navbar_main_menu_items_membership_text">
//                   MEMBERSHIP
//                 </h4>
//               </Link>
//             </div>
//           </div>
//         </Box>
//         {/* small screen */}
//         <Box
//           display={["flex", "flex", "flex", "none", "none"]}
//           pl="57%"
//           bgColor="white"
//         >
//           <div
//             className="navbar_main_menu_items_respons_signup"
//             onMouseEnter={(e) => {
//               setStyleSignUp({ display: "block" });
//             }}
//             onMouseLeave={(e) => {
//               setStyleSignUp({ display: "none" });
//             }}
//           >
//             <FaRegUserCircle
//               color="rgb(33,36,50)"
//               size={"25px"}
//               fontWeight="100"
//             />
//             <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//           </div>

//           <Button
//             ref={btnRef}
//             colorScheme="rgb(255 255 255)"
//             alignSelf={"center"}
//             onClick={onOpen}
//           >
//             <GiHamburgerMenu
//               color="rgb(33,36,50)"
//               size={"25px"}
//               fontWeight="100"
//             />
//           </Button>
//         </Box>
//         <Drawer
//           isOpen={isOpen}
//           placement="right"
//           onClose={onClose}
//           finalFocusRef={btnRef}
//           bgColor=""
//         >
//           <DrawerOverlay />
//           <DrawerCloseButton />
//           <DrawerContent w={"100%"} bgColor="rgb(33,36,50)">
//             <DrawerBody w={"100%"}>
//               <Box
//                 display={"flex"}
//                 w="116%"
//                 mt="-7px"
//                 bgColor={"rgb(49,52,67)"}
//                 h="80px"
//                 ml="-22px"
//               >
//                 <InputGroup w={"230px"} pl="15px">
//                   <Input
//                     variant="unstyled"
//                     placeholder="KEYWORD SEARCH"
//                     fontWeight={"600"}
//                     w="95%"
//                     h="70px"
//                     color={"rgb(255 255 255)"}
//                     fontSize="14px"
//                     pl={"10px"}
//                   />
//                   <InputRightElement
//                     children={
//                       <BiSearchAlt2 color="rgb(255,255,255)" size={"22px"} />
//                     }
//                     mt="20px"
//                   />
//                 </InputGroup>
//                 <Center height="100%">
//                   <Divider orientation="vertical" />
//                 </Center>
//                 <Box pt="27px" pl="26px">
//                   <Link to={"/cart"}>
//                     <MdOutlineShoppingBag
//                       color="rgb(255,255,255)"
//                       size={"24px"}
//                     />
//                   </Link>
//                 </Box>
//               </Box>
//               <Link to={"/membership"}>
//                 <Text color="rgb(66, 150, 203)" pt="40px" pb="15px">
//                   MEMBERSHIP
//                 </Text>
//               </Link>
//               <Divider orientation="horizontal" w={"90%"} />
//               <Link to={"/workout"}>
//                 <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
//                   WORKOUTS
//                 </Text>
//               </Link>
//               <Link to="/workoutvideos">
//                 <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                   WORKOUT VIDEOS
//                 </Text>
//               </Link>
//               <Link to={"/customworkout"}>
//                 <Text
//                   color="rgb(167,170,174)"
//                   pt="10px"
//                   pb="10px"
//                   fontSize={"14px"}
//                 >
//                   CUSTOM WORKOUTS
//                 </Text>
//               </Link>
//               <Divider orientation="horizontal" w={"90%"} />
//               <Link to="/programs">
//                 <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
//                   PROGRAMS
//                 </Text>
//               </Link>
//               <Link to="/plans">
//                 <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                   WORKOUT PROGRAMS
//                 </Text>
//               </Link>
//               <Link to="/meal">
//                 <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                   MEAL PLANS
//                 </Text>
//               </Link>
//               <Link to="/pilot">
//                 <Text
//                   color="rgb(167,170,174)"
//                   pt="10px"
//                   pb="10px"
//                   fontSize={"14px"}
//                 >
//                   PILOT PLANS
//                 </Text>
//               </Link>
//               <Divider orientation="horizontal" w={"90%"} />
//               <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
//                 HEALTHY LIVING
//               </Text>
//               <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                 EXPERT ARTICLES
//               </Text>
//               <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                 HEALTHY RECIPES
//               </Text>
//               <Text
//                 color="rgb(167,170,174)"
//                 pt="10px"
//                 pb="10px"
//                 fontSize={"14px"}
//               >
//                 WELLNESS VIDEOS
//               </Text>
//               <Divider orientation="horizontal" w={"90%"} />
//               <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
//                 COMMUNITY
//               </Text>

//               <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                 BLOG
//               </Text>
//               <Text
//                 color="rgb(167,170,174)"
//                 pt="10px"
//                 pb="10px"
//                 fontSize={"14px"}
//               >
//                 WHATS'S NEW
//               </Text>
//               <Divider orientation="horizontal" w={"90%"} />
//               <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
//                 ABOUT
//               </Text>

//               <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                 CAREERS
//               </Text>
//               <Text color="rgb(167,170,174)" pt="10px" fontSize={"14px"}>
//                 TUTORIALS
//               </Text>
//               <Text
//                 color="rgb(167,170,174)"
//                 pt="10px"
//                 pb="10px"
//                 fontSize={"14px"}
//               >
//                 OUR TEAM
//               </Text>
//               <Divider orientation="horizontal" w={"90%"} />
//               <Link to={"/store"}>
//                 <Text color="rgb(255,255,255)" pt="10px" fontSize={"14px"}>
//                   STORE
//                 </Text>
//               </Link>
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//         <Box
//           flex="1.5"
//           display={["none", "none", "none", "flex", "flex"]}
//           bgColor="white"
//         >
//           <div
//             className="navbar_main_menu_items_signup"
//             onMouseEnter={(e) => {
//               setStyleSignUp({ display: "block" });
//             }}
//             onMouseLeave={(e) => {
//               setStyleSignUp({ display: "none" });
//             }}
//           >
//             <h4 className="navbar_main_menu_items_hiSign_text">
//               Hi! {data.fname && data !== "" ? data.fname : "Sign In"}{" "}
//             </h4>
//             <div className="navbar_main_menu_items_myfitness_text_box">
//               <h4 className="navbar_main_menu_items_myfitness_text">
//                 MY FITNESS
//               </h4>
//               <BsFillCaretDownFill color="rgb(66,150,203)" size={"10px"} />
//             </div>
//           </div>
//         </Box>
//         <Box
//           flex={"1"}
//           display={["none", "none", "none", "flex", "flex"]}
//           bgColor="white"
//         >
//           <div className="navbar_main_menu_items_right_most">
//             <div
//               className="navbar_main_menu_items_search"
//               onClick={(e) => {
//                 setStyleSeachBar({ display: "flex" });
//               }}
//               onMouseLeave={(e) => {
//                 setStyleSeachBar({ display: "none" });
//               }}
//             >
//               <BiSearchAlt2 color="black" size={"22px"} />
//             </div>

//             <div className="navbar_main_menu_items_shopping_bag">
//               <Link to={"/cart"}>
//                 <MdOutlineShoppingBag color="black" size={"22px"} />
//               </Link>
//               <p className="navbar_main_menu_items_shopping_bag_cart_number">
//                 {cartData.length}
//               </p>
//             </div>
//           </div>
//         </Box>
//       </Flex>
//       {/* BLACK BOX WORKOUT***************** */}
//       <div
//         className="navbar_main_menu_blackbox-workout"
//         style={styleworkout}
//         onMouseEnter={(e) => {
//           setStyle({ display: "flex" });
//         }}
//         onMouseLeave={(e) => {
//           setStyle({ display: "none" });
//         }}
//       >
//         <Link to={"/workoutvideos"}>
//           <div className="navbar_main_menu_blackbox-workout_items">
//             <div className="navbar_main_menu_blackbox-workout_image_box">
//               <Image
//                 src={workoutVideo}
//                 alt=""
//                 boxSize="50px"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="navbar_main_menu_blackbox-workout_text_box">
//               <h4 className="navbar_main_menu_blackbox_h4">WORKOUT VIDEOS</h4>
//             </div>
//           </div>
//         </Link>
//         <Link to={"/customworkout"}>
//           <div className="navbar_main_menu_blackbox-workout_items">
//             <div className="navbar_main_menu_blackbox-workout_image_box">
//               <Image
//                 src={customWorkouts}
//                 alt=""
//                 boxSize="50px"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="navbar_main_menu_blackbox-workout_text_box">
//               <h4 className="navbar_main_menu_blackbox_h4">CUSTOM WORKOUTS</h4>
//             </div>
//           </div>
//         </Link>
//       </div>
//       {/* PROGRAMS*********************************** */}

//       <div
//         className="navbar_main_menu_blackbox-programs"
//         style={styleprograms}
//         onMouseEnter={(e) => {
//           setStyleprograms({ display: "flex" });
//         }}
//         onMouseLeave={(e) => {
//           setStyleprograms({ display: "none" });
//         }}
//       >
//         <Link to="/plans">
//           <div className="navbar_main_menu_blackbox-workout_items">
//             <div className="navbar_main_menu_blackbox-workout_image_box">
//               <Image
//                 src={workoutPrograms}
//                 alt=""
//                 boxSize="50px"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="navbar_main_menu_blackbox-workout_text_box">
//               <h4 className="navbar_main_menu_blackbox_h4">WORKOUT PROGRAMS</h4>
//             </div>
//           </div>
//         </Link>
//         <Link to="/meal">
//           <div className="navbar_main_menu_blackbox-workout_items">
//             <div className="navbar_main_menu_blackbox-workout_image_box">
//               <Image
//                 src={workoutPrograms}
//                 alt=""
//                 boxSize="50px"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="navbar_main_menu_blackbox-workout_text_box">
//               <h4 className="navbar_main_menu_blackbox_h4">MEAL PLANS</h4>
//             </div>
//           </div>
//         </Link>
//         <Link to="/pilot">
//           <div className="navbar_main_menu_blackbox-workout_items">
//             <div className="navbar_main_menu_blackbox-workout_image_box">
//               <Image
//                 src={workoutPrograms}
//                 alt=""
//                 boxSize="50px"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="navbar_main_menu_blackbox-workout_text_box">
//               <h4 className="navbar_main_menu_blackbox_h4">PILOT PROGRAMS</h4>
//             </div>
//           </div>
//         </Link>
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={workoutPrograms}
//               alt=""
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">ROUTINES</h4>
//           </div>
//         </div>
//       </div>

//       {/* about********************* */}
//       <div
//         className="navbar_main_menu_blackbox-about"
//         style={styleAbout}
//         onMouseEnter={(e) => {
//           setStyleAbout({ display: "flex" });
//         }}
//         onMouseLeave={(e) => {
//           setStyleAbout({ display: "none" });
//         }}
//       >
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={workoutPrograms}
//               alt=""
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">ABOUT</h4>
//           </div>
//         </div>

//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={workoutPrograms}
//               alt=""
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">CAREERS</h4>
//           </div>
//         </div>
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={AboutTutorialGradHat}
//               alt={AboutTutorialGradHat}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">TUTORIALS</h4>
//           </div>
//         </div>
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={AboutTeamCrowd}
//               alt={AboutTeamCrowd}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">OUR TEAM</h4>
//           </div>
//         </div>
//       </div>
//       {/* healthy living *********************************/}
//       <div
//         className="navbar_main_menu_blackbox-healthy_living"
//         style={styleHealthy_living}
//         onMouseEnter={(e) => {
//           setStyleHealthy_living({ display: "flex" });
//         }}
//         onMouseLeave={(e) => {
//           setStyleHealthy_living({ display: "none" });
//         }}
//       >
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={ExpertArticlesBrain}
//               alt={ExpertArticlesBrain}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
//           </div>
//         </div>
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={RecipeSoupBowl}
//               alt={RecipeSoupBowl}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">HEALTHY RECIPES</h4>
//           </div>
//         </div>{" "}
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={WellnessVideosHeart}
//               alt={WellnessVideosHeart}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">WELLNESS VIDEOS</h4>
//           </div>
//         </div>
//       </div>

//       {/* community */}
//       <div
//         className="navbar_main_menu_blackbox-community"
//         style={styleCommunity}
//         onMouseEnter={(e) => {
//           setStyleCommunity({ display: "flex" });
//         }}
//         onMouseLeave={(e) => {
//           setStyleCommunity({ display: "none" });
//         }}
//       >
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={CommunityChatBubble}
//               alt={CommunityChatBubble}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
//           </div>
//         </div>
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={CommunityBlogPencil}
//               alt={CommunityBlogPencil}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
//           </div>
//         </div>
//         <div className="navbar_main_menu_blackbox-workout_items">
//           <div className="navbar_main_menu_blackbox-workout_image_box">
//             <Image
//               src={CommunityExclamation}
//               alt={CommunityExclamation}
//               boxSize="50px"
//               objectFit="cover"
//             />
//           </div>
//           <div className="navbar_main_menu_blackbox-workout_text_box">
//             <h4 className="navbar_main_menu_blackbox_h4">EXPERT ARTICLES</h4>
//           </div>
//         </div>
//       </div>
//       {/* membership */}
//       <div
//         className="navbar_main_menu_blackbox_signup"
//         style={styleSignUp}
//         onMouseEnter={(e) => {
//           setStyleSignUp({ display: "block" });
//         }}
//         onMouseLeave={(e) => {
//           setStyleSignUp({ display: "none" });
//         }}
//       >
//         <div className="navbar_main_menu_blackbox_signup_items">
//           <p className="navbar_main_menu_blackbox_text_h4">JOIN FOR FREE!</p>
//         </div>
//         <div className="navbar_main_menu_blackbox_signup_items">
//           <p className="navbar_main_menu_blackbox_text_p">
//             Join for free and start building and tracting your workouts, get
//             support from other Fitness Blender members and more!
//           </p>
//         </div>
//         <div className="navbar_main_menu_blackbox_signup_items_join_btn">
//           <Link to="/membership">
//             <Button
//               w="100%"
//               color={"rgb(255, 255, 255)"}
//               bgColor={"rgb(66,150,203)"}
//               mt="15px"
//               fontSize={"16px"}
//               letterSpacing="0.1px"
//               h="45px"
//               _hover={{
//                 bgGradient: "linear(to right,rgb(48,179,205), rgb(63,154,203))",
//               }}
//             >
//               JOIN
//             </Button>
//           </Link>
//         </div>
//         <div className="navbar_main_menu_blackbox_signup_items_signin_btn">
//           <Link to="/login">
//             <Button
//               w="100%"
//               color={"rgb(255, 255, 255)"}
//               bgColor={"rgb(49,52,67)"}
//               border="1px"
//               borderColor={"rgb(66,150,203)"}
//               mt="15px"
//               fontSize={"16px"}
//               letterSpacing="0.1px"
//               h="45px"
//               _hover={{
//                 bgGradient:
//                   "linear(to right, rgb(48,179,205), rgb(63,154,203))",
//               }}
//             >
//               SIGN IN
//             </Button>
//           </Link>
//         </div>
//       </div>
//       <div
//         className="navbar_main_menu_blackbox-community"
//         style={styleSeachBar}
//         onMouseEnter={(e) => {
//           setStyleSeachBar({ display: "flex" });
//         }}
//         onMouseLeave={(e) => {
//           setStyleSeachBar({ display: "none" });
//         }}
//       >
//         <InputGroup>
//           <Input
//             variant="flushed"
//             placeholder="KEYWORD SEARCH"
//             fontWeight={"600"}
//             w="100%"
//             h="70px"
//             mt="20px"
//             color={"rgb(255 255 255)"}
//             fontSize="20px"
//           />
//           <InputRightElement
//             children={<BiSearchAlt2 color="rgb(255 255 255)" size={"25px"} />}
//             mt="35px"
//           />
//         </InputGroup>
//       </div>
//     </>
//   );
// };

// export default Navbar;
