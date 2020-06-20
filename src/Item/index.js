import React from "react";
import { Router, Link } from "@reach/router";
import styled from 'styled-components';
import { format } from 'timeago.js';

export const Item = ({
  title,
  points,
  num_comments,
  url,
  author,
  created_at,
  id,
  onHide,
  upVote,
}) => {
  return (
    <Row>
      <Cell center data-test-id={'item-comments'} >
        <Link to={"/comments"}>  {num_comments} </Link>
      </Cell>
      <Cell center data-test-id={'item-points'}  >
         {points}
      </Cell>
      <Cell center data-test-id={'item-upvote-button'} >
         <button onClick={() => upVote(id)} > up vote </button>
      </Cell>
      <Cell>
        <span data-test-id={'item-news-title'} >{title}</span> 
        <span data-testid={'item-news-website'}  >{ url ? (new URL(url)).hostname : ''}</span>
       {author} <span data-testid={'item-news-createdAt'} >
           { created_at ? format(created_at) : ''}
         </span>
        <span
          onClick={() => {
            onHide(id);
          }}
        >
          hide
        </span>
      </Cell>
    </Row>
  );
};

export const Row = styled.div`
  background-color: #F6F6EF;
  min-height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr  5fr;
`;

export const Cell = styled.div`
  padding: 5px;
  text-align: ${({center}) => center ? 'center' : 'left'};
`;
