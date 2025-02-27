<?php

namespace Database\Seeders;

use App\Models\Vacancy;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class VacancySeeder extends Seeder
{
  public function run(): void
  {
    $faker = Faker::create('ru_RU');

    $directions = [
      'Административный персонал',
      'HR, кадры',
      'IT, телеком, компьютеры',
      'Банки, страхование, лизинг',
      'Бухгалтерия, финансы, юристы',
      'Государственные службы',
      'Домашний персонал, обслуживание',
      'Красота, фитнес, спорт',
      'Маркетинг, реклама, дизайн',
      'Медицина, фармация',
      'Начало карьеры, студенты',
    ];

    foreach (range(1, 72) as $index) {
      Vacancy::create([
        'title' => $faker->randomElement([
          "<h2 class=\"title\">{$faker->jobTitle}</h2>",
        ]),
        'image' => "https://ui-avatars.com/api/?name=" . $faker->word . "&size=100&background=random",
        'content' => $faker->randomHtml(10),
        'hot' => $faker->boolean(10),
        'city' => $faker->city,
        'direction' => $directions[$faker->numberBetween(0, 10)],
        'company_id' => $faker->numberBetween(1, 10),
      ]);
    }
  }
}
