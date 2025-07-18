import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const Onboarding = () => {
  return (
    <View style={{ backgroundColor: 'white', height: '60%' }}>
      <Text> </Text>
      <View
        style={{
          backgroundColor: 'black',
          height: '90%',
          width: '100%',
          position: 'relative',
          marginTop: '120%',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            color: 'white',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 30,
            alignSelf: 'center',
            marginTop: 50,
          }}
        >
          {' '}
          Know Your Currency{' '}
        </Text>
        <Text
          style={{
            fontWeight: 500,
            color: 'white',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 30,
            alignSelf: 'center',
          }}
        >
          Rate at FingerTip!{' '}
        </Text>
        <Text
          style={{
            marginTop: 30,
            fontWeight: 100,
            color: 'white',
            fontSize: 15,
            alignSelf: 'center',
            fontFamily: 'Avenir',
          }}
        >
          SIMPLE, FAST AND RELIABLE{' '}
        </Text>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 60,
              height: 60,
              alignSelf: 'center',
              borderRadius: 100,
              margin: 40,
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
