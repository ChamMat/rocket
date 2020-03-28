import styled from 'styled-components';

const AccueilStyled = styled.div`
  position: relative;
  border: solid 1px #222;
  height:600px;
  width: 900px;
  background-color:#000;
  color:white;
  overflow:hidden;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .titre {
    font-size:5em;
    animation-name: titleAnimate;
    animation-duration: 5s;
    animation-fill-mode:forwards;
  }

  .credit {
    position: relative;
    left: 30em;
    animation-name: createAnimation;
    animation-duration: 3s;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
    top: -10em;
    &:before{
      content: "Created by ";
      animation-name: createAnimation;
      animation-duration: 3s;
      animation-delay: 3.5s;
      animation-fill-mode:forwards;
      position: relative;
      left: -51em;
    }
  }

  .link {
      cursor:unset;
    }

  .startButton {
    background-color: gray;
    border:none;
    padding:.5em 1em;
    border-radius:3px;
    font-size:1.5em;
    animation-name: buttonAnimate;
    animation-delay: 5s;
    animation-duration: 3s;
    animation-fill-mode:forwards;
    opacity: 0;
    cursor:unset;
   
  }

  @keyframes buttonAnimate {
    from {
      opacity: 0;
      cursor:pointer;
    }

    to {
      opacity: 1;
      cursor:pointer;
    }
    
  }

  @keyframes titleAnimate {
    0% {
      transform: translateY(10em);
    }

    40% {
      transform: translateY(0px);
    }

    70% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-2.3em);
    } 
  }

  @keyframes createAnimation {
    0% {
      
    }

    100% {
      left: 0em;
    }
  }
`;

export default AccueilStyled;
