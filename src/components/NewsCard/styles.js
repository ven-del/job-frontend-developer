import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  width: 1156px;
  height: 317.4px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const NewsImage = styled.img`
  width: 424px;
  height: 100%;
  object-fit: cover;
`;

const ChannelName = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #888;
  margin: 10px 0;
  width: 74px;
  height: 16px;
`;

const NewsTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  width: 720px;
  height: 96px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  width: 720px;
  height: 112px;
  margin: 10px 0;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  width: 287px;
  height: 40px;
  margin-top: auto;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

const PublishDate = styled.h2`
  font-size: 12px;
  color: #888;
`;

export { CardContainer, NewsImage, ChannelName, NewsTitle, Description, AuthorContainer, AuthorImage, AuthorName, PublishDate };