import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerWrapper: {
    marginTop: 45,
    marginBottom: 19,
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  titleWrapperTop: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
  titleWrapper: {
    fontSize: 17,
    color: '#ffffff',
    paddingBottom: 5,
    textAlign: 'center',
  },
  depDestWrapper: {
    fontSize: 21,
    color: '#e7f0ff',
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 4,
    fontWeight: 'bold',
  },
  mainWrapper: {
    backgroundColor: '#b80f0a',
    flex: 1,
  },
  viewDate: {
    color: '#03254c',
    fontWeight: 'bold',
  },
  touchableOpacityCardItem: {
    marginTop: 5,
    color: '#000000',
    backgroundColor: '#bee1ff',
    padding: 10,
    marginHorizontal: 32,
    marginBottom: 12,
    elevation: 7,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  viewDepartureArrival: {
    textAlign: 'center',
  },
  viewDepartureArrivalTime: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewStops: {
    textAlign: 'left',
    fontWeight: 'bold',
    flex: 0.5,
  },
  viewStopsRight: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  flatList: {
    paddingTop: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#fffffb',
    margin: 5,
    paddingBottom: 5,
    marginBottom: 0,
    flex: 1,
  },
  touchableOpacityCardItemLast: {
    marginBottom: 50,
  },
  flatListEmpty: {
    paddingTop: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#fffffb',
    margin: 5,
    marginBottom: 0,
    flex: 1,
  },
  textEmptyList: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d70000',
    textAlign: 'center',
  },
  checkpoint: {
    fontStyle: 'italic',
  },
});
