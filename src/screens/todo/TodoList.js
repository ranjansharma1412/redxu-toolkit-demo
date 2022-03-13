import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { APIClient, APIURLs } from '../../common';
import APILoader from '../../components/APILoader';
import { getTodos } from '../../redux/slices/todo';  // use this in regular redux toolkit
// import { getTodos } from '../../redux/actions/todo';   // use when using creatAsyncThunk

const TodoList = () => {

    const dispatch = useDispatch();
    const { todos, gettodoLoader } = useSelector(state => state.todo)
    console.log("==todos=AAAAA=", todos);

    useEffect(() => {
        // dispatch(getTodos())  // use when using creatAsyncThunk
        getTodoList() // use this in regular redux toolkit
    }, [])

    const getTodoList = async () => {
        let apiConfig = {
            method: 'GET',
            url: APIURLs.TODOS_URL
        }
        const response = await APIClient(apiConfig)
        if (response) {
            dispatch(getTodos(response)) 
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ paddingVertical: 5, backgroundColor: '#FFFFFF', marginTop: 10 }}>
                <Text>{item.userId}</Text>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.completed}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, padding: 5 }}>
            <FlatList
                data={todos || []}
                renderItem={renderItem}
            />
            {gettodoLoader && <APILoader />}
        </View>
    )
}

export default TodoList