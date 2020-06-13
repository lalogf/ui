import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'inherit',
  },
  default: {
    borderBottom: 'solid 1px #000',
    color: 'inherit',
    '&:hover': {
      color: '#404040',
    },
  },
  primary: {
    borderBottom: `solid 1px ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  secondary: {
    borderBottom: `solid 1px ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
  tertiary: {
    borderBottom: `solid 1px ${theme.palette.tertiary.main}`,
    color: theme.palette.tertiary.main,
    '&:hover': {
      color: theme.palette.tertiary.light,
    },
  },
});

function Link(props) {
  const {
    children,
    classes,
    className,
    variant,
    ...other
  } = props;

  return (
    <a
      className={classNames(
        classes.root,
        {
          [classes.default]: variant === 'default',
        },
        {
          [classes.primary]: variant === 'primary',
        },
        {
          [classes.secondary]: variant === 'secondary',
        },
        {
          [classes.tertiary]: variant === 'tertiary',
        },
        className,
      )}
      {...other}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  className: '',
  variant: 'default',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary']),
};

export default withStyles(styles)(Link);
