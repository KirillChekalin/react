import React,{Component} from 'react'
//
// import Select from 'react-select';
// import DayPicker from '../dayPicker/DayPicker';
//
// import {connect} from 'react-redux';
// import {filterArticle} from '../../AC'

import SelectFilter from './Select';
import DateRange from './DateRange'

class Filters extends Component {

  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
      </div>
    );
  }



  /***************************************/


}

export default Filters;

// export default connect(state => ({
//   articles: state
// }), {filterArticle})(Filters);
