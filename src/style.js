import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const Item = styled.li`
  margin: ${({ margin }) => margin || "inherit"};
`;

export const Badge = styled.span`
  display: block;
  border: 1px solid ${({ color }) => color || "lightgray"};
  padding: 2px 3px;
  font-size: 0.8rem;
  color: ${({ color }) => color || "gray"};
`;
