import styled from "styled-components"
import Toaster from "../assets/Paste image.png"

import ShopNow from "./ShopNow"

const Container = styled.div`
position: relative;
max-width: 548px;
max-height: 319px;

`
const Content = styled.div`
position: absolute;
bottom: 30px;
left: 30px;

`
const Image = styled.img`
width: 100%;
object-fit: contain;
  
`


const SmallCards = () => {
  return (
    <Container>
      <Image src={Toaster}/>
        <Content>
          <h2>Living Room</h2>
          <ShopNow/>
          


        </Content>

    </Container>
  )
}

export default SmallCards