<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class Vacancy extends Model
{
  use SoftDeletes;

  protected $guarded = [];

  public function company(): BelongsTo
  {
    return $this->belongsTo(Company::class);
  }

  public function category(): BelongsTo
  {
    return $this->belongsTo(Category::class);
  }

  protected static function booted(): void
  {
    static::addGlobalScope('locale', function (Builder $builder) {
      $builder->where('lang', app()->getLocale());
    });
  }
}
