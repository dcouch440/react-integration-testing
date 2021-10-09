import { render, screen } from '@testing-library/react';
import ImageThumb from '.';

describe('ImageThumb', () => {

  it('should render a image on the page', () => {
    render(<ImageThumb url={'/favicon.ico'} />);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

});