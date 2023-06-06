import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

import LoanCalcAppBar from './components/LoanCalcAppBar';
import LoanEstimator from './components/LoanEstimator';
import LoanInstalmentsDialog from './components/LoanInstalmentsDialog';
import { theme } from './utils';

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Box className="loancalc__app">
        <LoanInstalmentsDialog />
        <LoanCalcAppBar />
        <LoanEstimator />
      </Box>
    </StyledEngineProvider>
  </ThemeProvider>
);

App.displayName = 'App';

export default App;
