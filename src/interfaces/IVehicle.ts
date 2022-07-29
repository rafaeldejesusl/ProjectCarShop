import { z } from 'zod';

const message = 'Invalid input';

const VehicleZodSchema = z.object({
  model: z.string().min(3, { message }),
  year: z.number().gte(1900, { message })
    .lte(2022, { message }),
  color: z.string().min(3, { message }),
  status: z.boolean().optional(),
  buyValue: z.number().int({ message }),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };