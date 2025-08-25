import { StyleSheet, View } from "react-native";
import CalleSelector from "../../components/CalleSelector";
import FamiliasTable from "../../components/FamiliasTable";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewContainer}>
      <View>
        <CalleSelector></CalleSelector>
        <FamiliasTable></FamiliasTable>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Crear Familia")}
      >
        Añadir familia
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    padding: 8,
    flex: 1,
    gap: 16,
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
