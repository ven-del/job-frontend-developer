import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  font-family: 'Poppins';
`;

const UpdateTime = styled.h2`
  font-size: 18px;
  color: #888;
  padding-right: 61%;
  padding-top: 5px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export { ListContainer, ListHeader, Title, UpdateTime, CardsContainer } ;