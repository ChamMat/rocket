import styled from 'styled-components';

const ShipStyled = styled.div`
    position:absolute;

    top: ${(props) => props.posY}px;
    left: ${(props) => props.posX}px;

    height: 20px;
    width: 10px;
    background-color: white;
`;

export default ShipStyled;
