import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return(
    <Container>
      <Typography variant="h3" component="h1" my={3}>About me</Typography>
      <Typography component="p" my={3} lineHeight={2}>
        Hi! Every meeting is best served a cup of coffee, so I hope you have one at hand ☕.<br/>
        You don't have to look too far to find out that my name is Victoria. This world came to me with my first computer back in the 2000s. At that point I was developing broken games that I REALLY wanted to play. That and drawing with Paint 🖌 for countless hours but I digress.<br/>
        Later in life, my high school had an IT orientation where I pinned down a lot of the basics. This made me confident in pursuing a computer engineering degree.<br/>
        Paths of life are not always so straight and I ended up at administration and accountancy for many years.<br/>
        Pandemic hit and along with a the virus and the hectic sanitary measures, it brought a time.<br/>
        Time to learn and practice to learn by my own, then courses to learn from home. And to top it all, my beloved code partner: Kero the cat 😼.<br/>
        When I stared with HTML and CSS, I hated design. I couldnt even think of how to style a button.<br/>
        Then I met JavaScript and to be honest, I was missing styles and buttons.<br/>
        I got surprised enough to find how I enjoyed solving something after hours of hard work just as I expected.<br/>
        Eventually with time, practice and many projects under my belt, I came to enjoy both sides of the process.<br/>
        Cryptoria is one of many stepping stones on my path of becoming a good developer.<br/>
        I hope you enjoy this project as much as I enjoyed doing it.<br/>
        See you soon!
      </Typography>
    </Container>
  );
}

export default About;