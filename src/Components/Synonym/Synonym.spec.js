import Synonym from './Synonym.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';

describe('Synonym', () => {

  it('should render the word', () => {
    const {getByText} = render(Synonym, {word: 'bird'})

    const bird = getByText('bird')

    expect(bird).toBeInTheDocument();
  })
})