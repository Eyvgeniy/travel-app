import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../slices/lang";

const values = ["en", "fr", "ru"];

export const SelectForm = (): JSX.Element => {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const history = useHistory();
  const { i18n } = useTranslation();
  const [value, setValue] = React.useState(lang);
  const handleChange = ({ target }) => {
    i18n.changeLanguage(target.value);
    setValue(target.value);
    dispatch(changeLang(target.value));
    history.push(`${history.location.pathname}?lang=${target.value}`);
  };

  return (
    <form className="d-flex mr-2">
      <select
        className="form-select"
        value={value}
        onChange={handleChange}
        aria-label="Default select example"
      >
        {values.map((value, idx) => (
          <option value={value} key={idx}>
            {value}
          </option>
        ))}
      </select>
    </form>
    // <select class="form-select" aria-label="Default select example">
    //   <option selected>Open this select menu</option>
    //   <option value="1">One</option>
    //   <option value="2">Two</option>
    //   <option value="3">Three</option>
    // </select>
  );
};
