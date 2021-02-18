import { request, response, Router} from 'express';
import {startOfHour, parseISO} from 'date-fns';


import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';


const appointementsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointementsRouter.get('/',(request,response) =>{
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
})


appointementsRouter.post('/',(request, response)=>{
    const {provider, date} = request.body
    
    const parseDate = startOfHour(parseISO(date));

    
const findAppointmentInSameDate = appointmentsRepository.findByDate(parseDate);
    
    if(findAppointmentInSameDate){
        return response
        .status(400)
        .json({massege:'this appointment is already booked'})
    }

    const appointment = appointmentsRepository.create({
        provider, 
        date: parseDate,
    });

    
    

    return response.json(appointment);
});

export default appointementsRouter;