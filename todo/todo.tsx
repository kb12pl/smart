import { useState, useEffect } from "react";
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import { Todo } from "./todo_model"
import { TodoDelete,TodoAll,TodoAdd } from "./todo_service"

import { kb } from "../kb"

function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

function Items({ done: doneHeading, onPressItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {

    /*
    db.transaction((tx) => {
      tx.executeSql(
        `select id  from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => {_array=[{id:1,value:"a"}]; setItems(_array); kb.log(_array)}
      );
    });
    */
    async function get() {
      const a = await TodoAll();
      //kb.log(a)
      setItems(a);
    }
    get()
    //kb.log(2)

  }, []);

  const heading = doneHeading ? "Completed" : "Todo";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, name }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#1c9963" : "#fff",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: done ? "#fff" : "#000" }}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}




export default function App() {
  function useForceUpdate() {
    const [xxx, setValue] = useState(0);
    return [() => { setValue(xxx + 1) }, xxx];
  }
    const [text, setText] = useState(null);
  //const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [forceUpdateId,forceUpdate] = useState(0);

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor1 = () => {
    setCar(previousState => {
      kb.log(previousState);
      return { ...previousState, color: "blue" }
    });
  }
  const updateColor = () => {
    forceUpdate(previousState => {
      kb.log(previousState);
      return ++previousState
    });
  }
  


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SQLite Example</Text>

      <View style={styles.flexRow}>
        <TextInput
          onChangeText={(text) => setText(text)}
          onSubmitEditing={async () => {            
            await TodoAdd(text);
            setText(null);
            forceUpdate(a => ++a );  
          }}
          placeholder="what do you need to do?"
          style={styles.input}
          value={text}
        />
      </View>
      <ScrollView style={styles.listArea}>
        <Items          
          key={`forceupdate-todo-${forceUpdateId}`}
          done={false }
          onPressItem={
            async (id) =>{
            await TodoDelete(id)
            forceUpdate(a => ++a );                   
          } }
        />        
        <Items
          done
          key={`forceupdate-done-${forceUpdateId}`}
          onPressItem={(id)=>{kb.log(12)}}
        />
      </ScrollView>


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});