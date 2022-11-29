import React, { Component } from 'react';
import {
  func
} from 'prop-types';
import {
  View,
  Text
} from 'react-native';

class ContactListPage extends Component {

  render() {
    return (
      <View>
        <Text>
          ContactListPage
        </Text>
      </View>
    );
  }
}

ContactListPage.propTypes = {
  navigation: {
    navigate: func.isRequired,
  }
};

export { ContactListPage };
