import React from 'react'
import styled from 'styled-components';
import { BookMarkEmptyIcon } from './BookMarkEmptyIcon';
import { items } from './ItemsArray';
import { ThemeData } from './ThemeComponent';
import data from "../data.json";

export default function AllTogether() {
  return (
    items.map((item, index) => {
        return (
          <Recomended key={index}>
            <RecomendedMoive
              img={`url(${data[index].thumbnail.regular.small})`}
            >
              <BookMarkButton
                onClick={() => {
                  items[index].isBookmarked = !items[index].isBookmarked;
                }}
              >
                <BookMarkEmptyIcon fill={"none"} />
              </BookMarkButton>
            </RecomendedMoive>
            <TextDiv>
              <p>{data[index].year}</p>
              <Oval src="/public/assets/Oval.svg" alt="" />
              <img src="" alt="" />
              <p>{data[index].category}</p>
              <Oval src="/public/assets/Oval.svg" alt="" />
              <p>{data[index].rating}</p>
            </TextDiv>
            <TextH1>{data[index].title}</TextH1>
          </Recomended>
        );
      })
  )
}



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
  @media (width > 767px) {
    font-size: 13px;
    line-height: 16px;
    margin-top: 10px;
  }
`;

const RecomendationDiv = styled.div`
  margin-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  @media (width > 767px) {
    padding-left: 25px;
    padding-right: 24px;
    /* margin-top: 15px; */
  }
`;

const RecomendationH1 = styled.h1`
  margin-top: 14px;
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

const Recomendation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Recomended = styled.div<any>`
  width: 47.73%;
  display: ${(props) => props.display};
  @media (width > 767px) {
    width: 30.945%;
  }
  @media (width > 1439px) {
    width: 22.3%;
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
  @media (width > 767px) {
    margin-top: 24px;
    height: 140px;
  }
  @media (width > 1439px) {
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
  @media (width > 767px) {
    transform: scale(1.25);
  }
`;
