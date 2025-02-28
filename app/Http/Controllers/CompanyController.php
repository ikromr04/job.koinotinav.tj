<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CompanyController extends Controller
{
  public function index(): JsonResponse
  {
    return response()->json(Company::latest()->get());
  }

  public function store(Request $request): JsonResponse
  {
    $file = request()->file('logo');
    $fileName = uniqid() . '.' . $file->extension();
    $filePath = "/images/companies/$fileName";

    $file->move(public_path('/images/companies'), $fileName);

    $company = Company::create([
      'title' => $request->title,
      'logo' => $filePath,
    ]);

    return response()->json($company, 201);
  }

  public function update(Request $request): JsonResponse
  {
    $company = Company::findOrFail($request->id);

    if ($request->hasFile('logo')) {
      if ($company->logo !== '/images/image-field.png' && file_exists(public_path($company->logo))) {
        unlink(public_path($company->logo));
      }

      $file = request()->file('logo');
      $fileName = uniqid() . '.' . $file->extension();
      $filePath = "/images/companies/$fileName";
      $file->move(public_path('/images/companies'), $fileName);

      $company->logo = $filePath;
    }

    $company->title = $request->title;
    $company->save();

    return response()->json($company, 200);
  }

  public function delete(int $id)
  {
    $company = Company::findOrFail($id);

    if ($company->logo !== '/images/image-field.png' && file_exists(public_path($company->logo))) {
      unlink(public_path($company->logo));
    }

    $company->delete();

    return response()->noContent();
  }
}
