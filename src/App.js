import React from "react";
import { useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "15px",
      display: "block",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      color: "#fff",
      cursor: "pointer",
    },
  },
};
function App() {
  const [sno, setSno] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState([]);

  const handleAddContact = (e, sno, name, phone) => {
    e.preventDefault();
    if (name && phone) {
      setSno(sno + 1);
      const newContact = { sno, name, phone };
      setUser([...user, newContact]);
    }
  };

  return (
    <div>
      <div style={style.form.container}>
        <h2 className="heading">React Phonebook</h2>
        <input
          style={style.form.inputs}
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          style={style.form.inputs}
          value={phone}
          placeholder="Enter Number"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <button
          style={style.form.submitBtn}
          type="button"
          onClick={(e) => handleAddContact(e, sno, name, phone)}
        >
          Add Contact
        </button>
      </div>
      <hr />
      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.tableCell}>Sno</th>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((contact, index) => {
            return (
              <tr key={index}>
                <td style={style.tableCell}>{contact.sno}</td>
                <td style={style.tableCell}>{contact.name}</td>
                <td style={style.tableCell}>{contact.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
