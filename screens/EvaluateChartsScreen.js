import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Tabs, WhiteSpace } from 'antd-mobile';
import SatisfactChart from '../components/SatisfactChart';
import YearChart from '../components/YearChart';

export default class EvaluateChartsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const tabs = [{ title: '满意度' }, { title: '不同纬度分析' }];

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: '评价结果', style: { color: '#fff' } }}
        />
        <WhiteSpace />
        <View style={{ height: 900 }}>
          <Tabs tabs={tabs} tabBarPosition="top">
            <View style={styles.contentContainer}>
              <SatisfactChart />
            </View>
            <View style={styles.contentContainer}>
              <YearChart />
            </View>
          </Tabs>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
});
