<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class Student extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    // public function getRouteKeyName(){
    //     return 'slug_name';
    // }

    // public function sluggable(): array
    // {
    //     return [
    //         'slug_name' => [
    //             'source' => 'name'
    //         ]
    //     ];
    // }
}
