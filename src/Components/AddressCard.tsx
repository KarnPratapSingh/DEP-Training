import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../state/action-creators/fetch-data";

export const AddressCard = () => {
  const dispatch = useDispatch();
  const fetchedAddress = useSelector(
    (state: any) => state.books.currentAddress
  );

  useEffect(() => {
    dispatch(fetchAddress());
  }, []);
  return (
    <div className="addressFormContainer">
      <h3>Billing Address</h3>
      <h2>{fetchedAddress.fullName}</h2>
      <h3>Email: {fetchedAddress.email}</h3>
      <h3>Shipping Address: {fetchedAddress.address}</h3>
      <h3>City and State: {fetchedAddress.cityAndState}</h3>
    </div>
  );
};
