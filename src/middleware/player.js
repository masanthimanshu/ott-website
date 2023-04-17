import cards from "../data/cards.json";
import allData from "../data/allData.json";

export const PlayerData = (videoId) => {
  const data = allData.filter((e) => e.id === videoId);

  const res = {
    player: data[0],
    recommended: cards,
  };

  return res;
};
