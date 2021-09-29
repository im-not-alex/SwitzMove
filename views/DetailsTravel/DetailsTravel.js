import {FlatList, ImageBackground, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import headerStyles from './stylesHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonFun from '../commonFun';

const formatDuration = (time) => {
  let min = parseInt(time / 60);
  let hour = parseInt(min / 60);
  let day = parseInt(hour / 24);
  min = min % 60;
  hour = hour % 60;
  day = day % 24;
  let value =
    (day >= 1 ? day + (day === 1 ? ' day ' : ' days ') : '') +
    (hour >= 1 ? hour + ' h ' : '') +
    (min >= 1 ? min + ' min ' : '');
  return value !== '' ? value : 'straight away';
};

function Journey({param, first, last}) {
  console.log(JSON.stringify(param));
  let duration =
    param.arrival.arrivalTimestamp - param.departure.departureTimestamp;
  let depTimeA =
    param.departure.arrival !== null ? param.departure.arrival.split(/\D/) : [];
  let depTimeB = param.departure.departure.split(/\D/);
  let arrTimeA = last === true ? param.arrival.arrival.split(/\D/) : [];
  let icon = CommonFun.transpIcon(param.journey);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          {param.departure.arrivalTimestamp !== null && (
            <Text style={styles.viewArrivalTime}>
              {depTimeA[3] + ':' + depTimeA[4]}
            </Text>
          )}
          <Text
            style={[first === true ? styles.edgeTime : styles.viewDeparture]}>
            {depTimeB[3] + ':' + depTimeB[4]}
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={
              first === true ? styles.viewStationStartEnd : styles.viewStation
            }>
            {param.departure.station.name}
          </Text>
          <Text style={styles.viewPlatform}>
            {(param.arrival.platform !== null
              ? 'platform ' + param.arrival.platform
              : '') +
              (param.journey !== null
                ? (param.arrival.platform !== null ? ', ' : '') +
                  param.journey.operator +
                  ' ' +
                  param.journey.name
                : '')}
          </Text>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{flex: 1}} />
        <Text style={styles.viewTravelDuration}>
          {icon +
            ' ' +
            formatDuration(duration) +
            (param.walk !== null && param.walk.duration !== null
              ? '  -  ' + param.walk.duration + ' mt'
              : '')}
        </Text>
      </View>
      {last === true && (
        <View style={styles.last}>
          <View style={{flex: 0.5}}>
            <Text style={styles.edgeTime}>
              {arrTimeA[3] + ':' + arrTimeA[4]}
            </Text>
          </View>
          <Text style={styles.viewStationStartEnd}>
            {param.arrival.station.name}
          </Text>
        </View>
      )}
    </View>
  );
}

function Route({sections}) {
  let id = 0;
  sections.forEach((r) => {
    r.id = id;
    id += 1;
  });
  return (
    <View style={styles.body}>
      <FlatList
        data={sections}
        renderItem={(item) => (
          <Journey
            param={item.item}
            first={item.item.id === 0}
            last={item.item.id === sections.length - 1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function DetailsTravels({route, navigation}) {
  const {from, to, duration, sections} = route.params;
  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <ImageBackground
        accessibilityRole={'image'}
        source={require('../../res/flag.png')}
        imageStyle={{
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          overflow: 'hidden',
        }}
        style={headerStyles.headerImage}>
        <View style={headerStyles.headerWrapper}>
          <Text numberOfLines={1} style={headerStyles.depDestWrapper}>
            {from.station.name + ' ➡ ' + to.station.name}
          </Text>
          <Text numberOfLines={1} style={headerStyles.durationWrapper}>
            Estimated duration:{' '}
            <Text style={{fontWeight: 'bold'}}>
              {CommonFun.renderTime(duration)}
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.scrollViewPadre}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Route sections={sections} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
