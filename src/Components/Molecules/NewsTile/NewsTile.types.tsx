export interface Props {
  url: string;
  title: string;
  description: string;
  date: string;
  source: string;
  handleOnClick: () => void;
  handleSetArticle: (articleTitle: string) => void;
}
