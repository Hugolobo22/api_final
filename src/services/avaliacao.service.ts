import { Avaliacao } from "../domain";
import { AvaliacaoRepository } from "../repositories";

export class AvaliacaoService {
    private _AvaliacaoRepository = new AvaliacaoRepository();
    
    public getAll() {
        return this._AvaliacaoRepository.getAll();
    }

    public getById(id: number) {
        const Avaliacao = this._AvaliacaoRepository.getById(id);

        return Avaliacao;
    }

    public create(Avaliacao: Avaliacao) {
        return this._AvaliacaoRepository.create(Avaliacao);
    }

    public update(Avaliacao: Avaliacao) {
        return this._AvaliacaoRepository.update(Avaliacao);
    }

    public patch(Avaliacao: Avaliacao)  {
        return this._AvaliacaoRepository.update(Avaliacao);
    }

    public delete(id: number) {
        return this._AvaliacaoRepository.delete(id);
    }
}