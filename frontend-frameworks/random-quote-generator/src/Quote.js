/** @format */

import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useAxios, refetch } from 'use-axios';
import { FormatQuote, Twitter } from '@mui/icons-material';

export default function Quote() {
  const { data } = useAxios('https://api.quotable.io/random');

  return (
    <>
      <Grid
        container
        xs={12}
        justifyContent="center"
        sx={{ overflowY: 'scroll' }}
      >
        <Grid item xs={11} md={8} sx={{ justifyContent: 'center' }} mt="32px">
          <Box component={Paper} elevation={8} p={3}>
            <Box xs={4} id="quote-box">
              <Typography variant="h4" align="center" id="text">
                <sup>
                  <FormatQuote
                    sx={{ transform: 'rotate(180deg)' }}
                    fontSize="medium"
                  />
                </sup>
                {data.content}
                <sup>
                  <FormatQuote fontSize="medium" align="right" />
                </sup>
              </Typography>

              <Typography variant="h5" align="right" id="author">
                - {data.author}
              </Typography>
              <Grid container justifyContent="space-around" pt={2}>
                <Button
                  variant="outlined"
                  href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${data.content}"%20${data.author}`}
                  id="tweet-quote"
                >
                  <Twitter />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => refetch('https://api.quotable.io/random')}
                  id="new-quote"
                >
                  New Quote
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
