<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\VacancyController;
use Illuminate\Support\Facades\Route;

Route::prefix(parseLocale())->group(function () {
  Route::get('/', [PageController::class, 'index'])->name('pages.index');
  Route::get('/team', [PageController::class, 'team'])->name('pages.team');
  Route::get('/resume', [PageController::class, 'team'])->name('pages.resume');

  Route::get('/vacancies/{vacancy}', [VacancyController::class, 'show'])->name('pages.vacancy');
  Route::post('/vacancies/send-resume', [VacancyController::class, 'sendResume'])->name('vacancies.send-resume');
});


function parseLocale()
{
  $locale = request()->segment(1);
  $availableLocales = config('app.available_locales');
  $defaultLocale = config('app.fallback_locale');

  if ($locale !== $defaultLocale && in_array($locale, $availableLocales)) {
    app()->setLocale($locale);

    return $locale;
  }

  app()->setLocale($defaultLocale);

  return '';
}
