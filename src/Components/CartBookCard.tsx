interface props {
  bookInCart: any;
}

export const CartBookCard = ({ bookInCart }: props) => {
  return (
    <div className="bookInCartBlock">
      <div className="bookInCart">
        <div>
          <h2>{bookInCart.title}</h2>
        </div>
        <div>
          <h2>{`$${bookInCart.price}`}</h2>
        </div>
      </div>
    </div>
  );
};
