import { Box, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Home.css";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
const Home = () => {
  const { user } = useUserAuth();
  console.log(user);
  let homearr = [
    {
      name: "Perfect for Beginners",
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg",
      atag: "4 WEEK PROGRAM - 34 MIN/DAY",
      ptag: "FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less ",
      price: "14.99",
    },
    {
      name: "You Choose",
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg",
      atag: "4 WEEK PROGRAM - 38 MIN/DAY",
      ptag: "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day  ",
      price: "14.99",
    },
    {
      name: "Short on Time?",
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg",
      atag: "4 WEEK PROGRAM - 30 MIN/DAY",
      ptag: "FB 30 - Fat Loss Program For Busy People (Round 4)   ",
      price: "14.99",
    },
    {
      name: "No Equipment Necessary",
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg",
      atag: "4 WEEK PROGRAM - 40 MIN/DAY",
      ptag: "FB Bodyweight - Bodyweight Only Fat Loss Program   ",
      price: "14.99",
    },
  ];
  return (
    <div>
      {/* Top section  */}
      <Flex justify="center" align="center" className="TopMain">
        <Flex w="80%" align="center" justify="space-between">
          {user ? (
            <Flex align="center" justify="center" className="TopFlex3">
              <div>
                <div className="TopHeading">
                  <h2>
                    Welcome
                    <br />
                    {/* {user.email} */}
                  </h2>
                  <h2 style={{ fontSize: "30px" }}> {user.email}</h2>
                  <p style={{ fontSize: "17px" }}>
                    Your free membership gives you access to hundreds of videos,
                    articles, and recipes as well as a positive and supportive
                    community to help you reach and maintain your fitness and
                    wellness goals.
                  </p>
                </div>
              </div>
              <Box>
                <UserAvatar size="2xl" />
              </Box>
            </Flex>
          ) : (
            <div className="TopFlex1">
              <div>
                <div className="TopHeading">
                  <h2>
                    Feel Great.
                    <br />
                    Body and Mind.
                  </h2>
                  <p>
                    Choose from hundreds of workouts, healthy recipes, relaxing
                    meditations, and expert articles, for a whole body and mind
                    approach to feeling great.
                  </p>
                  <div className="TopAnchor">
                    <Link to="/membership">JOIN NOW</Link>
                  </div>
                </div>
              </div>
              <div className="TopFlex2">
                <img
                  src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-1440.webp"
                  height="630"
                  width="630"
                />
              </div>
            </div>
          )}
        </Flex>
      </Flex>

      {/* Top section end */}

      {/* Top section 2nd */}
      <div className="Topsection2">
        <div>
          <h2>
            Introducing
            <br />
            FB <span>Plus</span> Passes
          </h2>
          <p>
            Passes give you full access to everything FB Plus has to offer,
            without a long-term subscription. Choose a pass that fits your
            budget and your schedule.
          </p>
          <div className="TopAnchor1">
            <a>BUY A PASS</a>
          </div>
          <div className="Topsec2img">
            <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.webp" />
          </div>
        </div>
      </div>
      {/* Top section 2nd */}
      {/* Middle section */}
      <div className="Middle">
        <div className="Mdiv1">
          <h2>Workout Videos</h2>
          <p>
            Exercise with certified personal trainers whether you’re at home or
            on the road.
          </p>
          <div className="Midan">
            <Link to="/workout">Find a Workout</Link>
          </div>
          <div className="midimg">
            <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-1440.webp" />
          </div>
        </div>
        <div className="Mdiv2">
          <h2>Programs</h2>
          <p>
            Professionally designed programs take the guesswork out of
            exercising.
          </p>
          <div className="Midan">
            <Link to="/pilot">Browse All Programs</Link>
          </div>
          <div className="midimg">
            <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-1440.webp" />
          </div>
        </div>
        <div className="Mdiv3">
          <h2>Wellness Articles</h2>
          <p>
            Research-backed articles to help you care for your body and mind.
          </p>
          <div className="Midan">
            <a href="#">Learn from Experts</a>
          </div>
          <div className="midimg">
            <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-1440.webp" />
          </div>
        </div>

        <div className="Mdiv4">
          <h2>Healthy Recipes</h2>
          <p>
            Fuel your day with recipes by Registered Dietitians and professional
            chefs.
          </p>
          <div className="Midan">
            <Link to="/healthy-living">Browse All Programs</Link>
          </div>
          <div className="midimg">
            <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-1440.webp" />
          </div>
        </div>
      </div>
      {/* Middle section */}
      {/* Middle Sectiion1 */}
      <div className="Middlesec2">
        <div className="Middlesec2div">
          <h2>Supportive Community</h2>
          <p>
            Stay motivated and engaged with a little help from a supportive
            community of other members.
          </p>
          <div className="Middlesec2divanch">
            <a href="#">Become a Member</a>
          </div>
        </div>
        <div className="Middlesec1img">
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"
            height="300"
          />
        </div>
      </div>
      {/* Middle Sectiion1 */}
      {/* Bottom part */}
      <div className="end">
        <div className="end1">
          <h2>Not sure where to start?</h2>
          <p>
            Programs offer day-to-day guidance on an interactive calendar to
            keep you on track.
          </p>
          <div className="flex1">
            {homearr.map((e, id) => (
              <div className="flex2" key={id}>
                <h2>{e.name}</h2>
                <div className="back">
                  <img src={e.image} />
                  <span>{e.atag}</span>
                  <h3>{e.ptag}</h3>
                  <div>${e.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="end_a">
            <a href="#">View All Programs</a>
          </div>
        </div>
      </div>
      {/* Bottom part */}
    </div>
  );
};

export default Home;
