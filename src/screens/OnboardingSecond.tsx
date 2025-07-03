import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const OnboardingSecond = () => {
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
          Let's get you started{' '}
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
          Allow Access to your location ?{' '}
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
          >
            {' '}
            <Text style={{ alignSelf: 'center', marginTop: 16 }}> Yes </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 60,
              height: 60,
              alignSelf: 'center',
              borderRadius: 100,
            }}
          >
            <Text style={{ alignSelf: 'center', marginTop: '30%' }}> No </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingSecond;
