/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class secret extends Component {
  constructor(props) {
		super(props);
		this.state = {
      active: true,
			time: '',
		};
	}
  toggleActive () {
    console.log(123);
    this.setState({
      active: !this.state.active,
    });
    console.log(this.state.active);
  }
  checkTime (i) {
      if (i < 10) {i = "0" + i};
      return i;
  }
  componentDidMount () {
    setInterval(() => {
      const now = new Date();
      const yr = now.getFullYear() - 1911;
      const dy = this.checkTime(now.getDate());
      const mo = this.checkTime(now.getMonth() + 1);
      const hou = this.checkTime(now.getHours());
      const min = this.checkTime(now.getMinutes());
      const sec = this.checkTime(now.getSeconds());
      this.setState({
        time: `${yr}-${mo}-${dy} ${hou}:${min}:${sec}`,
      });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <Text style={styles.statusText}>
        { this.state.active ? `已上鎖，可進入此管制營區` : `未上鎖，不得進入管制營區！`}
        </Text>
        <TouchableOpacity
          style={[styles.btn, styles.greenBtn]}
          onPress={() => this.toggleActive()}
        >
          <View style={[styles.light, styles.green]}></View>
          <Text style={[styles.btnText, this.state.active && styles.unactiveText]}>上鎖：進入管制模式</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.redBtn]}
          onPress={() => this.toggleActive()}
        >
          <View style={[styles.light, styles.red]}></View>
          <Text style={styles.btnText}>解鎖：離開管制模式</Text>
        </TouchableOpacity>
        <Text style={styles.time}>{this.state.time}</Text>
        { this.state.active ?
          <Image style={styles.bg} source={require('./src/img/bg.png')} />
          :
          <Image style={styles.bg} source={require('./src/img/bg_red.png')} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  bg: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: 20,
  },
  statusText: {
    position: 'absolute',
    zIndex: 10,
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 17,
    top: 86,
    fontFamily: 'PingFangTC-Regular',
  },
  time: {
    position: 'absolute',
    fontFamily: 'PingFangTC-Regular',
    zIndex: 10,
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 22,
    bottom: 10,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, .5)',
    height: 40,
    width: 258,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  greenBtn: {
    top: 271,
  },
  redBtn: {
    top: 349,
  },
  btnText: {
    marginLeft: 5,
    color: '#1B94FF',
    backgroundColor: 'transparent',
    fontFamily: 'PingFangTC-Regular',
    fontSize: 21,
  },
  unactiveText: {
    color: 'rgba(134, 134, 134, .6)',
  },
  light: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  green: {
    backgroundColor: '#34CD34',
  },
  red: {
    backgroundColor: '#FF0231',
  },
});

AppRegistry.registerComponent('secret', () => secret);
