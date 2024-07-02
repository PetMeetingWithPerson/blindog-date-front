// app/page.js
import * as React from 'react';
import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>
        Welcome to Next.js with Material-UI
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
