import { Button, Typography, Link as MUILink } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import page404 from '../page404.svg';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Page404 = () => {
  return (

    <Box sx={{ backgroundImage: `url(${page404})`,
              height: '100vh',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'}}
              display='flex'
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
      >
      <Typography variant='h3' mt={'3rem'}>4<SentimentVeryDissatisfiedIcon fontSize='0.1rem'/>4</Typography>
      <Typography variant='h1' mb={'3rem'}>Oops, page not found</Typography>
      <Typography variant='h5' mb={'3rem'}>Your must have picked the wrong door! The page you've been searching for is not found on this server.</Typography>
      <MUILink href="/">
        <Button size='large' color='secondary' variant='contained'>Back Home</Button>
      </MUILink>
    </Box>

  );
}

export default Page404;