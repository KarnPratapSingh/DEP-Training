import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyAddress } from "../state/action-creators/fetch-data";

export const AddressForm = () => {
  const dispatch = useDispatch();
  const fetchedAddress = useSelector(
    (state: any) => state.books.currentAddress
  );

  const { fullName, email, address, cityAndState } = fetchedAddress;

  const [newfullName, setFullName] = useState(fullName);
  const [newEmail, setEmail] = useState(email);
  const [newAddress, setAddress] = useState(address);
  const [newCityAndState, setCityAndState] = useState(cityAndState);

  const onSubmit = (e: any) => {
    if (!newfullName) {
      alert("Please add task");
      return;
    }

    dispatch(
      modifyAddress({
        fullName: newfullName,
        email: newEmail,
        address: newAddress,
        cityAndState: newCityAndState,
      })
    );
  };

  return (
    <div>
      <div className="addressFormContainer">
        <form onSubmit={onSubmit}>
          <h3>Billing Address</h3>
          <label>
            <i className="fa fa-user"></i> Full Name
          </label>
          <input
            type="text"
            id="fname"
            value={newfullName}
            onChange={(e) => setFullName(e.target.value)}
            name="firstname"
          />
          <label>
            <i className="fa fa-envelope"></i> Email
          </label>
          <input
            type="text"
            id="email"
            value={newEmail}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <label>
            <i className="fa fa-address-card-o"></i> Address
          </label>
          <input
            type="text"
            id="adr"
            value={newAddress}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
          />
          <label>
            <i className="fa fa-institution"></i> City and State
          </label>
          <input
            type="text"
            id="city"
            value={newCityAndState}
            onChange={(e) => setCityAndState(e.target.value)}
            name="city"
          />

          <input type="submit" value="Save Address" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};
