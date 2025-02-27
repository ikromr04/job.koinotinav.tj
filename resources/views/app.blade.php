<!DOCTYPE html>
<html class="font-dinPro" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="robots" content="noindex, nofollow">

  <link href="{{ asset('favicon.ico') }}" rel="icon">
  <link href="{{ asset('favicons/icon.svg') }}" rel="icon" type="image/svg+xml">
  <link href="{{ asset('favicons/180x180.png') }}" rel="apple-touch-icon">
  <link href="{{ asset('manifest.webmanifest') }}" rel="manifest">

  <title>{{ env('APP_NAME') }}</title>
</head>

<body class="group">
  <div class="flex flex-col min-h-screen" id="root"></div>

  @viteReactRefresh
  @vite('resources/js/main.tsx')
</body>

</html>
