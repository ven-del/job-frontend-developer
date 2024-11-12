import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../NewsCard/NewsCard';
import { ListContainer, ListHeader, Title, UpdateTime, CardsContainer } from './styles';

// import NewsAPI from 'newsapi';
// import myModule from './myModule.js';
//const NewsAPI = require('newsapi');
//const newsapi = new NewsAPI('API_KEY');

const API_KEY = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(0);

  const fetchNews = async () => {
    
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`);
      
      setArticles(response.data.articles);
      setLastUpdated(0); // Reseta o contador de atualização
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  // Atualiza o contador em UpdateTime
  useEffect(() => {
    const timer = setInterval(() => setLastUpdated((prev) => prev + 1), 60000); // Incrementa a cada minuto
    return () => clearInterval(timer);
  }, []);

 
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <ListContainer>
      <ListHeader>
        <Title>Últimas notícias</Title>
        <UpdateTime>Atualizado há {lastUpdated} minutos</UpdateTime>
      </ListHeader>
      <CardsContainer>
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </CardsContainer>
    </ListContainer>
  );
};

export default NewsList;