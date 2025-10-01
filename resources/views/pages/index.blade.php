@extends('main')

@section('content')
  <main class="main container">
    <div>
      <h1>Вакансии Коиноти Нав</h1>

      <p>
        В нашем холдинге работают более 1000 человек
      </p>

      <p>
        Присоединяйтесь к “КОИНОТИ НАВ” - компании, где ценят отвественность, идеи и вклад каждого сотрудника!
      </p>

      <p>
        Всячески и всесторонне способствовать общественному благополучию через устойчивое развитие компаний <span>"КОИНОТИ НАВ"</span> и социальную ответственность, ориентируясь на умножение долгосрочных социальных и экономических благ.
      </p>
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
