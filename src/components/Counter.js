import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  render() {

    return(
      <div>
        <h2>++{this.props.counter}</h2>
        <button className = 'btn btn-sm btn-primary' onClick = {this.handleIncrement} >Increment</button>
      </div>
    );
  }

  handleIncrement = (e) => {
    const {increment} = this.props;
    increment();
  }
}
// function mapStateToProps(state){
//   return {
//     counter: state.count
//   };
// };
// ES5 syntax
// const mapToDispatch = {
//   dispatchIncrement: increment
// };

// ES6 syntax
// const mapToDispatch = {increment};

//const decorator = connect(mapStateToProps, mapToDispatch);

export default connect((state) => ({
  counter: state.count
}), {increment})(Counter);

//export default decorator(Counter);
