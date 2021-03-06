import * as React from 'react';
// import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Easing ,Animated} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Resetpassword from '../screens/ResetPasswrd';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
//import TextInputs from '../textInputs/TextInputs';
import Setupscreen from '../screens/SetUpScreen';
//import PickerInput from '../../Picker/PickerInput';
import ConfirmResetPassword from '../screens/CheckResetPasswrd';
import BottomTabe from '../navigation/tabNav';
import Setupscreen1 from '../screens/SetUpScreen1';
import LastSetUpScreen from '../screens/SetUpLastScreen';
import AddExercise from '../screens/AddExercise';
import BriskScreen from '../screens/BriskScreen';
import Exerciselog from '../screens/ExerciseLog';
import Logweight from '../screens/LogWeight';
import Macrocalculator from '../screens/MacroCalculator';
import BMICalculator from '../screens/CalculateBMI';
//import ChartScreen from '../BarChart/BarChart';
//import Wheelspiner from '../Progress Wheel/Progress';
//import console = require('console');
//import CaloriesSetupBtn from '../buttons/setUpBtn'
//import Resetpassword from '../screens/ResetPasswrd';
// import Dashboard from '../screens/Dashboard';

//console.log('hello World')


const MainNavigator= createStackNavigator({
  // Login: {screen: Login},
  // Signup:{screen:Signup},
  // Setupscreen1:{screen:Setupscreen1}, 
  // Setupscreen:{screen:Setupscreen},
  // LastSetUpScreen:{screen:LastSetUpScreen},
  // Resetpassword:{screen:Resetpassword},
  // ConfirmResetPassword:{screen:ConfirmResetPassword},
  //Wheelspiner:{screen:Wheelspiner},
  //BriskScreen:{screen:BriskScreen},
  //ChartScreen:{screen:ChartScreen},
  
  BottomTabe:{screen:BottomTabe,
    navigationOptions:{
      header:null
    }
  },
   AddExercise:{screen:AddExercise,
    navigationOptions:{
      headerStyle:{
        elevation:0,
      }
    
    }
  },
  Exerciselog:{screen:Exerciselog,
    navigationOptions:{
      headerStyle:{
        elevation:0,
      }
    
    }
  },
  Logweight:{screen:Logweight,
    navigationOptions:{
      headerStyle:{
        elevation:0,
      }
    
    }
  },
  Macrocalculator:{screen:Macrocalculator,
    navigationOptions:{
      headerStyle:{
        elevation:0,
      }
    
    }
  },
  BMICalculator:{screen:BMICalculator,
    navigationOptions:{
      headerStyle:{
        elevation:0,
      }
    
    }
  },

  },



  {
    // headerMode: 'none',
    // mode: 'modal',
    // defaultNavigationOptions: {
    //   gesturesEnabled: false,
    // },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver:true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
           inputRange: [index - 1, index, index + 1],
          // inputRange: [index - 1, index],
          outputRange: [height, 0,2],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
  
  
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;


