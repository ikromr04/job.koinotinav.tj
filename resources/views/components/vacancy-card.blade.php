@props([
    'class' => '',
    'vacancy',
])

<article class="{{ $class ? "$class " : '' }}vacancy-card">
  <div class="vacancy-card__title line-clamp-2">{!! $vacancy->title !!}</div>
  <div class="vacancy-card__description">{{ preg_replace('/[^\p{L}\p{N}\s\.,!?-]/u', '', strip_tags($vacancy->description)) }}</div>

  <div class="vacancy-card__address">
    <div>
      <img class="max-w-ful" src="{{ $vacancy->company?->logo }}">
    </div>

    <a class="vacancy-card__more" href="{{ route('pages.vacancy', $vacancy->id) }}">
      @lang('Подробнее')
    </a>
  </div>
</article>
