import style from "./style.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UISkeleton } from "../../components/Skeleton";
import { CategoryData } from "../../middleware/category";
import { Box, Grid, Container, Typography } from "@mui/material";
import { MovieSlider, TopCardSlider } from "../../components/category/Slider";

export const Category = () => {
  const { name } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const res = CategoryData(name);
    setData(res);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  if (Object.keys(data).length === 0) {
    return <UISkeleton />;
  }

  return (
    <>
      <TopCardSlider arr={data.topSec} />
      <br />
      <br />
      <br />
      <Container maxWidth="xl">
        <Typography variant="h5">Featured Shows</Typography>
        <br />
        <Grid container spacing={1}>
          {data.featured &&
            data.featured.map((e, index) => {
              return (
                <Grid key={index} item md={2} xs={4}>
                  <Link to={`/player/${e.id}`}>
                    <div className={style.item}>
                      <img loading="lazy" src={e.image} alt="Card" />
                    </div>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      {data.sections &&
        data.sections.map((e, index) => {
          return (
            <Box key={index}>
              <Container maxWidth="xl">
                <Typography variant="h5">{e.label}</Typography>
                <br />
                <MovieSlider arr={e.data} />
              </Container>
              <br />
              <br />
              <br />
            </Box>
          );
        })}
    </>
  );
};
