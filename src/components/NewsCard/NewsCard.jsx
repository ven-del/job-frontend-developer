import React from 'react';
import { CardContainer, NewsImage, DataContainer, ChannelName, NewsTitle, Description, AuthorContainer, AuthorImage, AuthorName, PublishDate } from './styles';



const NewsCard = ({ article }) => {
  const generateAvatarUrl = (authorName) => {
    const baseUrl = 'https://api.dicebear.com/9.x/open-peeps/svg/';
    const editedAuthorName = encodeURIComponent(authorName || 'Desconhecido');
    return `${baseUrl}${editedAuthorName}.svg`;
  };
  const authorImageUrl = generateAvatarUrl(article.author);
  return (
  <CardContainer>
    <NewsImage src={article.urlToImage} alt="news" />
    <DataContainer>
      <ChannelName>{article.source.name}</ChannelName>
      <NewsTitle>{article.title}</NewsTitle>
      <Description>{article.description}</Description>
      <AuthorContainer>
        <AuthorImage src={authorImageUrl || "default-avatar.png"} alt={article.author || "Autor"} />
        <AuthorName>{article.author || "Desconhecido"}</AuthorName>
        <PublishDate>{new Date(article.publishedAt).toLocaleDateString('en-us', {day: 'numeric', month: 'long', year: 'numeric'})}</PublishDate>
      </AuthorContainer>
    </DataContainer>
  </CardContainer>
  );
};

export default NewsCard;
