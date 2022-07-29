import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const message = 'Invalid input';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().gte(2, { message }).lte(4, { message }),
  seatsQty: z.number().gte(2, { message }).lte(7, { message }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema, ICar };