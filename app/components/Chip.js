import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
  chip: {
    background: '#fff',
    opacity: 0.9,
    borderRadius: 22.5,
  },
  avatar: {
    width: 45,
    height: 45,
    fontSize: '30px',
  },
  label: {
    lineHeight: '45px',
    color: 'rgb(80, 80, 80)',
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
      labelStyle={styles.label}
    >
      <Avatar style={styles.avatar} backgroundColor={props.bg} color={props.color || '#fff'} icon={props.icon} />
      {props.label}
    </Chip>
  </div>
);

export default ChipBox;
