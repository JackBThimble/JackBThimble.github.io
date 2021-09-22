/** @format */

import { Grid, Box, Paper, Typography } from '@mui/material';

export default function FallbackError({ error, componentStack }) {
  return (
    <>
      <Grid container xs={12} justifyContent="center">
        <Grid item xs={10} sx={{ justifyContent: 'center' }}>
          <Box
            component={Paper}
            elevation={18}
            p={3}
            justifyContent="center"
            sx={{ display: 'flex' }}
          >
            <Box justifySelf="center">
              <Typography variant="h6">
                Oops! A request error occured!
              </Typography>
              <Typography variant="body1">url: {error.config.url}</Typography>
              <Typography variant="body1">
                status: {error.response.status}
              </Typography>
              <Typography variant="body1">
                statusText: {error.response.statusText}
              </Typography>
              <Typography variant="body1">
                statusMessage: {error.response.data.statusMessage}
              </Typography>
              <Typography variant="body1">
                Stacktrace: {componentStack}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
