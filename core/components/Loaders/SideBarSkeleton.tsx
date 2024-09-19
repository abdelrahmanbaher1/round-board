import { Box, Skeleton } from "@mui/material";

const SideBarSkeleton = ({
  position = "left",
  width = 256,
}: {
  position?: "left" | "right";
  width?: number;
}) => {
  return (
    <Box
      sx={{
        width: width,
        height: "100vh",
        position: "fixed",
        top: 0,
        right: position === "right" ? 0 : undefined,
        left: position === "left" ? 0 : undefined,
        padding: 2,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={width}
        height={64}
        sx={{ mb: 2 }}
      />
      <Skeleton variant="rectangular" width={200} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={220} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={180} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={240} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={220} height={40} sx={{ mb: 1 }} />
    </Box>
  );
};

export default SideBarSkeleton;
