import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  scrollView: {
    paddingTop: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  safeAreaViewWrapper: {
    backgroundColor: '#b80f0a',
    flex: 1,
  },
  scrollViewPadre: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#fffffb',
    margin: 5,
    flex: 1,
    marginBottom: 0,
  },
  body: {
    backgroundColor: '#fffffb',
    marginHorizontal: 32,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
  viewStation: {
    flex: 1,
    fontSize: 20,
    color: '#394387',
  },
  viewStationStartEnd: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#394387',
  },
  viewPlatform: {
    flex: 1,
    fontSize: 16,
    color: '#4f4f4f',
    fontStyle: 'italic',
  },
  viewTravelDuration: {
    flex: 2,
    fontSize: 18,
    color: '#3792cb',
    marginVertical: 18,
  },
  viewArrivalTime: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  viewDeparture: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b80f0a',
  },
  last: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 200,
  },
  edgeTime: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
