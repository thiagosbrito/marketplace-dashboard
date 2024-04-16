import { z } from './pt-BR.zod';

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'A senha tem que ter ao menos 8 caracteres'})
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;