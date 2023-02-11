import React, { useContext, useState } from "react";
import styled, { createGlobalStyle, ThemeConsumer } from "styled-components";
import { BookMarkEmptyIcon } from "./BookMarkEmptyIcon";
import { items } from "./ItemsArray";
import { ThemeData } from "./ThemeComponent";
import { MyContext } from "./UserPage";

export default function TrendingComponent() {
  const trendingItems = items.filter((x) => x.isTrending == true);
  // console.log(trendingItems)
  const context = useContext(MyContext);

  return (
    <TrendingDiv style={{ display: context.isColorA ? "block" : "none" }}>
      <TrendingH1>Trending</TrendingH1>

      <TrendingParent>
        {trendingItems.map((item, index) => {
          return (
            <Trending1
              img={`url(${window.innerWidth < 768 ? trendingItems[index].thumbnail.trending?.small : trendingItems[index].thumbnail.trending?.large})`}
            >
              <ButtonDiv>
                <BookMarkButton>
                  <BookMarkEmptyIcon fill={"none"} />
                </BookMarkButton>
              </ButtonDiv>
              <TextDiv>
                <TextMovieType>
                  <p>{trendingItems[index].year}</p>{" "}
                  <Oval src="/public/assets/Oval.svg" alt="" />
                  <MoiveP>{trendingItems[index].category}</MoiveP>
                  <Oval src="/public/assets/Oval.svg" alt="" />
                  <p>{trendingItems[index].rating}</p>
                </TextMovieType>

                <MovieH1>{trendingItems[index].title}</MovieH1>
              </TextDiv>
            </Trending1>
          );
        })}
      </TrendingParent>
    </TrendingDiv>
  );
}

const TrendingParent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 348%;
  @media (width > 767px) {
  }
  @media (width > 1439px) {
    width: 199.2%;
  }
`;

const Trending1 = styled.div<any>`
  margin-top: 41px;
  background-image: ${(props) => props.img};
  background-size: cover;
  background-repeat: no-repeat;
  height: 140px;
  width: 64%;
  border-radius: 8px;
  padding: 8px 8px 16px 16px;
  margin-right: 16px;
  display: block;
  background-position-x: 51.61%;
  background-position-y: 22.65%;

  @media (width > 767px) {
    margin-top: 64px;
    height: 230px;
    background-position-x: 81.61%;
    background-position-y: 22.03%;
    margin-right: 40px;
    padding: 16px 24px 24px 24px;
  }
  @media (width > 1439px) {
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
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
const TextDiv = styled.div`
  display: block;
  margin-top: 48px;
  @media (width > 767px) {
    margin-top: 106px;
  }
`;

const TextMovieType = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  align-items: center;

  mix-blend-mode: normal;
  opacity: 0.75;
  @media (width > 767px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const MovieH1 = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 30px;
    margin-top: 3px;
  }
`;

const MoiveP = styled.p`
  margin-left: 6px;
`;

const Oval = styled.img`
  margin-left: 8px;
  margin-right: 8px;
`;

const TrendingDiv = styled.div`
  margin-top: 24px;
  padding-left: 16px;
  overflow-x: scroll;

  @media (width > 767px) {
    padding-left: 25px;
  }
`;

const TrendingH1 = styled.h1`
  position: absolute;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;
  @media (width > 767px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;
