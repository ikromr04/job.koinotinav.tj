<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class VacancyController extends Controller
{
  public function index(): JsonResponse
  {
    return response()->json(Vacancy::latest()->get());
  }

  public function store(Request $request): JsonResponse
  {
    $vacancy = Vacancy::create($request->only(
      'title',
      'content',
      'hot',
      'city',
      'direction',
      'company_id',
    ));

    return response()->json($vacancy, 201);
  }

  public function update(Request $request): JsonResponse
  {
    $vacancy = Vacancy::findOrFail($request->id)
      ->update(
        'title',
        'content',
        'hot',
        'city',
        'direction',
        'company_id',
      );

    return response()->json($vacancy, 200);
  }

  public function delete(int $id)
  {
    Vacancy::findOrFail($id)->delete();

    return response()->noContent();
  }
}
