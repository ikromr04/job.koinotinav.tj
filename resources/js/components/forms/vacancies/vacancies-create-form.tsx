import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import { useAppDispatch } from '@/hooks';
import { BannersStoreDTO } from '@/dto/banners';
import ImageField from '@/components/ui/fields/image-field';
import Button from '@/components/ui/button';
import EditorField from '@/components/ui/fields/editor-field/editor-field';
import { storeBannerAction } from '@/store/banners-slice/banners-api-actions';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  background: Yup.mixed()
    .required('Обязательное поле.')
    .test(
      'fileSize',
      'Размер файла слишком большой (макс. 2MB)',
      (value) => !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
    )
    .test(
      'fileType',
      'Неподдерживаемый формат файла. Разрешены только JPEG, JPG или PNG.',
      (value) =>
        !value ||
        (value instanceof File &&
          ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type))
    ),
  content: Yup.string().required('Обязательное поле.'),
});

function BannersCreateForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [key, setKey] = useState(1);
  const initialValues: BannersStoreDTO = {
    background: '',
    content: '',
  };

  const onSubmit = async (
    values: BannersStoreDTO,
    helpers: FormikHelpers<BannersStoreDTO>
  ) => {
    helpers.setSubmitting(true);

    const formData = new FormData();
    formData.append('background', values.background);
    formData.append('content', values.content);

    await dispatch(storeBannerAction({
      formData,
      onSuccess: () => {
        helpers.resetForm();
        toast.success('Баннер успешно добавлен.');
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
      {({ isSubmitting, values }) => (
        <Form className="flex flex-col gap-3 p-6 bg-white rounded shadow">
          <EditorField
            name="content"
            label="Содержание"
            required
          />

          <ImageField
            className="w-full"
            imgClass={classNames(
              'w-full aspect-[1920/540]',
              !values.background && '!object-contain',
            )}
            key={key.toString()}
            name="background"
            label="Фон"
            accept=".jpeg, .jpg, .png"
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
            Добавить
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default BannersCreateForm;
