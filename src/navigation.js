import React, { Component } from 'react';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import styled from 'styled-components/native';

import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';


const T = styled.Text``;

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: 'Home',
        tabBarIcon: () => <T>Home</T>,
      }),
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: () => ({
        headerTitle: 'Explore',
        tabBarIcon: () => <T>Explore</T>,
      }),
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: () => ({
        headerTitle: 'Notifications',
        tabBarIcon: () => <T>Notifications</T>,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTitle: 'Profile',
        tabBarIcon: () => <T>Profile</T>,
      }),
    },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'red',
        height: 50,
        paddingVertical: 5,
      },
    },
  },
);

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
  },
  {
    cardStyle: {
      backgroundColor: '#F1F6FA',
    },
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    }),
  },
);

class AppNavigator extends Component {
  render() {
    const { user } = this.props;
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
    if (!user.connected) {
      return <AuthenticationScreen />;
    }
    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
  user: state.user,
}))(AppNavigator);

export const router = AppMainNav.router;
