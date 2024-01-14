import { FaArrowRightLong } from 'react-icons/fa6'
import styled from 'styled-components'
const Buton = styled.button`
background-color: transparent;
border: none;
outline: none;
border-bottom: 1px solid black;
display: flex;
align-items: center;
gap: 5px;
color:black;
padding-bottom: 4px;
margin-top: 5px;
font-size: 15px;
`
const ShopNow = () => {
  return (
    <Buton>Shop Now <FaArrowRightLong/>  </Buton>
  )
}

export default ShopNow