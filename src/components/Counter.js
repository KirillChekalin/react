import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment, decrement} from '../AC'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  render() {

    return(
      <div>
        <h2>{this.props.counter}</h2>
        <div className = 'btn-group'>
          <button className = 'btn btn-sm btn-primary' onClick = {this.handleIncrement} >Increment</button>
          <button className = 'btn btn-sm btn-primary' onClick = {this.handleDecrement} >Decrement</button>
        </div>
      </div>
    );
  }

  handleIncrement = (e) => {
    const {increment} = this.props;
    increment();
  }

  handleDecrement = (e) => {
    const {decrement} = this.props;
    decrement();
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
}), {increment, decrement})(Counter);

//export default decorator(Counter);
