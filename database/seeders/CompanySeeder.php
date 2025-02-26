<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CompanySeeder extends Seeder
{
  public function run(): void
  {
    $faker = Faker::create('ru_RU');

    foreach (range(1, 10) as $index) {
      Company::create([
        'title' => $faker->company,
        'logo' => "https://ui-avatars.com/api/?name=" . $faker->word . "&size=100&background=random",
      ]);
    }
  }
}
