import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { AvaliacaoService } from "../services";

export default class AvaliacaoController {
  private _AvaliacaoService = new AvaliacaoService();
  
  public getAll = (request: Request, response: Response) => {
    return response.send(this._AvaliacaoService.getAll());
  }

  public getById = (resquest: Request, response: Response) => {
    const id = parseInt(resquest.params.id);

    const AvaliacaoSolicitado = this._AvaliacaoService.getById(id);

    if (!AvaliacaoSolicitado) {
      return response.status(404).send({ msg: "Avaliação não encontrada" });
    }

    return response.send(AvaliacaoSolicitado);
  }

  public create = (request: Request, response: Response) => {
    return response.status(201).send(this._AvaliacaoService.create(request.body));
  }

  public update = (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    let dadoAtualizado;

    try {
      dadoAtualizado = this._AvaliacaoService.update({
        id: id,
        ...request.body
      });
    } catch (error: any) {
      return response.status(400).send({ error: error.message });
    }  
    
    return response.send(dadoAtualizado);
  }
  
  public delete = (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    let AvaliacaoRemovido;

    try {
        AvaliacaoRemovido = this._AvaliacaoService.delete(id);
    } catch (error: any) {
      return response.status(400).send({ error: error.message });
    }  

    return response.status(200).send(AvaliacaoRemovido);
  }
}
