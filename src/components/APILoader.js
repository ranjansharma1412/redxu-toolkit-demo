import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const APILoader = () => {
    return (
        <View style={{ position: 'absolute', height: 500, width: 400, justifyContent: 'center', alignItems: 'center',backgroundColor:'rgba(0,0,0,0.5)' }}>
            <ActivityIndicator size={"large"} />
        </View>
    )
}

export default APILoader