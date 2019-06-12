import React,{Component} from 'react'

// import Select from 'react-select';
import DayPicker from '../dayPicker/DayPicker';

// import {connect} from 'react-redux';
// import {filterArticle} from '../../AC'


class DateRange extends Component{

  render() {
    return (
      <DayPicker />
    );
  }
}

export default DateRange;
