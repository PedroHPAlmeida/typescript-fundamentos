import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    
    private negociacoes: Negociacao[] = [];
    
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    
    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    
    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
    }

}
