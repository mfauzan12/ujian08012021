
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datastate: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://014081a25686.ngrok.io/pengguna')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ datastate: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { datastate, isLoading } = this.state;

    return (
      
      <View style={{ flex: 1, padding: 24 }}>
   

        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={datastate}
            keyExtractor={({ _id }, index) => _id}
            renderItem={({ item }) => (
              <Text>
              Name = {item.name}{"\n"}
              Phone = {item.phone}{"\n"}
              Email = {item.email}{"\n"}
              Address = {item.address}{"\n"}
              </Text>
            )}
          />
        )}
        
      </View>
    );
  }
};