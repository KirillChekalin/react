import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class AccordionComponent extends ReactComponent{
  state = {
    id: null
  };

  render () {

    return(

        <OriginalComponent
          {...this.props}
          isOpen = {this.state.id}
          toggleOpen = {this.toggleOpen}
        />
    )
  }

  toggleOpen = id => ev => {
    ev && ev.preventDefault();

    this.setState({
      id: (id === this.state.id) ? null : id
    });

  }
}
