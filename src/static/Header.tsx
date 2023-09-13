// import react from "react"
import {styled} from "styled-components"
import image from "../Assets/icon (2).jpg"
import {BsSearch} from"react-icons/bs"
import { NavLink } from "react-router-dom"


const Header = () => {
    return (
      <div>
        <Container>
            <Image>
                <Logo src={image}/>
                <Text>BookStore</Text>
            </Image>

            <End>
                <Search>
                    <BsSearch />
                </Search>
                <NavLink to="upload-book" style={{textDecoration: "none"}}>
                <Button>Upload Books</Button>
                </NavLink>
            </End>
        </Container>
      </div>
    )
  }
  export default Header
  const Text = styled.div`
  font-size: 26px;
  font-weight: bold;
  padding-right: 20px;
  `
  const Button = styled.button`
  width: 180px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink; 
  margin: 10px;
  cursor: pointer;
  border: none;
  font-size: 19px;
  color: #fff;
  `

  const Search = styled.div`
  font-size: 20px;
  margin: 10px;
  `

  const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `

  const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  `
  const Image = styled.div`
  height: 65px;
  width: 220px;
//   background-color: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  `
  const Container = styled.div`
  // background-color: grey;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
  `