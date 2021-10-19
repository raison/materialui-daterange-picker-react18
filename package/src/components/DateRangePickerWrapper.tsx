/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import DateRangePicker from './DateRangePicker';

// eslint-disable-next-line no-unused-vars
import { DateRange, DefinedRange } from '../types';

const useStyles = makeStyles(() => ({
  dateRangePickerContainer: {
    position: 'relative',
  },
  dateRangePicker: {
    position: 'relative',
    zIndex: 1,
  },
  dateRangeBackdrop: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    bottom: 0,
    zIndex: 0,
    right: 0,
    left: 0,
    top: 0,
  },
}));

export interface DateRangePickerWrapperProps {
  open: boolean;
  toggle: () => void;
  initialDateRange?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  onChange: (dateRange: DateRange) => void;
  closeOnClickOutside?: boolean;
  wrapperClassName?: string;
}

const DateRangePickerWrapper: React.FC<DateRangePickerWrapperProps> = (props: DateRangePickerWrapperProps) => {
  const classes = useStyles();

  const { closeOnClickOutside, wrapperClassName, toggle, open } = props;

  const handleToggle = () => {
    if (closeOnClickOutside === false) {
      return;
    }

    toggle();
  };

  const handleKeyPress = (event: any) => event?.key === 'Escape' && handleToggle();

  return (
    <div className={classes.dateRangePickerContainer}>
      {open && <div className={classes.dateRangeBackdrop} onKeyPress={handleKeyPress} onClick={handleToggle} />}

      <div className={`${classes.dateRangePicker} ${wrapperClassName}`}>
        <DateRangePicker {...props} />
      </div>
    </div>
  );
};

export default DateRangePickerWrapper;
