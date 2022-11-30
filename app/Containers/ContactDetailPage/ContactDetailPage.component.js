import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  func,
  shape,
} from 'prop-types';

import { Styles } from './ContactDetailPage.component.style';

class ContactDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>ContactDetailPage</Text>
      </View>
    );
  }
}

ContactDetailPage.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  })
};

export { ContactDetailPage };
