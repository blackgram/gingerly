import { styled } from "styled-components";
import { devices } from "../../constants";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

export const DropDownIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  cursor: pointer;
  color: #fff;
  padding: 1rem;
  z-index: 3;

`;

export const DropDownContainer = styled.div`
  position: absolute;
  display: ${({ active }) => active ? 'flex' : 'none'};
  flex-direction: column;
  right: 0;
  top: 40px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 100;
  padding: 4px 0;
  cursor: default;
  overflow: hidden;
  transition: 0.3s ease;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '1' : '0'};
  transform-origin: top;
  transform: ${({ active }) => active ? 'scaleY(1)' : 'scaleY(.3)'};

  @media only screen and (${devices.md}) {
    top: 32px;
}
@media only screen and (${devices.sm}) {
    top: 24px;
}
@media only screen and (${devices.xs}) {
  width: 120px ;

  }
`
export const DropDownItem = styled.a`
text-decoration: none;
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: .3s ease;
  padding: 0px 16px;
  text-decoration: none; 
  color: #ba68c8;
font-family: Inter;
font-size: 16px;
font-weight: 700;∑
  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.3);
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0,0,0,.3);
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0,0,0,.3);
  }
`
export const DropDownItemTitle = styled.h2`
  color: #ba68c8;
  font-size: 18px;
  line-height: 26px;
  text-align: start;
`