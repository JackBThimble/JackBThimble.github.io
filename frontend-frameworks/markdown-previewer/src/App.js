import React, { useState, useEffect } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Markdown from './Markdown.md'
import { Grid, } from '@mui/material'
function App() {
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(Markdown)
      .then((res) => res.text())
      .then((md) => {
        setText(md)
      })
  }, [])

  return (
    <>
      <Grid container xs={12} justifyContent="center"
        sx={{bgcolor: 'primary.light'}}>
        <Grid container item xs={12} justifyContent="center">
          <Editor text={text} setText={setText} />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Preview text={text}/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
