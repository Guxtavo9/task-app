
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TaskScreen from "@/screens/taskScreen/TaskScreen";
import TabTwoScreen from "./two";

const Tab = createMaterialTopTabNavigator();


export default function TabOneScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={TaskScreen} />
      <Tab.Screen name="Market" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}


