/** @format */

import React, { useContext } from 'react';
import {
  styled,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { ColorModeContext } from './ColorModeContext';
import { DarkMode, WbSunny } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  position: 'relative',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function NavBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
        <StyledToolbar>
          <Box
            sx={{
              alignSelf: 'flex-end',
              position: 'absolute',
              top: theme.spacing(2),
              right: theme.spacing(2),
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="select light or dark theme"
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === 'dark' ? (
                <WbSunny sx={{ fontSize: '3rem' }} />
              ) : (
                <DarkMode sx={{ fontSize: '3rem' }} />
              )}
            </IconButton>
          </Box>
          <Typography variant="h3" noWrap component="div" sx={{ flexGrow: 1 }}>
            Quotes!
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
