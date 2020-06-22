import React from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import { format } from "timeago.js";

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
      <Cell center data-testid={"item-comments"}>
        {num_comments}
      </Cell>
      <Cell center data-testid={"item-points"}>
        {points}
      </Cell>
      <Cell center data-testid={"item-upvote-button"}>
        <button onClick={() => upVote(id)}> up vote </button>
      </Cell>
      <Cell>
        <span data-testid={"item-news-title"}>{title}</span>
        <BodyTextLite>
          <a href={url} rel="noreferrer" target={"_blank"}>
            <span data-testid={"item-news-website"}>
              ({url ? new URL(url).hostname : ""})
            </span>
          </a>
        </BodyTextLite>
        <BodyTextLite> by </BodyTextLite>
        {author}{" "}
        <span data-testid={"item-news-createdAt"}>
          <BodyTextLite>{created_at ? format(created_at) : ""}</BodyTextLite>
        </span>
        <HideButton
          onClick={() => {
            onHide(id);
          }}
        >
          [ Hide ]
        </HideButton>
      </Cell>
    </Row>
  );
};

export const Row = styled.div`
  background-color: #f6f6ef;
  min-height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 7fr;
`;

export const Cell = styled.span`
  padding: 5px;
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const BodyTextLite = styled.span`
  font-size: 0.7rem;
  color: grey;
`;

export const HideButton = styled.span`
  cursor: pointer;
`;
