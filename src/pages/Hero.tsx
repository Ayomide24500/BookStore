// import { relative } from 'path';
import React,{ useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import image from "../Assets/hero.png"
// import image1 from "../Assets/about-us.png"

function App() {
  const [width, setWidth] = useState<number>(0);
  const [color, setColor] = useState('green');
  const [colors, setColors] = useState('black')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColors('#e7e0f2');
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColor('blue');
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  // useEffect runs after the component renders
  useEffect(() => {
    console.log('useEffect - Component has rendered');
  });

  // useLayoutEffect runs synchronously after all DOM mutations
  useLayoutEffect(() => {
    console.log('useLayoutEffect - DOM layout is updated');
    const newWidth = document.getElementById('box')?.offsetWidth;
    if (newWidth !== undefined) {
      setWidth(newWidth);
    }
  }, []);

  // Update the width every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newWidth = Math.floor(Math.random() * 1700) + 100; // Generate a random width between 100 and 300
      setWidth(newWidth);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <div style={{backgroundColor: "#e7e0f2", height:"100vh", width: "100%", position: "relative"}}>
      <Container  style={{ width: `${width}px`, height: '95vh', background: 'blue' }}>
      <p style={{fontSize: "25px", fontWeight: "bold", textAlign: "center", paddingBottom: "24px"}}>Box width: {width}px</p>
      <General>
         <GeneralWrapp style={{ backgroundColor: color}}>
         <AllNav>
            <AllNavWrapper>
              <NavLogo>
                Company
              </NavLogo>
              <Navigation>
                <Nav style={{ color: colors}}>Services</Nav>
                <Nav style={{ color: colors}}>About</Nav>
                <Nav style={{ color: colors}}>Contact</Nav>
                <Nav style={{ color: colors}}>Support</Nav>
                <Nav style={{ color: colors}}>Features</Nav>
                <Login>Login</Login>
              </Navigation>
            </AllNavWrapper>
          </AllNav>
          <Wrapper>
        <Rightpage>
          <H1 style={{ color: colors}}>Great Solution to Design<br /> Your Website</H1>
          <P style={{ color: colors}}>Here is the opportunity to build-up your Website. Graphical<br /> componenets structure advices, plan and many<br /> more. check out our Services and make your Company<br /> outstanding</P>
          <SignUp style={{ color: colors, backgroundColor: color}}>Sign up</SignUp>  <SignUp style={{ color: colors, backgroundColor: color}}>Watch Demo</SignUp>
        </Rightpage>
        <LeftPage>
           {/* <Image src={image} style={{backgroundImage: `url${images}`}} /> */}
           <Image src={image}/>
        </LeftPage>
        </Wrapper> 
        </GeneralWrapp>
        
      </General>
        </Container>
      </div>
  )
  }
export default App 
const SignUp = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 15px;
  border: 2px solid White;
  margin-top: 30px;
  margin-left: 40px;
  cursor: pointer;
`
const P = styled.div`
padding-left: 40px;
font-size: 18px;
padding-top: 50px;
`
const H1 = styled.div`
padding-left: 40px;
font-size: 35px;
font-weight: bold;
`
const Wrapper = styled.div`
width: 100%;
height: 80vh;
margin-left: 70px;
margin-top: 20px;
display:flex;
align-items: center;
justify-content: space-around;
border-radius: 30px;
`
const Rightpage = styled.div`
width: 35%;
height: 400px;
// background-color: yellow;
margin-top: 60px;
`
const LeftPage = styled.div`
width: 30%;
height: 400px;
// background-color: pink;
`
const Image = styled.img`
width: 500px;
height: 480px;
position:relative;
bottom: 60px;
right: 20px;
`
const Login = styled.div`
  padding: 10px 20px;
  font-size: 20px;
  color: black;
  border: 1px solid black;
  border-radius: 15px;
  margin-left: 80px; 
`;
const Nav = styled.div`
  gap: 50px;
`;
const Navigation = styled.div`
  height: 80px;
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;
const NavLogo = styled.div`
  height: 80px;
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 27px;
  font-weight: bold;
  margin-left: 70px;
`;
const AllNavWrapper = styled.div`
  height: 90px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AllNav = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GeneralWrapp = styled.div`
  height: 70vh;
  width: 70%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lawngreen;
  position: absolute;
  top: 155px;
  left: 330px;
  position: fixed;

  @media screen and (max-width: 1109px) {
        flex-wrap: wrap;
        flex-direction: column;
}
`;

const General = styled.div`
  height: 86vh;
  width: 100%;
  background: linear-gradient(90deg, lightblue, white);
  position: absolute;
  left: 90px;
  top: 60px;
`;
const Container = styled.div`
position: absolute;
left: 70px;
top: 20px;

@media screen and (min-width: 1109px) {
        display: flex;
        flex-direction: column;
        align-items: center;
}
`