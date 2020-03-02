import Header from './Header.svelte';


import { render, fireEvent } from '@testing-library/svelte';


import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  it('shows the correct heading', () => {
    const { getByText } = render(Header)
  
    const synonymy = getByText('synonymy')
  
    expect(synonymy).toBeInTheDocument();
  })

  it('shows the correct p tag', () => {
    const {getByText} = render(Header)

    const phonetic = getByText('[si-non-uh-mee]')

    expect(phonetic).toBeInTheDocument();
  })
})