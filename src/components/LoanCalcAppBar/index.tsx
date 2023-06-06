import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import React from 'react';

const LoanCalcAppBar = () => (
  <AppBar position="static">
    <Typography variant="h4">Loan Calculator</Typography>
  </AppBar>
);

LoanCalcAppBar.displayName = 'LoanCalcAppBar';

export default LoanCalcAppBar;
