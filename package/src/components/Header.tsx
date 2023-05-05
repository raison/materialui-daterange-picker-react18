import React from 'react';
import { styled } from '@mui/system';
import { Grid, IconButton, Select, MenuItem, SelectChangeEvent, Theme } from '@mui/material';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { setMonth, getMonth, setYear, getYear } from 'date-fns';

const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  iconContainer: `${PREFIX}-iconContainer`,
  icon: `${PREFIX}-icon`
};

const StyledGrid = styled(Grid)((
  {theme}: {
    theme: Theme
  }
) => ({
  [`&.${classes.root}`]: {
    justifyContent: 'space-around',
  },

  [`& .${classes.iconContainer}`]: {
    padding: 5,
  },

  [`& .${classes.icon}`]: {
    padding: 10,
    '&:hover': {
      background: 'none',
    },
  }
}));

interface HeaderProps {
  date: Date;
  setDate: (date: Date) => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const generateYears = (relativeTo: Date, count: number) => {
  const half = Math.floor(count / 2);
  return Array(count)
    .fill(0)
    .map((y, i) => relativeTo.getFullYear() - half + i); // TODO: make part of the state
};

const Header: React.FunctionComponent<HeaderProps> = ({ date, setDate, nextDisabled, prevDisabled, onClickNext, onClickPrevious }) => {

  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    setDate(setMonth(date, parseInt(event.target.value as string)));
  };

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    setDate(setYear(date, parseInt(event.target.value as string)));
  };

  return (
    <StyledGrid container alignItems='center' className={classes.root}>
      <Grid item className={classes.iconContainer}>
        <IconButton className={classes.icon} disabled={prevDisabled} onClick={onClickPrevious}>
          <ChevronLeft color={prevDisabled ? 'disabled' : 'action'} />
        </IconButton>
      </Grid>
      <Grid item>
        <Select variant='standard' value={getMonth(date)} onChange={handleMonthChange} MenuProps={{ disablePortal: true }}>
          {MONTHS.map((month, idx) => (
            <MenuItem key={month} value={idx}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid item>
        <Select variant='standard' value={getYear(date)} onChange={handleYearChange} MenuProps={{ disablePortal: true }}>
          {generateYears(date, 30).map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>

        {/* <Typography>{format(date, "MMMM YYYY")}</Typography> */}
      </Grid>
      <Grid item className={classes.iconContainer}>
        <IconButton className={classes.icon} disabled={nextDisabled} onClick={onClickNext}>
          <ChevronRight color={nextDisabled ? 'disabled' : 'action'} />
        </IconButton>
      </Grid>
    </StyledGrid>
  );
};

export default Header;