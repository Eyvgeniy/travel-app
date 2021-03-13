import * as React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormControl } from "react-bootstrap";
import { changeFilter } from "../../slices/countries";

export const Search = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setValue(target.value);
    dispatch(changeFilter(target.value));
  };
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search by Country or Capital"
        className="mr-sm-3"
        value={value}
        ref={inputRef}
        onChange={handleChange}
        autoComplete="off"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
  );
};
