export interface Acoes extends Array<acao> {

}


export interface acao {
  id: number;
  codigo: string;
  descricao: string;
  preco: number;
}


export interface AcoesAPI {
  payload: Acoes;
}
