<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Company;
use App\Models\Vacancy;
use Illuminate\Contracts\View\View as ViewView;
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
        'lang',
        'company_id',
        'city',
        'title',
        DB::raw('SUBSTRING(content, 1, 88) as description')
      ])
        ->where('hot', true)
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

  public function resume(): View
  {
    return view('pages.resume');
  }

  public function vacancies(Request $request): View
  {
    $vacancies = Vacancy::select([
      'id',
      'lang',
      'title',
      'city',
      'company_id',
      'category_id',
      DB::raw('SUBSTRING(content, 1, 88) as description')
    ]);

    if ($request->query('city')) {
      $vacancies = $vacancies->where('city', $request->query('city'));
    }

    if ($request->query('company')) {
      $vacancies = $vacancies->where('company_id', $request->query('company'));
    }

    if ($request->query('category')) {
      $vacancies = $vacancies->where('category_id', $request->query('category'));
    }

    $data = (object)[
      'vacancies' => $vacancies->paginate(5)->appends(request()->query()),
      'cities' => Vacancy::pluck('city')->unique()->values(),
      'categories' => Category::get(),
      'companies' => Company::get(),
    ];

    return view('pages.vacancies.index', compact('data'));
  }

  public function vacancy(Vacancy $vacancy): ViewView
  {
    $data = (object)[
      'vacancy' => $vacancy,
      'similarVacancies' => Vacancy::select([
        'id',
        'lang',
        'company_id',
        'category_id',
        'city',
        'title',
        DB::raw('SUBSTRING(content, 1, 88) as description')
      ])->where('category_id', $vacancy->category->id)->get(),
    ];

    return view('pages.vacancies.show', compact('data'));
  }

  public function category(Category $category): View
  {
    $data = (object)[
      'vacancies' => Vacancy::select([
        'id',
        'lang',
        'company_id',
        'category_id',
        'city',
        'title',
        DB::raw('SUBSTRING(content, 1, 88) as description')
      ])
        ->where('category_id', $category->id)
        ->latest()
        ->get(),
      'category' => $category,
    ];

    return view('pages.categories.show', compact('data'));
  }
}
