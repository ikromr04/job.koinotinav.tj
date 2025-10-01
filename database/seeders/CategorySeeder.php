<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
  public function run(): void
  {
    $categories = [
      'Финансист',
      'Дизайнер',
      'IT разработчики',
      'Формацевт',
      'СЕО Компании',
      'Юрист',
      'Бухгалтер',
      'Видеомейкер',
      'Маркетолог',
      'Смм специалист',
      'Продажник',
      'Руководитель',
      'Тренеры',
      'Кассир',
      'WEB DESIGNER',
      'DIGITAL MARKETER',
    ];

    foreach ($categories as $category) {
      Category::create([
        'name' => $category,
      ]);
    }
  }
}
