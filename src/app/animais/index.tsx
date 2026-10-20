import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { animais } from '@/data/animais';
import AnimalCard from '@/components/AnimalCard';

export default function ListaAnimaisScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>
        Encontre seu novo amigo e dê a ele um lar cheio de amor.
      </Text>

      <FlatList
        data={animais}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AnimalCard
            animal={item}
            onPress={() => router.push(`/animais/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 24,
  },
});
