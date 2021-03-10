import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import routes from "../routes";
import { addCurrentCountry } from "../slices/countries";

const Country = (): JSX.Element => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.countries.actualId);
  useEffect(() => {
    const getPlacesData = async () => {
      try {
        const { data } = await axios.get(routes.getCountry(id));
        dispatch(addCurrentCountry({ data }));
      } catch (err) {
        console.error(err);
      }
    };
    getPlacesData();
  });
  return <p>Country data</p>;
};

export default Country;
