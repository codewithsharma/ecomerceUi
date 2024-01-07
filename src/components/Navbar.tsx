import { FaBagShopping, FaUser } from "react-icons/fa6"
import { IoMdSearch } from "react-icons/io"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
max-width: 1120px;
margin: auto;
height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h3`
    font-size: 20px;
`
const NavMenus = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`
const Menu = styled(Link)`
 text-decoration: none;
 color: #6C7275;
 &:active{
    color: black;

 }
 &:nth-child(1){
    color: black;
 }
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`
const SearchIcon = styled(IoMdSearch)`
font-size:20px;
    
`
const CartIcon = styled(FaBagShopping)`
    font-size:20px;
`
const UserIcon = styled(FaUser)`
    font-size:20px;
`
const CartItemQty = styled.span`
    font-size:17px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    color: white;
    text-align: center;
    background-color: black;
`
const CartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:3px ;
`
const Navbar = () => {
   const CartItmes = 2
    const navMenuiItem = [{to:"/", title:"Home"}, {to:"/", title:"Shop"}, {to:"/", title:"Product"}, {to:"/", title:"Contact Us"}, ]
  return (
    
    <Container>
        <Logo>3legant.</Logo>
<NavMenus>
    { navMenuiItem.map((data)=>{
        return(
            <Menu to={data.to} >{data.title}</Menu>
        )
    })

    }
</NavMenus>
<Icons>
    <SearchIcon/>
    <UserIcon/>
    <CartDiv>
    <CartIcon/>
    <CartItemQty>{CartItmes}</CartItemQty>

    </CartDiv>
    
    

</Icons>
    </Container>
  )
}

export default Navbar