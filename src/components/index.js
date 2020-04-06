import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home'
import NewQuoteScreen from './NewQuote'

const AppStack = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Home`,
        }),
    },
    NewQuote:{
        screen: NewQuoteScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Add Information`,
        }),
    }
});

const RoutesStack = createSwitchNavigator(
    {
        // Loading: LoadingScreen,
        App: AppStack
    },
    // {initialRouteName: 'Loading'}
    {initialRouteName: 'App'}
);

const Router = createAppContainer(RoutesStack);

export default Router;
