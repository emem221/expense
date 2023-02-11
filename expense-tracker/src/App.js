import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import "./App.css";
import theme from "./ui/theme";
import { GlobalProvider } from "./logic/GlobalState";
import Balance from "./components/Balance";
import { Grid } from "@mui/material";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Header />
        <Grid className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Grid>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
