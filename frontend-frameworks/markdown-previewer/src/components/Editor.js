import { Grid, Typography, IconButton, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { OpenInFull } from '@mui/icons-material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Editor({ text, setText }) {
  const [expand, setExpand] = useState(false)
  
  const textAreaStyles = {
    width: '99%',
    margin: '0',
    padding: '15px 0px 0px 15px',
    height: expand ? '100vh' : '50vh',
    minHeight: '150px',
    resize: 'vertical',
    border: 'none',
    ':focus': {
      border: 'none'
    },
    ':active': {
      border: 'none'
    }
  }

  const handleExpand = () => {
    setExpand(!expand)
  }

  return (
    <>
      <Grid container item xs={12} md={8} justifyContent="center" component={Paper} mt={4} elevation={10}>
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '60px',
            bgcolor: 'primary.dark',
            borderRadius: 0
          }}
          component={Paper}
          elevation={18}
          mb={4}
        >
          <Grid container xs={12} justifyContent="space-between" p={2}>
            <Typography variant="h5" p={1} fontWeight="400" color="white">Editor</Typography>
            <IconButton variant="contained" onClick={handleExpand}><OpenInFull /></IconButton>
          </Grid>
        </Box>
        <textarea
          id="editor"
          onChange={(e) => setText(e.target.value)}
          value={text}
          style={textAreaStyles}
        />
      </Grid>
    </>
  )
}

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
}
