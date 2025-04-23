<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\VacancyController;

Route::prefix('auth')->group(function () {
  Route::get('/check', [AuthController::class, 'check']);
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/forgot-password', [AuthController::class, 'sendPasswordResetEmail']);
  Route::post('/reset-password', [AuthController::class, 'resetPassword']);

  Route::delete('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

Route::get('/banners', [BannerController::class, 'index']);
Route::get('/vacancies', [VacancyController::class, 'index']);
Route::post('/vacancies/resume', [VacancyController::class, 'resume']);
Route::get('/companies', [CompanyController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
  Route::post('/banners', [BannerController::class, 'store']);
  Route::put('/banners/{id}', [BannerController::class, 'update']);
  Route::delete('/banners/{id}', [BannerController::class, 'delete']);

  Route::post('/vacancies', [VacancyController::class, 'store']);
  Route::put('/vacancies/{id}', [VacancyController::class, 'update']);
  Route::delete('/vacancies/{id}', [VacancyController::class, 'delete']);

  Route::post('/companies', [CompanyController::class, 'store']);
  Route::put('/companies/{id}', [CompanyController::class, 'update']);
  Route::delete('/companies/{id}', [CompanyController::class, 'delete']);
});
