import React, {Component, PropTypes} from 'react'; 
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const Followers = () => (
  <SelectableList defaultValue={3}>
    <Subheader>MESSAGES</Subheader>
    <ListItem
      value={1}
      primaryText="Brendan Lim"
      leftAvatar={<Avatar src="images/ok-128.jpg" />}
    />
    <ListItem
      value={3}
      primaryText="Kerem Suer"
      leftAvatar={<Avatar src="images/kerem-128.jpg" />}
    />
    <ListItem
      value={4}
      primaryText="Eric Hoffman"
      leftAvatar={<Avatar src="images/kolage-128.jpg" />}
    />
    <ListItem
      value={5}
      primaryText="Raquel Parrado"
      leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
    />
  </SelectableList>
);

export default Messages;
