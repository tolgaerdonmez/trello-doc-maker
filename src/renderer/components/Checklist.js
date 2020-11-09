import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const CheckItem = styled.li`
  &:before {
    content: "${({ check }) => (check === "complete" ? "✅" : "❌")}";
    position: absolute;
    margin-left: -25px;
    margin-top: -5px;
  }
  position: relative;
`;

function Checklist({ checkItems }) {
  return (
    <List>
      {Array.isArray(checkItems)
        ? checkItems.map(({ name, state }, i) => (
            <CheckItem key={i} check={state} data-icon="✅">
              <ReactMarkdown>{name}</ReactMarkdown>
            </CheckItem>
          ))
        : null}
    </List>
  );
}

export default Checklist;
