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
    width: 500,
    height: 450,
    overflowY: 'auto',
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
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile, index) => (
        <GridTile
          key={index}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={__dirname.replace('modules','') + tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;