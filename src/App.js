import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Component/Navbar";
import SideBar from "./Component/Sidebar";
import TopBar from "./Component/TopBar";
import ModalNewCustomer from "./Component/ModalNewCustpmer";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        // bgcolor: "gray",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <TopBar />
    </Box>
  );
}

export default App;
