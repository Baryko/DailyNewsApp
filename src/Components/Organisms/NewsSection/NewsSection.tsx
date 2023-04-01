import React, { useEffect, useState } from 'react';
import { Heading, Wrapper } from './NewsSection.styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewsTile from '../../Molecules/NewsTile/NewsTile';
import NewsList from '../../Molecules/NewsList/NewsList';

const NewsTilesSection = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      const options = {
        headers: {
          Authorization: 'Bearer ' + 'b89d42603c2643328287e978d4962269',
          Accept: 'application/vnd.github+json',
        },
      };

      const url = `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=b89d42603c2643328287e978d4962269&pageSize=10&sortBy=urlToImage&category=business`;

      axios
        .get(url, options)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();
  }, [id]);

  console.log(data);

  return (
    <Wrapper>
      <Heading>THE LATEST</Heading>
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
    </Wrapper>
  );
};

export default NewsTilesSection;
