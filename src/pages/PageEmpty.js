import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

import building from '../building.svg';

const PageEmpty = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${building})`,
        minHeight: 'calc(100vh - 64px - 170px)',
        boxSizing: 'border-box',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        mt: -2,
        pt: 8
      }}
    >
      <Typography align="center" variant="h1" mb={3} fontWeight="bold">
        Oops, we are not ready!
      </Typography>
      <Typography align="center" variant="h5" mb={3}>
        Come back soon
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button to="/" component={Link} size="large" color="secondary" variant="contained">Back Home</Button>
      </Box>
    </Box>
  );
}

export default PageEmpty;