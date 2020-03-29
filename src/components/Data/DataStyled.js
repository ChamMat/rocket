import styled from 'styled-components';

const DataStyled = styled.div`
  animation-name: ouverture;
  animation-duration: 1s;
  position:absolute;
  border-top: #222 solid 1px;
  border-left: #222 solid 1px;
  border-right: #222 solid 1px;
  width: 900px;
  height: 50px;
  z-index:220;
  top:-51px;
  left:-1px;
  font-size:.8em;
  color:white;
  display:flex;
  align-items:center;
  overflow:hidden;
  font-weight:bold;

  .valDynamique {
    color: green;
    padding-left:1em;
  }

  div {
    position: relative;
    width: 225px;
    border-right:solid 1px #222;
    padding: 14px 2em;
    border-bottom: solid 4px green;
    background-color:#333;
  }

  .danger {
    animation-name: alarm;
    animation-duration:.5s;
    animation-delay:1s;
    animation-direction:alternate;
    animation-iteration-count:infinite;
    border-bottom: solid 4px #F00;
    .valDynamique {
      color: red;
    }
  }

  @keyframes ouverture {
    from {
      transform: scaleY(0);
      transform-origin: bottom;
    }

    to {
      transform: scaleY(1);
      transform-origin: bottom;
    }
  }

  @keyframes alarm {
    from {
      background: #333;
    }

    to {
      background-color: #400;
    }
    
  }
`;

export default DataStyled;
