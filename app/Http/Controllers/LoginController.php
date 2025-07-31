<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;


class LoginController extends Controller
{
    public function index()
    {
        return view('login');
    }

    public function authenticate(Request $request){

        $credentials = $request->validate([
            'email' => 'required|max:255|min:4|email',
            'password' => 'required|max:255|min:6|'
        ]);

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            if(Auth::user()->role == 'admin'){
                return redirect('/dashboard')->with('loginSuccess', 'Anda telah berhasil login.');
            }elseif(Auth::user()->role == 'super_admin'){
                return redirect()->route('dashboard.superadmin')->with('loginSuccess', 'Anda telah berhasil login.');
            }
            else{

            }
        }

        return back()->with('loginError' ,'username/password salah');
    }


    public function sign()
    {
        return view('signup');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => [
                'required', 
                'email',
                'min:6',
                Rule::unique('users', 'email')->whereNull('deleted_at'),
            ],
            'username' => 'required',
            'phone_number' => [
                'required', 
                'numeric',
                Rule::unique('admins', 'phone_number')->whereNull('deleted_at'),
            ],
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']), 
        ]);

        Admin::create([
        'user_id' => $user->id, 
        'username' => $validatedData['username'],
        'phone_number' => $validatedData['phone_number'],
        ]);

        Auth::login($user);

        return redirect('/dashboard')->with('loginSuccess', 'Anda telah berhasil login.');
    }

    public function logout(Request $request)
    {
        Auth::logout();
     
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();
     
        return redirect('/')->with('logoutAlert', 'Anda telah berhasil logout.');
    }
}
