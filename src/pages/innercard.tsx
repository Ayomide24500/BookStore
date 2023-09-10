import { styled } from "styled-components";
import { BsEyeFill } from "react-icons/bs";

interface iCards {
  buttonText: string;
  hoverText: string;
  DPName: string;
  DP: string;
  View: number;
  Img: string;
  bcc: string;
}

const InnerCard: React.FC<iCards> = ({
  Img,
  buttonText,
  hoverText,
  DPName,
  DP,
  View,
  bcc,
}) => {
  return (
    <div>
      <Card>
        <Info>
          <Image src={Img} />
          <Holder>
            <CategoryHolder>
              <Category>{buttonText}</Category>
            </CategoryHolder>
            <HoverStuff>
              <Text>{hoverText}</Text>
            </HoverStuff>
          </Holder>
        </Info>
        <BottomHolder>
          <div>
            <Dp bcc={bcc}>{DP}</Dp>
            <Name>{DPName}</Name>
          </div>
          <Views>
            <BsEyeFill />
            {View}
          </Views>
        </BottomHolder>
      </Card>
    </div>
  );
};

export default InnerCard;

const BottomHolder = styled.div`
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  div {
    display: flex;
    align-items: center;
  }
`;

const Views = styled.div`
  color: blue;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  color: blue;
  font-size: 20px;
  margin-left: 10px;
  font-weight: 600;
`;

const Dp = styled.div<{ bcc: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ bcc }) => bcc};
  color: white;
  display: flex;
  align-items: center;
  font-size: 25px;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 20px;
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const HoverStuff = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.2),
    transparent
  );
  display: flex;
  height: 190px;
  align-items: end;
  margin-top: 30px;
  opacity: 0;
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const CategoryHolder = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`;

const Category = styled.div`
  padding: 23px 13px;
  border-radius: 30px;
  background-color: #302f3eff;
  color: white;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 0px 10px;
`;

const Holder = styled.div`
  width: 100%;
  height: 100px;
  top: 0;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 340px;
  height: 250px;
  background-color: red;
  position: relative;
`;

const Card = styled.div`
  background-color: white;
  //   width: 340px;
  //   height: 300px;
`;