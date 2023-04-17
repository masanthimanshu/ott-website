import cards from "../data/cards.json";
import topCard from "../data/topCard.json";
import featured from "../data/featured.json";
import channels from "../data/liveChannels.json";

export const CategoryData = (name) => {
  const res = {
    topSec: [topCard[name], topCard[name]],
    featured,
    sections: [
      {
        label: "Latest Movies",
        data: cards,
      },
      {
        label: "Live Channels",
        data: [...channels, ...channels],
      },
      {
        label: "Top Web Series",
        data: cards,
      },
    ],
  };

  return res;
};
