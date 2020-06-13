import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  warning: {
    backgroundColor: theme.palette.warning.light,
    padding: 16,
    paddingLeft: 50,
    margin: 12,
    borderRadius: 0
  },
  success: {
    backgroundColor: theme.palette.success.light,
  },
  info: {
    backgroundColor: theme.palette.info.light,
  },
  danger: {
    backgroundColor: theme.palette.danger.light,
  },
  text: {
    color: '#202020',
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(16),
    textAlign: 'left',
  },
});

const Alert = ({ children, classes, variant, className }) => (
  <Paper className={classNames(
        classes.warning,
        {
          [classes.warning]: variant === 'warning',
        },
        {
          [classes.success]: variant === 'success',
        },
        {
          [classes.info]: variant === 'info',
        },
        {
          [classes.danger]: variant === 'danger',
        },
        className,
      )
    }>
    <Typography component="p" className={classes.text} align="center">
      { children }
    </Typography>
  </Paper>
);

Alert.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['warning', 'success','info','danger']),
};

export default withStyles(styles)(Alert);


