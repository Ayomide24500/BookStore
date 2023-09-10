import {styled} from "styled-components"
const Upload = () => {
    return(
        <div>
          <Container>
            <Wrapper>
                <ImageHold>
                    <Image/ >
                </ImageHold>
                </Wrapper>
          </Container>
        </div>
    )
}
export default Upload
const ImageHold = styled.div`
background-color: pink;
width: 200px;
height: 200px;
`
const Image = styled.img`
width: 100%;

`
const Wrapper = styled.div`
width: 50%;
padding: 20px 20px 20px 20px;
background-color: cyan;
`
const Container = styled.div`
background-color: gray;
height: 600px;
width: 100vw;
display: flex;
justify-content: center;
`