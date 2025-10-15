@props(['class' => ''])

@php
  $advantages = [
      (object) [
          'image' => '/images/advantages/adv-1.jpg',
          'title' => 'Корпоративная культура',
      ],
      (object) [
          'image' => '/images/advantages/adv-2.jpg',
          'title' => 'Карьерный рост',
      ],
      (object) [
          'image' => '/images/advantages/adv-1.jpg',
          'title' => 'Тимбилдинги',
      ],
  ];
@endphp

<section class="{{ $class ? "$class " : '' }}advantages container">
  <h2 class="title">@lang('Что делает нас особенными')</h2>

  <ul class="advantages__list">
    @foreach ($advantages as $advantage)
      <li class="advantages__item">
        <x-advantage-card :advantage="$advantage" />
      </li>
    @endforeach
  </ul>
</section>
