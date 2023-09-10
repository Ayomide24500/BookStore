import React from "react";
import styled from "styled-components"
import video from "../Assets/video1.mp4"
import Globalbutton from '../FileCommon/Buttonprops'
import {BsSearch} from "react-icons/bs"
// import images6 from "../Assets/up.png"

const Hero = () => {
    return(
        <div>
         <Container>
                <Video src={video}  muted loop autoPlay playsInline />
            <Cover>
            <TextContent>
          <General>
            <CardSection>
              <CardRoller>
                <Globalbutton text="Romance"/>
                <Globalbutton text="Comedy"/>
                <Globalbutton text="Action"/>
                <Globalbutton text="Fantasy"/>
                <Globalbutton text="Crime"/>
                <Globalbutton text="Adventure"/>
                <Globalbutton text="Horror"/>
                <Globalbutton text="Humor"/>
                <Globalbutton text="Fiction"/>
                <Globalbutton text="War"/>
                <Globalbutton text="Tales"/>
                <Globalbutton text="Folklore"/>
                <Globalbutton text="Fairy"/>
                <Globalbutton text="Satire"/>
                <Globalbutton text="Classics"/>
                <Globalbutton text="Youth"/>
                <Globalbutton text="Opera"/>
                <Globalbutton text="Thrillers"/>
                <Globalbutton text="Mystery"/>
                <Globalbutton text="Literature"/>
                <Globalbutton text="Essay"/>
                <Globalbutton text="Live"/>
                <Globalbutton text="Plays"/>
                <Globalbutton text="Gory"/>
                <Globalbutton text="Myth"/>
              </CardRoller>
            </CardSection>
            <TextSection>
              <Outline>
                <Explore>
                Explore the world’s leading Books
                <br /> and Authors 
                </Explore>
                <Millions>Millions of designers and agencies around the world showcase their portfolio work <br />
                 on Dribbble - the home to the world’s best design and creative professionals.
                </Millions>
                <Search>
                  <BsSearch style={{marginLeft: "20px"}}/>
                  <Input type="text" placeholder="Search By Author Name" 
                  />
                </Search>
              </Outline>
            </TextSection>
          </General>
        </TextContent>
            </Cover>
         </Container>
        </div>
    )
}
export default Hero
const Input = styled.input`
 font-size: 18px;
 outline: none;
 border: none;
 margin-left: 15px;

 @media screen and (max-width: 1109){
    display: none;
 }
`;

const Search = styled.div`
  height: 50px;
  width: 55%;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 125px;
  margin-top: 20px;

  @media screen and (max-width: 1109){
    margin-left: 60px;
}
`;
const Millions = styled.div`
  text-align: center;
  font-size: 15px;
  color: white;
  margin-top: 20px;
`;
const Explore = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;
const Outline = styled.div`
  height: 100%;
  width: 40%;

  @media screen and (max-width: 1109px) {
   font-size: 19px;
   width: 80%;
   flex-direction: column; 

  }
`;
const TextSection = styled.div`
  height: 63%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardRoller = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  scroll-behavior: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const CardSection = styled.div`
  height: 37%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const General = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContent = styled.div`
  height: 75vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
width: 100%;
height: 600px;
object-fit: cover;
position: absolute;
`
const Cover = styled.div`
    width: 100%;
    height: 600px;
    background: transparent;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.8470238437171744) 0%, rgba(43,39,39,0.5977241238292192) 100%, rgba(125,116,116,0.5837185215883228) 100%);
    position: relative;
    top: 0px;
`
const Container = styled.div`
height: 100vh;
width: 100%;
// background-color: orange;
position: relative; 
bottom: 70px;
display: flex;
justify-content: center;
align-items: center;
`
