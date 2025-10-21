@props([
    'class' => '',
    'vacancies',
])

<section class="{{ $class ? "$class " : '' }}similar-vacancies">
  <h2 class="similar-vacancies__title title">
    @lang('Похожие вакансии по вашему запросу'):
  </h2>

  <ul>
    @foreach ($vacancies as $vacancy)
      <li>
        <a class="flex flex-col" href="{{ route('pages.vacancy', $vacancy->id) }}">
          <div class="vacancy-card__title">{!! $vacancy->title !!}</div>
          <div class="vacancy-card__description">{{ preg_replace('/[^\p{L}\p{N}\s\.,!?-]/u', '', strip_tags($vacancy->description)) }}</div>

          <address class="flex items-center">
            <p>
              <svg width="16" height="20">
                <use xlink:href="#location" />
              </svg>
              {{ $vacancy->city }}
            </p>
            <p>
              <svg width="16" height="20">
                <use xlink:href="#vacancy-location" />
              </svg>
              {{ $vacancy->company?->title }}
            </p>
          </address>
        </a>
      </li>
    @endforeach
  </ul>
</section>
