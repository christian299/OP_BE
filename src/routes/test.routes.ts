import express, { Router, Request, Response, response } from 'express';
import TestController from '../controllers/test.controllers';
const TestRouter: Router = express.Router();


TestRouter.get('/test-data', async (req: Request, res: Response) => {
    let response = await TestController.getTest();
    res.status(response.status).send(response);
});
TestRouter.post('/create-data', async (req: Request, res: Response) => {
    let response = await TestController.createTest(req.body);
    res.status(response.status).send(response);
});
TestRouter.get('/get-data/:id', async (req: Request, res: Response) => {
    let response = await TestController.getTestByIDandAvailability(parseInt(req.params.id));
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-op/:id', async (req: Request, res: Response) => {
    let response = await TestController.getTestAndOp(parseInt(req.params.id));
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-op-findall', async (req: Request, res: Response) => {
    let response = await TestController.getTestAndOpFindAll();
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-not-op-findall/:id', async (req: Request, res: Response) => {
    let response = await TestController.getTestNotOpFindAll(parseInt(req.params.id));
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-ilike-op-findall/:name', async (req: Request, res: Response) => {
    let response = await TestController.getTestILikeOpFindAll(req.params.name);
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-like-op-findall/:name', async (req: Request, res: Response) => {
    let response = await TestController.getTestLikeOpFindAll(req.params.name);
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-notlike-op-findall/:name', async (req: Request, res: Response) => {
    let response = await TestController.getTestNotLikeOpFindAll(req.params.name);
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-notilike-op-findall/:name', async (req: Request, res: Response) => {
    let response = await TestController.getTestNotILikeOpFindAll(req.params.name);
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-opgte-findall', async (req: Request, res: Response) => {
    let response = await TestController.getTestAndOpGTEFindAll();
    res.status(response.status).send(response);
});
TestRouter.get('/get-data-oplt-findall', async (req: Request, res: Response) => {
    let response = await TestController.getTestAndOpLTFindAll();
    res.status(response.status).send(response);
});

export default TestRouter;