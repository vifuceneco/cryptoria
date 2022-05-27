import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return(
    <Container>
      <Typography variant="h3" component="h1" my={3}>About me</Typography>
      <Typography component="p" my={3} lineHeight={2}>
        Hi! I believe each meeting is best over a cup of coffee, so I hope you have one at hand ☕<br/>
        Well, you don't have to look too far to find out that my name is Victoria.<br/>
        As many, i found this world with my first ever computer back in the 2000s, making non functinal games that I <b>REALLY</b> wanted to play and make work. I also spent countless hours drawing with Paint 🖌 but that's irrelevant.<br/>
        I begun high school with an IT oriented course 💻, where I learnt a lot of the basics. I also started computer engineering but the paths of life sent me to work in administration and accountancy for many years, until the pandemic hit.<br/>
        Along the tragedy, it brought me an open door to more free time and learning by my own. And of course, I couldn't not tell that it also brought me Kero, my bnelived cat 😼.<br/>
        When I stared with <b>HTML</b> and <b>CSS</b>, I hated design. Nothing came to me, couldnt even think of how to style a button. On my first meetings with <b>JavaScript</b> I missed thinking how to style a button, but surprisingly I found a lot of satisfaction on the feeling of solving something after hours of work and have it work as I expected.
        Eventually with practice and many proyects in between, I came to enjoy a lot both aspects.<br/>
        I hope you enjoy this project just as much as I enjoyed doing it.<br/>
        See you soon!
      </Typography>
    </Container>
  );
}

export default About;