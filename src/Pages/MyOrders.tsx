import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoughtBooks } from "../state/action-creators/fetch-data";
import { BoughtBookCard } from "../Components/BoughtBookCard";

export const MyOrders = () => {
  const dispatch = useDispatch();
  const allBoughtBooks = useSelector((state: any) => state.books.boughtBooks);
  // Loading all bought books :
  useEffect(() => {
    dispatch(fetchBoughtBooks());
  }, []);

  return (
    <div>
      {allBoughtBooks.map((book: any) => (
        <BoughtBookCard key={book.id} boughtBook={book} />
      ))}
    </div>
  );
};
