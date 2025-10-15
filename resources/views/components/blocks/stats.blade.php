@props(['class' => ''])

<section class="{{ $class ? "$class " : '' }}stats container">
  <h2 class="sr-only">@lang('Мы в цифрах')</h2>

  <p class="stats__info">@lang('34 года на рынке Таджикистана')</p>

  <dl class="stats__details">
    <div>
      <dt>@lang('заявок за пол года')</dt>
      <dd>500+</dd>
    </div>
    <div>
      <dt>@lang('компании в холдинге')</dt>
      <dd>20+</dd>
    </div>
    <div>
      <dt>@lang('открытых вакансии')</dt>
      <dd>50+</dd>
    </div>
  </dl>
</section>
