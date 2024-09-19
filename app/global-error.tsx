"use client";

import { Button } from "@mui/material";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("Error Boundary in Root:", error);
  return (
    <div>
      <img src="" alt="Error" width={120} height={120} />
      <h2>Oh no! Something broke</h2>
      <p>Sorry about this, please bear with us as we try to sort this out</p>
      <Button onClick={() => window.location.reload()} variant="outlined">
        Try Again
      </Button>
    </div>
  );
}
