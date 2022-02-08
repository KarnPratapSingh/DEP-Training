import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCompleteCart,
  deleteBook,
  fetchBooksInCart,
  placeOrder,
} from "../state/action-creators/fetch-data";
import { AddressForm } from "../Components/AddressForm";
import { AddressCard } from "../Components/AddressCard";
import { CartBookCard } from "../Components/CartBookCard";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editAddress, setEditAddress] = useState(false);
  const fetchedBooksInCart = useSelector(
    (state: any) => state.books.booksInCart
  );
  const clearCart = () => {
    fetchedBooksInCart.forEach((book: any) => {
      dispatch(deleteBook(book));
    });
    dispatch(clearCompleteCart());
  };

  const finalCheckOut = () => {
    fetchedBooksInCart.forEach(async (book: any) => {
      dispatch(placeOrder(book));
    });

    navigate("/myOrders");
  };

  useEffect(() => {
    dispatch(fetchBooksInCart());
  }, []);

  let allBooksPrice = 0;
  for (
    let indexOfBook = 0;
    indexOfBook < fetchedBooksInCart.length;
    indexOfBook++
  ) {
    allBooksPrice = allBooksPrice + fetchedBooksInCart[indexOfBook].price;
  }
  let totalPayableAmount = allBooksPrice + 7.25 + 5.0;

  return (
    <div className="cartPage">
      <div className="cartComponents">
        <div className="addressFormComponent">
          {editAddress === true ? <AddressForm /> : <AddressCard />}
          <button
            className="btn btn-block"
            onClick={() => setEditAddress(!editAddress)}
          >
            {editAddress === true ? "Back" : "Edit Address"}
          </button>
        </div>
        <div className="checkoutBlock">
          <div className="booksInCartBlock">
            {fetchedBooksInCart.map((book: any) => (
              <CartBookCard key={book.id} bookInCart={book} />
            ))}
          </div>
          <div className="totalBillBlock">
            <h2>Payment Info</h2>
            <div className="labelAndPriceBlock">
              <div>
                <h3>Items price</h3>
                <h3>Tax</h3>
                <h3>Shipping Charge</h3>
              </div>
              <div>
                <h3>${allBooksPrice}.00</h3>
                <h3>$7.25</h3>
                <h3>$5.00</h3>
              </div>
            </div>
            <hr />
            <div className="totalLabelAndPriceBlock">
              <div>
                <h3>Total</h3>
              </div>
              <div>
                <h3>${totalPayableAmount}</h3>
              </div>
            </div>
            <button className="processlink" onClick={() => finalCheckOut()}>
              Checkout
            </button>
            <button className="processlink" onClick={() => clearCart()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
