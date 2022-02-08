interface props {
  boughtBook: any;
}
export const BoughtBookCard = ({ boughtBook }: props) => {
  return (
    <div>
      <div className="boughtBookStatusCard">
        <div>
          <h3>Order Placed</h3>
        </div>
        <div>
          <h3>Status : Delivered</h3>
        </div>
      </div>

      <div className="boughtBookCard">
        <div className="boughtBookfakeImage"></div>
        <div>
          <h2>{boughtBook.title}</h2>
          <h3>By- {boughtBook.author}</h3>
          <h3>{boughtBook.price} $</h3>
        </div>
      </div>
    </div>
  );
};
