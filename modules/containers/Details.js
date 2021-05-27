import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native'
import { IconButton, Button } from 'react-native-paper'
import { RNCamera } from 'react-native-camera'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const detailsObj = {
  shop: {
    value: 'Shop Name'
  },
  Bill_Number: {
    value: 'Bill Number'
  },
  Total: {
    value: 'Total Amount'
  },
  Bill_Date: {
    value: 'Bill Date'
  }
}

export class Details extends Component {
  constructor(props) {
    super(props)

    let shopName, billNumber, billDate, billAmount

    this.state = {
      imageData: ''
    }
  }

  static getDerivedStateFromProps(props, newState) {
    let state

    debugger
    if (props?.route?.params !== undefined)
      state = { imageData: props.route.params.imageData }

    return {
      ...newState,
      ...state
    }
  }

  _renderContent() {
    // let shopName, billNumber, billDate, billAmount

    return (
      <View>
        <Image
          style={{
            borderRadius: 5,
            width: Dimensions.get('window').width - 100,
            height: 400,
            margin: 10
          }}
          source={{ uri: this.state.imageData }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            magin: 20
          }}>
          {Object.values(detailsObj).map(
            (item) => (
              (<Text>{item.value}</Text>),
              (
                <TextInput
                  style={styles.textContainer}
                  onEndEditing={(value) => {
                    debugger
                    switch (item.value) {
                      case 'Shop Name':
                        this.shopName = value.nativeEvent.text
                        break

                      case 'Bill Number':
                        this.billNumber = value.nativeEvent.text
                        break

                      case 'Total Amount':
                        this.billAmount = value.nativeEvent.text
                        break

                      case 'Bill Date':
                        this.billDate = value.nativeEvent.text
                        break
                    }
                  }}
                  placeholderTextColor={'#333'}
                  placeholder={`Enter ${item.value}`}
                />
              )
            )
          )}
        </View>
      </View>
    )
  }

  render() {
    // return null
    debugger
    return (
      <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
        {this.state?.imageData ? this._renderContent() : null}
        {
          <Button
            style={{ width: 50, alignSelf: 'center' }}
            onPress={() =>
              this.props.navigation.navigate('Home', {
                shopName: this.shopName,
                billNumber: this.billNumber,
                billAmount: this.billAmount,
                billDate: this.billDate
              })
            }>
            Add
          </Button>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    height: 40,
    width: Dimensions.get('window').width - 150,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderBottomColor: '#dfdfdf'
  }
})

export default Details