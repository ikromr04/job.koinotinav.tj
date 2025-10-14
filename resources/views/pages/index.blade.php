@extends('main')

@section('content')
  <main class="index">
    <div class="index__vitrin">
      <h1 class="sr-only">Вакансии Коиноти Нав</h1>

      <p class="container">
        В нашем <span>холдинге</span> работают более <span>1000 человек</span>
      </p>

      <p class="container">
        Присоединяйтесь к “КОИНОТИ НАВ” - компании, где ценят отвественность, идеи и вклад каждого сотрудника!
      </p>

      <div class="index__search container">
        <x-search class="w-full" />
      </div>

      <div class="container index__vitrin-jobs"></div>
    </div>

    <section>
      <h2>@lang('Горячие вакансии в холдинге 🔥')</h2>

      <ul>
        @foreach ($data->hotVacancies as $vacancy)
          <li>
            <article>
              <div>{!! $vacancy->title !!}</div>
              <div>{{ preg_replace('/[^\p{L}\p{N}\s\.,!?-]/u', '', strip_tags($vacancy->description)) }}</div>

              <address>
                <p>{{ $vacancy->company?->title }}</p>
                <p>{{ $vacancy->city }}</p>
              </address>

              <a href="{{ route('pages.vacancy', $vacancy->id) }}">
                @lang('Подробнее')
              </a>
            </article>
          </li>
        @endforeach
      </ul>
    </section>

    <section>
      <h2>@lang('Категории')</h2>
    </section>
  </main>
@endsection
