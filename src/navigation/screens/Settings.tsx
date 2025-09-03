// import { Button, Text } from "@react-navigation/elements";
// import { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import { DataTable } from "react-native-paper";
// import DataTableCell from "react-native-paper/lib/typescript/components/DataTable/DataTableCell";

// // Estoy usando esta monda para pruebas xddd

// const MyComponent = () => (
//   <View>
//     <Text>This is the component to show!</Text>
//   </View>
// );

// export function Settings() {
//   // const [count, setCount] = useState(0);

//   // function Onpress() {
//   //   setCount(count + 1);
//   // }
//   const [showComponent, setShowComponent] = useState(false);
//   return (
//     // <View style={styles.container}>
//     //   <Text>Configuración</Text>
//     //   <Button onPress={Onpress}>You have touched me {count} times</Button>
//     //   <DataTable>
//     //     <DataTable.Row>
//     //       <DataTable.Cell>wfdeld</DataTable.Cell>
//     //     </DataTable.Row>
//     //   </DataTable>
//     // </View>

//     <View style={{ padding: 20 }}>
//       <Button
//         title={showComponent ? "Hide Component" : "Show Component"}
//         onPress={() => setShowComponent(!showComponent)}
//       />
//       {showComponent && <MyComponent />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//   },
// });

import React, { useState } from "react";
import { View, Button, Text, ScrollView, StyleSheet } from "react-native";

const MyComponent = ({ index = 0 }) => (
  <View style={styles.componentContainer}>
    <Text>Component instance #{index + 1}</Text>
  </View>
);

const Settings = () => {
  const [components, setComponents] = useState<object[]>([]);

  const addComponent = () => {
    setComponents((prev) => [...prev, {}]);
  };

  return (
    <View style={styles.container}>
      <Button title="Prueba del Componente" onPress={addComponent} />
      <ScrollView style={styles.scrollView}>
        {components.map((_, index) => (
          <MyComponent key={index} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  componentContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
});

export default Settings;
