import { useState } from 'react';
import { Footer, Title, Wrapper, Date, Source } from '../NewsList/NewsList.styles';
import NewsModal from '../NewsModal/NewsModal';
import { useNewsModal } from '../../../Hooks/useNewsModal/useNewsModal';
import { Props } from './NewsList.types';

const NewsList: React.FC<Props> = ({ title, data, source, handleOnClick, handleSetArticle }) => {
  return (
    <Wrapper
      onClick={() => {
        handleOnClick(), handleSetArticle(title);
      }}
    >
      <Title>{title}</Title>
      <Footer>
        <Date>{data.slice(0, 10)}</Date>
        <Source>{source}</Source>
      </Footer>
    </Wrapper>
  );
};

export default NewsList;
