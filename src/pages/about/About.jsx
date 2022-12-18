import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="background_image">
        {/* <div className="header"></div> */}
      </div>
      <div className="header_line">
        <p>ABOUT FITNESS BLENDER</p>
        <h2>
          Our goal is to make health and fitness attainable, affordable and
          approachable.
        </h2>
      </div>

      {/* //second _section */}

      <div className="second_section">
        <div className="second">
          <h2
            style={{
              margin: "50px 50px",
            }}
          >
            Created to help you live a better, happier, healthier life.
          </h2>
          <p>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income level or access to a gym. That's why we offer
            hundreds of free, full-length workout videos, the most affordable
            and effective workout programs on the web, meal plans, and helpful
            health, nutrition and fitness information.
          </p>
        </div>
      </div>

      {/* third section */}
      
      <div className="third_section">
        <div className="third_section1">
          <div className="third_section2">
            <video>
              <source src="" type="video/jpg"></source>
            </video>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="fourth_div">
        <div className="second_section">
          <h1
            style={{
              margin: "50px 50px",
              color:'white'
            }}
          >
            We believe in unbiased, gimmick-free, research-backed information{" "}
          </h1>
          <p style={{
            color:'white'
          }}>
            The only thing we endorse is eating unprocessed, whole foods, and
            working out for a strong, healthy body. As a business, we believe
            good things happen when you put people before profit.
          </p>
        </div>
        <div className="division_box">
          <div className="small_division">
          {/* <FontAwesomeIcon icon="fa-thin fa-book-user" /> */}
            <h4>POWERED BY YOU</h4>
            <p>
              Fitness Blender has reached tens of millions around the globe, all
              from word of mouth; happy viewers sharing our content with friends
              and family.
            </p>
          </div>
          <div className="small_division">
          {/* <FontAwesomeIcon icon="fa-thin fa-book-user" /> */}
            <h4>PROGRAMS THAT WORK</h4>
            <p>
              Our workout plans use our online fitness calendar to provide
              detailed, day-by-day plans, creating incredible, sustainable
              results.
            </p>
          </div>
          <div className="small_division">
          {/* <FontAwesomeIcon icon="fa-thin fa-book-user" /> */}
            <h4>500+ FREE WORKOUTS</h4>
            <p>
              Over 500 free workouts range from 10-85 minutes long, from
              beginner level to elite athlete, from HIIT to Pilates, and
              strength training to bodyweight.
            </p>
          </div>
        </div>
      </div>

      {/* fifth section */}

      <div className="fifth_section">
        <div className="first_fifth_div">
          <div className="first_first_div">
            <img src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-01.jpg" />
          </div>
          <div className="first_first_div">
            <img src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-02.jpg" />
          </div>
          <div className="first_first_div">
            <img src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-03.jpg" />
          </div>
        </div>
        <div className="second_fifth_div">
          <div className="second_first_div">
            <img src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-04.jpg" />
          </div>
          <div className="second_first_div">
            <img src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-05.jpg" />
          </div>
          <div className="second_first_div">
            <img src="https://d18zdz9g6n5za7.cloudfront.net/about/gallery-06.jpg" />
          </div>
        </div>
      </div>

      {/* sixth section */}

      <div className="second_section">
        <div className="sixth">
          <h2> A little bit about who we are and how it all got started.</h2>
          {/* <div className="sixth_paragraph"> */}
            <p>
              Fitness Blender was created by just two people; a husband and wife
              team of personal trainers who thought fitness should be accessible
              to everyone, regardless of their income. Both Kelli and Daniel
              felt like there was a lack of reliable health and fitness
              information on the web, and too many people in the industry were
              more focused on monetary gain or appearance than they were on good
              health.
            </p>
          {/* </div> */}
        </div>
      </div>

      {/* seventh section */}
      <div className="seventh_section">
        {/* <div className="seventh_headline"> */}
          <div className="seventh_div">
            <div className="seventh_small">
              <h4>Daniel Segars</h4>
              <p>Daniel has worked in the fitness industry since 2000,</p>
              <p>and has a degree in Food and Nutrition.</p>
              <div className="anchor">
                <a href="#" alt="photo" className="anchor_tag">
                  Train with Daniel
                </a>
              </div>
            </div>
            <div className="seventh_small">
              <h4>Daniel Segars</h4>
              <p>Daniel has worked in the fitness industry since 2000,</p>
              <p>and has a degree in Food and Nutrition.</p>
              <div className="anchor">
                <a href="#" alt="photo" className="anchor_tag">
                  {" "}
                  Train with Daniel{" "}
                </a>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      {/* eight section */}

       <div className="eight">
        <p>AS FEATURED IN</p>
        <div className="eight_anchor">
          <a href="#" alt="" className="fitness">
            fitness
          </a>
          <a href="#" alt="" className="street">
            THE WALL STREET JOURNAL
          </a>
          <a href="#" alt="" className="forbes">
            Forbes
          </a>
          <a href="#" alt="" className="post">
            THE HUFFNGTON POST
          </a>
          <a href="#" alt="" className="buzz">
            BuzzFeed
          </a>
        </div>
      </div> 

      {/* ninth section */}
      <div className="ninth">
        <div className="nnth_first">
          <span className="pspan">Ready to try a Fitness Blender workout?</span>
          <p>GET STARTED TODAY</p>
        </div>
      </div> 

      {/* footer section */}
    </div>
  );
}

export default About;
