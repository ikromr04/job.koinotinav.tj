<!DOCTYPE html>
<html class="page" lang="{{ app()->getLocale() }}">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ config('app.name') }}</title>

    <link href="{{ asset('favicon.ico') }}" rel="icon">
    <link href="{{ asset('favicons/icon.svg') }}" rel="icon" type="image/svg+xml">
    <link href="{{ asset('favicons/180x180.png') }}" rel="apple-touch-icon">
    <link href="{{ asset('manifest.webmanifest') }}" rel="manifest">
    @vite('resources/css/main.css')
  </head>

  <body class="page__body">
    <x-icons />

    <x-layouts.header />

    @yield('content')

    <x-layouts.footer />

    @vite('resources/js/main.js')
  </body>

</html>
