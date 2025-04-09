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

const isGithubPages = process.env.NODE_ENV === "production";
const repoName = "nextjs-horoscope";
export const basePath = isGithubPages ? `/${repoName}` : "";

export const zodiacImages: { [key: string]: string } = {
  Aries: `${basePath}/images/aries.svg`,
  Taurus: `${basePath}/images/taurus.svg`,
  Gemini: `${basePath}/images/gemini.svg`,
  Cancer: `${basePath}/images/cancer.svg`,
  Leo: `${basePath}/images/leo.svg`,
  Virgo: `${basePath}/images/virgo.svg`,
  Libra: `${basePath}/images/libra.svg`,
  Scorpio: `${basePath}/images/scorpio.svg`,
  Sagittarius: `${basePath}/images/sagittarius.svg`,
  Capricorn: `${basePath}/images/capricorn.svg`,
  Aquarius: `${basePath}/images/aquarius.svg`,
  Pisces: `${basePath}/images/pisces.svg`,
};
