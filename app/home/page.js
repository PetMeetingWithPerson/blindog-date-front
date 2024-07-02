// app/home/page.js
import * as React from 'react';
import { Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the home page of our Next.js app using Material-UI.
      </Typography>
      <Button variant="contained" color="secondary">
        Learn More
      </Button>
    </div>
  );
}
