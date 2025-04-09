import { useState, useEffect } from "react";
import { ForecastTabProps } from "../types/ForecastTabProps";
import ForecastTab from "./ForecastTab";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  forecast: ForecastTabProps[];
};

const Tabs: React.FC<Props> = ({ forecast }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    parseInt(router.query.tab as string) || 0
  );
  useEffect(() => {
    if (router.query.tab) {
      setActiveTab(parseInt(router.query.tab as string));
    }
  }, [router.query.tab]);

  const changeActiveDays = (tab: number) => {
    setActiveTab(tab);
    router.push({ query: { ...router.query, tab } }, undefined, {
      shallow: true,
    });
  };

  const { date, health, relationship, career, catFact } = forecast[activeTab];
  const img =
    Math.max(health, relationship, career) === health
      ? "/images/health.svg"
      : Math.max(health, relationship, career) === relationship
      ? "/images/love.svg"
      : "/images/work.svg";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {forecast.map((day, index) => (
          <div
            onClick={() => changeActiveDays(index)}
            key={index}
            className={activeTab === index ? "tab-item active" : "tab-item"}
          >
            <ForecastTab key={index} {...day} />
            {activeTab === index && <p className="tab-item-decor"></p>}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div>
          <h3>Best off all:</h3>
          <Image src={img} alt="Best icon" width={100} height={100} />
        </div>
        <div className="tab-content-text">
          <p>Date: {date}</p>
          <p>Health: {health}</p>
          <p>Relationship: {relationship}</p>
          <p>Career: {career}</p>
          <p>Forecast: {catFact}</p>
          <div>
            <button onClick={copyToClipboard}>Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
