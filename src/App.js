import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Component/Navbar";

import TopBar from "./Component/TopBar";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <TopBar />
    </Box>
  );
}

export default App;
