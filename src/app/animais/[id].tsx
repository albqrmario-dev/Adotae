import { useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { animais } from '@/data/animais';
import StatusBadge from '@/components/StatusBadge';

export default function DetalhesAnimalScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const animal = animais.find((item) => item.id === Number(id));

  const [adotado, setAdotado] = useState(animal ? animal.adotado : false);

  if (!animal) {
    return (
      <View style={styles.centro}>
        <Stack.Screen options={{ title: 'Não encontrado' }} />
        <Text style={styles.naoEncontrado}>Animal não encontrado.</Text>
        <Button title="Voltar para a lista" onPress={() => router.back()} color="#2F80ED" />
      </View>
    );
  }

  function handleAlternarStatus() {
    if (!animal) return;
    const novoStatus = !adotado;
    Alert.alert(
      'Alterar Status',
      novoStatus
        ? `Confirmar a adoção de ${animal.nome}?`
        : `Disponibilizar ${animal.nome} para adoção novamente?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar',
          onPress: () => {
            setAdotado(novoStatus);
            animal.adotado = novoStatus;
            Alert.alert(
              'Sucesso!',
              novoStatus
                ? `Parabéns! ${animal.nome} agora está marcado como adotado.`
                : `${animal.nome} está disponível para adoção novamente.`
            );
          },
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Stack.Screen options={{ title: animal.nome }} />

      <Image source={animal.imagem} style={styles.imagem} />

      <View style={styles.cardInfo}>
        <View style={styles.linhaTopo}>
          <Text style={styles.nome}>{animal.nome}</Text>
          <StatusBadge adotado={adotado} />
        </View>

        <Text style={styles.subtitulo}>
          {animal.especie} • {animal.idade}
        </Text>

        <View style={styles.divisor} />

        <Text style={styles.secaoTitulo}>Sobre o pet</Text>
        <Text style={styles.descricao}>{animal.descricao}</Text>

        <View style={styles.divisor} />

        <View style={styles.secaoAcao}>
          <Text style={styles.secaoTitulo}>Ações</Text>
          <Button
            title={adotado ? 'Disponibilizar para Adoção' : 'Quero Adotar!'}
            onPress={handleAlternarStatus}
            color={adotado ? '#6B7280' : '#2F80ED'}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  conteudo: {
    paddingBottom: 32,
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  naoEncontrado: {
    fontSize: 18,
    color: '#EF4444',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 280,
  },
  cardInfo: {
    backgroundColor: '#FFFFFF',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    elevation: 3,
  },
  linhaTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitulo: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  divisor: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4B5563',
  },
  secaoAcao: {
    marginTop: 8,
  },
});
