import React, { useReducer } from "react";
import { List } from "./List";
import { createCollectionReducer } from "./commons";
import { Router, Link } from "@reach/router";
import styled from 'styled-components';

import loadable from "@loadable/component";

const Chart = loadable(() => import("./Chart"));

export const NewsContext = React.createContext([]);

const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;

const Home = () => {
 return <Container>
    <List />
    <Chart />
  </Container>;
};

const NewsInfo = () => {
  return <div>
    Hello
  </div>;
}
export default ({ news }) => {
  const newsReducer = createCollectionReducer({
    initialCollection: [],
    removeWhen: (action) => {
      return action.type === "NEWS_ITEM_HIDDEN";
    },
    addWhen: (action) => {
      return action.type === "NEWS_ITEMS_ADDED";
    },
    updateWhen: (action) => {
      return action.type === "NEWS_ITEM_UPDATED";
    }
  });

  const [__news, setNews] = useReducer(newsReducer, {
    collection: news ? news.hits : [],
  });

  return (
    <NewsContext.Provider value={[__news, setNews]}>
      <Router>
        <Home path={'/news/:pageNumber'} />
        <NewsInfo path={'/comments'} />
      </Router>
    </NewsContext.Provider>
  );
};
