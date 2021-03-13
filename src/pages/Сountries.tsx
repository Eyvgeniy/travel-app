import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../components/cards/Cards";
import { fetchData } from "../slices/countries";

const Сountries = (): JSX.Element => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => ({
    lang: state.lang,
    list: state.countries.list,
  }));

  useEffect(() => {
    dispatch(fetchData(lang));
  }, [lang]);

  return <Cards />;
};

export default Сountries;
