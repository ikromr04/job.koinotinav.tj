<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('vacancies', function (Blueprint $table) {
      $table->id();
      $table->text('title');
      $table->text('content');
      $table->boolean('hot')->default(false);
      $table->string('city');
      $table->string('image')->default('/images/image-field.png');
      $table->string('direction');
      $table->foreignId('company_id')->nullable()->constrained('companies')->nullOnDelete();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('vacancies');
  }
};
