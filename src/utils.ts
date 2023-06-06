import { createTheme, Theme } from '@mui/material';

import { Instalments, LoanState } from './loanSlice';

// eslint-disable-next-line no-unused-vars
type ApplyInterestFn = (a: number, b: number) => number;

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#000089',
      contrastText: 'white'
    }
  }
});

export const applyInterest: ApplyInterestFn = (amount, interest) => (
  amount + amount * (interest / 100)
);

export const calculateInstalments = (loanInfo: LoanState): Instalments => {
  const instalments = [];
  const { amount, instalment, interest } = loanInfo;
  let remainingAmount = applyInterest(amount, interest);
  while (remainingAmount >= instalment) {
    instalments.push(instalment);
    remainingAmount -= instalment;
    if (instalments.length % 12 === 0) {
      remainingAmount = applyInterest(remainingAmount, interest);
    }
  }
  if (remainingAmount) {
    instalments.push(remainingAmount);
  }
  return instalments.map((instalmentAmount, index) => ([`Instalment #${index + 1}`, instalmentAmount]));
};
