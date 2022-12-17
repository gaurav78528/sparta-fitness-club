import React from "react";
import "./Careers.css"

function Careers(){
  return (
    <>
      <div className="careersBackDiv">
        <div className="careerTextDiv"></div>
      </div>
      <div className="careerh1Text">
        <h1 className="h1color"
        style={{
          color:'wheat'
        }}
        >Come Join the FB Family.</h1>
      </div>

      <div
        className="careerTextDiv"
        style={{
          marginTop: "60px",
          fontSize: "1.5rem",
          lineHeight: "35px",
        }}
      >
        <h1>Our Story</h1>
        <p>
          Fitness Blender was created by a husband and wife team of personal
          trainers who felt that there was a lack of reliable health and fitness
          information on the web. They were frustrated that too many people in
          the fitness industry were more focused on monetary gain or outward
          appearance than on good, achievable, long-term health. Now, more than
          10 years later, Kelli and Daniel Segars, are still focused on their
          original goals and approach for the company:
        </p>
        <li>
          Make health and fitness attainable, affordable, and approachable—for
          as many people as possible.
        </li>
        <li>
          Endorse eating unprocessed, whole foods, and working out for a strong,
          healthy body.
        </li>
        <li>Encourage a personal, mindful approach to eating and exercise.</li>
        <li>
          Promote the fact that overall wellness looks different for each
          individual.
        </li>
      </div>
      <div
        style={{
          width: "80vw",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          marginTop: "40px",
          alignItems: "center",
          flex: "1 1 300px",
        }}
      >
        <div
          style={{
            width: "700px",
            lineHeight: "25px",
            // display:'flex',
          }}
        >
          <p>Become a Fitness Blender</p>
          <h1>Content Creator</h1>
          <p>
            We are working to expand the depth and diversity of the content we
            offer. From Workout Videos to Healthy Living articles and recipes,
            we want to be able to provide users with as much reliable health and
            fitness content as possible. If you're an experienced professional
            in the areas we have listed below, we'd like to hear from you.
          </p>
        </div>
        <div className="contentImgDiv">
          <img
            className="contentImg"
            src="https://cloudfront.fitnessblender.com/assets/img/careers/kandd.png
          "
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          width: "80vw",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h1>Open Content Roles</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <div className="career4Div">
            <div>
              <img
                src="https://i.imgur.com/ZsxUYKq.png
            "
                alt=""
              />
            </div>
            <div>
              <h3>Certified Personal Trainer</h3>
              <p>
                Join our CPTs in creating workout videos to enhance our overall
                library, and diversity of workout options.
              </p>
            </div>
          </div>
          <div className="career4Div">
            <div>
              <img
                src="https://i.imgur.com/ZsxUYKq.png
            "
                alt=""
              />
            </div>
            <div>
              <h3>Yoga Instructor</h3>
              <p>
                Are you a fitness professional? Join the content team to bring
                new types of fitness videos to our growing library and audience.
              </p>
            </div>
          </div>
          <div className="career4Div">
            <div>
              <img
                src="https://i.imgur.com/LluTuA1.png
            "
                alt=""
              />
            </div>
            <div>
              <h3>Professional Recipe Developer</h3>
              <p>
                {" "}
                Join our content team, working closely with RDNs/LDNs to create
                easy-to-understand, easy-to-use healthy recipe content.
              </p>
            </div>
          </div>
          <div className="career4Div">
            <div>
              <img
                src="https://i.imgur.com/LluTuA1.png
            "
                alt=""
              />
            </div>
            <div>
              <h3>Registered Dietitian Nutritionist</h3>
              <p>
                Join the content team to help create easy-to-understand
                nutrition and healthy eating content, including recipe-based
                meal plans.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Careers;
