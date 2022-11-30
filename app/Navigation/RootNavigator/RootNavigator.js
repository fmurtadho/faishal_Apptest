import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';

import { Colors } from '../../Theme';
import { Routes } from '../Routes';
import ContactListPage from '../../Containers/ContactListPage/ContactListPage.container';
import ContactDetailPage from '../../Containers/ContactDetailPage/ContactDetailPage.container';

const MainStackNavigator = createStackNavigator({
  ContactListPage: {
    screen: ContactListPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact',
      headerRight: (
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.GREY_MERCURY,
            borderWidth: 1,
            backgroundColor: Colors.GREY_SOLITUDE,
            marginRight: 16,
            borderRadius: 4,
            elevation: 4,
          }}
          onPress={() => navigation.navigate(
            Routes.MainStackNavigator.ContactDetailPage, {
              new: true,
            },
          )}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      ),
    }),
  },
  ContactDetailPage: {
    screen: ContactDetailPage,
  },
});

export const RootNavigator = createAppContainer(MainStackNavigator);
