import * as React from 'react';
import { styled } from '@mui/system';
import { IconButton, Typography, Theme } from '@mui/material';
// import { WithStyles, Styles } from '@mui/styles';
import { combine } from '../utils';

const PREFIX = 'Day';

const classes = {
  leftBorderRadius: `${PREFIX}-leftBorderRadius`,
  rightBorderRadius: `${PREFIX}-rightBorderRadius`,
  buttonContainer: `${PREFIX}-buttonContainer`,
  button: `${PREFIX}-button`,
  buttonText: `${PREFIX}-buttonText`,
  outlined: `${PREFIX}-outlined`,
  filled: `${PREFIX}-filled`,
  highlighted: `${PREFIX}-highlighted`,
  contrast: `${PREFIX}-contrast`
};

const Root = styled('div')((
  {theme}: {
    theme: Theme
  }
) => ({
  [`& .${classes.leftBorderRadius}`]: {
    borderRadius: '50% 0 0 50%',
  },

  [`& .${classes.rightBorderRadius}`]: {
    borderRadius: '0 50% 50% 0',
  },

  [`&.${classes.buttonContainer}`]: {
    display: 'flex',
  },

  [`& .${classes.button}`]: {
    height: 36,
    width: 36,
    padding: 0,
  },

  [`& .${classes.buttonText}`]: {
    lineHeight: 1.6,
    color: theme.palette.mode === 'light' ? 'initial' : undefined,
  },

  [`& .${classes.outlined}`]: {
    border: `1px solid ${theme.palette.primary.dark}`,
  },

  [`& .${classes.filled}`]: {
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    backgroundColor: theme.palette.primary.dark,
  },

  [`& .${classes.highlighted}`]: {
    backgroundColor: theme.palette.mode === 'dark' ? '#e3f2fd6e' : '#bbdefb7d',
  },

  [`& .${classes.contrast}`]: {
    color: theme.palette.primary.contrastText,
  }
}));

interface DayProps {
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
  const { } = props;
  return (
    <Root
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
    </Root>
  );
};

export default (Day);