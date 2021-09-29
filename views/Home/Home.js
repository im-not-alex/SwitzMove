import Inputs from './inputs.js';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

console.disableYellowBox = true;
const Home = ({navigation}) => {
  const autocompleteDepRef = useRef();
  const autocompleteDestRef = useRef();
  const [outSideTouch, setOutSideTouch] = useState(false);
  const [departure, setDeparture] = React.useState({id: -1});
  const [destination, setDestination] = React.useState({id: -1});

  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setOutSideTouch(true);
          if (destination.id === undefined || destination.id === -1) {
            autocompleteDestRef.current.clearInput();
            if (autocompleteDestRef.current.dropdown.current != null) {
              autocompleteDestRef.current.dropdown.current.close();
            }
          }
          if (departure.id === undefined || departure.id === -1) {
            autocompleteDepRef.current.clearInput();
            if (autocompleteDepRef.current.dropdown.current != null) {
              autocompleteDepRef.current.dropdown.current.close();
            }
          }
        }}>
        <View>
          <ImageBackground
            accessibilityRole={'image'}
            source={require('../../res/ciuffCiuff.png')}
            style={styles.headerImage}
          />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                Choose your travel:{' '}
              </Text>
            </View>
            <Inputs
              autocompleteDepRef={autocompleteDepRef}
              autocompleteDestRef={autocompleteDestRef}
              outSideTouch={outSideTouch}
              setOutSideTouch={setOutSideTouch}
              departure={departure}
              setDeparture={setDeparture}
              destination={destination}
              setDestination={setDestination}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;
