import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import page404 from '../page404.svg';

const Page404 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${page404})`,
        minHeight: 'calc(100vh - 64px - 170px)',
        boxSizing: 'border-box',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        mt: -2,
        pt: 8
      }}
    >
      <Typography align="center" variant="h2" mt={3} display="flex" alignItems="center" justifyContent="center">
        4<SentimentVeryDissatisfiedIcon fontSize="inherit"/>4
      </Typography>
      <Typography align="center" variant="h1" mb={3} fontWeight="bold">
        Oops, page not found
      </Typography>
      <Typography align="center" variant="h5" mb={3}>
        You must have picked the wrong door!<br/>
        The page you've been searching for is not found on this server.
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button to="/" component={Link} size="large" color="secondary" variant="contained">Back Home</Button>
      </Box>
    </Box>
  );
}

export default Page404;