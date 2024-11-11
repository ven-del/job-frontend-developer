import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 0px 24px 0px 24px;
  gap: 0px;
  border-radius: 8px 0px 0px 0px;
  opacity: 0px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -104%);
  width: 640px;
  height: 60px;
  max-width: 800px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10; 
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius:8px;
`;

const SearchIcon = styled.div`
  padding: 0 15px;
  color: #475569;
  font-size: 20px;
  cursor: pointer;
`;

const ClearIcon = styled.div`
  padding: 0 15px;
  color: #475569;
  font-size: 20px;
  opacity: 0.3;
  cursor: pointer;
`;

export { SearchContainer, SearchInput, SearchIcon, ClearIcon };
