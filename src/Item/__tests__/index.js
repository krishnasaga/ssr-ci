import React from 'react';
import { Item } from '../index';
import { render,screen } from '@testing-library/react';

describe('list item',() => {
  it('should have comments count',()=> {
    render(<Item url={''}/>);
  });

  it('should be showing the source website',()=> {
    render(<Item 
      url={"https://ldeming.posthaven.com/how-not-to-be-sadandymatuschak"} />
    );
    const text = screen.getByTestId('item-news-website').innerHTML;
    expect(text).toBe('ldeming.posthaven.com');
  });

  it('should show how old the news is',()=> {
    render(<Item created_at={'2020-06-21T21:33:01'}/>);
    const text = screen.getByTestId('item-news-createdAt').innerHTML;
    expect(text).toEqual(expect.stringContaining('ago'));
  });

});
