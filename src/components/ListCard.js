import React from 'react';
import { Chip, Card, CardContent, List, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ListCard = ({ Icon, title, list }) => {
  return (
    <Card elevation={5}>
      <CardContent>
        <Typography fontSize="large" alignItems="center" display="flex">
          <Icon fontSize="small" sx={{ mr: .5 }} /> {title}
        </Typography>
        <List>
          {
            list.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mt: 1 }}>
                <Chip label={index + 1} size="small" color="primary" sx={{ mr: 1 }}/> {item.Name}
              </ListItem>
            ))
          }
      </List>
    </CardContent>
  </Card>
  );
}

ListCard.propTypes = {
  Icon: PropTypes.oneOfType([ PropTypes.node, PropTypes.func, PropTypes.object ]),
  title: PropTypes.string,
  list: PropTypes.array,
};

ListCard.defaultProps = {
  Icon: ArrowCircleRightRoundedIcon,
  title: '',
  list: [],
};

export default ListCard;