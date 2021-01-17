import { useHistory } from "react-router-dom";

export const useBook = (bookId: number) => {
  const router = useHistory();

  const bookClicked = () => {
    router.push(`detail/${bookId}`);
  };

  return { operators: { bookClicked } };
};
