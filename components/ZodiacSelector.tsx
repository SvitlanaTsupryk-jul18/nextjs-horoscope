import React from "react";
import { zodiacSigns } from "../utils/api";

interface ZodiacSelectorProps {
  onSelect: (zodiac: string) => void;
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ onSelect }) => {
  return (
    <select
      onChange={(e) => {
        onSelect(e.target.value);
      }}
    >
      <option value="">Select Zodiac Sign</option>
      {zodiacSigns.map((sign, index) => (
        <option key={index} value={sign}>
          {sign}
        </option>
      ))}
    </select>
  );
};

export default ZodiacSelector;
