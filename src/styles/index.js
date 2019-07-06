import styled from "styled-components";

export const Layout = styled.div`
  width: 95%;
  padding-top: 1rem;
  margin: auto;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: ${({ direction }) => direction};
`;

export const Item = styled.li`
  margin: ${({ margin }) => margin || "inherit"};
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ color }) => color || "lightgray"};
  padding: 1px 2px;
  font-size: 0.8rem;
  color: ${({ color }) => color || "gray"};
  border-radius: ${({ round }) => (round ? "10px" : "none")};
`;
