import styled from 'styled-components';

const MenuVictoireStyled = styled.div`
  animation-name: apparition;
  animation-duration: 2s;
  animation-fill-mode:forwards;
  height:300px;
  width:500px;
  background-color:#ebe1ca;
  position: absolute;
  left:200px;
  top: 150px;
  z-index:200;
  color: black;
  text-align:center;
  padding-top:3em;

  border-radius:.5em;
  border:2px gray solid;

  h2 {
    font-size:2em;
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 3em;
  }

  button {
    margin: 0 3em;
  }

  @keyframes apparition {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default MenuVictoireStyled;
