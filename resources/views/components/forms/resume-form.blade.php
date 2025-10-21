@props(['class' => ''])

<form class="{{ $class ? "$class " : '' }}resume-form">
  <h1 class="resume-form__title">@lang('Отклик на вакансию')</h1>

  <p class="resume-form__item">
    <label class="resume-form__label">
      <span class="sr-only">@lang('Имя и фамилия')</span>
      <input class="resume-form__input" name="name" type="text" placeholder="@lang('Имя и фамилия')" required>
    </label>
  </p>

  <p class="resume-form__item resume-form__item--date">
    <label class="resume-form__label">
      <input class="resume-form__input" name="birthdate" type="date" onclick="this.showPicker?.()" required>
      <span>@lang('Дата рождения')</span>
    </label>
  </p>

  <p class="resume-form__item">
    <label class="resume-form__label">
      <span class="sr-only">@lang('Номер телефона')</span>
      <input class="resume-form__input" name="phone" type="number" placeholder="@lang('Номер телефона')" required>
    </label>
  </p>

  <p class="resume-form__item">
    <label class="resume-form__label">
      <span class="sr-only">Email</span>
      <input class="resume-form__input" name="email" type="email" placeholder="Email" required>
    </label>
  </p>

  <p class="resume-form__item">
    <label class="resume-form__label">
      <span class="sr-only">@lang('Город')</span>
      <input class="resume-form__input" name="city" type="text" placeholder="@lang('Город')" required>
    </label>
  </p>

  <p class="resume-form__item">
    <label class="resume-form__label">
      <span class="sr-only">@lang('О себе')</span>
      <textarea class="resume-form__textarea" name="about" placeholder="@lang('Расскажите о себе и почему хотите присоединиться')" cols="30" rows="10"></textarea>
    </label>
  </p>

  <p class="resume-form__item resume-form__item--file">
    <label class="resume-form__label">
      <span>
        <svg width="20" height="20">
          <use xlink:href="#add" />
        </svg>
        @lang('Загрузить резюме') (docx, doc, PDF)
      </span>
      <input class="sr-only" name="resume" type="file" accept=".doc,.docx,.pdf">
    </label>

    <span>@lang('или')</span>

    <a href="https://www.cvwizard.com/app/resumes" target="_blank">
      @lang('Создать резюме')
    </a>
  </p>

  <button class="resume-form__submit" type="submit">
    @lang('Откликнуться')
  </button>

  <p class="resume-form__aware">
    @lang('Соглашаюсь на обработку')
    <a href="/blank" target="_blank">@lang('своих данных')</a>
  </p>
</form>
