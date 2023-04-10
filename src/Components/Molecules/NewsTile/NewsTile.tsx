import { Description, Picture, Title, Wrapper, Date, Source, PictureWrapper, Header, Button } from './NewsTile.styles';
import { Props } from './NewsTile.types';
import noImage from '../../../assets/images/no-camera.jpg';

const NewsTile = ({ url, title, description, date, source, handleOnClick, handleSetArticle }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Date>{date.slice(0, 10)}</Date>
        <Source>{source}</Source>
      </Header>
      <Title>{title}</Title>
      <PictureWrapper>{url ? <Picture src={url} /> : <Picture src={noImage} />}</PictureWrapper>
      <Description>{description}</Description>
      <Button
        onClick={() => {
          handleOnClick(), handleSetArticle(title);
        }}
      >
        Read more
      </Button>
    </Wrapper>
  );
};

export default NewsTile;
