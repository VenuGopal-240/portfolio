import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

// Helper to get all dates for the current week starting Sunday
const getCurrentWeekDates = (referenceDate = new Date()) => {
  const currentDay = referenceDate.getDay(); // Sunday is 0
  const firstDayOfWeek = new Date(referenceDate);

  // Go back to Sunday of this week
  firstDayOfWeek.setDate(referenceDate.getDate() - currentDay);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + i);
    weekDates.push(date);
  }

  return weekDates;
};

// Function to format the date as DD/MM/YYYY and weekday
const formatDateWithWeekday = (inputDate) => {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

  return `${day}/${month}/${year} and ${weekday}`;
};

const CurrentWeekView = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    // Calculate the week dates when the component mounts
    const dates = getCurrentWeekDates(today);
    setWeekDates(dates);
  }, [today]);

  const isToday = (date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Current Week (Sunday - Saturday)
      </Typography>

      {weekDates.map((date, index) => (
        <Paper
          key={index}
          elevation={isToday(date) ? 6 : 1}
          sx={{
            p: 2,
            mb: 1,
            backgroundColor: isToday(date) ? '#1976d2' : '#f5f5f5',
            color: isToday(date) ? '#ffffff' : '#000000',
            fontWeight: isToday(date) ? 'bold' : 'normal',
            transition: '0.3s',
          }}
        >
          <Typography variant="body1">
            {formatDateWithWeekday(date)}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default CurrentWeekView;
