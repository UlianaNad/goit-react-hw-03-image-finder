import React from 'react';
import { StyledButton, StyledForm, StyledHeader, StyledInput, StyledSpan } from './Searchbar.styled';

function Searchbar() {
  return (
    <StyledHeader>
      <StyledForm>
        <StyledButton type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledButton>

        <StyledInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
}

export default Searchbar;
