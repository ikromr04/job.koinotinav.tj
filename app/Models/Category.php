<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class Category extends Model
{
  protected $guarded = [];

  public function vacancies(): HasMany
  {
    return $this->hasMany(Vacancy::class);
  }

  protected static function booted(): void
  {
    static::addGlobalScope('locale', function (Builder $builder) {
      $builder->where('lang', app()->getLocale());
    });
  }
}
