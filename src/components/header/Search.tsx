import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormControl } from "react-bootstrap";
import { changeFilter } from "../../slices/countries";
import "./search.css";

export const Search = (): JSX.Element => {
  const filter = useSelector((state) => state.countries.filter);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  const clearFilter = () => {
    dispatch(changeFilter(""));
  };

  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Form inline>
      <div className="wrapper">
        <input
          type="text"
          placeholder=""
          className="mr-sm-3"
          value={filter}
          ref={inputRef}
          onChange={handleChange}
          autoComplete="off"
        />
        <button
          type="reset"
          className={filter !== "" ? "active" : ""}
          onClick={clearFilter}
        >
          &times;
        </button>
      </div>
      <Button variant="outline-light">Search</Button>
    </Form>
  );
};
