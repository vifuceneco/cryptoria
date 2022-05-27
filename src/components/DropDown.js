import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link, MenuItem } from '@mui/material';

const DropDown = ({ options, label }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={anchorEl ? true : false}
        onClose={handleClose}
      >
        { options.map((item, index) => <MenuItem key={index} href={item.href} onClick={handleClose} component={Link}>
          {item.name || item.href}
        </MenuItem> )}
      </Menu>
    </div>
  );
}

DropDown.propTypes = {
  options: PropTypes.array,
  label: PropTypes.node.isRequired,
};

DropDown.defaultProps = {
  options: [],
};

export default DropDown;
