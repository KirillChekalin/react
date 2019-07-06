import React,{Component} from 'react'
// import PropTypes from 'prop-types'

import Select from 'react-select';

import {connect} from 'react-redux';
import {changeSelection} from '../../AC'
import {mapToArr} from '../../helpers'

class SelectFilter extends Component {
  // static propTypes = {
  //   articles: PropTypes.object.isRequired
  // };
  // стэйт можно и не ставить, но придется чтото делать с свойством value компонента select, ато иначе выдается ошибка unique key

  // state = {
  //   selectedOptions: null,
  // }

  handleChange = selected => {
    if (!selected)  return this.props.changeSelection([]);

    return this.props.changeSelection(selected.map(option => option.value))
  };


  render() {
    const {articles} = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        isMulti
        options = {options}
        onChange = {this.handleChange}
      />
    );
  }

}

export default connect(state => ({
  selected: state.filters.selected,
  articles: mapToArr(state.articles.entities)
}
), {changeSelection})(SelectFilter);
