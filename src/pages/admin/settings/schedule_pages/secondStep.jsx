import "./secondStep.scss";
import React, { useState } from "react";
import { FormControl, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setHolidaysRegular } from "../../../../store/Reducers/scheduleSettingsSlice";

export default function SecondStep() {
  const initialDays = [
    { name: "Понеділок", isSelected: false, number: 1 },
    { name: "Вівторок", isSelected: false, number: 2 },
    { name: "Середа", isSelected: false, number: 3 },
    { name: "Четвер", isSelected: false, number: 4 },
    { name: "Пʼятниця", isSelected: false, number: 5 },
    { name: "Субота", isSelected: false, number: 6 },
    { name: "Неділя", isSelected: false, number: 0 },
  ];
  const [days, setDays] = useState(initialDays);
  const dispatch = useDispatch();
  
  const handleClick = (index) => {
    const newDays = days.map((day, i) =>
      i === index ? { ...day, isSelected: !day.isSelected } : day
    );
    setDays(newDays);
    dispatch(setHolidaysRegular(newDays));
  };

  return (
    <div className="form-div">
      <FormControl>
        <p>Клікніть на день, щоб перенести його в протилежну категорію</p>
        <h3>Робочі дні</h3>
        <div id="workday" className="holidays-btn">
          {days.map(
            (day, index) =>
              !day.isSelected && (
                <Button
                  type="button"
                  variant="contained"
                  color="warning"
                  onClick={() => handleClick(index)}
                  key={day.number}
                >
                  {day.name}
                </Button>
              )
          )}
        </div>
        <h3>Вихідні</h3>
        <div id="holiday" className="holidays-btn">
          {days.map(
            (day, index) =>
              day.isSelected && (
                <Button
                  type="button"
                  variant="contained"
                  color="success"
                  onClick={() => handleClick(index)}
                  key={day.number}
                >
                  {day.name}
                </Button>
              )
          )}
        </div>
      </FormControl>
    </div>
  );
}
