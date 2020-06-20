import React, { useContext, useEffect } from "react";
import { useFetch } from "use-http";
import { NewsContext } from "../App";

export const useHackerNews = (options) => {
  const [news, setNews] = useContext(NewsContext);
  const items = news && news.collection;

  useEffect(() => {
    const data = loadFromLocalStorage('NewsCollection');
    if(data){
      setNews({
        type: "NEWS_ITEMS_ADDED",
        data: Object.values(data.collection),
      });
      return () =>{};
    }
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews({
          type: "NEWS_ITEMS_ADDED",
          data: data.hits.map((item) => ({ id: item.objectID, ...item })),
        });
      });
  }, []);

  useEffect(() => {
    scrapToLocalStorage(news);
  });

  return {
    data: news ? Object.values(news.collection) : [],
    actions: {
      hide: (id) => hide(setNews, id),
      upVote: (id) => upVote(setNews,news.collection[id]),
    },
  };
};


export const hide = (setNews, id) => {
  setNews({
    type: "NEWS_ITEM_HIDDEN",
    data: id,
  });
};

export const upVote = (setNews,newsItem) => {
  setNews({
    type: "NEWS_ITEM_UPDATED",
    data: {
      ...newsItem,
      points: newsItem.points + 1,
    },
  });
};

export const scrapToLocalStorage = (news) => {
  if (window && window.localStorage) {
    window.localStorage.setItem("NewsCollection", JSON.stringify(news));
  }
};

export const loadFromLocalStorage = (news) => {
  if (window && window.localStorage) {
    return JSON.parse(window.localStorage.getItem("NewsCollection"));
  }
};
