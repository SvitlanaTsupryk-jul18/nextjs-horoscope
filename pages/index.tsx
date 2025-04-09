import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ZodiacSelector from "../components/ZodiacSelector";
import ThemeToggleButton from "../components/ThemeToggleButton";
import ZodiacDisplay from "../components/ZodiacDisplay";
import { zodiacSigns, getCatFact } from "../utils/api";
import Tabs from "../components/Tabs";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { sign, period, tab } = router.query;
  const [zodiac, setZodiac] = useState((sign as string) || "");
  const [days, setDays] = useState(parseInt(period as string) || 3);
  const [forecast, setForecast] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(parseInt(tab as string) || 0);

  useEffect(() => {
    if (sign) {
      setZodiac(sign as string);
    }
    if (period) {
      setDays(parseInt(period as string));
    }
    if (tab) {
      setActiveTab(parseInt(tab as string));
    }
  }, [sign, period, tab]);

  useEffect(() => {
    if (zodiac) {
      generateForecast();
      const query = {
        sign: zodiac,
        period: days.toString(),
        tab: activeTab,
      };
      router.push({ pathname: "/", query }, undefined, { shallow: true });
    }
  }, [zodiac, days]);

  const generateForecast = async () => {
    const newForecast = [];
    const index = zodiacSigns.indexOf(zodiac) + 1;
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(date);
      const formattedDate = date.toISOString().split("T")[0];
      const newDate =
        date.getFullYear() + date.getMonth() + date.getDate() - 2000;
      const health = newDate * 2 - index + i * 5;
      const relationship = (newDate - 33) * index ;
      const career = newDate + index - i * 5;
      const average = +((health + relationship + career) / 3).toFixed(0);
      const catFact = await getCatFact(average);

      newForecast.push({
        weekday,
        date: formattedDate,
        health,
        relationship,
        career,
        catFact,
      });
    }
    setForecast(newForecast);
  };

  return (
    <Layout>
      <h1>Horoscope Forecast</h1>
      <ThemeToggleButton />
      <div className="selector">
        <div>
          <ZodiacDisplay zodiac={zodiac} />
        </div>
        <ZodiacSelector onSelect={setZodiac} />
        <div className="switcher">
          <button
            className={days === 3 ? "active" : ""}
            onClick={() => {setDays(3); setActiveTab(0)}}
          >
            3 Days
          </button>
          <button
            className={days === 7 ? "active" : ""}
            onClick={() => {setDays(7);setActiveTab(0)}}
          >
            7 Days
          </button>
        </div>
      </div>

      {forecast.length > 0 ? (
        <Tabs forecast={forecast}/>
      ) : (
        <p className="choose">Please, choose your zodiac sigh</p>
      )}
    </Layout>
  );
};

export default Home;
