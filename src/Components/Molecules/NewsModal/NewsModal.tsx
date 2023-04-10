import { Author, Button, CloseIcon, Content, Modal, Url, Wrapper } from './NewsModal.styles';
import closeIcon from '../../../assets/icons/close.png';
import { Props } from './NewsModal.types';

const NewsModal = ({ handleOnClick, content, author, url }: Props) => {
  return (
    <Modal>
      <Wrapper>
        <Button onClick={handleOnClick}>
          <CloseIcon src={closeIcon}></CloseIcon>
        </Button>
        <Content>{content}</Content>
        <Author>Author:{author}</Author>
        <Url href={url}>{url}</Url>
      </Wrapper>
    </Modal>
  );
};

export default NewsModal;