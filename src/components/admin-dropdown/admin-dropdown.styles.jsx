import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
`;

export const AdminItemsContainer = styled.div`
height: 240px;
display: flex;
flex-direction: column;
`;

export const AdminLink = styled(Link)`
    font-size: 12px;
`;