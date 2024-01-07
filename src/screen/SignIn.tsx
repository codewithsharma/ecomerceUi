import styled from "styled-components";
import Image from "../assets/Login.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin:auto;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    margin: auto;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;

const SignUpLink = styled(Link)`
  font-weight: 600;
  color: #38cb89;
  text-decoration: none;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  padding: 8px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  padding: 20px;
  margin: 20px;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
    font-weight: 550;
  }

  p {
    font-size: 13px;
    color: gray;
    margin-bottom: 10px;
  }
`;

const Links = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  color: black;
  text-decoration: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: gray;
`;

const Input = styled.input`
  padding: 5px 10px;
  outline: none;
  margin: 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #dfdfdf;
  color: #141718;
`;

const CheckBox = styled.div`
  margin: 10px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignInImage = styled.img`
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 430px;
    flex-shrink: 0;
  }
`;

const SignIn = () => {
  return (
    <Container>
      <SignInImage src={Image} />

      <SignInContainer>
        <h2>Sign In</h2>
        <p>
          Don't have an account yet ?
          <SignUpLink to="/signup"> Sign up</SignUpLink>
        </p>
        <Form action="">
          <Input type="email" placeholder="Your username or email address" />
          <Input type="password" placeholder="Password" />
          <CheckBox>
            <Label>
              <input type="checkbox" />
              Remember me
            </Label>
            <Links to="/">Forgot Password ? </Links>
          </CheckBox>
          <Button>Sign in</Button>
        </Form>
      </SignInContainer>
    </Container>
  );
};

export default SignIn;
