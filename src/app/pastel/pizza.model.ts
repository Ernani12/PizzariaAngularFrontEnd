export class Pizza {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string; // Propriedade para armazenar a URL da imagem

    constructor(id: number, nome: string, descricao: string, preco: number) {
      this.id = id; 
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
      this.imagem = ''; // Inicializa a URL da imagem como vazia
    }
}