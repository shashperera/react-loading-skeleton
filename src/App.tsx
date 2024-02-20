import React from 'react';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import './App.css'; // Import CSS for styling
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={8}>
      <SkeletonLoader loading />
      <Grid item xs={12} md={6}>
        <SkeletonLoader />
      </Grid>
    </Grid>
  );
}

export default App;
