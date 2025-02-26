<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $banners = [
       (object)['background' => 'banner.jpg', 'content' => '<p>Content</p>'],
       (object)['background' => 'banner.jpg', 'content' => '<p>Content</p>'],
       (object)['background' => 'banner.jpg', 'content' => '<p>Content</p>'],
       (object)['background' => 'banner.jpg', 'content' => '<p>Content</p>'],
       (object)['background' => 'banner.jpg', 'content' => '<p>Content</p>'],
       (object)['background' => 'banner.jpg', 'content' => '<p>Content</p>'],
    ];

    foreach ($banners as $banner) {
      Banner::create([
        'background' => $banner->background,
        'content' => $banner->content,
      ]);
    }
  }
}
