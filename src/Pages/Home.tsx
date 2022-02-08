import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageCard } from "../Components/HomePageCard";
import { fetchAllBooks } from "../state/action-creators/fetch-data";

export const Home = () => {
  const dispatch = useDispatch();
  const fetchedAllBooks = useSelector((state: any) => state.books.allBooks);
  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);
  return (
    <div>
      <div className="homeContainer">
        {fetchedAllBooks.map((book: any) => (
          <HomePageCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
