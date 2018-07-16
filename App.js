import React, {Component} from 'react';
// 1: 取得したバーコードを表示するためにAlertを利用
import { View, Alert } from 'react-native';
// 2: react-native-cameraからRNCameraを利用
import { RNCamera } from 'react-native-camera';

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    // 3: バーコードの情報を表示中かどうかを表すフラグを設定
    this.state = {
      showBarcode: false
    }
  }

  // 4: バーコードの情報を受け取るイベント
  onBarCodeRead = (obj) => {
    // 5: バーコードの情報を表示中でなければ表示を行う
    if (!this.state.showBarcode) {
      this.setState({showBarcode: true})
      Alert.alert(
        'バーコード',
        obj.data,
        [
          {text: "閉じる", onPress: () => {this.setState({showBarcode: false})}}
        ]
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        { /* 6: RNCameraの設定 */ }
        <RNCamera
          style={{flex: 1}}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onBarCodeRead={this.onBarCodeRead}
        />
      </View>
    );
  }
}
