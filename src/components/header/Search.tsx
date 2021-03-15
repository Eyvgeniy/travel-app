import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeFilter } from "../../slices/countries";

export const Search = (): JSX.Element => {
  const { filter } = useSelector((state) => state.countries.filter);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    <form className="d-flex">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        value={filter}
        ref={inputRef}
        onChange={handleChange}
        autoComplete="off"
      />

      <button className="btn btn-outline-secondary">{t("search")}</button>
    </form>
  );
};
