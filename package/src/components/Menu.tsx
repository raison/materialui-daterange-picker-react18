import React from 'react';
import { styled } from '@mui/system';
import { Paper, Grid, Typography, Divider, Theme } from '@mui/material';
// import { WithStyles, Styles } from '@mui/styles';
import { format, differenceInCalendarMonths } from 'date-fns';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Month from './Month';
import DefinedRanges from './DefinedRanges';
import { DateRange, DefinedRange, Setter, NavigationAction } from '../types';
import { MARKERS } from './DateRangePicker';

const PREFIX = 'Menu';

const classes = {
  header: `${PREFIX}-header`,
  headerItem: `${PREFIX}-headerItem`,
  divider: `${PREFIX}-divider`
};

const StyledPaper = styled(Paper)((
    theme: Theme
) => ({
  [`& .${classes.header}`]: {
    padding: '20px 70px',
  },

  [`& .${classes.headerItem}`]: {
    flex: 1,
    textAlign: 'center',
  },

  [`& .${classes.divider}`]: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 20,
  }
}));

interface MenuProps {
  dateRange: DateRange;
  ranges: DefinedRange[];
  minDate: Date;
  maxDate: Date;
  firstMonth: Date;
  secondMonth: Date;
  setFirstMonth: Setter<Date>;
  setSecondMonth: Setter<Date>;
  setDateRange: Setter<DateRange>;
  helpers: {
    inHoverRange: (day: Date) => boolean;
  };
  handlers: {
    onDayClick: (day: Date) => void;
    onDayHover: (day: Date) => void;
    onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
  };
}

const Menu: React.FunctionComponent<MenuProps> = (props: any) => {
  const {
    classes,
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
  } = props;
  const { startDate, endDate } = dateRange;
  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = { dateRange, minDate, maxDate, helpers, handlers };
  return (
    <StyledPaper elevation={5} square>
      <Grid container direction='row' wrap='nowrap'>
        <Grid>
          <Grid container className={classes.header} alignItems='center'>
            <Grid item className={classes.headerItem}>
              <Typography variant='subtitle1'>{startDate ? format(startDate, 'MMMM dd, yyyy') : 'Start Date'}</Typography>
            </Grid>
            <Grid item className={classes.headerItem}>
              <ArrowRightAlt color='action' />
            </Grid>
            <Grid item className={classes.headerItem}>
              <Typography variant='subtitle1'>{endDate ? format(endDate, 'MMMM dd, yyyy') : 'End Date'}</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction='row' wrap='nowrap'>
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
            />
            <div className={classes.divider} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
            />
          </Grid>
        </Grid>
        <div className={classes.divider} />
        <Grid>
          <DefinedRanges selectedRange={dateRange} ranges={ranges} setRange={setDateRange} />
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default (Menu);
