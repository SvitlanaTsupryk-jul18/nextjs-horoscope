import React from "react";
import { ForecastTabProps } from "../types/ForecastTabProps";
import Image from "next/image";

const ForecastCard: React.FC<ForecastTabProps> = ({
  weekday,
  date,
  health,
  relationship,
  career,
}) => {
  return (
    <div className="tab-inner">
      <h3>{weekday}</h3>
      <h4>{date}</h4>
      <p>
        <Image
          src="/icons/health.svg"
          alt="Health icon"
          width={16}
          height={16}
        />
        {health}
      </p>
      <p>
        <Image
          src="/icons/relationships.svg"
          alt="Relationship icon"
          width={16}
          height={16}
        />
        {relationship}
      </p>
      <p>
        <Image
          src="/icons/career.svg"
          alt="Career icon"
          width={16}
          height={16}
        />
        {career}
      </p>
    </div>
  );
};

export default ForecastCard;
