// app/about/page.js
import * as React from 'react';
import { Typography, Button } from '@mui/material';

export default function AboutPage() {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the about page of our Next.js app using Material-UI.
      </Typography>
      <Button variant="contained" color="primary">
        Contact Us
      </Button>
    </div>
  );
}
