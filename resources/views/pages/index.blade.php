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

    <x-blocks.hot-vacancies class="container" :vacancies="$data->hotVacancies" />

    <section>
      <h2>@lang('Категории')</h2>
    </section>
  </main>
@endsection
