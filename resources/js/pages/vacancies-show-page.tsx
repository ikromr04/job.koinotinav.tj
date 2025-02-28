import BannersBlock from '@/components/blocks/banners-block';
import SimilarVacancies from '@/components/blocks/similar-vacancies';
import { Icons } from '@/components/icons';
import AppLayout from '@/components/layouts/app-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Spinner from '@/components/ui/spinner';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchVacanciesAction, sendResumeAction } from '@/store/vacancies-slice/vacancies-api-actions';
import { getVacancies } from '@/store/vacancies-slice/vacancies-selector';
import classNames from 'classnames';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function VacanciesShowPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const vacancies = useAppSelector(getVacancies);
  const vacancy = vacancies?.find(({ id }) => id === +(params.id || 0)) || null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!vacancy && params.id) dispatch(fetchVacanciesAction());
  }, [dispatch, params.id, vacancy]);

  if (!vacancy) return <AppLayout>{null}</AppLayout>;

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    setIsSubmitting(true);

    const formData = new FormData();

    formData.append('vacancy', vacancy.title);
    formData.append('resume', evt.target.files[0]);

    await dispatch(sendResumeAction({
      formData,
      onSuccess: () => {
        toast.success('Ваша заявка успешно отправлена.');
      },
      onFail: () => toast.error('Не удалось отправить ваше резюме. Попробуйте позже.'),
    }));

    setIsSubmitting(false);
  };

  return (
    <AppLayout>
      <main className="bg-gray-100">
        <BannersBlock />

        <div className="container pt-6 pb-10" id="vacancy">
          <div
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: vacancy.title }}
          />

          <Breadcrumbs
            className="mb-6"
            items={[
              ['Все вакансии', AppRoute.Main],
              [vacancy.title.replace(/<[^>]*>/g, ''), ''],
            ]}
          />

          <div className="md:grid md:grid-cols-[calc(100%-208px),208px]">
            <div className="mb-6 md:mr-6 bg-white rounded-lg p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Icons.location className="text-success" width={16} />
                {vacancy.city}
              </div>

              <div className="overflow-hidden" dangerouslySetInnerHTML={{ __html: vacancy.content }} />
            </div>

            <div>
              <p className="text-xl font-bold mb-2 leading-[1.2]">Заинтересовала вакансия?</p>

              <div className="mb-2">Прикрепить свое резюме</div>

              <label
                className={classNames(
                  'flex items-center bg-secondary text-white rounded px-4 h-9 w-max shadow-md leading-none gap-2 cursor-pointer',
                  isSubmitting && 'pointer-events-none opacity-50'
                )}
              >
                {isSubmitting && <Spinner className="!w-5 !h-5" />}
                Откликнуться
                <input
                  className="sr-only"
                  type="file"
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>

        <SimilarVacancies
          className="mb-10"
          vacancies={(vacancies || []).filter(({ id, direction }) => direction === vacancy.direction && id !== vacancy.id)}
        />
      </main>
    </AppLayout>
  );
}

export default VacanciesShowPage;
