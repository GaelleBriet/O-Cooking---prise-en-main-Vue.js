<?php

  namespace App\Models;

  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\SoftDeletes;

  class User extends Model
  {
    use SoftDeletes;

    protected $dates = [ 'deleted_at' ];

    protected $hidden = [ 'password' ];

    public function comments()
    {
      return $this->hasMany( Comment::class );
    }

    public function recipes()
    {
      return $this->hasMany( Recipe::class );
    }
  }
