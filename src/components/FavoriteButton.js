import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

import StarIcon from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';

const FavoriteButton = ({ isFavorite, onChange }) => {
  const [active, setActive] = useState(isFavorite);

  const handleChange = () => setActive(!active);

  return (
    <IconButton color="primary" onClick={handleChange}>
      {active
        ? <StarIcon />
        : <StarBorder  />
      }
    </IconButton>
  );
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onChange: PropTypes.func,
}

FavoriteButton.defaultProps = {
  isFavorite: false,
  onChange: () => {},
}

export default FavoriteButton;