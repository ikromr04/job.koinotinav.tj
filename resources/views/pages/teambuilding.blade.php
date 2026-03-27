@extends('main')

@section('content')
  <main class="index container">
    <h1 class="vacancies__title title">@lang('Тимбилдинги')</h1>

    <p class="teambuilding__desc">
      <strong class="font-bold">26.05.2025</strong> Тимбилдинг группы компании КОИНОТИ НАВ
    </p>

    <ul class="list-none p-0 m-0 grid gap-2 grid-cols-4 grid-rows-4 md:gap-5 mb-10 md:mb-20">
      <li class="relative">
        <a class="flex w-full h-full" href="/images/teambuildings/1.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/1.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
      <li class="col-span-3 row-span-2 relative">
        <a class="flex w-full h-full" href="/images/teambuildings/2.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/2.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
      <li class="relative">
        <a class="flex w-full h-full" href="/images/teambuildings/2.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/2.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
      <li class="row-span-2 col-span-2 relative">
        <a class="flex w-full h-full" href="/images/teambuildings/3.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/3.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
      <li class="col-span-2 relative">
        <a class="flex w-full h-full" href="/images/teambuildings/4.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/4.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
      <li class="relative">
        <a class="flex w-full h-full" href="/images/teambuildings/1.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/1.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
      <li class="relative">
        <a class="flex w-full h-full" href="/images/teambuildings/4.jpg" target="_blank">
          <img class="w-full h-full flex object-cover rounded-lg md:rounded-[20px]" src="{{ asset('/images/teambuildings/4.jpg') }}" alt="Тимбилдинг">
        </a>
      </li>
    </ul>
  </main>
@endsection
