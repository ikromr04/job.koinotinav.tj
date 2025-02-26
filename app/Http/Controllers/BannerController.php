<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BannerController extends Controller
{
  public function index(): JsonResponse
  {
    return response()->json(Banner::latest()->get());
  }

  public function store(Request $request): JsonResponse
  {
    $file = request()->file('background');
    $fileName = uniqid() . '.' . $file->extension();
    $filePath = "/images/banners/$fileName";

    $file->move(public_path('/images/banners'), $fileName);

    $banner = Banner::create([
      'background' => $filePath,
      'content' => $request->content,
    ]);

    return response()->json($banner, 201);
  }

  public function update(Request $request): JsonResponse
  {
    $banner = Banner::findOrFail($request->id);

    if ($request->hasFile('background')) {
      if (file_exists(public_path($banner->background))) {
        unlink(public_path($banner->background));
      }

      $file = request()->file('background');
      $fileName = uniqid() . '.' . $file->extension();
      $filePath = "/images/banners/$fileName";
      $file->move(public_path('/images/banners'), $fileName);

      $banner->background = $filePath;
    }

    $banner->content = $request->content;
    $banner->save();

    return response()->json($banner, 200);
  }
}
