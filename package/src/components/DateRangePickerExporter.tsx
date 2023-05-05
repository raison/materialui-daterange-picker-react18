import React from 'react';
// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, { DateRangePickerWrapperProps } from './DateRangePickerWrapper';

const DateRangePickerExporter: React.FC<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => {
  return (
  <>
    <DateRangePickerWrapper
      {...props}
    />
  </>
)};

export default DateRangePickerExporter;
