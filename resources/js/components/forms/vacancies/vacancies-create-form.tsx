import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/hooks';
import ImageField from '@/components/ui/fields/image-field';
import Button from '@/components/ui/button';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import { toast } from 'react-toastify';
import { VacanciesStoreDTO } from '@/dto/vacancies';
import { storeVacancyAction } from '@/store/vacancies-slice/vacancies-api-actions';
import TextField from '@/components/ui/fields/text-field';
import { getCompanies } from '@/store/companies-slice/companies-selector';
import { fetchCompaniesAction } from '@/store/companies-slice/companies-api-actions';
import SelectField from '@/components/ui/fields/select-field';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле.'),
  content: Yup.string().required('Обязательное поле.'),
  city: Yup.string().required('Обязательное поле.'),
  direction: Yup.string().required('Обязательное поле.'),
});

function VacanciesCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompanies);
  const [key, setKey] = useState(1);
  const initialValues: VacanciesStoreDTO = {
    title: '',
    content: '',
    city: '',
    direction: '',
  };

  useEffect(() => {
    if (!companies) dispatch(fetchCompaniesAction());
  }, [companies, dispatch]);

  const onSubmit = async (
    values: VacanciesStoreDTO,
    helpers: FormikHelpers<VacanciesStoreDTO>
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('hot', (values.hot || false).toString());
    formData.append('city', values.city);
    formData.append('image', values.image || '');
    formData.append('direction', values.direction);
    if (values.company_id) formData.append('company_id', values.company_id.toString());

    await dispatch(storeVacancyAction({
      formData,
      onSuccess: () => {
        helpers.resetForm();
        toast.success('Вакансия успешно добавлена.');
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
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="flex flex-col gap-3 p-6 bg-white rounded shadow mb-16">
          <EditorField
            name="title"
            label="Заголовок"
            required
          />

          <EditorField
            name="content"
            label="Содержание"
            required
          />

          <div className="grid grid-cols-4 gap-4">
            <TextField name="city" label="Город" />

            <TextField name="direction" label="Направление" />

            {companies &&
              <SelectField
                name="company_id"
                label="Компания"
                cleanable
                onClean={() => setFieldValue('company_id', '')}
                options={companies.map((company) => ({ value: company.id.toString(), label: company.title }))}
              />}

            <label className="flex items-center mt-6 gap-2 text-sm text-gray-500 ml-2 cursor-pointer">
              <input
                type="checkbox"
                checked={values.hot}
                onChange={() => setFieldValue('hot', !values.hot)}
              />
              Горячая вакансия
            </label>

          </div>

          <ImageField
            key={key.toString()}
            className="w-[320px]"
            imgClass="aspect-[3/2] w-full"
            name="image"
            label="Картинка"
            accept=".jpeg, .jpg, .png"
          />

          <Button
            className={classNames('justify-center ml-auto', isSubmitting && 'opacity-60')}
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            icon="add"
            variant="success"
          >
            Добавить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default VacanciesCreateForm;
