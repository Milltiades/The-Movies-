import { useContext, useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import { BookMarkEmptyIcon } from "./BookMarkEmptyIcon";
import { items } from "./ItemsArray";
import { ThemeData } from "./ThemeComponent";
import { MyContext } from "./UserPage";

export default function RecomendationComponent() {
  const context = useContext<any>(MyContext);

  const movieArray = data.filter((item) => item.category == "Movie");
  const TVSeriesArray = data.filter((item) => item.category == "TV Series");
  // const BookmarkedArray = data.filter((item) => item.isBookmarked == true);

  const [bookArray, setBookArray] = useState([...items]);

  const newBook = items.filter((e) => e.isBookmarked == true);

  const newBookM = newBook.filter((e) => e.category == "Movie");

  const newBookTV = newBook.filter((e) => e.category == "TV Series");

  const [isDeleted, setIsDeleted] = useState(false);

  const [isWhite, setIsWhite] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [bookmarked, setBookmarked] = useState(Array(items.length).fill(false));

  // const handleClick = (index:any) => {
  //   setSelectedIndex(index);
  // };

  const handleClick = (index:any) => {
    setSelectedIndex(index);
    setBookmarked((prevBookmarked) => {
      const newBookmarked = [...prevBookmarked];
      newBookmarked[index] = !newBookmarked[index];
      return newBookmarked;
    });
  };

  return (
    <RecomendationDiv>
      <RecomendationH1>
        {context.isColorM
          ? "Movies"
          : context.isColorT
          ? "TV Series"
          : context.isColorB
          ? "Bookmarked Movies"
          : "Recomendation"}
      </RecomendationH1>

      <Recomendation>
        {context.isColorA
          ? items.map((item, index) => {
              return (
                <Recomended>
                  <RecomendedMoive
                    img={`url(${
                      window.innerWidth < 768
                        ? item.thumbnail.regular.small
                        : item.thumbnail.regular.large
                    })`}
                  >
                    <BookMarkButton
                      onClick={() => {
                        handleClick(index);
                        item.isBookmarked = !item.isBookmarked;
                        
                      }}
                    >
                      <BookMarkEmptyIcon
                        key={index}
                        fill={bookmarked[index] ? "white" : "none"}
                      />
                    </BookMarkButton>
                  </RecomendedMoive>
                  <TextDiv>
                    <p>{item.year}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <img src="" alt="" />
                    <p>{item.category}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <p>{item.rating}</p>
                  </TextDiv>
                  <TextH1>{item.title}</TextH1>
                </Recomended>
              );
            })
          : null}

        {context.isColorM
          ? movieArray.map((item, index) => {
              return (
                <Recomended>
                  <RecomendedMoive
                    img={`url(${
                      window.innerWidth < 768
                        ? item.thumbnail.regular.small
                        : item.thumbnail.regular.large
                    })`}
                  >
                    <BookMarkButton
                      onClick={() => {
                        item.isBookmarked = !item.isBookmarked;
                        handleClick(index);
                        items.map(() => {
                          setIsWhite(!isWhite);
                        });

                        console.log(newBook);
                      }}
                    >
                      <BookMarkEmptyIcon fill={bookmarked[index] ? "white" : "none"} />
                    </BookMarkButton>
                  </RecomendedMoive>
                  <TextDiv>
                    <p>{item.year}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <img src="" alt="" />
                    <p>{item.category}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <p>{item.rating}</p>
                  </TextDiv>
                  <TextH1>{item.title}</TextH1>
                </Recomended>
              );
            })
          : null}

        {context.isColorT
          ? TVSeriesArray.map((item, index) => {
              return (
                <Recomended>
                  <RecomendedMoive
                    img={`url(${
                      window.innerWidth < 768
                        ? item.thumbnail.regular.small
                        : item.thumbnail.regular.large
                    })`}
                  >
                    <BookMarkButton
                      onClick={() => {
                        item.isBookmarked = !item.isBookmarked;
                        handleClick(index);
                        setIsDeleted(!isDeleted);
                        items.map(() => {
                          setIsWhite(!isWhite);
                        });
                      }}
                    >
                      <BookMarkEmptyIcon fill={bookmarked[index] ? "white" : "none"} />
                    </BookMarkButton>
                  </RecomendedMoive>
                  <TextDiv>
                    <p>{item.year}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <img src="" alt="" />
                    <p>{item.category}</p>
                    <Oval src="/public/assets/Oval.svg" alt="" />
                    <p>{item.rating}</p>
                  </TextDiv>
                  <TextH1>{item.title}</TextH1>
                </Recomended>
              );
            })
          : null}
        <BookmarkedDivForAll >
        <RecomendationForB>
          {context.isColorB
            ? newBook.map((item, index) => {
                if (newBook[index].category == "Movie") {
                  return (
                    <Recomended key={index}>
                      <RecomendedMoive
                        img={`url(${
                          window.innerWidth < 768
                            ? item.thumbnail.regular.small
                            : item.thumbnail.regular.large
                        })`}
                      >
                        <BookMarkButton
                          key={index}
                          onClick={() => {
                            item.isBookmarked = !item.isBookmarked;
                            console.log(newBook);
                            setIsDeleted(!isDeleted);
                          }}
                        >
                          <BookMarkEmptyIcon fill={"white"} />
                        </BookMarkButton>
                      </RecomendedMoive>
                      <TextDiv>
                        <p>{item.year}</p>
                        <Oval src="/public/assets/Oval.svg" alt="" />
                        <img src="" alt="" />
                        <p>{item.category}</p>
                        <Oval src="/public/assets/Oval.svg" alt="" />
                        <p>{item.rating}</p>
                      </TextDiv>
                      <TextH1>{item.title}</TextH1>
                    </Recomended>
                  );
                }
              })
            : null}
        </RecomendationForB>

        <RecomendationH1ForB style={{ display: context.isColorB ? "flex" : "none" }}>
        Bookmarked TV Series{" "}
        </RecomendationH1ForB>
        <RecomendationForB>
          {context.isColorB
            ? newBook.map((item, index) => {
                if (newBook[index].category == "TV Series") {
                  return (
                    <Recomended key={index}>
                      <RecomendedMoive
                        img={`url(${
                          window.innerWidth < 768
                            ? item.thumbnail.regular.small
                            : item.thumbnail.regular.large
                        })`}
                      >
                        <BookMarkButton
                          key={index}
                          onClick={() => {
                            item.isBookmarked = !item.isBookmarked;
                            console.log(newBook);
                             setIsDeleted(!isDeleted);
                          }}
                        >
                          <BookMarkEmptyIcon fill={"white"} />
                        </BookMarkButton>
                      </RecomendedMoive>
                      <TextDiv>
                        <p>{item.year}</p>
                        <Oval src="/public/assets/Oval.svg" alt="" />
                        <img src="" alt="" />
                        <p>{item.category}</p>
                        <Oval src="/public/assets/Oval.svg" alt="" />
                        <p>{item.rating}</p>
                      </TextDiv>
                      <TextH1>{item.title}</TextH1>
                    </Recomended>
                  );
                }
              })
            : null}
            
        </RecomendationForB>
        </BookmarkedDivForAll>
      </Recomendation>
    </RecomendationDiv>
  );
}

const BookmarkedDivForAll = styled.div`
  width: 100%;
`

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
  /* padding-right: 16px; */

  @media (width > 767px) {
    padding-left: 25px;
    /* padding-right: 24px; */
    /* margin-top: 15px; */
  }
`;

const RecomendationH1 = styled.h1`
  margin-top: 24px;
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

const RecomendationH1ForB = styled(RecomendationH1)`
  margin-top: 40px;
`

const Recomendation = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

const RecomendationForB = styled(Recomendation)`
width: 100%;
`

const Recomended = styled.div<any>`
  width: 45.685%;
  display: ${(props) => props.display};
  margin-right: 4.1%;

  @media (width > 767px) {
    width: 30.303%;
    margin-right: 2.99%;
  }
  @media (width > 1439px) {
    width: 22.1394887%;
    margin-right: 2.86%;
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
