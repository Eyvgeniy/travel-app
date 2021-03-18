import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../slices/lang";
import { RootState } from "models/RootState";

const values = ["en", "fr", "ru"];

export const SelectForm = (): JSX.Element => {
  const lang = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  const history = useHistory();
  const { i18n } = useTranslation();
  const [value, setValue] = React.useState(lang);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    setValue(e.target.value);
    dispatch(changeLang(e.target.value));
    history.push(`${history.location.pathname}?lang=${e.target.value}`);
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
  );
};
