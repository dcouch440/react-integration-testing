import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
`;

export default function Navbar () {
  return (
    <NavbarContainer>
      <div>
        <Link to='/page-1'>Page 1</Link>
        <Link to='/page-2'>Page 2</Link>
        <Link to='/page-3'>Page 3</Link>
      </div>
    </NavbarContainer>
  );
}
