import { useState } from "react";
import { Typography } from "@mui/material";

export const ReadMore = ({ children }) => {
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <Typography>
      {readMore ? children.slice(0, 200) : children}
      <span
        onClick={toggleReadMore}
        style={{ color: "red", cursor: "pointer" }}
      >
        <b>{readMore ? " ...read more" : " show less"}</b>
      </span>
    </Typography>
  );
};
