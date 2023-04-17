import { Link } from "react-router-dom";
import SideNavData from "../../data/navigation.json";
import { Box, Drawer, Typography } from "@mui/material";

export const SideDrawer = ({ status }) => {
  return (
    <Drawer
      sx={{
        zIndex: "2",
        width: "200px",
        position: "relative",
        "& .MuiDrawer-paper": {
          backgroundColor: "black",
          width: "250px",
          border: 0,
        },
      }}
      open={status}
      variant="persistent"
      anchor="left"
    >
      <Box>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>

      <Box sx={{ pl: 4 }}>
        {SideNavData.map((e, index) => {
          return (
            <Box key={index}>
              <Link to={e.url}>
                <Typography color="white">
                  <b>{e.name}</b>
                </Typography>
              </Link>
              <br />
              <br />
            </Box>
          );
        })}
      </Box>
    </Drawer>
  );
};
