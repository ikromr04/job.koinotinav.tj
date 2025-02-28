import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { useAppDispatch } from '@/hooks';
import ImageField from '@/components/ui/fields/image-field';
import Button from '@/components/ui/button';
import { toast } from 'react-toastify';
import { Company } from '@/types/companies';
import { CompaniesStoreDTO } from '@/dto/companies';
import { updateCompanyAction } from '@/store/companies-slice/companies-api-actions';
import TextField from '@/components/ui/fields/text-field';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  logo: Yup.mixed().required('Обязательное поле.'),
});

type CompaniesEditFormProps = {
  company: Company;
};

function CompaniesEditForm({
  company,
}: CompaniesEditFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(1);
  const initialValues: CompaniesStoreDTO = {
    title: company.title,
    logo: company.logo,
  };

  const onSubmit = async (
    values: CompaniesStoreDTO,
    helpers: FormikHelpers<CompaniesStoreDTO>
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('logo', values.logo);

    await dispatch(updateCompanyAction({
      id: company.id,
      formData,
      onSuccess: () => {
        helpers.resetForm();
        toast.success('Компания успешно обновлена.');
        setKey((prevKey) => prevKey + 1);
      },
      onValidationError: (error) => helpers.setErrors({ ...error.errors }),
      onFail: (message) => toast.error(message),
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
        <Form className="flex flex-col gap-3 p-6 bg-white rounded shadow">
          <ImageField
            className="w-max"
            imgClass="!w-[100px] !h-[100px] !object-contain rounded-full"
            key={key.toString()}
            name="logo"
            label="Логотип"
            accept="image/*"
            required
          />

          <TextField
            name="title"
            label="Название"
            required
          />

          <Button
            className={classNames('justify-center ml-auto', isSubmitting && 'opacity-60')}
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            icon="add"
            variant="success"
          >
            Сохранить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CompaniesEditForm;
