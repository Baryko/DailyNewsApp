import { Description, Footer, Picture, Title, Wrapper, Date, Source, PictureWrapper } from './NewsTile.styles';

const NewsTile = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <Picture src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ICQJPZWEBMI63AVHNKDVKXAYPA.jpg&w=1440" />
      </PictureWrapper>
      <Title>Virgin Orbit to lay off 85 percent of staff amid operational pause - The Washington Post</Title>
      <Description>
        The rocket company failed to secure enough money from investors to continue funding its operations at the
        current level.
      </Description>
      <Footer>
        <Date>2023-03-31</Date>
        <Source>The Washington Post</Source>
      </Footer>
    </Wrapper>
  );
};

export default NewsTile;
