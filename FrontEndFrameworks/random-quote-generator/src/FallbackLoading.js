/** @format */

import { Backdrop, CircularProgress } from '@mui/material';

export default function FallbackLoading() {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: theme => theme.zIndex + 1,
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
