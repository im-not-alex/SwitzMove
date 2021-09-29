import React from 'react';
import {View, Text, TouchableOpacity, Keyboard} from 'react-native';

import {Autocomplete} from 'react-native-dropdown-autocomplete';
import styles from './styles';
import stylesAutoComplete from './stylesAutoComplete';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import TimesCircleRegular from '../../res/times-circle-regular.svg';

const Inputs = (props) => {
  const navigation = useNavigation();
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [error, setError] = React.useState(false);
  const {
    autocompleteDepRef,
    autocompleteDestRef,
    outSideTouch,
    setOutSideTouch,
    departure,
    setDeparture,
    destination,
    setDestination,
  } = props;

  const handleDeparture = (text) => {
    setDeparture(text);
    setError(false);
  };
  const handleDestination = (text) => {
    setDestination(text);
    setError(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (newdate) => {
    hideDatePicker();
    setDate(newdate);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (newtime) => {
    hideTimePicker();
    setTime(newtime);
  };

  const search = () => {
    if (
      departure.id !== undefined &&
      departure.id !== -1 &&
      destination.id !== undefined &&
      destination.id !== -1
    ) {
      const stringDate = moment(date).format('YYYY-MM-DD');
      const stringTime = moment(time).format('HH:mm');
      navigation.navigate('listTravels', {
        departure,
        destination,
        stringDate,
        stringTime,
      });
    } else {
      setError(true);
    }
  };

  const clearDestAutocomplete = () => {
    if (destination.id === undefined || destination.id === -1) {
      clearDestAutocompleteWithoutControl();
    }
  };

  const clearDestAutocompleteWithoutControl = () => {
    autocompleteDestRef.current.clearInput();
    if (autocompleteDestRef.current.dropdown.current != null) {
      autocompleteDestRef.current.dropdown.current.close();
    }
  };

  const clearDepAutocomplete = () => {
    if (departure.id === undefined || departure.id === -1) {
      clearDepAutocompleteWithoutControl();
    }
  };

  const clearDepAutocompleteWithoutControl = () => {
    autocompleteDepRef.current.clearInput();
    if (autocompleteDepRef.current.dropdown.current != null) {
      autocompleteDepRef.current.dropdown.current.close();
    }
  };

  const clearAutocompletes = () => {
    Keyboard.dismiss();
    setOutSideTouch(true);
    clearDestAutocomplete();
    clearDepAutocomplete();
  };

  const fetchData = (searchText, object) => {
    Keyboard.dismiss();
    return fetchAutoCompleteData(searchText).then((r) => {
      if (outSideTouch) {
        setOutSideTouch(false);
        throw new Error('Not show dropdown - normal behaviour');
      }
      if (object.id !== -1) {
        return r.filter((a) => a.id !== object.id);
      }
      return r;
    });
  };

  return (
    <View style={styles.inputContainer}>
      <Autocomplete
        {...props}
        ref={autocompleteDepRef}
        inputContainerStyle={stylesAutoComplete.inputContainer}
        inputStyle={stylesAutoComplete.inputForm}
        separatorStyle={stylesAutoComplete.innerSeparator}
        listHeaderTextStyle={stylesAutoComplete.listHeader}
        containerStyle={stylesAutoComplete.autocompletesContainer}
        pickerStyle={stylesAutoComplete.autocompletesPicker}
        scrollStyle={stylesAutoComplete.autocompletesScroll}
        spinnerStyle={stylesAutoComplete.autocompletesSpinner}
        rightContentItemStyle={stylesAutoComplete.autocompletesRightContent}
        spinnerColor="#b80f0a"
        highLightColor="#b80f0a"
        rightContent={true}
        placeholder="From:"
        minimumCharactersCount={2}
        fetchData={(search1) => fetchData(search1, destination)}
        valueExtractor={(item) => item.name}
        rightTextExtractor={() => ''}
        waitInterval={2000}
        handleSelectItem={(newDeparture) => {
          handleDeparture(newDeparture);
        }}
        onChangeText={(value) => {
          clearDestAutocomplete();
          setOutSideTouch(false);
          if (value !== departure.name) {
            setDeparture({id: -1});
          }
        }}
        renderIcon={() => (
          <TouchableOpacity
            onPress={() => clearDepAutocompleteWithoutControl()}>
            <TimesCircleRegular width={15} height={15} color={'#656563'} />
          </TouchableOpacity>
        )}
      />
      <Autocomplete
        {...props}
        ref={autocompleteDestRef}
        inputContainerStyle={stylesAutoComplete.inputContainer}
        inputStyle={stylesAutoComplete.inputForm}
        separatorStyle={stylesAutoComplete.innerSeparator}
        listHeaderTextStyle={stylesAutoComplete.listHeader}
        containerStyle={stylesAutoComplete.autocompletesContainer}
        pickerStyle={stylesAutoComplete.autocompletesPicker}
        scrollStyle={stylesAutoComplete.autocompletesScroll}
        spinnerStyle={stylesAutoComplete.autocompletesSpinner}
        rightContentItemStyle={stylesAutoComplete.autocompletesRightContent}
        spinnerColor="#b80f0a"
        highLightColor="#b80f0a"
        rightContent={true}
        placeholder="To:"
        minimumCharactersCount={2}
        fetchData={(search1) => fetchData(search1, departure)}
        valueExtractor={(item) => item.name}
        rightTextExtractor={() => ''}
        waitInterval={2000}
        handleSelectItem={(newDestination) => {
          handleDestination(newDestination);
        }}
        onChangeText={(value) => {
          clearDepAutocomplete();
          setOutSideTouch(false);
          if (value !== destination.name) {
            setDestination({id: -1});
          }
        }}
        renderIcon={() => (
          <TouchableOpacity
            onPress={() => clearDestAutocompleteWithoutControl()}>
            <TimesCircleRegular width={15} height={15} color={'#656563'} />
          </TouchableOpacity>
        )}
      />
      <View {...props} style={styles.viewDateTimeDescriptionWrapper}>
        <View style={{flex: 1}}>
          <Text style={styles.descriptionLeft}>Start</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.descriptionRight}>At</Text>
        </View>
      </View>
      <View {...props} style={styles.viewDateTimeButtonsWrapper}>
        <TouchableOpacity
          style={styles.datePickerButtonLeft}
          activeOpacity={0.7}
          onPress={() => {
            clearAutocompletes();
            showDatePicker();
          }}>
          <Text numberOfLines={1} style={styles.datePickerButtonText}>
            {date.toDateString()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.datePickerButtonRight}
          activeOpacity={0.7}
          onPress={() => {
            clearAutocompletes();
            showTimePicker();
          }}>
          <Text numberOfLines={1} style={styles.datePickerButtonText}>
            {time.toString().split(' ')[4].split(':')[0] +
              ':' +
              time.toString().split(' ')[4].split(':')[1]}
          </Text>
        </TouchableOpacity>
      </View>
      <View {...props}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          minimumDate={new Date()}
          date={date}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          is24Hour={true}
          minimumDate={new Date()}
          date={time}
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </View>
      <TouchableOpacity
        {...props}
        style={styles.submitButton}
        activeOpacity={0.85}
        onPress={() => {
          clearAutocompletes();
          search();
        }}>
        <Text style={styles.submitButtonText}> Search </Text>
      </TouchableOpacity>
      {error && (
        <Text {...props} style={styles.error}>
          The station is not been choosen correctly. {'\n'} Please select a
          station from the list above.{' '}
        </Text>
      )}
    </View>
  );
};

function fetchAutoCompleteData(search1) {
  return fetch(
    'http://transport.opendata.ch/v1/locations?type=station&query=' + search1,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson.stations.filter(
        (s) => s.id !== null && s.name !== null,
      );
    })
    .catch((error) => console.log(error));
}

export default Inputs;
