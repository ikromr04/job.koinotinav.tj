<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class PageController extends Controller
{
  public function index(): View
  {
    $data = (object)[
      'hotVacancies' => Vacancy::select([
        'id',
        'hot',
        'company_id',
        'city',
        'title',
        DB::raw('SUBSTRING(content, 1, 88) as description')
      ])
        ->where('hot', true)
        ->where('lang', app()->getLocale())
        ->latest()
        ->take(5)
        ->get(),
      'categories' => Category::where('lang', app()->getLocale())
        ->get(),
    ];

    return view('pages.index', compact('data'));
  }

  public function team(): View
  {
    return view('pages.team');
  }
}
