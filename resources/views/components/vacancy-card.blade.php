@props([
    'class' => '',
    'vacancy',
])

<article class="{{ $class ? "$class " : '' }}vacancy-card">
  <div class="vacancy-card__title">{!! $vacancy->title !!}</div>
  <div class="vacancy-card__description">{{ preg_replace('/[^\p{L}\p{N}\s\.,!?-]/u', '', strip_tags($vacancy->description)) }}</div>

  <address class="vacancy-card__address">
    <p>
      <svg width="16" height="20">
        <use xlink:href="#vacancy-location" />
      </svg>
      {{ $vacancy->company?->title }}
    </p>
    <p>
      <svg width="16" height="20">
        <use xlink:href="#location" />
      </svg>
      {{ $vacancy->city }}
    </p>
  </address>

  <a class="vacancy-card__more" href="{{ route('pages.vacancy', $vacancy->id) }}">
    @lang('Подробнее')
  </a>
</article>
