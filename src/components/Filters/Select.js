import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select';

import {connect} from 'react-redux';
import {changeSelection} from '../../AC'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired
  };
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

    const options = Object.keys(articles).map(id => ({
      label: articles[id].title,
      value: id
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
  articles: state.articles
}), {changeSelection})(SelectFilter);
