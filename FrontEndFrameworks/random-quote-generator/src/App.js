/** @format */
import { Suspense } from 'react';
import NavBar from './NavBar';
import Quote from './Quote';
import { ColorModeProvider } from './ColorModeContext';
import { Grid } from '@mui/material';
import FallbackLoading from './FallbackLoading';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackError from './FallbackError';
function App() {
  return (
    <>
      <ColorModeProvider>
        <Suspense fallback={<FallbackLoading />}>
          <Grid
            container
            sx={{ minHeight: '100vh', bgcolor: 'background.paper' }}
          >
            <NavBar />
            <ErrorBoundary FallbackComponent={FallbackError}>
              <Quote />
            </ErrorBoundary>
          </Grid>
        </Suspense>
      </ColorModeProvider>
    </>
  );
}

export default App;
