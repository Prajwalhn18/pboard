import styled from "styled-components";

const Block = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${({ color }) => (color ? color : "#c0392b")};
    border: 1px solid white;
`;

export default Block;
