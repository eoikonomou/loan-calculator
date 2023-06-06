import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calculateInstalments } from './utils';

export type Instalments = [string, number][];

export interface LoanState {
  amount: number;
  interest: number;
  instalments: Instalments;
  instalment: number;
}

const initialState: LoanState = {
  amount: 0,
  interest: 0,
  instalment: 0,
  instalments: []
};

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    updateAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
      state.instalments = [];
    },
    updateInterest(state, action: PayloadAction<number>) {
      state.interest = action.payload;
      state.instalments = [];
    },
    updateInstalments(state, action: PayloadAction<Instalments>) {
      state.instalments = action.payload;
    },
    updateInstalment(state, action: PayloadAction<number>) {
      state.instalment = action.payload;
      state.instalments = [];
    },
    resetInstalments(state) {
      state.instalments = [];
    },
    calculateLoanInstalments(state) {
      state.instalments = calculateInstalments(state);
    }
  }
});

export const {
  updateAmount,
  updateInterest,
  calculateLoanInstalments,
  updateInstalment,
  resetInstalments
} = loanSlice.actions;

export default loanSlice.reducer;
