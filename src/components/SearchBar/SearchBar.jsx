import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchIcon, ClearIcon } from './styles';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value); 
  };

  const handleClear = () => {
    setQuery(''); 
  };

  return (
    <SearchContainer>
      <SearchIcon onClick={() => onSearch(query)}>
        <FiSearch />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="O que deseja encontrar?"
        value={query}
        onChange={handleSearchChange} 
      />
      <ClearIcon onClick={handleClear}>
        <AiFillCloseCircle />
      </ClearIcon>
    </SearchContainer>
  );
};

export default SearchBar;
