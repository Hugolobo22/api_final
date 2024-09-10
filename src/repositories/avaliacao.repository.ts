import { Avaliacao } from "../domain";

export class AvaliacaoRepository {
    private _Avaliacao: Avaliacao[] = [
        { id: 1, email: "joaosilva@gmail.com", nota: 8, comentario: "Muito bom" },
        { id: 2, email: "hugolobo@gmail.com", nota: 9, comentario: "Incrível!!" },
    ];
    
    public getAll() {
        return this._Avaliacao;
    }

    public getById(id: number) {
        return this._Avaliacao.find((Avaliacao) => Avaliacao.id === id);
    }

    public create(Avaliacao: Avaliacao) {
        const novoAvaliacao = {
            id: this._Avaliacao[this._Avaliacao.length - 1].id + 1,
            ...Avaliacao
        }

        this._Avaliacao.push(novoAvaliacao);

        return novoAvaliacao;
    }

    public update(Avaliacao: Avaliacao) {
        this._Avaliacao[this.buscarAvaliacaoNaLista(Avaliacao)] = { ...Avaliacao };

        return Avaliacao;
    }

    public delete(id: number) {
        const indexAvaliacaoBuscado = this._Avaliacao.findIndex( us => us.id === id );

        const AvaliacaoExcluido = this._Avaliacao.splice(indexAvaliacaoBuscado, 1);

        return AvaliacaoExcluido;
    }

    private buscarUsuarioNaLista(Avaliacao: Avaliacao) {
        const indexAvaliacaoBuscado = this._Avaliacao.findIndex( us => us.id === Avaliacao.id );

        if (indexAvaliacaoBuscado === -1) {
            throw new Error('Usuário não encontrado');
        }

        return indexAvaliacaoBuscado;
    }
}