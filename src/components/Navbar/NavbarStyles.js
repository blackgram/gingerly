import styled from 'styled-components';
import { devices } from '../../constants';

export const Nav = styled.div`
width:100%;
display: flex;
justify-content: space-around;
align-items: center;
z-index: 2;
`;

export const NavTitle = styled.h1`
color: #FFF;
font-family: Inter;
font-size: 52px;
font-weight: 900;
z-index: 2;


@media only screen and (${devices.md}) {
    font-size: 30px;
}
`;

export const MenuItems = styled.div`
display: flex;
justify-content: center;
align-items: center;
z-index: 2;

`;

export const A = styled.a`
text-decoration: none; 
color: #FFF;
font-family: Inter;
font-size: 16px;
font-weight: 700;
z-index: 2;


@media only screen and (${devices.md}) {
    font-size: 16px;
}
`;

export const Item = styled.a`
list-style: none;
padding: 1rem;
`;

export const Button = styled.a`
text-decoration: none;
color: #BA68C8;
font-family: Inter;
font-size: 16px;
font-weight: 700;
z-index: 2;


@media only screen and (${devices.md}) {
    display: none;
}

`;


