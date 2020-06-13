import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';


const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Loader = ({
  classes,
  size = 50,
  color = 'primary',
  marginLeft,
}) => (
  <div className={classNames(classes.root, marginLeft)}>
    <CircularProgress size={size} color={color} />
  </div>
);


Loader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  marginLeft: PropTypes.string,
};

Loader.defaultProps = {
  size: 50,
  color: 'primary',
  marginLeft: undefined,
};

export default withStyles(styles)(Loader);