import React from 'react'
import { View, Text } from 'react-native'

const EmployeeList = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => props.navigation.navigate("TodoList")} style={{ height: 40, backgroundColor: 'red', textAlign: 'center' }}>go to todo list</Text>
    </View>
  )
}

export default EmployeeList