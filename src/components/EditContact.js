import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => Number(contact.id) === Number(id)
  );

  console.log(currentContact);

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setNumber(currentContact.number);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkName = contacts.find(
      (contact) =>
        contact.id !== id && contact.name.toLowerCase() === name.toLowerCase()
    );
    const checkEmail = contacts.find(
      (contact) => contact.id !== id && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== id && Number(contact.number) === Number(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    if (checkEmail) {
      return toast.error("Email already exists");
    }
    if (checkName) {
      return toast.error("Name already exists");
    }
    if (checkNumber) {
      return toast.error("Number already exists");
    }

    const data = {
      id: currentContact.id,
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact Edited Successfully");
    navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h3 className="my-5 text-center">
            Edit Contact
          </h3>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-dark"
                  />

                  <Link to="/" className="btn btn-danger ml-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1>{id} doesn't match any contact</h1>
      )}
    </div>
  );
};

export default EditContact;
