import { request, response, Router} from 'express';
import { parseISO} from 'date-fns';


import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentSevice';


const appointementsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointementsRouter.get('/',(request,response) =>{
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
})


appointementsRouter.post('/',(request, response)=>{
    try {
        const {provider, date} = request.body
    
    const parseDate = parseISO(date);

    const CreateAppointment = new CreateAppointmentService(
        appointmentsRepository,
        );

        const appointment =  CreateAppointment.execute({date: parseDate,provider});

    return response.json(appointment);
    } catch (err){
        return response.status(400).json({error: err.message});
    }
});

export default appointementsRouter;