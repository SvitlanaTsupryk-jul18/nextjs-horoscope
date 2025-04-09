import axios from 'axios';

export const zodiacSigns:string[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 
  'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 
  'Capricorn', 'Aquarius', 'Pisces'
];

const apiClient = axios.create({
  baseURL: 'https://catfact.ninja',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCatFact = async (maxLength: number) => {
  const response = await apiClient.get('/fact', {
    params: {
      max_length: maxLength,
    },
  });
  return response.data.fact;
};

export const zodiacImages: { [key: string]: string } = {
  Aries: "/images/aries.svg",
  Taurus: "/images/taurus.svg",
  Gemini: "/images/gemini.svg",
  Cancer: "/images/cancer.svg",
  Leo: "/images/leo.svg",
  Virgo: "/images/virgo.svg",
  Libra: "/images/libra.svg",
  Scorpio: "/images/scorpio.svg",
  Sagittarius: "/images/sagittarius.svg",
  Capricorn: "/images/capricorn.svg",
  Aquarius: "/images/aquarius.svg",
  Pisces: "/images/pisces.svg",
};
