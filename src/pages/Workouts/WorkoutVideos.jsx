// import { useEffect ,useState} from "react"
// import React from 'react'
// import {getWorkoutData } from "./REDUX/workout.action";
// import {useDispatch,useSelector} from "react-redux";
// import { Calender } from "./Calender";
// import "./Workout.css";



// import {
//     Grid,
//     GridItem,
//     Heading,
//     Box,
//     Flex,
//     Button,
//     Collapse,

//     Input,
//     Accordion,
//     AccordionItem,
//     AccordionButton,
//     AccordionPanel,
//     Text,
//     IconButton,
//     Hide,
//     Spacer,
//     Image
//   } from "@chakra-ui/react";
  
// //   import { BiSearchAlt2 } from "react-icons/bi";
//   import {
//     MinusIcon,
//     SearchIcon,
//     TriangleDownIcon,
//   } from "@chakra-ui/icons";
// import Hovering from "./Hovering";
// //   import { Link } from "react-router-dom";
// const WorkoutVideos = () => {
//     const [isHovering, setIsHovering] = useState(false);
//     const workout=useSelector((store)=>store.workout.workout)
//     const dispatch = useDispatch();
//     useEffect(()=>{
//        getWorkoutData (dispatch)
//     },[])
  

//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };
//   return (
//     <div>
//         <Box marginLeft={20} marginTop={"100px"} marginBottom={"20px"}>
//         <Heading
//           fontFamily={
//             "Maison Neue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
//           }
//           fontSize={"40px"}
//         >
//           Workout Videos
//         </Heading>
//       </Box>
//       <Box w="full">
//         <Flex h={"full"} border="1px solid gray">
//           <Box marginLeft={12} display="flex" alignItems={"center"}>
//             <Box>
//               <Button>
//                 Filter
//                 <TriangleDownIcon marginLeft={2} />
//               </Button>

//               <Collapse animateOpacity>
//                 <Box
//                   p="40px"
//                   color="black"
//                   mt="4"
//                   bg="gray.300"
//                   rounded="md"
//                   shadow="md"
//                 >
//                   <h1>Hello Its Me!</h1>
//                 </Box>
//               </Collapse>
//             </Box>
//           </Box>
//           <Box>
//             <Accordion allowMultiple>
//               <AccordionItem>
//                 {({ isExpanded }) => (
//                   <>
//                     <h2>
//                       <AccordionButton>
//                         <SearchIcon fontSize="20px" />
//                         <Box as="span" flex="1" textAlign="left" marginLeft={2}>
//                           <Hide below="1000px">
//                             <Text fontSize={"20px"}>Search</Text>
//                           </Hide>
//                         </Box>
//                       </AccordionButton>
//                     </h2>
//                     <AccordionPanel pb={4}>
//                       <Flex>
//                         <Input
//                           w={{ base: "100px", md: "300px", lg: "400px" }}
//                           placeholder="Search Item"
//                         />
//                         <IconButton
//                           aria-label="Search database"
//                           icon={<SearchIcon />}
//                         />
//                       </Flex>
//                     </AccordionPanel>
//                   </>
//                 )}
//               </AccordionItem>
//             </Accordion>
//           </Box>
//         </Flex>
//       </Box>
//       <div className="WorkCard">
//         <div className="WorkCard1">
//       <Grid
//         w={"full"}
//         templateColumns={{
//           base: "repeat(1, 1fr)",
//           md: "repeat(2, 1fr)",
//           lg: "repeat(4, 1fr)",
//         }}
//         gap={2}
//       >
//        {workout.map((e) => (
//               <GridItem h="auto" pb={5} bg="#fff" key={e.id}>
//                 <Image src={e.image} />
                
//                 <Box p={2} marginTop={2}>
//                   <Flex gap={2}>
//                     <Box p="2">
//                       <Text fontSize="md">{e.name}</Text>
//                     </Box>
//                     <Spacer />
//                     <Box gap="2">
//                       <Calender />
//                     </Box>
//                   </Flex>
//                   <Flex gap={2} mt="-15px">
//                     <Box p="2">
//                       <Text fontSize="sm">{e.des}</Text>
//                     </Box>
//                     <Spacer />
//                     <Box gap="2">{/* <Calender/> */}</Box>
//                   </Flex>
//                   <Text fontSize="sm" color="#4296cb" pl={1}>
//                     {e.time}
//                   </Text>
                 
//                 </Box>
//                 <Box m='auto' mt='-10px' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><MinusIcon /></Box>
//                 {isHovering && (
//                      <div>
//                      <Hovering />
//                      </div>
//         )}
//               </GridItem>
//             ))}
//       </Grid>
//       </div>
//       </div>
//         {/* {workout.map((e)=>(
//                 <img src={e.image} />
//             ))
//         } */}
//         <Box>
       
//         </Box>
//     </div>
//   )
// }

// export default WorkoutVideos;
import { useEffect ,useState} from "react"
import React from 'react'

import {useDispatch,useSelector} from "react-redux";
import { Calender } from "./Calender";
import "./Workout.css";
import {fetchPosts} from "./REDUX/workout.action"

import Paginate from "./Paginate";
import {
    Grid,
    GridItem,
    Heading,
    Box,
    Flex,
    Button,
    Collapse,

    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    IconButton,
    Hide,
    Spacer,
    Image
  } from "@chakra-ui/react";
  
//   import { BiSearchAlt2 } from "react-icons/bi";
  import {
    MinusIcon,
    SearchIcon,
    TriangleDownIcon,
  } from "@chakra-ui/icons";
import Hovering from "./Hovering";
//   import { Link } from "react-router-dom";
const WorkoutVideos = () => {
    const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const { posts } = useSelector((state) => state.workout);
	const [currentPage, setCurrentPage] = useState(1);
    const handleChangeSearch = (e) => {
		if(e.target.value.length > 0) {
			setCurrentPage(1);
		}
		setSearch(e.target.value);
	}
    useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
  
    const postPerPage = 28;
	const totalPosts = posts.length;

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const filterPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
        <Box marginLeft={20} marginTop={"100px"} marginBottom={"20px"}>
        <Heading
          fontFamily={
            "Maison Neue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
          }
          fontSize={"40px"}
        >
          Workout Videos
        </Heading>
      </Box>
      <Box w="full">
        <Flex h={"full"} border="1px solid gray">
          <Box marginLeft={12} display="flex" alignItems={"center"}>
            <Box>
              <Button>
                Filter
                <TriangleDownIcon marginLeft={2} />
              </Button>

              <Collapse animateOpacity>
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
      <div className="WorkCard">
        <div className="WorkCard1">
      <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
       {filterPosts.map((e) => (
              <GridItem h="auto" pb={5} bg="#fff" key={e.id}>
                <Image src={e.image} />
                
                <Box p={2} marginTop={2}>
                  <Flex gap={2}>
                    <Box p="2">
                      <Text fontSize="md">{e.name}</Text>
                    </Box>
                    <Spacer />
                    <Box gap="2">
                      <Calender />
                    </Box>
                  </Flex>
                  <Flex gap={2} mt="-15px">
                    <Box p="2">
                      <Text fontSize="sm">{e.des}</Text>
                    </Box>
                    <Spacer />
                    <Box gap="2">{/* <Calender/> */}</Box>
                  </Flex>
                  <Text fontSize="sm" color="#4296cb" pl={1}>
                    {e.time}
                  </Text>
                 
                </Box>
                <Box m='auto' mt='-10px' ><MinusIcon /></Box>
                {/* {isHovering && (
                     <div>
                     <Hovering />
                     </div>
        )} */}
              </GridItem>
            ))}
      </Grid>
      </div>
      </div>
        {/* {workout.map((e)=>(
                <img src={e.image} />
            ))
        } */}
        <Box>
        {totalPosts > postPerPage && (
						<Paginate
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}
						/>
					)}
        </Box>
    </div>
  )
}

export default WorkoutVideos;