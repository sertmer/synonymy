import Header from './Header.svelte';


import { render, fireEvent } from '@testing-library/svelte';


import '@testing-library/jest-dom/extend-expect';

it('shows the correct heading', () => {
  const { getByText, getByTestId } = render(Header)

  const synonymy = getByText('synonymy')

  expect(synonymy).toBeInTheDocument();
})