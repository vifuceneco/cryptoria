import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import HourglassFullIcon from '@mui/icons-material/HourglassFull';

const Loading = ({ label, size }) => {
 return (
    <>
      <HourglassFullIcon sx={{fontSize: size, opacity: .3}} className="hourglass-blink" />
      <Typography fontSize="large" align='center'>{label}</Typography>
    </>
 ); 
};

Loading.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loading.defaultProps = {
  label: 'Loading...',
  size: 'large',
};

export default Loading;
