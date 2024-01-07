import styled from "styled-components";
import Cards from "./Cards";
import SmallCards from "./SmallCards";

const Container = styled.div`
  width: 1120px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const BannerGrid = () => {
  return (
    <Container>
      <Cards />
      <Flex>
        <SmallCards />
        <SmallCards />
      </Flex>
    </Container>
  );
};

export default BannerGrid;
