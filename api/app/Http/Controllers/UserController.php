<?php

  namespace App\Http\Controllers;

  use App\Models\User;
  use Illuminate\Http\Request;

  class UserController extends Controller
  {

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return User::all();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     */
    public function show( int $id )
    {
      return User::find( $id );
    }

  }
