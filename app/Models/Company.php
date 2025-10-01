<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
  protected $guarded = [];

  public function vacancies(): HasMany
  {
    return $this->hasMany(Vacancy::class);
  }
}
