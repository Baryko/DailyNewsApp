export interface Props {
  title: string;
  data: string;
  source: string;
  handleOnClick: () => void;
  handleSetArticle: (articleTitle: string) => void;
}
