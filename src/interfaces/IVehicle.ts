import { z } from 'zod';

const VehicleZodFrame = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string(),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

type IVehicle = z.infer<typeof VehicleZodFrame>;

export { VehicleZodFrame, IVehicle };