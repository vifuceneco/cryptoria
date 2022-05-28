import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import pic from '../ilustracion.png';

const About = () => {
  return(
    <Container sx={{ position: 'relative' }}>
      <Typography variant="h3" component="h1" mb={3}>About me</Typography>
        <Box sx={{ maxWidth: 700 }}>
          <Typography sx={{ fontSize: '1.5rem', opacity: .9 }} mb={3}>
            Hi! Every meeting is best with a cup of coffee, so I hope you have one at hand ☕.<br/>
          </Typography>
          <Typography mb={2} lineHeight={2}>
            You don't have to look too far to find out that <b>my name is Victoria</b>. This world came to me with my first computer back in the 2000s 💻. At that point I was <b>developing broken games that I REALLY wanted to play</b>. That and drawing with <b>Paint</b> 🖌 for countless hours but I digress.
          </Typography>
          <Typography mb={2} lineHeight={2}>
            Later in life, my high school had an IT orientation where I pinned down a lot of the basics. This made me confident in pursuing a <b>computer engineering degree</b> 👩‍🎓<br/>
            Paths of life are not always so straight and I ended up at administration and accountancy for many years.<br/>
            Pandemic hit and along with a the virus and the hectic sanitary measures, it brought time. <b>Time to learn and practice</b> to learn by my own, then courses to learn from home 🏡. And to top it all off, my beloved code partner: <b>Kero the cat</b> 😼.
          </Typography>
          <Typography mb={2} lineHeight={2}>
            When I stared with HTML and CSS, I hated design. I couldn't <b>even think</b> of how to style a button. Then I met JavaScript and to be honest, I was missing styles and buttons.<br/>
            I was surprised enough to find how <b>I enjoyed solving something after hours ⏱</b> of hard work just as I expected.<br/>
            Eventually with time, practice and many projects under my belt, I came to enjoy both sides of the process.<br/>
            Cryptoria is one of <b>many</b> stepping stones on my path of becoming an awesome developer ✨
          </Typography>
          <Typography mb={2} lineHeight={2}>
            I hope you enjoy this project as much as I enjoyed doing it.<br/>
            See you soon! 👋🏻
          </Typography>
        </Box>
        <Box
          sx={{
            opacity: 0.5,
            position: 'absolute',
            right: 0,
            bottom: '-1rem',
            zIndex: -1,
            width: '35%',
            '@media (min-width: 1200px)': {
              width: 600,
              opacity: 0.7,
              maxHeight: 700
            },
            '@media (max-width: 500px)': {
              width: '100%',
              height: 400,
              position: 'static',
              zIndex: 1,
              opacity: 1,

            }
          }}
        >
          <img src={pic} alt="Me and my cat" style={{ width: '100%', height: '100%', objectPosition: 'top', objectFit: 'contain' }}/>
        </Box>
    </Container>
  );
}

export default About;