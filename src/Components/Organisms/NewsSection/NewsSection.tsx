import React, { useEffect, useState } from 'react';
import { Heading, Wrapper } from './NewsSection.styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewsTile from '../../Molecules/NewsTile/NewsTile';
import NewsList from '../../Molecules/NewsList/NewsList';
import NewsModal from '../../Molecules/NewsModal/NewsModal';
import { useNewsModal } from '../../../Hooks/useNewsModal/useNewsModal';

const NewsTilesSection = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState();

  const { isOpen, setIsOpen } = useNewsModal();
  const [clickedArticle, setClickedArticle] = useState();

  useEffect(() => {
    const getData = () => {
      const options = {
        headers: {
          Authorization: 'Bearer ' + 'b89d42603c2643328287e978d4962269',
          Accept: 'application/vnd.github+json',
        },
      };

      const url = `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=b89d42603c2643328287e978d4962269&pageSize=100&sortBy=popularity&category=business`;

      axios
        .get(url, options)
        .then((res) => {
          setArticles(res.data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();
  }, [id]);

  const handleOnClick = () => {
    setIsOpen(false);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSetArticle = (articleTitle: string): void => {
    setClickedArticle(articles!.filter((article: { title: string }) => article.title === articleTitle));
  };

  const articlesListElements = articles
    ? articles.map((article) => {
        return (
          <NewsList
            title={article.title}
            data={article.publishedAt}
            source={article.source.name}
            handleOnClick={handleOnClick}
            handleSetArticle={handleSetArticle}
          />
        );
      })
    : null;

  return (
    <Wrapper>
      <Heading>THE LATEST</Heading>
      {articlesListElements}
      {isOpen ? (
        <NewsModal
          handleOnClick={handleOnClick}
          content={clickedArticle[0].content}
          author={clickedArticle[0].author}
          url={clickedArticle[0].url}
        />
      ) : null}
    </Wrapper>
  );
};

export default NewsTilesSection;
