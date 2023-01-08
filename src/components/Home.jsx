import React from "react";
import HeroImage from "../assets/heroImage.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          

          <Box>
         
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 90,
              strings: [
                
                "Hi, I'm Srajan!",
                "A Web Devloper",

              ]
            }}
              

          >

          </Typewriter>

          </Box>

          <p className="text-gray-500 py-4 max-w-md">
            A pre-final year BE student, who is passionate about Web technologies. Looking for roles where I can challenge my skills and grow both personally and professionally.
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <Container>
          <img
            src={HeroImage}
            alt="my profile"
             className="mx-auto w-2/3"
            width="5" height="6"
          />
        </Container>
      </div>
    </div>
  );
};

const Box= styled.div`

    color: white;
    font-size: 3.25rem;
    line-height: 110%;
    font-weight: bold;
    max-width: 100%;
    


`

const Container = styled.div`
    
`


export default Home;
