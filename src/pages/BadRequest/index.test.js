import { render, screen } from '@testing-library/react';
import BadRequest from '.';

describe('Bad Request', () => {

  it('renders non descriptive error text on the page', () => {
    render(<BadRequest />);
    const errorText = screen.getByText('Oops, something went wrong');
    const testIdElement = screen.getByTestId('api-error');

    expect(testIdElement).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });

});