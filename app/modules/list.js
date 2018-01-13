import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const path = require('path');

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    height: '300px'
  },
  titleStyle: {
    color: '#fff',
  },
};

const tilesData = [
  {
    id: 1,
    img: 'image/t1.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    id: 2,
    img: 'image/t2.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    id: 3,
    img: 'image/t3.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    id: 4,
    img: 'image/t1.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: 'image/t3.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    id: 6,
    img: 'image/t2.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: 'image/t1.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    id: 8,
    img: 'image/t2.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} width="300" height="400"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;