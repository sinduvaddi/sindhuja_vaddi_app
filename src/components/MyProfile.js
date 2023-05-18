import React, { useState } from "react";
import { useForm } from "react-hook-form";
import store from "../store";

export default function MyProfile() {
  const { register, handleSubmit } = useForm({ criteriaMode: "all" });

  const inititalContacts = [];

  const [contacts, setContacts] = useState(inititalContacts);

  const createContact = (data) => {
    console.log("store handleSubmit", data);
    store.dispatch({
      type: "contactAdded",
      payload: {
        contactName: data.contactName,
        mobileNumber: data.mobileNumber
      }
    });
  };

  const handleRemove = (contactID) => {
    store.dispatch({
      type: "contactRemoved",
      payload: {
        id: contactID
      }
    });
  };

  store.subscribe(() => {
    console.log("Store Changed!", store.getState());
    setContacts(store.getState());
  });

  return (
    <React.Fragment>
      <div>
        <p>Your contacts List form 2</p>
        <form onSubmit={handleSubmit(createContact)}>
          <h1>Add contact</h1>
          <div>
            <div>
              <label>Contact Name</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Enter contact name"
                {...register("contactName")}
              />
            </div>
            <div>
              <label>Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                {...register("mobileNumber")}
              />
            </div>
            <button type="submit">Add Contact</button>
          </div>
        </form>
        <div>
          <h2>Your Contacts List</h2>
          {contacts.map((contact) => {
            return (
              <div key={contact.id}>
                <p>
                  Name: {contact.contactName} Mobile Number:{" "}
                  {contact.mobileNumber}
                </p>

                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
