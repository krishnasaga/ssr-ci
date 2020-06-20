import { hide, upVote, useHackerNews } from '../';
import { renderHook, act } from '@testing-library/react-hooks'

let setNews;

//To mock the fetch api
global.fetch = jest.fn(()=>{
  return {
    then: global.fetch,
    catch: global.catch
  }
})

describe("hacker news hooks api", () => {

  beforeEach(()=>{
    setNews = jest.fn();;
  });

  it('should be able to provide new list',()=>{
    const { data } = renderHook( () => useHackerNews() );

  });

  it("should be able to hide the news item", () => {
    hide(setNews,1);
    hide(setNews,4);

    expect(setNews.mock.calls[0][0]).toEqual({
      type: 'NEWS_ITEM_HIDDEN',
      data: 1
    });

    expect(setNews.mock.calls[1][0]).toEqual({
      type: 'NEWS_ITEM_HIDDEN',
      data: 4
    });

  });


  it("should be able to up vote the news item", () => {
    upVote(setNews,{
      title: 'TITLE',
      points: 1
    });

    upVote(setNews,{
      title: 'TITLE',
      points: 4
    });

    expect(setNews.mock.calls[0][0]).toEqual({
      type: 'NEWS_ITEM_UPDATED',
      data: {
        title: 'TITLE',
        points: 2
      }
    });

    expect(setNews.mock.calls[1][0]).toEqual({
      type: 'NEWS_ITEM_UPDATED',
      data: {
        title: 'TITLE',
        points: 5
      }
    });

  });
});
