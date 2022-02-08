import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const selected_Book = useSelector((state: any) => state.books.selectedBook);
  const title = useLocation().pathname;
  let actualTitle = "";
  switch (title) {
    case "/myOrders":
      actualTitle = "| My Orders";
      break;
    case "/cart":
      actualTitle = "| Cart";
      break;
    case "/selectedBook":
      actualTitle = `| ${selected_Book.title}`;
      break;
    case "/":
      actualTitle = "";
  }
  return (
    <div className="header">
      <h3>{`eCommerce Website ${actualTitle}`}</h3>
      <div className="pagesLink">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/myOrders" className="link">
          My Orders
        </Link>
        <Link to="/cart" className="link">
          Cart
        </Link>
      </div>
    </div>
  );
};
