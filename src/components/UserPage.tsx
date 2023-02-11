import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import styled, { createGlobalStyle } from "styled-components";
import AllMoviesIcon from "./AllMoviesIcon";
import IconBookmark from "./IconBookmark";
import IconMovies from "./IconMovies";
import IconSeries from "./IconSeries";
import { items } from "./ItemsArray";
import Logo from "./Logo";
import RecomendationComponent from "./RecomendationComponent";
import { ThemeData } from "./ThemeComponent";
import TrendingComponent from "./TrendingComponent";
import { BookMarkEmptyIcon } from "./BookMarkEmptyIcon";

export const MyContext = createContext<any>("");

export default function UserPage() {
  const [isActiveAll, setIsActiveAll] = useState<boolean>(false);
  const [isActiveMovie, setIsActiveMovie] = useState<boolean>(false);
  const [isActiveTV, setIsActiveTV] = useState<boolean>(false);
  const [isActiveBookmark, setIsActiveBookmark] = useState<boolean>(false);
  const [isColorA, setIsColorA] = useState<boolean>(true);
  const [isColorM, setIsColorM] = useState<boolean>(false);
  const [isColorT, setIsColorT] = useState<boolean>(false);
  const [isColorB, setIsColorB] = useState<boolean>(false);
  const [stateArray, setStateArray] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [blurred, setBlurred] = useState(false);



  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const searchedObj = items.filter((item) =>
    // item.title.includes(getValues("searchInput"))
    item.title.toLowerCase().includes(getValues("searchInput"))
  );

  const onSubmit = () => {
    console.log("watch: ", watch("searchInput"));
    console.log("values: ", getValues("searchInput"));

    // if(getValues("searchInput") == ""){
    //   window.location.reload();
    // }

    console.log(searchedObj);
    setIsSearched(true);
  };
const handleBlur = () => {
  if(!blurred){
    setBlurred(true)
    window.location.reload();
  }
  
}
  return (
    <MyContext.Provider
      value={{
        isActiveAll,
        setIsActiveAll,
        isActiveMovie,
        setIsActiveMovie,
        isActiveTV,
        setIsActiveTV,
        isActiveBookmark,
        setIsActiveBookmark,
        isColorA,
        setIsColorA,
        isColorM,
        setIsColorM,
        isColorT,
        setIsColorT,
        isColorB,
        setIsColorB,
        stateArray,
        setStateArray,
        
      }}
    >
      <GlobalStyles />
      <MainPage>
        <HeaderDiv>
          <Logo />
          <ChooseBar>
            <li>
              <ImgButton
              
                onClick={() => {
                 
                  setIsColorA(true);
                  setIsColorM(false);
                  setIsColorT(false);
                  setIsColorB(false);
                }}
              >
                <AllMoviesIcon />
              </ImgButton>
            </li>
            <li>
              <ImgButton
                onClick={() => {
                 
                  setIsColorA(false);
                  setIsColorM(true);
                  setIsColorT(false);
                  setIsColorB(false);
                }}
              >
                <IconMovies />
              </ImgButton>
            </li>
            <li>
              <ImgButton
                onClick={() => {
                 
                  setIsColorA(false);
                  setIsColorM(false);
                  setIsColorT(true);
                  setIsColorB(false);
                }}
              >
                <IconSeries />
              </ImgButton>
            </li>
            <li>
              <ImgButton
                onClick={() => {
                  setIsColorA(false);
                  setIsColorM(false);
                  setIsColorT(false);
                  setIsColorB(true);
                
                }}
              >
                <IconBookmark />
              </ImgButton>
            </li>
          </ChooseBar>
          <Profile>
            <img
              className="avatar"
              src="/public/assets/image-avatar.png"
              alt=""
            />
          </Profile>
        </HeaderDiv>
        <InputTrendingRecomendation>
          <InputDiv>
            <img src="/public/assets/icon-search.svg" alt="" />
            <form 
           onBlur={handleBlur}
           onChange={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder="Search for movies or TV series"
                {...register("searchInput")}
              />
            </form>
          </InputDiv>
          <div style={{ display: isSearched ? "none" : "block" }}>
            <TrendingComponent />
            <RecomendationComponent />
          </div>
          <FindedH1 style={{ display: !isSearched ? "none" : "flex" }}>Found {searchedObj.length} results for ‘{watch("searchInput")}’</FindedH1> 
          <FoundObj style={{ display: !isSearched ? "none" : "flex" }}>
          
             
            {searchedObj.map((item, index) => {
              return (
                <FoundObjMovie key={index}>
                  
                  <RecomendedMoive
                    img={`url(${searchedObj[index].thumbnail.regular.small})`}
                  >
                    <BookMarkButton>
                      <BookMarkEmptyIcon fill={"none"} />
                    </BookMarkButton>
                  </RecomendedMoive>
                  <TextDiv>
                    <p>{searchedObj[index].year}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <img src="" alt="" />
                    <p>{searchedObj[index].category}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <p>{searchedObj[index].rating}</p>
                  </TextDiv>
                  <TextH1>{searchedObj[index].title}</TextH1>
                </FoundObjMovie>
                
              );
            })}
          </FoundObj>
        </InputTrendingRecomendation>
      </MainPage>
    </MyContext.Provider>
  );
}

const FindedH1 = styled.h1`
 margin-top: 24px;
font-weight: 300;
font-size: 20px;
line-height: 25px;
letter-spacing: -0.3125px;
color: #FFFFFF;
margin-left: 16px;

@media (width > 767px) {
  font-size: 32px;
line-height: 40px;
letter-spacing: -0.5px;
margin-left: 25px;
margin-top: 34px;
}

`
const FoundObj = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  /* padding-top: 24px; */
  @media (width > 767px){
    padding-left: 25px;
   
    justify-content:flex-start;
    
  }
`;
const FoundObjMovie = styled.div`
  width: 47.73%;
 

  @media (width > 767px) {
     width: 28.945%;
     margin-right: 29px;
    
    
  }
  @media (width > 1439px){
    width: 22.3%;
    
  }
`;

const ImgButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (width > 767px) {
    width: 20px;
  }
`;
const MainPage = styled.div`
  display: block;

  @media (Width > 1439px){
    display: flex;
  }
`;
const InputTrendingRecomendation = styled.div`
  display: block;
  @media (width > 1439px){
    width: 100%;
    padding-left: 11px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${ThemeData.colors.blue};
  align-items: center;
  @media (width > 767px) {
    border-radius: 10px;
    padding: 21px 16px 19px 24px;
    margin-right: 24px;
    margin-left: 25px;
  }
   @media (Width > 1439px){
    margin-left: 0px;
    flex-direction: column;
    padding: 35.41px 28px 32px 28px;
    margin-bottom: 32px;
    height: calc(100vh - 64px);
    width: 6.66%;
    justify-content: space-between;
    margin-right: 0px;
    border-radius: 20px;
    
   }
`;
const ChooseBar = styled.ul`
  width: calc(100% - 200px);
  display: flex;
  justify-content: space-between;
  @media (width > 767px) {
    width: calc(100% - 442px);
  }
  @media (width > 1439px){
    flex-direction:column;
    width: 100%;
    justify-content: space-between;
    
    transform: translateY(-54%);
    align-items: center;

    
  }
`;
const Profile = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  @media (width > 767px) {
    width: 32px;
    height: 32px;
  }
  
`;
const InputDiv = styled.div`
  margin-left: 19px;
  margin-right: 19px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  @media (width > 767px) {
    margin-top: 34px;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  margin-left: 16px;
  background-color: transparent;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: ${ThemeData.colors.white};
  width: 100%;
  @media (width > 767px) {
    margin-left: 24px;
  }
`;

const TextH1 = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  margin-top: 4px;
   @media (width > 767px) {
    font-weight: 500;
font-size: 18px;
line-height: 23px;
 margin-top: 5px;
  }
`;
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
   @media (width > 767px){
  font-size: 13px;
line-height: 16px;
margin-top: 10px;


  }

`;

const RecomendedMoive = styled.div<any>`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 16px;
  background-image: ${(props) => props.img};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-radius: 8px;
  padding: 8px 8px 16px 16px;
  height: 110px;
  @media (width > 767px){
    height: 140px;
  }
  @media (width > 1439px){
    height: 174px;
  }
`;

const BookMarkButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ThemeData.colors.darkBlue};
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const Oval = styled.img`
  margin-left: 8px;
  margin-right: 8px;
`;

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif;
  box-sizing: border-box;
  scrollbar-color: transparent;
  ::-webkit-scrollbar {
  background-color: transparent;
  
}
 

  
  
}
:root {
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
}
body {
  background-color: ${ThemeData.colors.darkBlue};
  min-width: 320px;
  min-height: 100vh;
  color: ${ThemeData.colors.white};
  padding: 0 0px 5px 0px;
  
  @media (width > 767px) {
    padding: 23px 0px 0px 0px;
  }
  @media (width > 1439px) {
    padding: 32px 0px 0 32px
  }
}
li{
  list-style: none;
  @media (width > 1439px) {
    margin-bottom: 40px;
  }
}

.avatar{
  border-radius: 50%;
  border: 2px solid white;
  @media (width> 1439px){
    width: 40px;
    height: 40px;
  }
}

`;
