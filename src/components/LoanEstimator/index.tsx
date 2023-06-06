import './index.scss';

import { Box, Button, TextField } from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  calculateLoanInstalments,
  updateAmount,
  updateInstalment,
  updateInterest
} from '../../loanSlice';

const LoanEstimator = () => {
  const dispatch = useAppDispatch();
  const {
    amount,
    interest,
    instalment
  } = useAppSelector(state => state.loan);

  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateAmount(+event.target.value));
  };

  const onInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInterest(+event.target.value));
  };

  const onInstalmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInstalment(+event.target.value));
  };

  const calculate = () => {
    dispatch(calculateLoanInstalments());
  };

  return (
    <Box className="loan-estimator__wrapper">
      <Box className="loan-estimator__fields-row">
        <TextField type="number" onChange={onAmountChange} value={amount} label="Amount" />
        <TextField
          type="number"
          onChange={onInterestChange}
          value={interest}
          label="Interest"
        />
        <TextField type="number" onChange={onInstalmentChange} value={instalment} label="Instalment" />
      </Box>
      <Button
        onClick={calculate}
        variant="contained"
      >
        Calculate instalments
      </Button>
    </Box>
  );
};

LoanEstimator.displayName = 'LoanEstimator';

export default LoanEstimator;
