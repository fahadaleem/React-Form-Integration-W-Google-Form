import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({
    email: {
      id: 1568096269,
      value: ""
    },
    password: {
      id: 564078513,
      value: ""
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLSdd1SoEKQ-9BU02196GwdVf994D6ZemIIGGNDkkyNgih0xohg/formResponse";

    const formData = new FormData();

    formData.append(`entry.${data.email.id}`, data.email.value);
    formData.append(`entry.${data.password.id}`, data.password.value);

    axios({
      url,
      method: "POST",
      data: formData,
      responseType: "json"
    }).then((rep) => console.log(rep.data));
  };

  return (
    <div className="App">
      <h1>Submission HTML Form Response to Google Form</h1>
      <form>
        <label>Enter Email: </label>
        <br />
        <input
          type="text"
          value={data.email.value}
          onChange={(e) =>
            setData({
              ...data,
              email: {
                ...data.email,
                value: e.target.value
              }
            })
          }
          id="email"
          name=""
          placeholder="Enter Username"
        />
        <br />
        <br />
        <label>Enter Password: </label>
        <br />
        <input
          type="text"
          id="email"
          name=""
          placeholder="Enter Password"
          value={data.password.value}
          onChange={(e) =>
            setData({
              ...data,
              password: {
                ...data.password,
                value: e.target.value
              }
            })
          }
        />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
