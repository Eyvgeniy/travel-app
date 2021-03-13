import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../slices/lang";

const values = ["en", "fr", "ru"];

export const SelectForm = (): JSX.Element => {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(lang);
  const handleChange = ({ target }) => {
    setValue(target.value);
    dispatch(changeLang(target.value));
  };

  return (
    <form>
      <select value={value} onChange={handleChange}>
        {values.map((value, idx) => (
          <option value={value} key={idx}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
};
