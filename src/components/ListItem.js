import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';

// Custom components
import { CardSection } from './common';

// Action creators
import * as actions from '../actions';

/**
 * @description The list item component that feeds the ListView dataSource.
 */
class ListItem extends Component {

  /**
   * @description  Lifecycle event handler invoked just before rendering when
   *  new props or state are being received. Setup the spring animation.
   */
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  /**
   * @description  Render the library description if this it is expanded (library selected).
   */
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

/**
 * The component StyleSheet.
 */
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

/**
 * @description Make state into available props for the components when passed
 *  to connect().
 */
const mapStateToProps = (state, ownProps) => {
 const expanded = state.selectedLibraryId === ownProps.library.id;

 return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
