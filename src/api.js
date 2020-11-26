//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year

const currentYear = new Data().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currnetDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games

const popular_games = `games?dates=${lastYear},${currnetDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_Games}`;
