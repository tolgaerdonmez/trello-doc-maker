import React from "react";
import List from "./List";
import styled from "styled-components";

const StyledDiv = styled.div`
  & {
    * {
      font-family: Roboto;
    }
    & > ul {
      list-style: none;
    }
  }
`;

function Template({ board }) {
  return (
    <html>
      <body>
        <StyledDiv>
          <ul>
            {board.map((list, i) => (
              <li key={i}>
                <List {...list} />
              </li>
            ))}
          </ul>
        </StyledDiv>
      </body>
    </html>
  );
}

export default Template;
