import React from "react";
import "./Workout.css";
import { useState ,useEffect} from "react";
import { Calender } from "./Calender";
import { Flex, Spacer, Box, Heading, Text, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const getVideoData = async () => {
  let res = await fetch(`https://sparta-fitness-database.vercel.app/work`);
  let data = await res.json();
  return data;
};
const Workout = () => {
  const [liked, setLiked] = useState(null);
  const [showvideo,setShowVideo]=useState([])
  const getActualData1 = () => {
    getVideoData().then((res) => setShowVideo(res));
  };
console.log(showvideo)
  useEffect(() => {
    getActualData1();
  }, []);
  

  let work1 = [
    {
      id:1,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1154-intermediate-power-yoga-with-twists-adef.jpg",
      name: "Intermediate Power Yoga With Twists  ",
      des: "Free-Flow for Balance and Strength ",
      day: "52 Min • Total Body • Energizing  ",
    },
    {
      id:2,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg",
      name: "Quick HIIT With Extended Cool Down  ",
      des: "Tabata-Inspired Intervals and Feel-Good Foam Rolling  ",
      day: "29 Min • Total Body ",
    },
    {
      id:3,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1156-lower-body-strength-bb7d.jpg",
      name: "Lower Body Strength   ",
      des: "Weighted Circuits with Bodyweight Tempo Training ",
      day: "66 Min • Lower Body • Challenging ",
    },
    {
      id:4,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1155-express-upper-body-90e4.jpg",
      name: "Express Upper Body ",
      des: "Bored-Easily Strength Intervals  ",
      day: "17 Min • Upper Body • Feel-Good  ",
    },
  ];
  let work3 = [
    {
      id:1,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1161-lower-body-strength-and-hiit-cardio-ba59.jpg",
      name: "Lower Body Strength and HIIT Cardio   ",
      des: "With Low Impact, Advanced, and Bodyweight Options ",
      day: "40 Min • Lower Body • Fun  ",
    },
    {
      id:2,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1022-beginner-friendly-cardio-warm-up-bae7.jpg",
      name: "Beginner-Friendly Cardio Warm Up  ",
      des: "Low-Impact Feel-Good Exercises   ",
      day: "10 Min • Total Body  ",
    },
    {
      id:3,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1141-weighted-core-strength-98b4.jpg",
      name: "Weighted Core Strength  ",
      des: "Functional Core Correction and Cross-Training ",
      day: "19 Min • Core • Empowering ",
    },
    {
      id:4,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1143-bored-easily-strength-afcd.jpg",
      name: "Bored Easily Strength  ",
      des: "Dumbbell Workout With No Repeated Exercises   ",
      day: "40 Min • Total Body • Smart ",
    },
  ];
  let work4 = [
    {
      id:1,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg",
      name: "Quick HIIT With Extended Cool Down  ",
      des: "Tabata-Inspired Intervals and Feel-Good Foam Rolling  ",
      day: "29 Min • Total Body  ",
    },
    {
      id:2,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1146-aerobic-step-hiit-a107.jpg",
      name: "Aerobic Step HIIT   ",
      des: "Ascending and Descending Cardio Ladders   ",
      day: "33 Min • Total Body   ",
    },
    {
      id:3,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1161-lower-body-strength-and-hiit-cardio-ba59.jpg",
      name: "Lower Body Strength and HIIT Cardio  ",
      des: "With Low Impact, Advanced, and Bodyweight Options  ",
      day: "40 Min • Lower Body • Fun  ",
    },
    {
      id:4,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1139-low-impact-tabata-hiit-a11e.jpg",
      name: "Low Impact Tabata HIIT  ",
      des: "Sweaty Level 5 Circuits  ",
      day: "33 Min • Total Body • Sweaty ",
    },
  ];
  let work5 = [
    {
      id:1,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1156-lower-body-strength-bb7d.jpg",
      name: "Lower Body Strength  ",
      des: "Weighted Circuits with Bodyweight Tempo Training   ",
      day: "66 Min • Lower Body • Challenging   ",
    },
    {
      id:2,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1155-express-upper-body-90e4.jpg",
      name: "Express Upper Body   ",
      des: "Bored-Easily Strength Intervals   ",
      day: "17 Min • Upper Body • Feel-Good   ",
    },
    {
      id:3,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1158-upper-body-strength-ab3b.jpg",
      name: "Upper Body Strength   ",
      des: "Circuit Training With Push-Ups Intermissions  ",
      day: "51 Min • Upper Body • Challenging  ",
    },
    {
      id:4,
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1167-kickboxing-kettlebell-and-core-b94e.jpg",
      name: "Kickboxing, Kettlebell, and Core  ",
      des: "Bored Easily Combo Workout ",
      day: "38 Min • Total Body ",
    },
  ];
 
  return (
    <div>
      {/* top image */}
      <div className="WorkTop">
        <div className="WorkTopdiv">
          <div>ONLINE WORKOUT VIDEOS</div>
          <h1>
            Find Your Fitness.
            <br></br>
            Something for Everyone.
          </h1>
          <p>
            A huge selection of workout videos and programs to help you look and
            feel your best.
          </p>
        </div>
        <div>{/* <FontAwesomeIcon icon="fa-thin fa-chevron-down" /> */}</div>
      </div>
      {/* top image end */}
      {/* card */}

      <div className="WorkCard">
        <div className="WorkCard1">
          <Flex minWidth="max-content" alignItems="center" gap="2" pb={8} >
            <Box p="2">
              <Heading as="h2" size={{
               base: "md",
                md:"md",
               lg: "xl"}}>
                Newest Free Workout Videos
              </Heading>
            </Box>
            <Spacer />
            <Box gap="2" className="workoutlink">
              <Text color="#4296cb" size={{
               base: "md",
                md:"md",
               lg: "xl"}}><Link to="/workout-videos">View All Free Workouts</Link></Text>
            </Box>
          </Flex>
          <Grid  w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        
        gap={2}>
            {showvideo.map((e) => (
              <GridItem h="auto" pb={5} bg="#fff" className="effect" key={e.id}>
                <Link to={`/worksinglevideo/${e.id}`}>
                <Image src={e.image} />
                </Link>
                <Box color="white" className="Free">
                  <div>Free</div>
                </Box>
                <Box p={2} marginTop={2}>
                  <Flex gap={2}>
                    <Box p="2">
                      <Text fontSize="md">{e.name}</Text>
                    </Box>
                    <Spacer />
                    <Box gap="2" color={'gray'}>
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
                    {e.day}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      {/* card end */}
      {/* 2nd card */}
      <div className="WorkCard2">
        <div className="WorkCard1">
          <Flex minWidth="max-content" alignItems="center" gap="2" pb={8}>
            <Box p="2">
              <Heading as="h2" size={{
               base: "md",
                md:"md",
               lg: "xl"}}>
                Newest Plus Workout Videos
              </Heading>
            </Box>
            <Spacer />
            <Box gap="2" className="workoutlink">
              <Text color="#4296cb" ><Link to="/workout-videos">View All Plus Workouts</Link></Text>
            </Box>
          </Flex>
          <Grid  w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}>
            {work1.map((e) => (
              <GridItem h="auto" pb={5} bg="#fff" className="effect1" key={e.id}>
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
                    {e.day}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      {/* 2nd card end */}
      {/* 3rd card */}
      <div className="WorkCard">
        <div className="WorkCard1">
          <Flex minWidth="max-content" alignItems="center" gap="2" pb={8}>
            <Box p="2">
              <Heading as="h2" size={{
               base: "md",
                md:"md",
               lg: "xl"}}>
                Beginner Workouts
              </Heading>
            </Box>
            <Spacer />
            <Box gap="2" className="workoutlink">
              <Text color="#4296cb"><Link to="/workout-videos">View All Beginner Workouts</Link></Text>
            </Box>
          </Flex>
          <Grid  w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}>
            {work3.map((e) => (
              <GridItem h="auto" pb={5} bg="#fff" className="effect" key={e.id}>
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
                    {e.day}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      {/* 3rd card end */}
      {/* 3nd card */}
      <div className="WorkCard2">
        <div className="WorkCard1">
          <Flex minWidth="max-content" alignItems="center" gap="2" pb={8}>
            <Box p="2">
              <Heading as="h2" size={{
               base: "md",
                md:"md",
               lg: "xl"}}>
                HIIT Workouts
              </Heading>
            </Box>
            <Spacer />
            <Box gap="2" className="workoutlink">
              <Text color="#4296cb"><Link to="/workout-videos">View All HIIT Workouts</Link></Text>
            </Box>
          </Flex>
          <Grid  w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}>
            {work4.map((e) => (
              <GridItem h="auto" pb={5} bg="#fff" className="effect1" key={e.id}>
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
                    {e.day}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      {/* 4th end */}
      {/*  */}
      <div className="WorkCard">
        <div className="WorkCard1">
          <Flex minWidth="max-content" alignItems="center" gap="2" pb={8}>
            <Box p="2">
              <Heading as="h2" size={{
               base: "md",
                md:"md",
               lg: "xl"}}>
                Strength Workouts
              </Heading>
            </Box>
            <Spacer />
            <Box gap="2" className="workoutlink">
              <Text color="#4296cb"><Link to="/workout-videos">View All Strength Workouts</Link></Text>
            </Box>
          </Flex>
          <Grid t w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}>
            {work5.map((e) => (
              <GridItem h="auto" pb={5} bg="#fff" className="effect" key={e.id}>
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
                    {e.day}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Workout;
