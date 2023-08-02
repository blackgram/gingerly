import styled from "styled-components";
import { devices } from "../../constants";

export const Ellipse1 = styled.img`
  /* background: url('/assets/Ellipse42.png'); */
  position: absolute;
  width: 58vw;
  height: 100vh;
  right: 0;
  opacity: 0.6000000238418579px;
  z-index: 1;

  @media only screen and (${devices.sm}) {
    width: 40vw;
    height: 100vh;
  }
`;

export const Ellipse2 = styled.img`
  /* background: url('/assets/Ellipse33.png'); */
  position: absolute;
  width: 10rem;
  height: 7rem;
  bottom: 0vh;
  left: 0vw;
  opacity: 0.6000000238418579px;
  z-index: 1;

  @media only screen and (${devices.md}) {
    width: 6rem;
    height: 4rem;
  }
`;
export const Ellipse3 = styled.img`
  /* background: url('/assets/Ellipse34.png'); */
  position: absolute;
  width: 8rem;
  height: 5rem;
  bottom: 0vh;
  left: 0vw;
  opacity: 0.6000000238418579px;
  z-index: 2;

  @media only screen and (${devices.md}) {
    width: 5rem;
    height: 3rem;
  }
`;

export const Ellipse4 = styled.img`
  position: absolute;
  width: 4rem;
  height: 12rem;
  top: -2vh;
  left: 0vw;
  opacity: 0.6000000238418579px;
  z-index: 2;

  @media only screen and (${devices.md}) {
    width: 2rem;
    height: 10rem;
  }
`;
export const Ellipse5 = styled.img`
  position: absolute;
  width: 3rem;
  height: 11rem;
  top: 0vh;
  left: 0vw;
  opacity: 0.6000000238418579px;
  z-index: 2;

  @media only screen and (${devices.md}) {
    width: 1rem;
    height: 9rem;
  }
`;
export const Ellipse6 = styled.img`
  position: absolute;
  width: 18rem;
  height: 5rem;
  bottom: 0vh;
  right: 0vw;
  opacity: 0.6000000238418579px;
  z-index: 0;

  @media only screen and (${devices.md}) {
    width: 15rem;
    height: 4rem;
  }
  @media only screen and (${devices.sm}) {
    width: 6rem;
    height: 1.5rem;
  }
`;
export const Ellipse7 = styled.img`
  position: absolute;
  width: 15rem;
  height: 4rem;
  bottom: 0vh;
  right: 2vw;
  opacity: 0.6000000238418579px;
  z-index: 0;

  @media only screen and (${devices.md}) {
    width: 12rem;
    height: 3rem;
  }
  @media only screen and (${devices.sm}) {
    width: 5rem;
    height: 1rem;
  }
`;