import { Box, Skeleton } from "@mui/material";
import React from "react";

const DashBoardSkelton = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Skeleton
        variant="rectangular"
        width="full"
        height={118}
        className="mb-5"
      />

      {[...Array(3)].map((_, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginBottom: 2,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <Box key={index} sx={{ width: 220 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
            </Box>
          ))}
        </Box>
      ))}

      <Skeleton
        variant="rectangular"
        width="full"
        height={118}
        className="mb-5"
      />
    </Box>
  );
};

export default DashBoardSkelton;
