import * as yup from 'yup';

export const subscriptionPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  client_id: yup.string().nullable(),
});
