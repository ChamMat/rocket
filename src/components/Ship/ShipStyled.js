import styled from 'styled-components';

const ShipStyled = styled.div.attrs((props) => ({
  rotate: props.deg,
  style: {
    bottom: props.posY,
    left: props.posX,
  },
}))`
    position:absolute;
    transform-origin: center;
    transform: rotate(${(props) => props.rotate}deg);
    z-index: 90;
    height: 20px;
    width: 10px;
    background-color: white;
`;

export default ShipStyled;
