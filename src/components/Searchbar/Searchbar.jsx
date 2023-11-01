import React, { Component } from 'react';
import { StyledButton, StyledForm, StyledHeader, StyledInput, StyledSpan } from './Searchbar.styled';

export class Searchbar extends Component {
  state ={
    query:'',
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    this.props.setQuery(this.state.query)
    this.setState({query:''})
  }
  handleChangeInput = (e) =>{
    this.setState({query: e.target.value})
  }
  render(){
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledButton type="submit">
            <StyledSpan>Search</StyledSpan>
          </StyledButton>
  
          <StyledInput
            onChange={this.handleChangeInput}
            value={this.state.query}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

export default Searchbar;
