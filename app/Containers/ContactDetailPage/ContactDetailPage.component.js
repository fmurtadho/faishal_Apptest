import React, { Component } from 'react';
import {
  View,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  bool,
  func,
  shape,
  string,
} from 'prop-types';

import { Styles } from './ContactDetailPage.component.style';
import { Colors } from '../../Theme';
import { ContactDetailImage } from '../../Components/ContactDetailImage/ContactDetailImage.component';
import { CustomTextInput } from '../../Components/CustomTextInput/CustomTextInput.component'

class ContactDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    };
  }

  componentDidMount() {
    return this.fetchContact();
  }

  fetchContact = async () => {
    const { navigation: { getParam }, getContact } = this.props;
    const id = getParam('id', 'NO-ID');

    if (id !== 'NO-ID') {
      await getContact(id);

      const {
        contactDetail,
        error,
        errorMessage,
      } = this.props;

      if (!error) {
        return this.setState({
          id: contactDetail.id,
          firstName: contactDetail.firstName,
          lastName: contactDetail.lastName,
          age: contactDetail.age,
          photo: contactDetail.photo,
        });
      }

      return Alert.alert(errorMessage);
    }

    return false;
  };

  onChangeText = () => {};

  render() {
    const {
      firstName,
      lastName,
      age,
      photo,
    } = this.state;
    const { loading } = this.props;

    if (loading) {
      return (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator
            color={Colors.CARAMEL.LAKE}
            size="large"
          />
        </View>
      );
    }

    return (
      <ScrollView style={Styles.container}>
        <ContactDetailImage uri={photo} />
        <CustomTextInput
          label="First Name"
          onChangeText={this.onChangeText}
          fieldName="firstName"
          value={firstName}
        />
        <CustomTextInput
          label="Last Name"
          onChangeText={this.onChangeText}
          fieldName="lastName"
          value={lastName}
        />
        <CustomTextInput
          keyboardType="numeric"
          label="Age"
          onChangeText={this.onChangeText}
          fieldName="age"
          value={String(age)}
        />
        <CustomTextInput
          multiline
          label="Photo URL"
          onChangeText={this.onChangeText}
          fieldName="photo"
          value={photo}
        />
      </ScrollView>
    );
  }
}

ContactDetailPage.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  }),
  getContact: func.isRequired,
  error: bool.isRequired,
  errorMessage: string,
  loading: bool.isRequired,
  message: string
};

export { ContactDetailPage };
