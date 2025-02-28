<?php

namespace App\Http\Controllers;

use App\Mail\SendResumeMail;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

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
    $vacancy = Vacancy::findOrFail($request->id);

    $vacancy->title = $request->title;
    $vacancy->content = $request->content;
    $vacancy->hot = $request->hot === 'false' ? false : true;
    $vacancy->city = $request->city;
    $vacancy->direction = $request->direction;
    if ($request->company_id) $vacancy->company_id = $request->company_id;

    if ($request->hasFile('image')) {
      if ($vacancy->image !== '/images/image-field.png' && file_exists(public_path($vacancy->image))) {
        unlink(public_path($vacancy->image));
      }

      $file = request()->file('image');
      $fileName = uniqid() . '.' . $file->extension();
      $filePath = "/images/vacancies/$fileName";
      $file->move(public_path('/images/vacancies'), $fileName);

      $vacancy->image = $filePath;
    }

    $vacancy->update();

    return response()->json($vacancy, 200);
  }

  public function delete(int $id)
  {
    Vacancy::findOrFail($id)->delete();

    return response()->noContent();
  }

  public function resume(Request $request)
  {

    $details = (object)[
      'subject' => $request->vacancy ? 'Отклик на вакансию ' . strip_tags($request->vacancy) : 'Резюме',
    ];

    $filePath = $request->file('resume')->store('resumes', 'public');
    $absoluteFilePath = storage_path("app/public/{$filePath}");

    Mail::to(env('APP_EMAIL'))->send(new SendResumeMail($details, $absoluteFilePath));

    return response()->noContent();
  }
}
