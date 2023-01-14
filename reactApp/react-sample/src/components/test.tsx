import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avater from './avater'

export default function BasicButtons() {



  return (

  <Grid container spacing={8} justifyContent="flex-end">
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
    <Grid item xs={4}>
      <Avater/>
    </Grid>
  </Grid>

  );
}