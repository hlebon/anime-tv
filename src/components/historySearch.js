import React from "react";
import { List, Item, Badge } from "../style";

function HistorySearch({ data }) {
  return (
    <>
      {data && (
        <List>
          {data.map((ls, index) => (
            <Item margin="3px">
              {index === 0 ? (
                <Badge color="green">{ls}</Badge>
              ) : (
                <Badge>{ls}</Badge>
              )}
            </Item>
          ))}
        </List>
      )}
    </>
  );
}

export default HistorySearch;
