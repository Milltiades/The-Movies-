import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Logo from "./Logo";
import { ThemeData } from "./ThemeComponent";

export default function LoginPage() {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = () => {
    console.log("submiteed");
    console.log('password' , watch("password"));
    console.log('repeat' , watch("repeat"));
    console.log('values :', getValues('email'));
    console.log('password :', getValues('repeat'));
    

    localStorage.setItem("email", getValues('email'));
    localStorage.setItem("password", getValues('repeat'));
    if(getValues('password') === getValues('repeat')){
      navigate('/')
    }
  };

  const navigate = useNavigate();
  
  const goToSignUp = () => {
    navigate('/')
  }

 
  return (
    
    <MainLoginDiv >
      <GlobalStyles/>
      <Logo />
      <LoginDiv>
        <LoginH1>Sign Up</LoginH1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <InputEmail>
          <InputE
            
            type="email"
            placeholder="Email address"
            {...register("email", {
              required: { message: "Can’t be empty", value: true }
            })}
          />
          <ErrorPassword>
              {errors.email ? errors.email.message : null}
            </ErrorPassword>
         
          </InputEmail>
          <UnderLine
            backgroundColor={
              errors.email
                ? ThemeData.colors.red
                : ThemeData.colors.lightBlue
            }
          ></UnderLine>

          <InputPassword>
            <InputP
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { message: "Can’t be empty", value: true }
              })}
            />

            <ErrorPassword>
              {errors.password ? errors.password.message : null}
            </ErrorPassword>
          </InputPassword>
          <UnderLine
            backgroundColor={
              errors.password
                ? ThemeData.colors.red
                : ThemeData.colors.lightBlue
            }
          ></UnderLine>

          <InputPassword>
            <InputP
              type="password"
              placeholder="Repeat Password"
              {...register("repeat" , {required:true,  validate: (e) => {
                if(watch('password') !== e) {
                  return "Password do not match"
                }
              }
              })} 
           
            />

            <ErrorPasswordRepeat>
            {errors.repeat ? errors.repeat.message : null}
            </ErrorPasswordRepeat>
          </InputPassword>
          <UnderLine
            backgroundColor={ThemeData.colors.lightBlue}
          ></UnderLine>
          
          <ButtonLogin type="submit">Create an account</ButtonLogin>
        </form>
        <DivP>
          <P1>Don't have an account?</P1>
          <SignButton onClick={ goToSignUp}>
            <P2>Sign Up</P2>
          </SignButton>
        </DivP>
      </LoginDiv>
    </MainLoginDiv>
  );
}

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
`
const MainLoginDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
const LoginDiv = styled.div`
  margin-top: 58.4px;
  width: 100%;
  padding: 24px 24px 32px 24px;
  background-color: ${ThemeData.colors.blue};
  border-radius: 10px;
  @media (width > 767px) {
    padding: 32px;
    border-radius: 20px;
    margin-top: 72.4px;
  }
`;
const LoginH1 = styled.p`
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
`;

const InputE = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  padding-bottom: 17px;
  margin-top: 24px;
  color: ${ThemeData.colors.white};
  &:focus {
    outline: none;
  }
`;
const InputP = styled(InputE)`
  margin-top: 24px;
`;

const InputPassword = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 15px;
  padding-right: 20px;
`;

const InputEmail = styled(InputPassword)`
margin-top: 16px;
`


const ErrorPassword = styled.p<any>`
  font-weight: 300;
  font-size: 13px;
  margin-top: 24px;

  color: ${ThemeData.colors.red};

  width: 150px;
  text-align: right;

 
`;
const ErrorPasswordRepeat = styled(ErrorPassword)`
  width: 320px;
`

const UnderLine = styled.div<any>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.backgroundColor};
`;

const ButtonLogin = styled.button`
  width: 100%;
  padding: 14px 0 15px 0;
  background-color: ${ThemeData.colors.red};
  border-radius: 6px;
  border: none;
  color: ${ThemeData.colors.white};
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  margin-top: 54px;
  cursor: pointer;
`;

const DivP = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P1 = styled.p`
  color: ${ThemeData.colors.white};
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
`;
const P2 = styled(P1)`
  color: ${ThemeData.colors.red};
  &:hover {
    text-decoration: underline;
  }
`;

const SignButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  margin-left: 9px;
`;
