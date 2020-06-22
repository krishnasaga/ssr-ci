import React from 'react';
import { List } from '../index';
import { render,screen } from '@testing-library/react';

describe('list item',() => {
  xit('should have navigation',()=> {
    render(<List />);
    const nav = screen.getByTestId('news-list-navigation');
    expect(nav).not.toBe(null);
  });
});
