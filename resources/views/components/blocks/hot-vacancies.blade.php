@props([
    'class' => '',
    'vacancies',
])

<section class="{{ $class ? "$class " : '' }}hot-vacancies">
  <h2 class="hot-vacancies__title title">@lang('Наши горячие вакансии! Успейте разобрать)')</h2>

  <ul class="hot-vacancies__list">
    @foreach ($vacancies as $vacancy)
      <li class="hot-vacancies__item">
        <x-vacancy-card :vacancy="$vacancy" />
      </li>
    @endforeach
    <li class="hot-vacancies__item">
      <a class="hot-vacancies__button" href="{{ route('pages.vacancies') }}" data-label="@lang('Посмотреть')">
        @lang('Найди свою вакансию')
      </a>
    </li>
  </ul>
</section>
