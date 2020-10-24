import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_9: "" }

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3}>
        <Icon name="bars" />
        <TextInput
          placeholder="Sample text input placeholder"
          style={styles.TextInput_9}
          value={this.state.TextInput_9}
          onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
        />
        <Image
          resizeMode="contain"
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/commentQ_Logo.png"
          }}
          style={styles.Image_26}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {
    width: "100%",
    height: "100%",
    alignSelf: "flex-start",
    alignContent: "flex-start"
  },

  View_3: {
    width: "100%",
    height: 20,
    alignSelf: "flex-start",
    alignContent: "flex-start",
    borderWidth: 1
  },
  View_1: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  View_3: {
    width: "100%",
    height: 45,
    marginTop: 25,
    overflow: "hidden",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignContent: "center",
    borderBottomWidth: 1
  },
  Icon_6: {},
  TextInput_9: {
    width: "70%",
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center"
  },
  Image_26: { width: 30, height: 30, alignSelf: "flex-start" }
})
