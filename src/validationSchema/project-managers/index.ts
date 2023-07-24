import * as yup from 'yup';

export const projectManagerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
