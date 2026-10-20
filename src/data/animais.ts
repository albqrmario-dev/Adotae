export type Animal = {
  id: number;
  nome: string;
  especie: string;
  idade: string;
  descricao: string;
  imagem: { uri: string };
  adotado: boolean;
};

export const animais: Animal[] = [
  {
    id: 1,
    nome: "Pipoca",
    especie: "Cachorro",
    idade: "2 anos",
    descricao: "Pipoca é muito brincalhão, dócil e adora passear ao ar livre. Já está vacinado e vermifugado.",
    imagem: { uri: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600" },
    adotado: false,
  },
  {
    id: 2,
    nome: "Luna",
    especie: "Gato",
    idade: "1 ano",
    descricao: "Luna é tranquila, carinhosa e adora cochilar no sol. Convive muito bem com outros gatos.",
    imagem: { uri: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600" },
    adotado: false,
  },
  {
    id: 3,
    nome: "Thor",
    especie: "Cachorro",
    idade: "3 anos",
    descricao: "Thor é protetor, companheiro e super obediente. Ideal para quem busca um parceiro leal.",
    imagem: { uri: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600" },
    adotado: true,
  },
  {
    id: 4,
    nome: "Mel",
    especie: "Gato",
    idade: "4 meses",
    descricao: "Filhotinha muito curiosa, cheia de energia e que adora brinquedos de lã e carinho.",
    imagem: { uri: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600" },
    adotado: false,
  },
  {
    id: 5,
    nome: "Bob",
    especie: "Cachorro",
    idade: "4 anos",
    descricao: "Bob é calmo, carinhoso e muito bem educado. Adapta-se com facilidade a apartamentos.",
    imagem: { uri: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600" },
    adotado: false,
  },
  {
    id: 6,
    nome: "Nina",
    especie: "Gato",
    idade: "2 anos",
    descricao: "Nina é independente, mas muito afetuosa. Adora receber cafuné e olhar pela janela.",
    imagem: { uri: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600" },
    adotado: true,
  },
];
