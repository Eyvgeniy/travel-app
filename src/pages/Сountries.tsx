import React, { useEffect, useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Cards } from "../components/cards/Cards";
import { fetchData, changeFilter } from "../slices/countries";

const Сountries = (): JSX.Element => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => ({
    lang: state.lang,
    list: state.countries.list,
  }));

  const memoDispatch = useCallback(() => {
    dispatch(fetchData(lang));
  }, [lang, dispatch]);

  useEffect(() => {
    memoDispatch();
  }, [lang]);

  return <Cards />;
};

export default Сountries;
