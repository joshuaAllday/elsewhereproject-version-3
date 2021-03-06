import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MapDropdownContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    background-color: white;
    width: 120px;
    top: 70px;
    right: 40px;
    z-index: 5;
    @media screen and (max-width: 550px) {
        top: 90px;
    }
`;

export const MapItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MapLink = styled(Link)`
    font-size: 12px;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid black;
    
    &:hover{
        color: black;
		opacity: 0.7;
		text-decoration: none;
	}

    &:last-child {
        border-bottom: none;
    }

`;