import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const message = 'Invalid input';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.literal('Street').or(z.literal('Custom')).or(z.literal('Trail')),
  engineCapacity: z.number().int().gt(0, { message }).lte(2500, { message }),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { MotorcycleZodSchema, IMotorcycle };