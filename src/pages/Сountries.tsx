import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Cards } from "../components/cards/Cards";
import { addCountries } from "../slices/countries";
import routes from "../routes";

const Сountries = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const { data } = await axios.get(routes.getCountries());
        await dispatch(addCountries({ data }));
      } catch (err) {
        console.error(err);
      }
    };
    fetchCountriesData();
  }, []);

  return <Cards />;
};

export default Сountries;
