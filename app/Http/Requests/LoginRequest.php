<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class LoginRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'email' => 'required|exists:users,email',
      'password' => ['required', function ($attribute, $value, $fail) {
        $user = User::where('email', $this->email)->first();

        if ($user && !Hash::check($value, $user->password)) {
          $fail('Неверный пароль.');
        }
      }],
    ];
  }

  public function messages(): array
  {
    return [
      'email.required' => 'Требуется логин.',
      'email.exists' => 'Нам не удалось найти пользователя с таким логином.',
      'password.required' => 'Пароль обязательно для заполнения.',
    ];
  }
}
