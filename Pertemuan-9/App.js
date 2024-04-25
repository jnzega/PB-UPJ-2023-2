/**
 * Pada program ini, membuat aplikasi React Native sistem CRUD emnggunakan Axios.
 */

import { useState, useEffect } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Button, SafeAreaView } from "react-native"
import axios from 'axios'

const App = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [users, setUsers] = useState([])

  // mengambil data dari API
  const fetchData = async () => {
    try {
      const result = await axios.get('https://hendi-hermawan.com/pemrograman-bergerak-api.php')
      setUsers(result.data)
    } catch (error) {
      console.error('Failed to Fetch User', error)
    }
  }

  useEffect(
    () => {
      fetchData()
    }, []
  )

  const handleAddorUpdate = async () => {

  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Nama Depan"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Nama Belakang"
          value={lastName}
          onChangeText={setLastName}
        />
        <TouchableOpacity style={styles.btnStyle}>
          <Button
            title={selectedUserId ? 'Update User' : 'Add User'}
            onPress={handleAddorUpdate}
          />
        </TouchableOpacity>
      </View>


      <ScrollView>
        {users.map((user) => (
        <View style={styles.userContainer}>
          <Text>Testing</Text>
          <View style={styles.inputData}>
            <TouchableOpacity style={styles.inputUser}>
              <Text style={styles.userText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputUser}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    padding: 20,
  },
  inputText: {
    alignSelf: 'center',
    width: 350,
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  userText: {
    flex: 1,
  },
  btnStyle: {
    width: 350,
    alignSelf: 'center',
    marginBottom: 20
  },
  inputUser: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5
  },
  inputData: {
    flexDirection: 'row'
  }

})

export default App
