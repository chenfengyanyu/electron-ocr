import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
  chip: {
    margin: 4,
  },
};

const handleClick = () => {
  console.log('You clicked the Chip.');
};

const ChipBox = props => (
  <div>
    <Chip
      onClick={handleClick}
      style={styles.chip}
    >
      <Avatar backgroundColor={props.bg} color={props.color || '#fff'} icon={props.icon} />
      {props.label}
    </Chip>
  </div>
);

export default ChipBox;
