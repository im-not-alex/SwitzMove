import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import CommonFun from '../commonFun';

function Item({item, last, onTouch}) {
  let icon = CommonFun.transpIcon(item.sections[0].journey);
  return (
    <TouchableOpacity
      style={[
        styles.touchableOpacityCardItem,
        last === true ? styles.touchableOpacityCardItemLast : {},
      ]}
      activeOpacity={0.85}
      onPress={() => onTouch(item.id)}>
      <Text style={styles.viewDate}>
        {new Date(item.from.departure.split('T')[0]).toDateString() + '\n'}
      </Text>
      <Text style={styles.viewDepartureArrival}>
        <Text style={styles.viewDepartureArrivalTime}>
          {item.from.departure.split('T')[1].split('+')[0].split(':')[0] +
            ':' +
            item.from.departure.split('T')[1].split('+')[0].split(':')[1] +
            ' ➡ '}
        </Text>
        <Text style={styles.viewDepartureArrivalTime}>
          {item.to.arrival.split('T')[1].split('+')[0].split(':')[0] +
            ':' +
            item.to.arrival.split('T')[1].split('+')[0].split(':')[1] +
            ' '}
        </Text>
      </Text>
      <View>
        <Text style={styles.viewDepartureArrival}>
          <Text style={styles.viewStops}>
            {CommonFun.renderTime(item.duration) + ' - '}
          </Text>
          {item.sections != null && item.sections.length > 1 && (
            <Text style={{fontStyle: 'italic', color: '#03254c'}}>
              <Text style={{fontWeight: 'bold'}}>
                {item.sections.length - 1}
              </Text>{' '}
              Changes {'\n'}
            </Text>
          )}
          {(item.sections == null || item.sections.length <= 1) && (
            <Text
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: '#00b300',
              }}>
              Direct
            </Text>
          )}
        </Text>
      </View>
      {item.platform != null && (
        <Text>{'Platform: ' + item.from.platform}</Text>
      )}
      {item.sections[0].journey !== null && (
        <Text style={{textAlign: 'center'}}>
          {icon + ' '}
          <Text style={styles.viewStops}>{item.sections[0].journey.name}</Text>
          <Text>{' - Operator: '}</Text>
          <Text style={styles.viewStops}>
            {item.sections[0].journey.operator}
          </Text>
        </Text>
      )}
      {item.sections[0].journey === null && item.sections[0].walk !== null && (
        <Text style={{textAlign: 'center'}}>
          {icon +
            (item.sections[0].walk.duration != null
              ? +' ' + item.sections[0].walk.duration + ' mt'
              : '')}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default function ListTravels({route, navigation}) {
  const {departure, destination, stringDate, stringTime} = route.params;
  const [connections, setConnections] = React.useState({
    connections: [],
    firstFetch: false,
  });
  if (!connections.firstFetch) {
    fetchConnections(departure.id, destination.id, stringDate, stringTime).then(
      (r) => {
        setConnections({connections: r, firstFetch: true});
      },
    );
  }

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        accessibilityRole={'image'}
        source={require('../../res/flag.png')}
        imageStyle={{
          overflow: 'hidden',
        }}
        style={styles.headerImage}>
        <View style={styles.headerWrapper}>
          <Text style={styles.titleWrapperTop}>
            <Text style={{fontWeight: 'bold'}}>
              {connections.connections.length}
            </Text>{' '}
            Results
          </Text>
          <Text style={styles.titleWrapper}>
            From <Text style={{fontWeight: 'bold'}}>{stringTime}</Text> of{' '}
            <Text style={{fontWeight: 'bold'}}>
              {new Date(stringDate).toDateString()}
            </Text>
          </Text>
          <Text numberOfLines={2} style={styles.depDestWrapper}>
            {departure.name} ➡ {destination.name}
          </Text>
        </View>
      </ImageBackground>

      {connections.connections.length === 0 && (
        <View style={styles.flatListEmpty}>
          {connections.firstFetch && (
            <Text style={styles.textEmptyList}>
              There are no result for this search
            </Text>
          )}
        </View>
      )}

      {connections.connections.length > 0 && (
        <FlatList
          style={styles.flatList}
          data={connections.connections}
          renderItem={(item) => (
            <Item
              item={item.item}
              last={item.item.id === connections.connections.length - 1}
              onTouch={() => navigation.navigate('detailsTravel', item.item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const fetchConnections = (idDeparture, idDestination, date, time) => {
  console.log(date);
  console.log(time);
  return fetch(
    'http://transport.opendata.ch/v1/connections?from=' +
      idDeparture +
      '&to=' +
      idDestination +
      '&date=' +
      date +
      '&time=' +
      time,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.errors != null || responseJson.errors !== undefined) {
        throw new Error(responseJson.errors[0].message);
      }

      let id = 0;
      responseJson.connections.forEach((r) => {
        r.id = id;
        id++;
      });
      return responseJson.connections;
    })
    .catch((error) => console.error(error));
};
