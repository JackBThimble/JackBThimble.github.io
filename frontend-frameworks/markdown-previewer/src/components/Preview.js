import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import { Grid, Typography, IconButton } from '@mui/material'
import { OpenInFull } from '@mui/icons-material'
import './css/Preview.css'

export default function Preview({ text }) {
  
  const getMarkdownText = () => {
    var rawMarkup = marked(
      text, { 
        breaks: true, 
        gfm: true, 
      })
    return { __html: rawMarkup }
  }

  const [markdownText, setMarkdownText] = useState(getMarkdownText())
  useEffect(() => {
    setMarkdownText(getMarkdownText())
  }, [text])
  

  return (
    <>
      <Grid xs={12} md={8} container item justifyContent="center">
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '60px',
            bgcolor: 'primary.dark',
            mt: 4}}
        >
          <Grid container item xs={12} justifyContent="space-between" p={2}>
            <Typography variant="h5" p={1} fontWeight="400" color="white">Preview</Typography>
            <IconButton><OpenInFull /></IconButton>
          </Grid>
        </Box>
        <Box
          sx={{
            height: '100vh', 
            overflow: 'scroll',
            width: '100%',
            align: 'center',
            bgcolor: 'white',
            p: '15px',
            mb: 4
          }}
          component="div"
        >
          <div
            dangerouslySetInnerHTML={markdownText}
            className="Preview"
            id="preview"
          >
            
          </div>
        </Box>
      </Grid>
    </>
  )
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
}