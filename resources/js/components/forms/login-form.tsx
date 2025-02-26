import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import Button from '../ui/button';
import TextField from '../ui/fields/text-field';
import PasswordField from '../ui/fields/password-field';
import { LoginCredentials } from '@/dto/auth-dto';
import { useAppDispatch } from '@/hooks';
import { loginAction } from '@/store/auth-slice/auth-api-actions';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Введите Ваш логин.'),
  password: Yup.string().required('Введите Ваш пароль.'),
});

type LoginFormProps = {
  className?: string;
}

function LoginForm({
  className,
}: LoginFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const initialValues: LoginCredentials = {
    email: '',
    password: '',
  };

  const onSubmit = async (
    values: LoginCredentials,
    helpers: FormikHelpers<LoginCredentials>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(loginAction({
      dto: values,
      onValidationError: (error) => helpers.setErrors({ ...error.errors }),
    }));

    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={classNames(className, 'flex flex-col gap-2')}>
          <TextField name="email" label="Логин" />

          <PasswordField name="password" label="Пароль" />

          <Button
            className={classNames('justify-center mt-3', isSubmitting && 'opacity-60')}
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
