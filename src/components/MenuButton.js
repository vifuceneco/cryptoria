import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PropTypes from 'prop-types';

const MenuButton = ({ label, options }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {options.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>{item.options}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

MenuButton.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array
};

MenuButton.defaultProps = {
  label: '',
  options: [],
};

export default MenuButton;

