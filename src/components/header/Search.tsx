import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { changeFilter } from "../../slices/countries";
import "./search.css";

export const Search = (): JSX.Element => {
  const { filter, lang } = useSelector((state) => ({
    filter: state.countries.filter,
    lang: state.lang,
  }));
  console.log(filter);
  // const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target }) => {
    // setValue(target.value);
    dispatch(changeFilter(target.value));
    if (target.value === "") {
      history.push(`${history.location.pathname}?lang=${lang}`);
    } else {
      history.push(
        `${history.location.pathname}?lang=${lang}&filter=${target.value}`,
      );
    }
  };

  const clearFilter = () => {
    dispatch(changeFilter(""));
    history.push(`${history.location.pathname}?lang=${lang}`);
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
