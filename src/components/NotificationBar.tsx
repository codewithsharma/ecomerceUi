import styled from "styled-components"
import {IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import TicketPercent from "../assets/ticket-percent.png"
const Container = styled.div`
background-color: #F3F5F7;
padding: 5px ;
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 100%;
`
const Percentage= styled.img`
    width: 22px;
`
const CloseBtn = styled(IoMdClose)`
position: absolute;
top: 10px;
right: 20px;
transition: 0.4s;
&:hover{
   color :red ;
   transform: scale(1.4);
   font-weight: 700;
}

`
const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 7px;
    
`
const Links = styled.button`

background-color: transparent;
border: none;
outline: none;
border-bottom: 1px solid #377DFF;
display: flex;
align-items: center;
gap: 5px;
color: #377DFF;
padding-bottom: 4px;
margin-top: 5px;
font-size: 15px;

`

const NotificationBar = () => {
  return (
    <Container>
<Content>
    <Percentage src={TicketPercent}  />
    <p>30% off storewide — Limited time! </p> <Links>Shop Now <FaArrowRightLong/> </Links> 
</Content>
<CloseBtn/>
    </Container>
  )
}

export default NotificationBar