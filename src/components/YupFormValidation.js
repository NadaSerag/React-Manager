import * as yup from 'yup';

export const validation = yup.object().shape({
  project: yup
    .string()
    .required('A project must be entered'),
  description: yup
    .string()
    .required('A description must be entered')
    .min(5, 'Project must have at least a brief description'),
});

