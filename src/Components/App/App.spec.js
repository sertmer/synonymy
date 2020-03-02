import App from './App.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('should render the directions', () => {
    const {getByText} = render(App, {loading: false, originalWord: 'hello', synonyms: [
      'hi',
      'hey',
      'sup',
    ]})

    const directions = getByText('Search for a word to view synonyms')

    expect(directions).toBeInTheDocument();
  })
})