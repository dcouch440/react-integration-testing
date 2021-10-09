import { render, screen } from '@testing-library/react';
import PageHeader from '.';

describe('Page Header', () => {

  it('should render the given text', () => {
    render(<PageHeader text='testing' />);
    const headerText = screen.getByText('testing');

    expect(headerText).toBeInTheDocument();
  });

});