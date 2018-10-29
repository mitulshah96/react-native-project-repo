import React, { Component } from 'react';
import Cardsection from '../cardsection';
import { Platform, Text, View, Image } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

type Props = {};
export default class Card extends Component<Props> {
  render() {
    return (
      <View>
        <Cardsection />
      </View>
    );
  }
}
