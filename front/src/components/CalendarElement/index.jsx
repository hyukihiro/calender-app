import React from "react";
import dayjs from "dayjs";
import { isFirstDay, isSameMonth, isSameDay } from "../../services/calendar";

import * as styles from "./style.css";

import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }) => {
  const today = dayjs();

  // 先月
  const isThisMonth = isSameMonth(today, day);
  const textColor = isThisMonth ? "textPrimary" : "textSecondary";

  // 月の初め
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判定
  const isTheDay = isSameDay(today, day);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
        color={textColor}
      >
        <span className={isTheDay ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
