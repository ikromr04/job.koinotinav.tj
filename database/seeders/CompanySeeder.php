<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
  public function run(): void
  {
    $companies = array(
      array('id' => '1', 'title' => 'КОИНОТИ НАВ', 'logo' => '/images/companies/67c82243ef5c9.png', 'created_at' => '2025-03-03 20:26:48', 'updated_at' => '2025-03-06 03:06:59'),
      array('id' => '2', 'title' => 'AtS Тренинг Центр', 'logo' => '/images/companies/67c8233b4ec30.png', 'created_at' => '2025-03-03 20:30:17', 'updated_at' => '2025-03-06 03:11:07'),
      array('id' => '3', 'title' => 'BYD', 'logo' => '/images/companies/67c823c13956b.png', 'created_at' => '2025-03-03 20:39:34', 'updated_at' => '2025-03-06 03:13:21'),
      array('id' => '4', 'title' => 'AtS Gen', 'logo' => '/images/companies/67c823b88580f.png', 'created_at' => '2025-03-03 21:07:48', 'updated_at' => '2025-03-06 03:13:12'),
      array('id' => '5', 'title' => 'Дастрас', 'logo' => '/images/companies/67c823af21b78.png', 'created_at' => '2025-03-03 22:01:41', 'updated_at' => '2025-03-06 03:13:03'),
      array('id' => '6', 'title' => 'Хирад', 'logo' => '/images/companies/67c823a69232c.png', 'created_at' => '2025-03-03 22:01:50', 'updated_at' => '2025-03-06 03:12:54'),
      array('id' => '7', 'title' => 'Хонаи Ман', 'logo' => '/images/companies/67c8239e097a4.png', 'created_at' => '2025-03-03 22:02:04', 'updated_at' => '2025-03-06 03:12:46'),
      array('id' => '8', 'title' => 'Тадж-Моторс', 'logo' => '/images/companies/67c8238b48e17.png', 'created_at' => '2025-03-03 22:02:16', 'updated_at' => '2025-03-06 03:12:27'),
      array('id' => '10', 'title' => 'Chery', 'logo' => '/images/companies/67c8238212ca6.png', 'created_at' => '2025-03-03 22:02:36', 'updated_at' => '2025-03-06 03:12:18'),
      array('id' => '11', 'title' => 'MDIS Dushanbe', 'logo' => '/images/companies/67c823782e6cb.png', 'created_at' => '2025-03-03 22:02:47', 'updated_at' => '2025-03-06 03:12:08'),
      array('id' => '12', 'title' => 'JAC Motors', 'logo' => '/images/companies/67c823704e872.png', 'created_at' => '2025-03-03 22:02:58', 'updated_at' => '2025-03-06 03:12:00'),
      array('id' => '13', 'title' => 'ЁВАР', 'logo' => '/images/companies/67c8236836b2e.png', 'created_at' => '2025-03-03 22:03:14', 'updated_at' => '2025-03-06 03:11:52'),
      array('id' => '14', 'title' => 'Коинот Авто', 'logo' => '/images/companies/67c8235f8940a.png', 'created_at' => '2025-03-03 22:03:23', 'updated_at' => '2025-03-06 03:11:43'),
      array('id' => '15', 'title' => 'Дусти Фарма', 'logo' => '/images/companies/67c82355eed9d.png', 'created_at' => '2025-03-03 22:03:31', 'updated_at' => '2025-03-06 03:11:33'),
      array('id' => '16', 'title' => 'Саломат', 'logo' => '/images/companies/67c8234732b35.png', 'created_at' => '2025-03-03 22:04:08', 'updated_at' => '2025-03-06 03:11:19'),
      array('id' => '17', 'title' => 'МЕДСИ Таджикистан', 'logo' => '/images/companies/6808d673bba90.png', 'created_at' => '2025-04-24 04:00:51', 'updated_at' => '2025-04-24 04:00:51'),
      array('id' => '18', 'title' => 'Разес Фарма', 'logo' => '/images/companies/68414ea220efd.png', 'created_at' => '2025-06-06 00:00:34', 'updated_at' => '2025-06-06 00:00:34'),
      array('id' => '19', 'title' => 'АСР Лизинг', 'logo' => '/images/companies/68764e30f350c.jpg', 'created_at' => '2025-07-16 04:48:49', 'updated_at' => '2025-07-16 04:48:49'),
      array('id' => '20', 'title' => 'Belinda Tajikistan', 'logo' => '/images/companies/6876538f2a1bb.jpg', 'created_at' => '2025-07-16 05:11:43', 'updated_at' => '2025-07-16 05:11:43')
    );

    Company::insert($companies);
  }
}
