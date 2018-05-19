import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

// Custom components
import ListItem from './ListItem';

/**
 * @description The list item component that feed the ListView dataSource.
 */
class LibraryList extends Component {

  /**
   * @description  Lifecycle event handler invoked just before mounting occurs.
   *  Setup the ListView data source.
   */
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  /**
   * @description  Return a list item with proper library data.
   * @param {Object} library - The library object.
   */
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderItem}
      />
    );
  }
}

/**
 * @description Make state into available props for the components when passed
 *  to connect().
 */
const mapStateToProps = state => (
  {
    libraries: state.libraries
  }
);

export default connect(mapStateToProps)(LibraryList);
