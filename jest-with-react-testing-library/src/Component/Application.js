import React from "react";

export default function Application(props) {
  return (
    <>
      <h1>Application</h1>
      <h2>section</h2>
      <p>All fiels are mendatory</p>
      <span title="close">X</span>
      <img src="" alt="profileImage" />
      <div data-testid="custom-element"> custom HTML element </div>
      <label>name</label>
      <input
        type="text"
        aria-label="name"
        placeholder="fullName"
        defaultValue="samir"
      />
      <textarea type="text" />
      <label>job location </label>
      <select>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Hydrabad</option>
      </select>
      <input type="checkbox" />
      <button>submit</button>
    </>
  );
}
