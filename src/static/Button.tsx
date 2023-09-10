// import styled from "styled-components"

import styled from "styled-components"

const Button = () => {
    return(
        <div>
           <Container>
            <Text>Hire Creative</Text>
           </Container>
        </div>
    )
}
export default Button 
const Text = styled.div`
margin-bottom: 5px;
font-weight: 600;
`
const Container = styled.div`
    padding: 9px 12px;
    background-color: #000;
    color: #fff;
    border-radius: 30px;
    transition: all 360ms;

    &:hover {
        cursor: pointer;
        transform:  scale(1.03);
        background-color: silver;
    }

`