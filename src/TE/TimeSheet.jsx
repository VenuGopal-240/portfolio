import React, { useEffect, useState } from "react";

import { LocalizationProvider, MultiSectionDigitalClock, TimeField, TimePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { Button, MenuItem, Select, Table, TableBody, TableContainer, TableHead, TextField, } from "@mui/material";

import dayjs from "dayjs";
import './Styling.css'

const TimeSheet = () => {
    const [submits, setSubmits] = useState(false);
    const [currentDay, setCurrentDay] = useState({ date: "", login: "", logout: "", task: { applicationDev: "", sessions: "", menteeRev: "", commincation: "" }, worked: "", status: null, url: "" });
    const [week, setWeek] = useState([]);

    const [weekDates, setWeekDates] = useState([{ date: "", login: "", logout: "", task: "", worked: "", status: null, url: "" }]);
    const [today, setToday] = useState(new Date());

    const [selectedRange, setSelectedRange] = useState([null, null]);
    // console.log("TOS", today);

    const isToday = (date) => {
        const dateObj = new Date(date);
        //  console.log("DDS",dateObj.getDate(),dateObj.getMonth(),dateObj.getFullYear());
        // console.log("DDS",today.getDate(),today.getMonth(),today.getFullYear());       

        return (
            dateObj.getDate() === today.getDate() &&
            dateObj.getMonth() + 1 === today.getMonth() + 1 &&
            dateObj.getFullYear() === today.getFullYear()
        );
    };

    useEffect(() => {
        const generateCurrentWeekDates = () => {
            const today = new Date();

            // Get the current day index (0 = Sunday, 6 = Saturday)
            const dayOfWeek = today.getDay();
            // console.log("dayOfWeek",dayOfWeek);
            // Calculate the date for Sunday (start of the week)
            const firstDayOfWeek = today.getDate() - dayOfWeek;
            // console.log("firstDayOfWeek",firstDayOfWeek);

            const lastDayOfWeek = new Date(today);
            lastDayOfWeek.setDate(today.getDate() + (6 - dayOfWeek));

            const week = [];
            // console.log("TO",today.get)
            const firstDayweek = new Date(today);
            firstDayweek.setDate(today.getDate() - dayOfWeek);

            for (let i = 0; i < 7; i++) {
                // Create a fresh date object to avoid mutating `today`
                const currentDate = new Date(today);
                currentDate.setDate(firstDayOfWeek + i);

                const formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD format
                
                week.push({
                    date: formattedDate,
                    login: "",
                    logout: "",
                    task: { applicationDev: "", sessions: "", menteeRev: "", commincation: "" },
                    worked: "",
                    status: null,
                    url: ""
                });
            }
            setSelectedRange([dayjs(firstDayweek), dayjs(lastDayOfWeek)]);
            return week;
        };
        const weekData = generateCurrentWeekDates();
        setWeekDates(weekData);
        const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        setSubmits(lastDate);
    }, []);
    // console.log(weekDates);

    const handleDateChange = ([start, end]) => {
        if (!start || !end) return;

        let dateList = [];
        let current = dayjs(start);
        // console.log("current:",current);

        while (current.isBefore(end) || current.isSame(end, "day")) {
            let a = { ...currentDay, date: current };
            // setWeek([...week,{...currentDay,date:current.format("DD/MM/YYYY")}]);
            dateList.push(a);
            current = current.add(1, "day");
            // console.log("current inisde:",current);
        }
        console.log("sara",dateList);
        setWeekDates(dateList);
        // setWeek(prev => dateList);
        // console.log("inside dates:",dates);

    }
    // console.log("week:", weekDates);

    const handleLoginTime = (e, day) => {
        let formatedDate = e.format("hh:mm A");
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, login: formatedDate, worked: calculateWorkedHours(formatedDate, obj.logout) } : obj)
        // console.log(a);
        setWeek(a);
        setWeekDates(a);

    }

    const handleLogoutTime = (e, day) => {

        let formatedDate = e.format("hh:mm A");
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, logout: formatedDate, worked: calculateWorkedHours(formatedDate, obj.logout) } : obj)
        // console.log(a);
        setWeek(a);
        setWeekDates(a);
    }

    const handleEmployeeStatus = (e, day) => {
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, status: e.target.value } : obj);
        setWeek(a);
        setWeekDates(a);
    }

    const handleEmployeeTask = (e, day) => {
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, task: e.target.value } : obj);
        setWeek(a);
        setWeekDates(a);
    }

    const handleTaskUrl = (e, day) => {
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, url: e.target.value } : obj);
        setWeek(a);
        setWeekDates(a);
    }

    const calculateWorkedHours = (login, logout) => {
        if (!login || !logout) return ""; // If any time is missing, return empty string

        let loginTime = dayjs(login, "hh:mm A");  // Convert to dayjs object
        let logoutTime = dayjs(logout, "hh:mm A");

        // let diffMinutes = logoutTime.diff(loginTime, "minute"); // Get total minutes difference    showing minus time
        let diffMinutes = loginTime.diff(logoutTime, "minute"); // Get total minutes difference   showing positive time
        let hours = Math.floor(diffMinutes / 60);
        let minutes = diffMinutes % 60;

        return `${hours}h ${minutes}m`; // Format output as "Xh Ym"
    };

    // console.log("ss", submits)

    const formatDateWithWeekday = (inputDate) => {
        // alert("kjbsdf")
        // console.log(inputDate);
        const date = new Date(inputDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

        return `${day}/${month}/${year} -
         ${weekday}`;
    };

    const submit = (day) => {
        let time = getTotalTime(day?.task);
        let a = weekDates?.map(obj => (obj.date === day.date) ? { ...obj, worked: time } : obj);
        setWeekDates(a);
        console.log(a);
    }

    const getTotalTime = (task) => {
        let totalMinutes = 0;

        Object.values(task).forEach(timeStr => {
            const [hours, minutes] = timeStr.split(':').map(Number);
            totalMinutes += hours * 60 + minutes;
        });

        const totalHours = Math.floor(totalMinutes / 60);
        const remainingMinutes = totalMinutes % 60;

        // Return string in HH:mm format
        return `${String(totalHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
    };
    const handleTime = (e, a, type) => {
        const formatted = e.format('HH:mm');

        const updatedWeekDates = weekDates.map(obj => {
            if (obj.date === a.date) {
                return {
                    ...obj,
                    task: {
                        ...obj.task,
                        [type]: formatted
                    }
                };
            }
            return obj;
        });

        // Assuming you're using a state setter like setWeekDates
        setWeekDates(updatedWeekDates);
    };


    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "auto",
                    minHeight: "100vh",
                    backgroundImage:
                        'url("https://img.freepik.com/free-photo/detailed-structure-marble-natural-pattern-background-design_1258-79155.jpg?t=st=1741858893~exp=1741862493~hmac=cebb08cbd4599ad01ae8de79595e2e754c9d7b9f0283c6f9288e8a597d6086cf&w=900")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                        <DateRangePicker localeText={{ start: 'Week-Start', end: 'Week-end' }}
                            onChange={handleDateChange} value={selectedRange} format="DD/MM/YYYY"/>
                    </DemoContainer>


                    <br />

                    <TableContainer className="table_Container">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table" border={1}>
                            <TableHead>
                                <tr className="tr_in_tbCont">
                                    <th style={{ width: "10vw" }}>Date</th>
                                    <th style={{ width: "15vw" }}>Login</th>
                                    <th style={{ width: "15vw" }}>Logoff</th>
                                    <th style={{ width: "10vw" }}> Task</th>
                                    <th>Worked Hours</th>
                                    <th style={{ width: "8vw" }}>Total</th>
                                    <th style={{ width: "10vw" }}>Status</th>
                                    <th style={{ width: "15vw" }}>URL</th>
                                    <th style={{ width: "5vw" }}>Save</th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                {weekDates?.map((day, index) => (
                                    <tr key={index}>
                                        <td style={{ color: isToday(day?.date) ? "red" : "blue" }}> {/* date */}
                                            {formatDateWithWeekday(day?.date)}
                                            {/* {day?.date} */}
                                            {/* {day.toLocaleDateString('en-US', { weekday: 'long' })}
                                    {day.getDate()}
                                   { day.toLocaleDateString('en-US', { month: 'short' })} */}
                                        </td>

                                        <td > {/* login time */}
                                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker label="Basic time picker" onChange={(e) => handleLogoutTime(e, day)} />
                                            </DemoContainer>
                                            {/* </LocalizationProvider> */}

                                        </td>

                                        <td >  {/* logout time */}
                                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker label="Basic time picker" onChange={(e) => handleLoginTime(e, day)} />
                                            </DemoContainer>
                                            {/* </LocalizationProvider> */}
                                        </td>

                                        <td > {/* Task */}
                                            {/* <TextField  onChange={(e) => handleEmployeeTask(e, day)}> */}
                                            {/* <Select sx={{width:"10vw"}}
                                            onChange={(e) => handleEmployeeTask(e, day)}>
                                            <MenuItem value="handleEmployeeTask" >Application <br />Development</MenuItem>
                                            <MenuItem value="Sessions" >Sessions</MenuItem>
                                            <MenuItem value="Mentee" >Mentee Reviews</MenuItem>
                                            <MenuItem value="Commincation" >Commincation <br />Sessions</MenuItem>
                                        </Select> */}

                                            <p style={{ padding: "16.5px 14px" }}>Application Dev</p>
                                            <p style={{ padding: "16.5px 14px" }}>Sessions</p>
                                            <p style={{ padding: "16.5px 14px" }}>Men Rev</p>
                                            <p style={{ padding: "16.5px 14px" }}>Commincation</p>
                                            {/* </TextField> */}

                                        </td>
                                        <td>
                                            <p >
                                                <TimeField
                                                    label="Format without meridiem"
                                                    // defaultValue={dayjs('2022-04-17T15:30')}
                                                    format="HH:mm"
                                                    onChange={(e) => handleTime(e, day, 'applicationDev')}
                                                />
                                            </p>
                                            <p>
                                                <TimeField
                                                    label="Format without meridiem"
                                                    // defaultValue={dayjs('2022-04-17T15:30')}
                                                    format="HH:mm"

                                                    onChange={(e) => handleTime(e, day, 'sessions')}
                                                />
                                            </p>
                                            <p>
                                                <TimeField
                                                    label="Format without meridiem"
                                                    // defaultValue={dayjs('2022-04-17T15:30')}
                                                    format="HH:mm"

                                                    onChange={(e) => handleTime(e, day, 'menteeRev')}
                                                /> </p>
                                            <p>
                                                <TimeField
                                                    label="Format without meridiem"
                                                    // defaultValue={dayjs('2022-04-17T15:30')}
                                                    format="HH:mm"

                                                    onChange={(e) => handleTime(e, day, 'commincation')}
                                                /></p>

                                            {/* <p> <input type="text" onChange={(e) => handleTime(e, day, 'applicationDev')} style={{ width: "3rem" }} /></p>
                                            <p><input type="text" onChange={(e) => handleTime(e, day, 'sessions')} style={{ width: "3rem" }} /></p>
                                            <p><input type="text" onChange={(e) => handleTime(e, day, 'menteeRev')} style={{ width: "3rem" }} /></p>
                                            <p><input type="text" onChange={(e) => handleTime(e, day, 'commincation')} style={{ width: "3rem" }} /></p> */}
                                        </td>

                                        <td > {/* working hour*/}
                                            {day.worked}
                                        </td>

                                        <td > {/* status*/}
                                            <Select sx={{ width: "10vw" }}

                                                onChange={(e) => handleEmployeeStatus(e, day)}>
                                                {/* <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem> */}
                                                <MenuItem value="Working" >Working</MenuItem>
                                                <MenuItem value="Holiday" >Holiday</MenuItem>
                                                <MenuItem value="Holiday" >Public Holiday</MenuItem>
                                                <MenuItem value="Leave" >Leave</MenuItem>
                                                <MenuItem value="Sick Leave" >Sick Leave</MenuItem>
                                                <MenuItem value="Partial Leave" >Partial Leave</MenuItem>
                                            </Select>
                                        </td>

                                        <td style={{ width: "15vw" }}>
                                            <TextField sx={{ width: "16vw" }} type="text" onChange={(e) => handleTaskUrl(e, day)} />
                                        </td>

                                        <td >
                                            {
                                                isToday(day?.date) ? <Button variant="contained" style={{ cursor: 'pointer' }} onClick={() => submit(day)}>Save</Button> : <Button variant="contained" disabled style={{ cursor: "not-allowed" }}>Save</Button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </LocalizationProvider>
                {
                    isToday(submits) ? <Button variant="contained" style={{ color: "red", cursor: 'pointer', float: "right", margin: "1rem" }} >SUBMIT</Button> : <Button variant="contained" style={{ cursor: "not-allowed", float: "right", margin: "1rem" }}>SUBMIT</Button>
                }
                {/* <Button variant="contained" style={{ float: "right", margin: "1rem" }}>SUMBIT</Button> */}
            </div>
        </>
    )
}

export default TimeSheet;



// <pre>{JSON.stringify(dates, null, 2)}</pre>