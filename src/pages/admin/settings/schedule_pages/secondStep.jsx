import "./secondStep.scss";
import React, { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, Button } from "@mui/material";

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
  const { control, setValue } = useFormContext();

  const handleClick = (index) => {
    const newDays = days.map((day, i) =>
      i === index ? { ...day, isSelected: !day.isSelected } : day
    );
    setDays(newDays);
  };

  useEffect(() => {
    const selectedDays = days.filter(day => day.isSelected).map(day => day.number);
    setValue("holidaysRegular", selectedDays);
  }, [days, setValue]);

  return (
    <div className="form-div">
      <Controller
        name="holidaysRegular"
        control={control}
        render={({ field }) => (
          <FormControl {...field}>
            <p>Клікніть на день, щоб перенести його в протилежну категорію</p>
            <h3>Робочі дні</h3>
            <div id="workday" className="holidays-btn">
              {days.map((day, index) =>
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
              {days.map((day, index) =>
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
        )}
      />
    </div>
  );
}
