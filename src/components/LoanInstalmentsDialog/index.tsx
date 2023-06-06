import './index.scss';

import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetInstalments } from '../../loanSlice';

const LoanInstalmentsDialog = () => {
  const dispatch = useAppDispatch();
  const { instalments } = useAppSelector(state => state.loan);

  const onCloseDialog = () => {
    dispatch(resetInstalments());
  };

  return (
    <Dialog open={instalments.length > 0} className="loan-instalments-dialog">
      <DialogTitle>Loan Instalments</DialogTitle>
      <DialogContent>
        <Typography>
          Loan will be paid out in
          {instalments.length}
          {' '}
          instalments!
        </Typography>
        <div className="loan-instalments-dialog__instalments">
          {instalments.map(([instalmentId, instalmentAmount]) => (
            <Typography variant="h6">
              {instalmentId}
              :
              {' '}
              {instalmentAmount}
              €
            </Typography>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

LoanInstalmentsDialog.displayName = 'LoanInstalmentsDialog';

export default LoanInstalmentsDialog;
