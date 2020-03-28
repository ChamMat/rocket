import styled from 'styled-components';

const SolStyled = styled.div.attrs((props) => ({
  style: {
    bottom: props.bottom,
    left: props.left,
    height: props.height,
    width: props.width,
  },
}))`
    position:absolute;
    background: ${(props) => (props.valide ? 'green' : props.required)};
`;

export default SolStyled;
