import { useEffect, useState } from "react";
import Select from "react-select";

import "bootstrap/dist/css/bootstrap.min.css";

export const Selection = () => {
  let [source, setSource] = useState([]);
  let [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch("/ReactProject1/db.json")
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something Went Wrong");
        }
      })
      .then((data) => {
        console.log(data.ticket_booking);
        let dataArray = data.ticket_booking;
        let transformedOptionsSource = dataArray.map((item) => ({
          value: item.source,
          label: item.source,
        }));
        let transformedOptionsDestination = dataArray.map((item) => ({
          value: item.destination,
          label: item.destination,
        }));
        setSource(transformedOptionsSource);
        setDestination(transformedOptionsDestination);
      })
      .catch((error) => {
        alert(error, "Something Went Wrong");
      });
  }, []);

  let toggler = (event) => {
    console.log(event.target);
  };

  let customStyle = {
    control: (provided) => ({
      ...provided,

      topLeftRadius: "10px",
      bottomLeftRadius: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "green" : "yellow",
    }),
  };

  return (
    <>
      <div className="conatiner d-flex bg-danger p-4">
        <Select
          options={source}
          className="w-25"
          styles={customStyle}
          placeholder="From"
          name="From"
        />

        <button className="btn btn-primary rounded-0" onClick={toggler}>
          toggle
        </button>

        <Select
          options={destination}
          className="w-25"
          styles={customStyle}
          placeholder="To"
          name="To"
        />
      </div>
    </>
  );
};

export const Dropdown = () => {
  let [incrementValue, setIncrement] = useState(0);

  let increment = (e) => {
    e.preventDefault();
    setIncrement(incrementValue + 1);
  };

  let decrement = (e) => {
    e.preventDefault();
    setIncrement(incrementValue - 1);
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li className="ms-2 mb-2 text-center">
            Adult <p>&gt; 12 Years</p>
            <button
              className="rounded-circle mx-3 btn btn-outline-success"
              onClick={increment}
            >
              +
            </button>
            <span>{incrementValue}</span>
            <button className="rounded-circle mx-4 btn btn-outline-success">
              -
            </button>
          </li>
          <li className="ms-2 mb-2 text-center">
            Childrens
            <p>2-12 Years</p>
            <button className="rounded-circle mx-3 btn btn-outline-success">
              +
            </button>
            <span>{incrementValue}</span>
            <button className="rounded-circle mx-4 btn btn-outline-success">
              -
            </button>
          </li>
          <li className="ms-2 mb-2 text-center">
            Infants
            <p>&gt; 12 Years</p>
            <button className="rounded-circle mx-3 btn btn-outline-success">
              +
            </button>
            <span>{incrementValue}</span>
            <button className="rounded-circle mx-4 btn btn-outline-success">
              -
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
