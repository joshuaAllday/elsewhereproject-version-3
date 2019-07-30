import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
  	width: 100%;
  	display: flex;
  	justify-content: flex-end;
	margin-bottom: 25px; 
	align-items: right;
	@media screen and (max-width: 800px){
		justify-content: center;
	}
`;

export const OptionsContainer = styled.div`
	width: 80%;
    height: 100%;
    display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 800px){
		justify-content: center;
	}
`;


export const OptionLink = styled(Link)`
	padding: 10px 20px;
	cursor: pointer;
	text-decoration: none;
	color: black;
	font-weight: bold;
	margin-top: 10px;

	&:hover{
		opacity: 0.7;
	}
`;
