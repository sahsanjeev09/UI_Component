import React, { useState } from "react";
import ShowcaseContainer from "../../componentdisplay/ShowcaseContainer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Button } from "../../components/button/Button";
import "./UseLocalStoragedisplay.css";

export default function UseLocalStorageShowcase() {
  const usageCode = `
import useLocalStorage from "./useLocalStorage";

function Example() {
  const { value: user, setValue, removeItem } = 
    useLocalStorage("user", { name: "", email: "", phone: "" });

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setValue({ name: "Sanjeev", email: "user@example.com", phone: "9800000000" })}>
        Add / Edit User
      </button>
      <button onClick={removeItem}>Remove User</button>
    </div>
  );
}`;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const {
    value: user,
    setValue: setUser,
    removeItem: removeUser,
  } = useLocalStorage("demo-user", { name: "", email: "", phone: "" });

  const saveUser = () => {
    if (!userName) return;
    setUser({ name: userName, email: userEmail, phone: userPhone });
    setUserName("");
    setUserEmail("");
    setUserPhone("");
  };

  return (
    <div className="ls-showcase-container">
      <h2 className="ls-showcase-title">useLocalStorage Hook</h2>
      <p className="ls-showcase-intro">
        <code>useLocalStorage</code> is a React hook that allows you to persist user data 
        in the browser's localStorage. You can add, edit, and remove a user object 
        including name, email, and phone number.
      </p>

      <ShowcaseContainer title="Demo" code={usageCode}>
        <div className="ls-demo">
          <div className="ls-demo-left">
            <div className="ls-input-group">
              <label className="ls-label">Name</label>
              <input
                className="ls-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="ls-input-group">
              <label className="ls-label">Email</label>
              <input
                className="ls-input"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="ls-input-group">
              <label className="ls-label">Phone</label>
              <input
                className="ls-input"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="Enter phone"
              />
            </div>
            <div className="ls-actions">
              <Button onClick={saveUser} colorScheme="blue">Add / Edit User</Button>
              <Button onClick={removeUser} colorScheme="red">Remove User</Button>
            </div>
          </div>
          <div className="ls-demo-right">
            <h4 className="ls-section-title">Current User Data</h4>
            <pre className="ls-pre">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </ShowcaseContainer>

      <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-card">
          <ul className="usage-list">
            <li>Add a new user by providing name, email, and phone.</li>
            <li>Edit an existing user using the same form inputs.</li>
            <li>Remove user data completely from localStorage.</li>
            <li>Provide default values to prevent undefined state.</li>
            <li>Use <code>setValue</code> for add/edit and <code>removeItem</code> to delete.</li>
            <li>Ensure localStorage persistence across browser reloads.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
