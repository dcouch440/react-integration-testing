import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";

function NavbarMock () {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

const getLinkElements = linksText => {
  return linksText.map(linkText => screen.getByText(linkText));
};

describe('Navbar', () => {

  it('renders three links on the page with text', () => {
    render(<NavbarMock />);
    const linkText = ['Page 1','Page 2','Page 3'];
    const navLinksElements = getLinkElements(linkText);

    navLinksElements.forEach(navLinkElement => {
      expect(navLinkElement).toBeInTheDocument();
    });
  });

});