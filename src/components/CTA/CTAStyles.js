import styled from "styled-components";
// import { devices } from "../../constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  z-index: 3;

  @media only screen and (max-width: 820px) {
    margin: 100px 70px;
  }
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

export const Div1 = styled.div`
  /* color: #fff;
  font-family: Inter; */
  z-index: 2;

  
  @media only screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2.5rem 0;
    width: 100%;
    text-align: center;
  }

`;
export const H1 = styled.h1`
  color: #fff;
  font-family: Inter;
  z-index: 2;


  &:nth-child(1) {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &:nth-child(2) {
    font-size: 35px;
    font-weight: 900;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .25);
  }
  &:nth-child(3) {
    font-size: 18px;
    font-weight: 600;
  }

  @media only screen and (max-width: 820px) {
    &:nth-child(1) {
      font-size: 20px;
      font-weight: 600;
    }
    &:nth-child(2) {
      font-size: 30px;
      font-weight: 900;
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    &:nth-child(3) {
      font-size: 12px;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 640px) {
    width: 80%;


    &:nth-child(1) {
      font-size: 15px;
      font-weight: 600;
    }
    &:nth-child(2) {
      font-size: 20px;
      font-weight: 900;
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    &:nth-child(3) {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
export const Image = styled.img`
  height: 300px;
  z-index: 2;


  @media only screen and (max-width: 640px) {
    width:70%;
    height: auto;
  }
  @media only screen and (max-width: 420px) {
    margin: 3rem 0;
  }
  @media only screen and (max-width: 380px) {
    margin: 0;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  color: #ba68c8;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  z-index: 2;

`;
