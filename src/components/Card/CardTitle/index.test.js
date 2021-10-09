import { render, screen } from '@testing-library/react';
import CardTitle from '.';

describe('Title', () => {

  it('renders the title', () => {
    render(<CardTitle text='testing' />);
    const titleText = screen.getByText('testing');

    expect(titleText).toBeInTheDocument();
  });

});