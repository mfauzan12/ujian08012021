import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AAAA</Text>

  

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

// ...
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default RegisterScreen;