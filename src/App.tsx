import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, BottomNavigation, PaperProvider } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Home } from "./navigation/screens/Home";
import { Settings } from "./navigation/screens/Settings";
import { SQLiteProvider } from "expo-sqlite";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FamiliaCrearModal from "./navigation/screens/FamiliaCrearModal";
import * as React from "react";
import { Operativos } from "./navigation/screens/Operativos";
import OperativosCrearModal from "./navigation/screens/OperativosCrearModal";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    dark: false,
  },
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: "shift",
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
            descriptors[route.key].options.tabBarIcon?.({
              focused,
              color,
              size: 24,
            }) || null
          }
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              typeof options.tabBarLabel === "string"
                ? options.tabBarLabel
                : typeof options.title === "string"
                  ? options.title
                  : route.name;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Operativos"
        component={Operativos}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Familias"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SQLiteProvider
      databaseName="userDB.db"
      onInit={async (db) => {
        await db.execAsync(`CREATE TABLE IF NOT EXISTS casas (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              numero_de_casa TEXT,
              numero_de_calle INTEGER,
              es_residencia BOOLEAN,
              personas_en_la_familia INTEGER,
              jefe_de_familia TEXT,
              bombonas_recibidas_por_casa INTEGER
          );
          PRAGMA journal_mode=WAL;
          `);
      }}
      options={{ useNewConnection: false }}
    >
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="MainTabs"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <RootStack.Group screenOptions={{ presentation: "modal" }}>
              <RootStack.Screen
                name="Crear Familia"
                component={FamiliaCrearModal}
              />
              <RootStack.Screen
                name="Crear Operativos"
                component={OperativosCrearModal}
              />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SQLiteProvider>
  );
}
