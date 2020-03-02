import Form from './Form.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {
  it('should render a button with the correct text', () => {
    const {getByText} = render(Form)

    const button = getByText('go')

    expect(button).toBeInTheDocument();
  })
})