<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\ClassCash;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use \Cviebrock\EloquentSluggable\Services\SlugService;


class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('dashboard.student.index',[
            'students' => Student::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('dashboard.student.create',[
            
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $validatedData = $request->validate([
            'name' => 'required',
            'slug_name' => '',
            'number' => [
            'required',
            'numeric',
            Rule::unique('students', 'number')->whereNull('deleted_at'),
        ],
        ]);
        Student::create($validatedData);
       return redirect('/dashboard/student')->with('createStudent', 'pembuatan murid berhasil');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {   
        
        
        return view('dashboard.student.show',[
            'student' => $student,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {   
        return view('dashboard.student.edit',[
            'student' => $student
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {


        $validatedData = $request->validate([
            'name' => 'required',
            'number' => [
                'required',
                'numeric',
                Rule::unique('students', 'number')
                    ->ignore($student->id) 
                    ->whereNull('deleted_at') ,
            ],
            'slug_name' => '',
        ]);
        

        Student::where('id', $student->id)->update($validatedData);
        return redirect('/dashboard/student')->with('updateStudent', 'update murid berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        Student::destroy($student->id);
        return redirect('/dashboard/student')->with('deleteStudent', 'hapus murid berhasil');
    }

    public function checkSlug(Request $request)
    {
        $slug = SlugService::createSlug(Student::class, 'slug_name', $request->name); 
        return response()->json(['slug_name' => $slug]);
    }
}
