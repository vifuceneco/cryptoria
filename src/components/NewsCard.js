import React from 'react';
import { Box, Typography, Link } from '@mui/material';

import logo from '../logo.svg';

const NewsCard = ({ image, description, title, href }) => {
  return (
    <Link href={href} color="inherit" sx={{ textDecoration: 'none' }}>
      <Box>
        <Box
          mb={1.5}
          sx={{
            borderRadius: '.5rem',
            overflow: 'hidden',
            height: 130,
            backgroundColor: 'secondary.main',
            backgroundImage: `url(${logo})`,
            backgroundSize: 'auto 80%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {image && (
            <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
          )}
        </Box>
        <Typography fontSize="small" fontWeight="bold" sx={{ opacity: .5 }}>
          {description}
        </Typography>
        <Typography>
          {title}
        </Typography>
      </Box>
    </Link>
  );
}

NewsCard.defaultProps = {
  href: '',
  image: '',
  description: 'Description',
  title: 'News Title',
}

export default NewsCard;