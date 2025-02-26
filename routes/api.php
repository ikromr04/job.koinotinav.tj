<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;

Route::prefix('auth')->group(function () {
  Route::get('/check', [AuthController::class, 'check']);
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/forgot-password', [AuthController::class, 'sendPasswordResetEmail']);
  Route::post('/reset-password', [AuthController::class, 'resetPassword']);

  Route::delete('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

Route::middleware('auth:sanctum')->group(function () {
  Route::prefix('banners')->group(function () {
    Route::get('/', [BannerController::class, 'index']);
    Route::post('/', [BannerController::class, 'store']);
    Route::put('/{id}', [BannerController::class, 'update']);
    Route::delete('/{id}', [BannerController::class, 'delete']);
  });
});

