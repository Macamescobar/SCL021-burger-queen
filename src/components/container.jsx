import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useStyle } from './container-categories';

function Item (props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        padding: 2,
        margin: 0,
        //bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        //color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 10,
        fontSize: '1rem',
        fontWeight: '700',
        height: '85vh',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function FlexShrink() {
  const classes = useStyle();
  return (
    <div style={{
         width: '90vw',
         height: '80vh',
          margin: 30,
        }}>
      <Box sx={{ display: 'flex', padding: 1}}>
        <Item className={classes.categories}>Item 1</Item>
        <Item sx={{ width: '70vw', bgcolor:'#DEE8FF', boxShadow: '1px 3px 1px #9E9E9E'}}>Item 2</Item>
        <Item sx={{ width: '30vw', bgcolor: '#FFFFFF',boxShadow: '1px 3px 1px #9E9E9E'}}>Item 3</Item>
      </Box>
    </div>
  );
}
