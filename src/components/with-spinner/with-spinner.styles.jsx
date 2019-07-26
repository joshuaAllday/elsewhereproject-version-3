import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
   -o-animation: spin 1s ease-in-out infinite;
  -moz-animation: spin 1s ease-in-out infinite;
  -ms-transition: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-o-keyframes spin {
    to {
      -o-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-ms-keyframes spin {
    to {
      -ms-transform: rotate(360deg);
    }
  }
`;
