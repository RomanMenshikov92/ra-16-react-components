import React from "react";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

export const CalendarFunc = (props) => {
  const { date } = props;
  const currentDate = moment(date);
  const firstDayOfMonth = moment(date).startOf("month");
  const lastDayOfMonth = moment(date).endOf("month");
  const startWeek = firstDayOfMonth.week();
  const endWeek = lastDayOfMonth.week();
  const weeks = [];

  for (let week = startWeek; week <= endWeek; week++) {
    weeks.push(moment(date).week(week));
  }

  const getWeekDays = (week) => {
    const days = [];
    let currentDay = moment(week).isoWeekday(1).startOf("week");
    for (let i = 0; i < 7; i++) {
      days.push(currentDay);
      currentDay = moment(currentDay).add(1, "day");
    }
    return days;
  };

  const renderWeekDays = () => {
    const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    return weekDays.map((day, index) => (
      <th key={index} scope="col" title={day}>
        {day}
      </th>
    ));
  };

  const renderCalendar = () => {
    return weeks.map((week, index) => (
      <tr key={index}>
        {getWeekDays(week).map((day, index) => (
          <td
            key={index}
            className={
              (day.month() !== currentDate.month() ? "ui-datepicker-other-month " : "") +
              (day.isSame(currentDate, "day") ? "ui-datepicker-today" : "")
            }
          >
            {day.date()}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{currentDate.format("dddd").charAt(0).toUpperCase() + currentDate.format("dddd").slice(1)}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDate.date()}</div>
          <div className="ui-datepicker-material-month">{currentDate.format("MMMM")}</div>
          <div className="ui-datepicker-material-year">{currentDate.year()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{currentDate.format("MMMM").charAt(0).toUpperCase() + currentDate.format("MMMM").slice(1)}</span>
          &nbsp;
          <span className="ui-datepicker-year">{currentDate.year()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>{renderWeekDays()}</tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};
