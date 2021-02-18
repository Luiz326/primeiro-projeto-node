import {Router, RouterOptions} from 'express';
import appointementsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointementsRouter);

export default routes;
