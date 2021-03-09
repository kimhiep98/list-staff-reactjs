import React from "react";
import "./ListStaff.css";
import { useState, useEffect, useRef, useReducer } from "react";
import { reducer } from "./ReducerSort";
import { data } from "../data";
import Staff from "./staff";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
const defaultState = {
  people: data,
  buttonType: false,
};
function ListStaff() {
  const [entries, setEntries] = useState(8);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const entriesValue = (entries) => {
    let list = [];
    for (let i = 1; i <= entries; i++) {
      list.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };

  const handlePrev = () => {};
  const handleNext = () => {};

  const handleSort = (e) => {
    const sortType = e.currentTarget.value;
    const btnType = state.buttonType;

    if (sortType === "fname" && btnType === false) {
      console.log("atc");
      dispatch({ type: "fNAME_INCRE" });
    }
    if (sortType === "fname" && btnType === true) {
      console.log("atc1");
      dispatch({ type: "fNAME_DECRE" });
    }

    if (sortType === "lname" && btnType === false) {
      dispatch({ type: "lNAME_INCRE" });
    }
    if (sortType === "lname" && btnType === true) {
      dispatch({ type: "lNAME_DECRE" });
    }

    if (sortType === "email" && btnType === false) {
      dispatch({ type: "EMAIL_INCRE" });
    }
    if (sortType === "email" && btnType === true) {
      dispatch({ type: "EMAIL_DECRE" });
    }

    // if (type === "date" && btnType === false) {
    //     dispatch({ type: 'DATE_INCRE'});
    // }
    // if (type === 'date' && btnType === true) {
    //     dispatch({type : 'DATE_DECRE'})
    // }
  };
  // useEffect(() => {
  // },[state.buttonType])

  return (
    <>
      <div className="list-staff">
        <div className="tool-bar">
          <p>
            Show{" "}
            {
              <select id="entries-quantum" name="entries-quantum">
                {entriesValue(entries)}
              </select>
            }{" "}
            entries
          </p>
          <input type="text" placeholder="Search" />
        </div>
        <div className="list-info">
          <div className="list-title">
            <p>
              Firstname{" "}
              <button value="fname" onClick={handleSort}>
                {state.buttonType ? (
                  <FaSortAlphaUp size="20" />
                ) : (
                  <FaSortAlphaDown size="20" />
                )}
              </button>
            </p>
            <p>
              Lastname{" "}
              <button value="lname" onClick={handleSort}>
                {state.buttonType ? (
                  <FaSortAlphaUp size="20" />
                ) : (
                  <FaSortAlphaDown size="20" />
                )}
              </button>
            </p>
            <p>
              Email{" "}
              <button value="email" onClick={handleSort}>
                {state.buttonType ? (
                  <FaSortAlphaUp size="20" />
                ) : (
                  <FaSortAlphaDown size="20" />
                )}
              </button>
            </p>
            <p>
              Date{" "}
              <button value="date" onClick={handleSort}>
                {state.buttonType ? (
                  <FaSortAlphaUp size="20" />
                ) : (
                  <FaSortAlphaDown size="20" />
                )}
              </button>
            </p>
            <p>Profile</p>
          </div>
          <Staff people={[...state.people]} />
          <div className="pagination">
            <button className="prev" onClick={handlePrev}>
              Previous
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListStaff;
