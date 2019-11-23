import React, { useContext } from 'react';
import styles from '../../../css/Calendar.module.css';
import { format, addMonths } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CalendarContext from './CalendarContext';
import { normalizeInterval, validDatesInInterval } from './calendarUtils';

const CalendarHeading = (props: any) => {

    let { selectedRange, maxVacDays, inelDays } = useContext(CalendarContext);
    let daysSelected: number = selectedRange.start && selectedRange.end && validDatesInInterval(normalizeInterval({ start: selectedRange.start, end: selectedRange.end }), inelDays).length;

    return (
        <div className={styles.calendarHeading}>
            <button
                className={styles.prevBtn}
                onClick={() => props.onPrev()}
                title="Show previous month"
            >
                <FontAwesomeIcon icon="caret-left" />
            </button>
            <div className={styles.currentYearMonth}>
                <h2>{format(props.selectedDate, 'MMMM')} - {format(addMonths(props.selectedDate, 1), 'MMMM yyyy')}</h2>
                <span>
                    {selectedRange.start && format(selectedRange.start, 'do MMM') + " - "}
                    {selectedRange.end && format(selectedRange.end, 'do MMM')}
                    {daysSelected && ` (${daysSelected}/${(maxVacDays === -1 ? '∞' : maxVacDays)} ${"day" + (daysSelected > 1 ? 's' : '')} selected)`}
                </span>

            </div>

            <button className={styles.todayBtn} onClick={() => props.onToday()} title="Go to the current month">Today</button>

            <button
                className={styles.nextBtn}
                onClick={() => props.onNext()}
                title="Show next month"
            >
                <FontAwesomeIcon icon="caret-right" />
            </button>
        </div>
    )
}

export default CalendarHeading;