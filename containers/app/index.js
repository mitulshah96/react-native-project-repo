import React, { Component } from 'react';
import styles from './app.scss';
import Card from '../../components/card';
import { Platform, Text, View } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

const BlueText = () => {
  return <Text className={styles.blue}>Blue Text</Text>;
};

type Props = {};
export default class Apps extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card />
      </View>
    );
  }
}
