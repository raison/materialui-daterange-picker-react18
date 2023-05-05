/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { styled } from '@mui/system';

import DateRangePicker from './DateRangePicker';

// eslint-disable-next-line no-unused-vars
import { DateRange, DefinedRange } from '../types';

const PREFIX = 'DateRangePickerWrapper';

const classes = {
  dateRangePickerContainer: `${PREFIX}-dateRangePickerContainer`,
  dateRangePicker: `${PREFIX}-dateRangePicker`,
  dateRangeBackdrop: `${PREFIX}-dateRangeBackdrop`
};

const Root = styled('div')(() => ({
  [`&.${classes.dateRangePickerContainer}`]: {
    position: 'relative',
  },

  [`& .${classes.dateRangePicker}`]: {
    position: 'relative',
    zIndex: 1,
  },

  [`& .${classes.dateRangeBackdrop}`]: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    bottom: 0,
    zIndex: 0,
    right: 0,
    left: 0,
    top: 0,
  }
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


  const { closeOnClickOutside, wrapperClassName, toggle, open } = props;

  const handleToggle = () => {
    if (closeOnClickOutside === false) {
      return;
    }

    toggle();
  };

  const handleKeyPress = (event: any) => event?.key === 'Escape' && handleToggle();

  return (
    <Root className={classes.dateRangePickerContainer}>
      {open && <div className={classes.dateRangeBackdrop} onKeyPress={handleKeyPress} onClick={handleToggle} />}

      <div className={`${classes.dateRangePicker} ${wrapperClassName}`}>
        <DateRangePicker {...props} />
      </div>
    </Root>
  );
};

export default DateRangePickerWrapper;