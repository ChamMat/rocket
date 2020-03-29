import styled from 'styled-components';

const ShipStyled = styled.div.attrs((props) => ({
  style: {
    bottom: props.posY,
    left: props.posX,
    // eslint-disable-next-line prefer-template
    transform: 'rotate(' + props.deg + 'deg)',
  },
}))`
    position:absolute;
    transform-origin: center;
    z-index: 90;
    height: 20px;
    width: 10px;
    background-color: #995;
    &:before {
      content:'';
      border-left: solid 5px transparent;
      border-right: solid 5px transparent;
      border-bottom: solid 10px #f6f3d4;
      position: relative;
      top:-32px;
    }
    .ailes {
      content:'';
      border-left: solid 13px transparent;
      border-right: solid 13px transparent;
      border-bottom: solid 10px #995;
      position: relative;
      top: -19px;
      left: -8px;
      z-index: -1;
    }
    .destruction {
      position: relative;
      z-index: 80;
      width: 100px;
      height: 100px;
      background-image: radial-gradient(circle at center, rgba(9,25,121,1) 0%, rgba(121,23,9,1) 7%, rgba(173,98,9,0.7) 65%, rgba(255,243,179,0.5) 100%);
      top: -67px;
      left: -44px;
      border-radius: 100%;
    }
   .flamme {
      content:'';
      border-left: solid 5px transparent;
      border-right: solid 5px transparent;
      border-bottom: solid 10px rgba(252, 148, 0, .5);
      position: relative;
      top: -16px;
      z-index: 70;
    }
    .hide {
      display:none;
    }
`;

export default ShipStyled;
