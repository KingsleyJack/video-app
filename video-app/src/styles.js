import styled from "styled-components/macro";
export const Background = styled.div`
  display: flex;
  height: 50%;
  width: auto;
`;
export const HeaderLink = styled.p`
  color: ${({ active }) => (active === "true" ? "blue" : "white")};
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  border: 2px solid ${({ active }) => (active === "true" ? "blue" : "white")};
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin: 2% 15px;
  box-sizing: border-box;
  cursor: pointer;
  width: 30vw;
  border-radius: 10px;
  border: 3px solid green;
  height: 40vh;
  transition: transform 0.2s;
`;
export const CardTitle = styled.p`
  font-size: 25px;
  color: red;
  font-weight: bold;
`;
export const CardEntities = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
`;
export const CardMeta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;
export const CardSubTitle = styled.h5`
  color: gold;
  font-size: larger;
  font-weight: 800;
`;
