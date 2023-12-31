import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().nullable(),
  guest_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
