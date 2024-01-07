import styled from "styled-components";
import Chair from "../assets/Image Placeholder2.png";

import ShopNow from "./ShopNow";

const Container = styled.div`
  position: relative;
  max-width: 548px;
  max-height: 664px;
`;
const Content = styled.div`
  position: absolute;
  top: 48px;
  left: 48px;
`;
const Image = styled.img`
  width: 100%;
`;

const Cards = () => {
  return (
    <Container>
      <Image src={Chair} />
      <Content>
        <h2>Living Room</h2>
        <ShopNow />
      </Content>
    </Container>
  );
};

export default Cards;
