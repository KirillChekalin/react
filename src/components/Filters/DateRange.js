import React,{Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css'

import './style.css'

import {connect} from 'react-redux';
import {changeDateRange} from '../../AC'


class Calendar extends Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  handleDayClick = (day) => {
    const {changeDateRange, range} = this.props;
    changeDateRange(DateUtils.addDayToRange(day, range));
  }

  handleResetClick = () => {
    const {changeDateRange} = this.props;
    changeDateRange({
      from: null,
      to: null
    });
  }

  render() {
    const {from, to} = this.props.range;
    const modifiers = {start: from, end: to};

    return (
      <div className = "Range">
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="btn btn-info btn-sm" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />

      </div>
    );
  }
}

export default connect(state => ({
  range: state.filters.dateRange
}), {changeDateRange})(Calendar);
