import React from 'react';
import StylesProvider from '@mui/styles/StylesProvider';

// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, { DateRangePickerWrapperProps } from './DateRangePickerWrapper';
import { createGenerateClassName } from '@mui/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'date-range-picker'
});
const DateRangePickerExporter: React.FC<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => (
  <StylesProvider generateClassName={generateClassName}>
    <DateRangePickerWrapper
      {...props}
    />
  </StylesProvider>
);

export default DateRangePickerExporter;
