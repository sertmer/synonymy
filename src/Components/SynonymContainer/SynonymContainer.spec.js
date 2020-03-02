import SynonymContainer from './SynonymContainer.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';

describe('SynonymContainer', () => {
  it('should render the correct word', () => {
    const {getByText} = render(SynonymContainer, {originalWord: 'hello'})

    const originalWord = getByText('hello')

    expect(originalWord).toBeInTheDocument();
  })

  it.skip('should render the correct word', () => {
    const {getByText} = render(SynonymContainer, {originalWord: 'hello', synonyms: [
      'hi',
      'hey',
      'sup',
    ]})

    const synonym = getByText('hi')

    expect(synonym).toBeInTheDocument();
  })
})