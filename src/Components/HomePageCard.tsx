import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedBook } from "../state/action-creators/fetch-data";

interface props {
  book: any;
}

export const HomePageCard = ({ book }: props) => {
  const dispatch = useDispatch();
  const setSelectedBookHandler = () => {
    dispatch(setSelectedBook(book));
  };
  return (
    <div>
      <div className="card">
        <div className="fakeImage">
          <img
            src="https://pngimg.com/uploads/book/book_PNG2111.png"
            alt="book image"
          />
        </div>
        <div className="container">
          <h4>
            <b>{book.title}</b>
          </h4>
          <p>By- {book.author}</p>
          <p>{book.description}</p>
          <button onClick={setSelectedBookHandler}>
            <Link to="/selectedBook" className="link">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
