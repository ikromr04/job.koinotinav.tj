import Button from '@/components/ui/button';
import { useAppDispatch } from '@/hooks';
import { deleteCompanyAction } from '@/store/companies-slice/companies-api-actions';
import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

type Modal = {
  isOpen: boolean;
  id: number;
};

type CompaniesDeleteFormProps = {
  modal: Modal;
  setModal: Dispatch<SetStateAction<Modal>>
}

export default function CompaniesDeleteForm({
  modal,
  setModal,
}: CompaniesDeleteFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: Modal,
    helpers: FormikHelpers<Modal>
  ) => {
    helpers.setSubmitting(true);

    await dispatch(deleteCompanyAction({
      id: modal.id,
      onSuccess: () => {
        setModal({ isOpen: false, id: 0 });
        toast.success('Компания успешно удалена.');
      },
      onFail: (message) => {
        setModal({ isOpen: false, id: 0 });
        toast.error(message);
      },
    }));

    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={modal}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <p>
            Вы уверены что хотите удалить эту компанию?
          </p>

          <div className="flex justify-end gap-1">
            <Button
              type="reset"
              variant="success"
              onClick={() => setModal({ isOpen: false, id: 0 })}
            >
              Отмена
            </Button>
            <Button
              className={classNames('justify-center', isSubmitting && 'opacity-60')}
              variant="error"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Удалить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
