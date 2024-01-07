import styled from "styled-components";

const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  padding: 30px 0;
  width: 70%;
  h1 {
    font-weight: 500;
    font-size: 72px;
  }
  span {
    color: grey;
  }
`;
const Right = styled.div`
  padding: 0 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: grey;
  strong {
    color: black;
  }
`;
const SimplyUnique = () => {
  return (
    <Container>
      <Left>
        <h1>
          Simply Unique <span>/</span> <br />
          Simply Better <span>.</span>
        </h1>
      </Left>
      <Right>
        <strong>3legant</strong> is a gift & decorations store based in HCMC,
        Vietnam. Est since 2019.
      </Right>
    </Container>
  );
};

export default SimplyUnique;
