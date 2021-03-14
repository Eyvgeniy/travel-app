import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeLang } from "../../slices/lang";

const values = ["en", "fr", "ru"];

export const SelectForm = (): JSX.Element => {
  const { filter, lang } = useSelector((state) => ({
    lang: state.lang,
    filter: state.countries.filter,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState(lang);
  const handleChange = ({ target }) => {
    setValue(target.value);
    dispatch(changeLang(target.value));
    console.log(history);
    if (filter) {
      history.push(
        `${history.location.pathname}&lang=${target.value}&filter=${filter}`,
      );
    } else {
      history.push(`${history.location.pathname}?lang=${target.value}`);
    }
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
