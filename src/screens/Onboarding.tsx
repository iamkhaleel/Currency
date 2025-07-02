import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

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
            fontFamily: 'bold',
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
            fontFamily: 'bold',
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
            fontFamily: 'SnellRoundhand',
          }}
        >
          SIMPLE, FAST AND RELIABLE{' '}
        </Text>
      </View>
    </View>
  );
};

export default Onboarding;
