import React from "react";
import { Item } from "../Item";
import styled from 'styled-components';

import { useHackerNews } from "../api";

export const List = () => {
  const { data, actions } = useHackerNews();
  return (
    <div>
      <Header >
          <HeaderCell>
            Comments
          </HeaderCell>
          <HeaderCell>
            Vote Count
          </HeaderCell>
          <HeaderCell>
            Up Vote
          </HeaderCell>
          <HeaderCell>
            News Details
          </HeaderCell>
        </Header>
      {data &&
        data.map((item) => (
          <Item {...item} onHide={actions.hide} upVote={actions.upVote} />
        ))}
      <Navigation />
    </div>
  );
};

export const Navigation = () => {
  return <div> Previous || Next </div>;
};

export const Header = styled.main`
  background-color: #F66502;
  min-height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 5fr;
`;

export const HeaderCell = styled.div`
  padding: 10px;
  color: white;
  text-align: center;
`;
