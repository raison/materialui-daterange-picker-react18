import React from 'react';
import './App.css';
import { DateRangePicker, DateRange, DateRangeEditor } from 'material-mui-date-range-picker';
import { ThemeProvider, StyledEngineProvider, useTheme } from '@mui/material/styles';
import { Button, Grid, Link } from '@mui/material';

const App: React.FunctionComponent = () => {
	const [dateRange, setDateRange] = React.useState<DateRange>({});
	const [openPicker, setOpenPicker] = React.useState<boolean>(true);

	const theme = useTheme();

	const togglePicker = () => setOpenPicker(!openPicker);
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<div className="App">
					<div className="container">
						<Grid container>
							<Grid item xs={4} />
							<Grid item xs={4}>
								<DateRangeEditor dateRange={dateRange} onChange={(range) => setDateRange(range)} />
							</Grid>
							<Grid item xs={4} />
						</Grid>
					</div>
					<div className="container">
						<Button onClick={togglePicker}>{openPicker ? 'Close ' : 'Open '} Daterange Picker</Button>
						<Grid container>
							<Grid item xs={3} />
							<Grid item xs={6} style={{ maxWidth: 700, minWidth: 690 }}>
								<DateRangePicker
									open={openPicker}
									toggle={togglePicker}
									initialDateRange={dateRange}
									onChange={(range) => setDateRange(range)}
								/>
							</Grid>
							<Grid item xs={3} />
						</Grid>
					</div>
				</div>
				<footer>
					Source:{' '}
					<Link target="_blank" underline="hover" rel="noreferrer" href="https://github.com/nikhilgoud/materialui-daterange-picker">
						materialui-daterange-picker
					</Link>{' '}
					NPM:{' '}
					<Link target="_blank" underline="hover" rel="noreferrer" href="https://www.npmjs.com/package/material-mui-date-range-picker">
						materialui-daterange-picker
					</Link>
				</footer>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default App;
