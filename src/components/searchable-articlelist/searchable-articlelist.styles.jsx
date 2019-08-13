import styled from 'styled-components';

export const ArticleList = styled.div`
    width: 700px;
    height: 600px;
    display: flex;
    flex-direction: column;
    width: unset;
    align-items: center;
`;

export const ScrollableContainer = styled.div`
    overflow-y: scroll;
    height: 500px;
    width: 500px;
    @media screen and (max-width: 800px){
		width: 460px;
	}
`;
