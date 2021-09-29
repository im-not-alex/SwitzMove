import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  mainWrapper: {
    borderColor: '#6495ED',
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: 10,
    color: Colors.white,
    alignItems: 'center',
  },
  engine: {
    position: 'absolute',
  },
  safeAreaViewWrapper: {
    backgroundColor: '#b80f0a',
  },
  body: {
    height: '100%',
    backgroundColor: '#fafafa',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -100,
    marginHorizontal: 5,
  },
  sectionContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b80f0a',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputContainer: {
    paddingTop: 5,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#6495ED',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#b80f0a',
    padding: 10,
    marginTop: 102,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 15,
    height: 42,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  datePickerButtonLeft: {
    flex: 1,
    backgroundColor: '#fafafa',
    color: '#FFF',
    padding: 10,
    borderColor: '#b80f0a',
    borderWidth: 2,
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 10,
    margin: 10,
    height: 45,
    marginTop: 20,
  },
  datePickerButtonRight: {
    flex: 1,
    backgroundColor: '#fafafa',
    color: '#FFF',
    padding: 10,
    borderColor: '#b80f0a',
    borderWidth: 2,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 15,
    margin: 10,
    height: 45,
    marginTop: 20,
  },
  datePickerButtonText: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  viewDateTimeDescriptionWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionLeft: {
    color: '#b80f0a',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 5,
  },
  descriptionRight: {
    color: '#b80f0a',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: -10,
    marginTop: 5,
  },
  viewDateTimeButtonsWrapper: {
    marginTop: 18,
    flex: 1,
    flexDirection: 'row',
  },
  error: {
    fontSize: 16,
    color: '#d70000',
    textAlign: 'center',
  },
});
