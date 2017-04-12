import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

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
  static navigationOptions = {
    title: ({ state }) => {
      if (state.params.mode === 'info') {
        return `${state.params.user}'s Contact Info`;
      }
      return `Chat with ${state.params.user}`;
    },
    header: ({ state, setParams }) => {
      // The navigation prop has functions like setParams, goBack, and navigate.
      let right = (
        <Button
          title={`${state.params.user}'s info`}
          onPress={() => setParams({ mode: 'info' })}
        />
      );
      if (state.params.mode === 'info') {
        right = (
          <Button
            title="Done"
            onPress={() => setParams({ mode: 'none' })}
          />
        );
      }
      return { right };
    }
  }

  render() {
    const { user } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Chat with {user}</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of recent contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class AllContactsScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {
    screen: RecentChatsScreen
  },
  All: {
    screen: AllContactsScreen
  }
});

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
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
