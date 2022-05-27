import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Chip, Link, Typography } from "@mui/material";
import Twitter from '@mui/icons-material/Twitter';
import Reddit from '@mui/icons-material/Reddit';
import Facebook from '@mui/icons-material/Facebook';

import { formatNum } from '../helpers/coins';

const SocialChips = ({reddit, twitter, facebook}) => {
  return (
    <> 
      {(twitter.count && twitter.count > 0) 
        ? (
          <Link href={twitter.link}>
            <Chip sx={{mr: 1, cursor: 'pointer'}} label={
              <Typography display="flex" component="span" alignItems="center">
                <Twitter fontSize="small" sx={{mr: .5}}  /> {formatNum(twitter.count)}
              </Typography>
            } /> 
          </Link>
        ) : null }
      {(reddit.count && reddit.count > 0)
        ? (
          <Link href={reddit.link}>
            <Chip sx={{mr: 1, cursor: 'pointer'}} label={
              <Typography display="flex" component="span" alignItems="center">
                <Reddit fontSize="small" sx={{mr: .5}}  /> {formatNum(reddit.count)}
              </Typography>
            } /> 
          </Link>
        ) : null }
      { (facebook.count && facebook.count > 0) 
        ? (
          <Link href={facebook.link}>
            <Chip sx={{cursor: 'pointer'}} label={
              <Typography display="flex" component="span" alignItems="center">
                <Facebook fontSize="small" sx={{mr: .5}}  /> {formatNum(facebook.count)}
              </Typography>
            } /> 
          </Link>
        ) : null }
    </>
  );
}


SocialChips.propTypes = {
  reddit: PropTypes.shape({
    link: PropTypes.string,
    count: PropTypes.number,
  }),
  twitter: PropTypes.shape({
    link: PropTypes.string,
    count: PropTypes.number,
  }),
  facebook: PropTypes.shape({
    link: PropTypes.string,
    count: PropTypes.number,
  }),
};

SocialChips.propDefauls = {
  reddit: {
    count: 0,
    link: "",
  },
  twitter: {
    count: 0,
    link: "",
  },
  facebook: {
    count: 0,
    link: "",
  },
};

export default SocialChips;