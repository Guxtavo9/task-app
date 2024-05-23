
import EditScreenInfo from '@/components/EditScreenInfo';
import TaskBtn from '@/components/Task';
import { Text, } from '@/components/Themed';
import { StyleSheet } from 'react-native';
import { View } from 'tamagui';


export default function TaskScreen() {
  return (
    <View flex={1} ai={'center'} jc={'center'} >
      <Text style={styles.title}>Tarefas</Text>
      {/* <View style={styles.separator} backgroundColor="#eee" /> */}
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <TaskBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});