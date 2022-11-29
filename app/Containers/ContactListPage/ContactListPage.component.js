import React, { Component } from 'react';
import {
  func
} from 'prop-types';
import {
  View,
  Text
} from 'react-native';

class ContactListPage extends Component {
  componentDidMount() {
    return this.fetchData();
  }

  fetchData = async () => {
    const { getContactList } = this.props;

    await getContactList();
  }

  render() {
    const { contactList, loading } = this.props;
    return (
      <View>
        <Text>
          {JSON.stringify(contactList)}
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
