import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'UFFS',
    headerStyle: {
      backgroundColor: '#519387',
    },
    headerTintColor: '#ffff',
    headerTitleStyle: {
      fontWeight: 'arial',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <Button
          title="Ir para detalhes"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              text: 'Universidade Federal',
            });
          }}
        />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('text', 'A Nested Details Screen'),
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const text = navigation.getParam('text', 'Valor padrão');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>text: {JSON.stringify(text)}</Text>

        <Button
          title="Vá a detalhes... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId,
            })
          }
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ text: 'UFFS' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
