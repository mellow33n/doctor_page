import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { ukUA } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/uk'





function ServerDay(props) {
  const { disabledDays = [], day, outsideCurrentMonth, ...other } = props;
  const isSelected =
    !props.outsideCurrentMonth && disabledDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? undefined : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}


export default function Calendar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [disabledDays, setDisableDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState(null);

  const maxDaysNumber = 60;


  const handleMonthChange = (date) => {
    /* console.log(date); */

  };
  const isDisabledDate = (date) => {

    let isDisabled = false;
    disabledDays.forEach((value) => {
      return value === date.$D ? isDisabled = true : value
    })
    return isDisabled

  };
  function getMaxDay(daysNumber = maxDaysNumber) {
    return dayjs().add(daysNumber, 'day')

  }
  

  return (
    <LocalizationProvider 
    dateAdapter={AdapterDayjs}
    adapterLocale="uk"
    localeText={
      ukUA.components.MuiLocalizationProvider.defaultProps.localeText
    }

    >
      <DateCalendar
        views ={['day']}
        value={value}
        onChange = {(newValue) => setValue(newValue)}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        shouldDisableDate={isDisabledDate} 
        disablePast = {true}
        displayWeekNumber = {true}
        focusedView = {'day'}
        maxDate = {getMaxDay()}
        dayOfWeekFormatter={(data)=> data}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            disabled: true,
          },
          textField: {
            disabled: true,
          }
        }}
      />
    </LocalizationProvider>
  );
}