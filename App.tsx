import {Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'react-native-bars';
import AppUseKeyboardReanimated from './AppUseKeyboardReanimated';
import {useState} from 'react';

const App = () => {
  const [state, setState] = useState(false);
  return (
    <View style={{flex: 1, padding: 50, backgroundColor: 'gray'}}>
      <StatusBar animated={true} barStyle="dark-content" />
      <TouchableOpacity onPress={() => setState(current => !current)}>
        <Text>{'Turn On/Off component: ' + state.toString()}</Text>
      </TouchableOpacity>
      {state ? <AppUseKeyboardReanimated /> : null}
    </View>
  );
};
export default App;
