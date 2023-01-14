import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../images/logo512.png'


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={logo} 
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}