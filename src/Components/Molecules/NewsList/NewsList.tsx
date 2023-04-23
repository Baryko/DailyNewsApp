import { useState } from 'react';
import { Footer, Wrapper, Date, Source } from '../NewsList/NewsList.styles';
import NewsModal from '../NewsModal/NewsModal';
import { useNewsModal } from '../../../Hooks/useNewsModal/useNewsModal';
import { Props } from './NewsList.types';
import { Title } from '../../Atoms/Title/Title';

const NewsList: React.FC<Props> = ({ title, data, source, handleOnClick, handleSetArticle }) => {
  return (
    <Wrapper
      data-testid="wrapper"
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
