import { z } from 'zod';
import { VehicleZodFrame } from './IVehicle';

const CarZodFrame = VehicleZodFrame.extend({
  doorsQty: z.number(),
  seatsQty: z.number(),
});

type ICar = z.infer<typeof CarZodFrame>;

export { CarZodFrame, ICar };