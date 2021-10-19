import * as React from 'react';
import { IconButton, Typography, Theme } from '@mui/material';
import { createStyles, withStyles, WithStyles, Styles } from '@mui/styles';
import { combine } from '../utils';

const styles: Styles<any, any> = (theme: Theme) =>
  createStyles({
    leftBorderRadius: {
      borderRadius: '50% 0 0 50%',
    },
    rightBorderRadius: {
      borderRadius: '0 50% 50% 0',
    },
    buttonContainer: {
      display: 'flex',
    },
    button: {
      height: 36,
      width: 36,
      padding: 0,
    },
    buttonText: {
      lineHeight: 1.6,
			color: theme.palette.mode === 'light' ? 'initial' : undefined,
    },
    outlined: {
      border: `1px solid ${theme.palette.primary.dark}`,
    },
    filled: {
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      backgroundColor: theme.palette.primary.dark,
    },
    highlighted: {
      backgroundColor: theme.palette.mode === 'dark' ? '#e3f2fd6e' : '#bbdefb7d',
    },
    contrast: {
      color: theme.palette.primary.contrastText,
    },
  });

interface DayProps extends WithStyles<typeof styles> {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
}

const Day: React.FunctionComponent<DayProps> = (props) => {
  const { classes } = props;
  return (
    <div
      className={combine(
        classes.buttonContainer,
        props.startOfRange && classes.leftBorderRadius,
        props.endOfRange && classes.rightBorderRadius,
        !props.disabled && props.highlighted && classes.highlighted
      )}
    >
      <IconButton
        className={combine(
          classes.button,
          !props.disabled && props.outlined && classes.outlined,
          !props.disabled && props.filled && classes.filled
        )}
        disabled={props.disabled}
        onClick={props.onClick}
        onMouseOver={props.onHover}
      >
        <Typography
          className={combine(classes.buttonText, !props.disabled && props.filled && classes.contrast)}
          variant='body2'
        >
          {!props.disabled && props.value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(Day);
