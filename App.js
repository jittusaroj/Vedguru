import React, { Component, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import {Searchbar, Appbar, Button,BottomNavigation } from 'react-native-paper';
import { Drawer } from 'react-native-material-drawer';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import Home from './src/screens/Home';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import { FlatGrid } from 'react-native-super-grid';

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = React.useState('');
  const MusicRoute = () => <Text>Music</Text>;

  const AlbumsRoute = () => <Text>Albums</Text>;
  
  const RecentsRoute = () => <Text>Recents</Text>;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', icon:'home' },
    { key: 'albums', title: 'Read',icon:'book'  },
    { key: 'recents', title: 'user',icon:'book' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });
  const onChangeSearch = query => setSearchQuery(query);
  // const [, setItems] = React.useState(
  const items = [
    { name: 'Love & relation', image: 'https://picsum.photos/200' },
    { name: 'Mariage ', image: 'https://picsum.photos/200' },
    { name: 'Career', image: 'https://picsum.photos/200' },
    { name: 'Moment & inverstment', image: 'https://picsum.photos/200' },
    { name: 'Bussiness', image: 'https://picsum.photos/200' },
    { name: 'Every day life', image: 'https://picsum.photos/200' }
  ];
  const data = [{
    title: 'Hokkaido',
    source: require('./assets/image-licorice.jpg'),
  },
  {
    title: 'Tokyo',
    source: require('./assets/image-licorice.jpg'),
  },
  {
    title: 'Osaka',
    source: require('./assets/image-licorice.jpg'),
  },
  {
    title: 'Kyoto',
    source: require('./assets/image-licorice.jpg'),
  },
  {
    title: 'Shimane',
    source: require('./assets/image-licorice.jpg'),
  }
  ]
  return (
    <>
    <ScrollView>
      <Appbar.Header >
        <Appbar.Content title="Yogguru" subtitle={'Know your destiny'} />
        {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
      
      </Appbar.Header>
      <View style={{padding:10,backgroundColor:"#6200ee",shadowColor:'none'}}>
      <Searchbar style={{borderRadius:30}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      </View>
      <View>
        <View>
          <SimpleCarousel
            data={[{
              title: 'Hokkaido',
              source: require('./assets/image-licorice.jpg'),
            },
            {
              title: 'Tokyo',
              source: require('./assets/image-licorice.jpg'),
            },
            {
              title: 'Osaka',
              source: require('./assets/image-licorice.jpg'),
            },
            {
              title: 'Kyoto',
              source: require('./assets/image-licorice.jpg'),
            },
            {
              title: 'Shimane',
              source: require('./assets/image-licorice.jpg'),
            }
            ]}
            renderItem={(props, i, width) => {
              return (
                <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
              )
            }}
          />
        </View>
        <StatusBar translucent={true} />
      </View>
      <View style={{ width: '98%' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.heading}> upcomming Videos</Text>
          </View>
          <View>
            <Button styl={styles.radius} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </Button>
          </View>
        </View>
        <View>
          <View>
            <SimpleCarousel
              data={[{
                title: 'Hokkaido',
                source: require('./assets/image-licorice.jpg'),
              },
              {
                title: 'Tokyo',
                source: require('./assets/image-licorice.jpg'),
              },
              {
                title: 'Osaka',
                source: require('./assets/image-licorice.jpg'),
              },
              {
                title: 'Kyoto',
                source: require('./assets/image-licorice.jpg'),
              },
              {
                title: 'Shimane',
                source: require('./assets/image-licorice.jpg'),
              }
              ]}
              renderItem={(props, i, width) => {
                return (
                  <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
                )
              }}
            />
          </View>
          <StatusBar translucent={true} />
        </View>
      </View>
     
      <FlatGrid itemDimension={100} data={items} style={styles.gridView} spacing={0}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: "white", borderStyle: "solid", borderColor: 'black',textAlign:'center',alignItems:'center',margin:0,padding:0 }]}>
            <Image source={{ uri: item.image, width: 50, height: 50 }} />
            <Text style={{ color: "black" }}>{item.name}</Text>
          </View>
        )}
      />
      <View style={{flex:1,marginTop:20}}>
      <Image source={{ uri: "https://picsum.photos/200", width: "100%", height: 120,padding:10 }} />
      </View>
      <BottomNavigation
      style={{position:"absolute",left:0,right:0,bottom:0}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </ScrollView>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "600"
  },
  radius: {
    borderRadius: 50
  },

  body: {
    backgroundColor: '#eee',
  },
  gridView: {
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 0,
    padding: 0,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});


