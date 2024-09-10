import { Router } from "express";
import { body, checkSchema } from "express-validator";
import { CreateAvaliacaoSchema, PatchAvaliacaoSchema, UpdateAvaliacaoSchema } from "./avaliacao.schema";
import { AvaliacaoController } from "../../controllers";
import InterceptarErrosMiddleware from "../../shared/middlewares/interceptadorDeErros.middleware";

const AvaliacaoRouter = Router();
const _AvaliacaoController = new AvaliacaoController();

AvaliacaoRouter.get('/', _AvaliacaoController.getAll);
AvaliacaoRouter.get('/:id', _AvaliacaoController.getById);
AvaliacaoRouter.post('/', checkSchema(CreateAvaliacaoSchema), InterceptarErrosMiddleware, _AvaliacaoController.create);
AvaliacaoRouter.put('/:id', checkSchema(UpdateAvaliacaoSchema), InterceptarErrosMiddleware, _AvaliacaoController.update);
AvaliacaoRouter.patch('/:id', checkSchema(PatchAvaliacaoSchema), _AvaliacaoController.update);
AvaliacaoRouter.delete('/:id', _AvaliacaoController.delete);

export { AvaliacaoRouter };