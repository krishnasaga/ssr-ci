import React from "react";
import { Item } from "../Item";
import styled from 'styled-components';

import { useHackerNews } from "../api";
import { Link,useParams } from '@reach/router';

export const List = () => {
  const params = useParams();
  const { data, actions } = useHackerNews({pageNumber: parseInt(params.pageNumber)});

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
      <Navigation >
           <Link to={`/news/${parseInt(params.pageNumber) -1 }`} >
            Previous
           </Link>
           ||
           <Link to={`/news/${parseInt(params.pageNumber) + 1 }`} >
             Next
           </Link>
        </Navigation>
    </div>
  );
};

export const Navigation =  styled.nav`
   text-align: right;
`;


export const Header = styled.header`
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
