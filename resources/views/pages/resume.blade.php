@extends('main')

@section('content')
  <main class="resume container">

    <form class="resume__form form" action="">
      <h1 class="resume__title">@lang('Отклик на вакансию')</h1>

      <p class="form__item">
        <label class="sr-only" for="name">@lang('Имя и фамилия')</label>
        <input class="form__field" id="name" name="name" type="text" placeholder="@lang('Имя и фамилия')">
      </p>

      <p class="form__item">
        <label class="sr-only" for="birthdate">@lang('Дата рождения')</label>
        <input class="form__field" id="birthdate" name="birthdate" type="date" placeholder="@lang('Дата рождения')">
      </p>

      <p class="form__item">
        <label class="sr-only" for="phone">@lang('Номер телефона')</label>
        <input class="form__field" id="phone" name="phone" type="number" placeholder="@lang('Номер телефона')">
      </p>

      <p class="form__item">
        <label class="sr-only" for="email">Email</label>
        <input class="form__field" id="email" name="email" type="email" placeholder="Email">
      </p>

      <p class="form__item">
        <label class="sr-only" for="city">@lang('Город')</label>
        <input class="form__field" id="city" name="city" type="text" placeholder="@lang('Город')">
      </p>

      <p class="form__item">
        <label class="sr-only" for="about">@lang('О себе')</label>
        <textarea class="form__field" id="about" name="about" placeholder="@lang('Расскажите о себе и почему хотите присоединиться')" cols="30" rows="10"></textarea>
      </p>
    </form>
  </main>
@endsection
