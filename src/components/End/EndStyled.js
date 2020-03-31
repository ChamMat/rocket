import styled from 'styled-components';

const EndStyled = styled.div`
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
    animation-duration: 2s;
    animation-fill-mode:forwards;
  }

  .credit {
    position: relative;
    left: 30em;
    animation-name: createAnimation;
    animation-duration: 1s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    top: -8.5em;
    &:before{
      content: "Created by ";
      animation-name: createAnimation;
      animation-duration: 1s;
      animation-delay: 1.5s;
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
    animation-delay: 2s;
    animation-duration: 2s;
    animation-fill-mode:forwards;
    opacity: 0;
    cursor:unset;
    &:hover {
    background-color: lightgray;
    }
  }

  p {
    font-size: 3em;
    animation-name: congrate;
    animation-duration: 6s;
  }

  @keyframes congrate {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }

  @keyframes buttonAnimate {
    from {
      opacity: 0;
      transform:translateY(6em);
      cursor:pointer;
    }

    to {
      opacity: 1;
      cursor:pointer;
      transform:translateY(6em);
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
      transform: translateY(-2em);
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

export default EndStyled;
