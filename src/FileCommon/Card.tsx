import { styled } from "styled-components";
import pic1 from "../Assets/bg1.png"
import pic2 from "../Assets/bg2.png"
import pic3 from "../Assets/bg3.png"
import InnerCard from "../pages/innercard";
// import pic4 from "../Assets/bg4.png"
// import pic5 from "../Assets/bg5.png"
// import pic6 from "../Assets/bg6.png"
const Card = () => {
  return (
    <div>
      <Container>
        <Row>
          <InnerCard
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic1}
            bcc="orange"
          />
          <InnerCard
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic3}
            bcc="blue"
          />
          <InnerCard
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic2}
            bcc="blue"
          />

          <InnerCard
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic1}
            bcc="orange"
          />
          <InnerCard
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic3}
            bcc="blue"
          />
          <InnerCard
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic2}
            bcc="blue"
          />
          <InnerCard
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic1}
            bcc="orange"
          />
          <InnerCard
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic3}
            bcc="blue"
          />
          <InnerCard
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic2}
            bcc="blue"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Card;

const Row = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 50px;
  flex-wrap:wrap;
`;

const Container = styled.div`
  height: 150vh;
//   background-color: pink;
  width: 100%;

`;