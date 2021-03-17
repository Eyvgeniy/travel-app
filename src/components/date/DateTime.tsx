import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { RootState } from '../../models/RootState';

export const DateTime = () => {

    const timeZone = useSelector((state: RootState) => state.countries.currentCountry.timeZone);

    const lang = useSelector((state: RootState) => state.lang);

    const formatDate = () => {
        const today = new Date();
        const options: object = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZone: timeZone
        };
        return new Intl.DateTimeFormat(lang, options).format(today);
    };

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanUp() {
            clearInterval(timer);
        };
    });

    return (
        <div className="date-box">
            <div className="date">{formatDate()}</div>
        </div>
    );
};

