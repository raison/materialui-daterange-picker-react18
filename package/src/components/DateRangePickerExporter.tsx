import React from 'react';
//import StylesProvider from '@mui/styles/StylesProvider';
 import { ThemeProvider, useTheme } from '@mui/system';
// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, { DateRangePickerWrapperProps } from './DateRangePickerWrapper';
// import { createGenerateClassName } from '@mui/styles';

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'date-range-picker'
// });

const DateRangePickerExporter: React.FC<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => {
  const theme = useTheme();
  return (
  <ThemeProvider theme={theme}>
    <DateRangePickerWrapper
      {...props}
    />
  </ThemeProvider>
)};

export default DateRangePickerExporter;
