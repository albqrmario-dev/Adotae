# Adotaê 🐾

Aplicativo mobile desenvolvido em **React Native**, **Expo** e **TypeScript** para conectar animais resgatados (cães e gatos) a famílias responsáveis.

Este projeto foi desenvolvido como parte prática da disciplina de **Desenvolvimento para Dispositivos Móveis** (IFPE - Campus Garanhuns).

---

## 📱 Funcionalidades

- **Tela Inicial (Início)**:
  - Apresentação do projeto com banner e logotipo oficial.
  - Indicadores rápidos com o total de animais cadastrados e disponíveis para adoção.
  - Navegação direta para o catálogo de animais.

- **Tela de Listagem de Animais (`/animais`)**:
  - Listagem eficiente utilizando `FlatList`.
  - Exibição de cards individuais com imagem, nome, espécie, idade e resumo.
  - Indicador visual dinâmico do status de adoção de cada pet.

- **Tela de Detalhes Dinâmica (`/animais/[id]`)**:
  - Rota dinâmica no Expo Router com o ID do animal.
  - Cabeçalho personalizado com o nome do animal.
  - Foto em alta resolução e informações detalhadas ("Sobre o pet").
  - Botão interativo para **alternar o status** ("Quero Adotar!" ↔ "Disponibilizar para Adoção") com janelas de confirmação e alerta (`Alert`).
  - Tratamento de exceção para itens inexistentes com mensagem informativa e opção de retorno.

---

## 🧩 Componentes Reutilizáveis

O projeto conta com componentes modulares próprios baseados em props:

1. **`AnimalCard`** (`src/components/AnimalCard.tsx`):
   - Responsável por estruturar a apresentação de cada pet na lista, recebendo o objeto `animal` e a função de clique `onPress`.
2. **`StatusBadge`** (`src/components/StatusBadge.tsx`):
   - Responsável por formatar visualmente a etiqueta de status (`Disponível` ou `Adotado`), reutilizado tanto no card de listagem quanto na tela de detalhes.

---

## 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)** (SDK 57)
- **[Expo Router](https://docs.expo.dev/router/introduction/)** (Navegação Stack e rotas dinâmicas)
- **[TypeScript](https://www.typescriptlang.org/)**

---

## 📂 Estrutura de Arquivos

```text
adotae/
├── assets/
│   └── images/              # Ícones e imagens locais da aplicação
├── src/
│   ├── app/
│   │   ├── _layout.tsx      # Configuração global de navegação (Stack)
│   │   ├── index.tsx        # Tela inicial (Home)
│   │   └── animais/
│   │       ├── index.tsx    # Listagem de animais
│   │       └── [id].tsx     # Tela dinâmica de detalhes do animal
│   ├── components/
│   │   ├── AnimalCard.tsx   # Componente de card de animal
│   │   └── StatusBadge.tsx  # Componente de badge de status
│   └── data/
│       └── animais.ts       # Modelo de dados e lista inicial de animais
├── app.json                 # Configurações do Expo
├── package.json             # Dependências e scripts do projeto
└── tsconfig.json            # Configuração do TypeScript
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Aplicativo **Expo Go** instalado no smartphone (Android/iOS) ou um emulador configurado.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/adotae.git
   cd adotae
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

4. **Abra a aplicação:**
   - No celular: abra o aplicativo **Expo Go** e escaneie o QR Code exibido no terminal.
   - No emulador Android: pressione a tecla `a` no terminal.
   - No navegador web: pressione a tecla `w` no terminal.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
