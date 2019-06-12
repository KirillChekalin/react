import React,{Component} from 'react'

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
}

export default Filters;
