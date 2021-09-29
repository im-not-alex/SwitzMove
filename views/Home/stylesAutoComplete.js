import {StyleSheet} from 'react-native';
import {theme} from 'react-native-dropdown-autocomplete/constants/Theme';

export default StyleSheet.create({
  autocompletesContainer: {
    paddingTop: 0,
    zIndex: 1,
    width: '100%',
  },
  autocompletesPicker: {
    borderColor: '#b80f0a',
    borderWidth: 0,
    marginLeft: -29,
    width: '88.5%',
    elevation: 15,
  },
  autocompletesScroll: {
    borderColor: '#b80f0a',
    borderWidth: 1.5,
  },
  autocompletesSpinner: {
    marginRight: 15,
  },
  autocompletesRightContent: {
    color: '#c7c7c7',
    textDecorationLine: 'none',
  },
  inputForm: {
    fontSize: 19,
    lineHeight: 24,
    textDecorationLine: 'none',
    paddingLeft: 10,
    height: 45,
    maxWidth: '100%',
    flexGrow: 2,
    justifyContent: 'center',
    borderWidth: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'flex-start',
    borderColor: '#b80f0a',
    borderWidth: 2,
    borderRadius: 12,
  },
  innerSeparator: {
    height: 1,
    backgroundColor: theme.divider,
  },
  listHeader: {
    height: 41.8,
    justifyContent: 'center',
    paddingTop: 0,
  },
});
