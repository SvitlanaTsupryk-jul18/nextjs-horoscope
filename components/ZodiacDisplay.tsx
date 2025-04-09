import React from "react";
import Image from "next/image";
import { zodiacImages } from "../utils/api";

interface ZodiacDisplayProps {
  zodiac: string;
}

const ZodiacDisplay: React.FC<ZodiacDisplayProps> = ({ zodiac }) => {
  if (!zodiac) return null;

  return (
    <div className="zodiacDisplay">
      <Image src={zodiacImages[zodiac]} alt={zodiac} width={100} height={100} />
      <h2>{zodiac}</h2>
    </div>
  );
};

export default ZodiacDisplay;
