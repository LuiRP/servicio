import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useTheme, FAB, Searchbar, Button } from "react-native-paper";
import OperativosTable from "../../components/OperativosTable";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function Operativos() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const theme = useTheme();
  const navigation = useNavigation();
  const [components, setComponents] = React.useState<object[]>([]);
  const addComponent = () => {
    setComponents((prev) => [...prev, {}]);
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Searchbar
            style={styles.searchbar}
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Buscar"
          />
          <FAB
            label="Crear"
            style={styles.fab}
            onPress={() => navigation.navigate("Crear Operativos")}
            icon={"notebook"}
            mode="flat"
          />
        </View>
        <View style={styles.containerComponent}>
          <Button buttonColor="black" onPress={addComponent}>
            {" "}
            Prueba del Componente{" "}
          </Button>
          <ScrollView style={styles.scrollView}>
            {components.map((_, index) => (
              <OperativosTable key={index} index={index} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  searchbar: {
    flex: 1,
    backgroundColor: "rgb(240, 219, 255)",
  },
  fab: {
    marginLeft: 8,
    backgroundColor: "rgb(240, 219, 255)",
  },
  containerComponent: {
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 5,
  },
  scrollView: {
    marginTop: 5,
    marginBottom: 5,
  },
});
