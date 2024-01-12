import styled from "styled-components";
import Image from "../assets/Login.png";
import { Link } from "react-router-dom";



const Container = styled.div`
  display: flex;
  margin:  auto;
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

const SignInLink = styled(Link)`
  font-weight: 600;
  color: #38cb89;
  text-decoration: none;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const SignUpContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
 width: 350px;
  

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
  font-weight: 600;
  color: black;
  text-decoration: none;
`;

const Label = styled.label`
  font-size: 11px;
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
  justify-content: center;
  gap: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpImage = styled.img`
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 430px;
    flex-shrink: 0;
  }
`;

const SignUp = () => {
  return (
    
      <Container>
        <SignUpImage src={Image} />

        <SignUpContainer>
          <h2>Sign up</h2>
          <p>
            Already have an account ?
            <SignInLink to="/signin">Sign in</SignInLink>
          </p>
          <Form action="">
            <Input type="text" placeholder="Your name" />
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            <CheckBox>
              <input type="checkbox" />
              <Label>
                I agree with <Links to="/privacy&policy"> Privacy Policy </Links>
                 and 
                <Links to="/term&conditions"> Terms of Use </Links>
              </Label>
            </CheckBox>
            <Button>Sign Up</Button>
          </Form>
        </SignUpContainer>
      </Container>
    
  );
};

export default SignUp;
