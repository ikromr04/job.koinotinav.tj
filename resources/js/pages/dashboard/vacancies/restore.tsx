import Button from '@/components/ui/button';
import { useAppDispatch } from '@/hooks';
import { restoreVacancyAction } from '@/store/vacancies-slice/vacancies-api-actions';
import { VacancyId } from '@/types/vacancies';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

type RestoreProps = {
  id: VacancyId;
}

function Restore({
  id,
}: RestoreProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: object,
    helpers: FormikHelpers<object>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(restoreVacancyAction({
      id,
      onSuccess: () => {
        toast.success('Вакансия успешно восстановлена.');
      },
      onFail: (message) => {
        toast.error(message);
      },
    }));

    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <Button
            type="submit"
            icon="restore"
            variant="warn"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            <span className="sr-only">Восстановить</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Restore;
