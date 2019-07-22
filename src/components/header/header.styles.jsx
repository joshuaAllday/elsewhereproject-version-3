import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
  	width: 100%;
  	display: flex;
  	justify-content: flex-end;
	margin-bottom: 25px; 
	align-items: right;
`;

export const OptionsContainer = styled.div`
	width: 50%;
    height: 100%;
    display: flex;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	padding: 10px 20px;
	cursor: pointer;
	text-decoration: none;
	color: black;
	font-weight: bold;

	&:hover{
		opacity: 0.7;
	}
`;
