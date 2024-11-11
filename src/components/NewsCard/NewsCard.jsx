import React from 'react';
import { CardContainer, NewsImage, ChannelName, NewsTitle, Description, AuthorContainer, AuthorImage, AuthorName, PublishDate } from './styles';

const NewsCard = ({ article }) => (
  <CardContainer>
    <NewsImage src={article.urlToImage} alt="news" />
    <div>
      <ChannelName>{article.source.name}</ChannelName>
      <NewsTitle>{article.title}</NewsTitle>
      <Description>{article.description}</Description>
      <AuthorContainer>
        <AuthorImage src={article.authorImageUrl || "default-avatar.png"} alt={article.author || "Autor"} />
        <AuthorName>{article.author || "Desconhecido"}</AuthorName>
        <PublishDate>{new Date(article.publishedAt).toLocaleDateString()}</PublishDate>
      </AuthorContainer>
    </div>
  </CardContainer>
);

export default NewsCard;
