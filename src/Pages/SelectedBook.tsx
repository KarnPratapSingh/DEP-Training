import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookToCart, buyBook } from "../state/action-creators/fetch-data";

export const SelectedBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buyingHandler = () => {
    dispatch(buyBook(selectedBook));
    navigate("/myOrders");
  };
  const addToCartHandler = () => {
    dispatch(addBookToCart(selectedBook));
  };
  const selectedBook = useSelector((state: any) => state.books.selectedBook);

  return (
    <div className="selectedBookPage">
      <div className="SelectedBookfakeImage">
        <img
          className="fakeImageOfBookCard"
          src="https://pngimg.com/uploads/book/book_PNG2111.png"
          alt="book image"
        />
      </div>
      <div className="SelectedBookDetails">
        <h1>{selectedBook.title}</h1>
        <h2>Book Price:{selectedBook.price}</h2>
        <h2>Author Name:{selectedBook.author}</h2>
        <h2>Page Count:{selectedBook.pageCount}</h2>
        <h2>ISBN:{selectedBook.ISBN}</h2>
        <button className="processlink" onClick={addToCartHandler}>
          Add to cart
        </button>
        <button className="processlink" onClick={buyingHandler}>
          Buy Now
        </button>
        <div className="descriptionBox">
          <h2>{selectedBook.description}</h2>
        </div>
      </div>
    </div>
  );
};
