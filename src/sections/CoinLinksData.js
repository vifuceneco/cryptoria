import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Search from '@mui/icons-material/Search';

import DropDown from '../components/DropDown';

const CoinLinksData = ({homepage, explorerLinks}) => {
  return (
    <Box my={2} display="flex">
      {homepage && (
        <Button color="secondary" variant="contained" href={homepage} sx={{textTransform: 'none', mr: 2}}>
          {homepage}
          <OpenInNewIcon fontSize="small" sx={{ml: 1}} />
        </Button>
        )}
      {explorerLinks.length > 0 && (
        <DropDown
          options={explorerLinks}
          label={
            <>
              Explorer
              <Search sx={{ml: 1}}/>
            </>
          }
        />
        )}
  </Box>
  );
}

CoinLinksData.propTypes = {
  homepage: PropTypes.string,
  explorerLinks: PropTypes.array,
}

CoinLinksData.propDefaults = {
  homepage: '',
  explorerLinks: [],
};

export default CoinLinksData;