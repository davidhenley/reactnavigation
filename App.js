import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'David' })}
          title="Chat with David"
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  render() {
    const { user } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Chat with {user}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      title: ({ state }) => {
        return `Chat with ${state.params.user}`;
      }
    }
  }
});

AppRegistry.registerComponent('ReactNavigation', () => SimpleApp);
