<?php

  namespace App\Http\Controllers;

  use App\Models\Comment;
  use Illuminate\Http\Request;

  class CommentController extends Controller
  {

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Comment::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store( Request $request )
    {
      $comment = new Comment();
      $comment->message = $request->message;
      $comment->user_id = $request->user_id;
      $comment->recipe_id = $request->recipe_id;
      $comment->save();
      return $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     */
    public function show( int $id )
    {
      return Comment::find( $id );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     */
    public function update( Request $request, int $id )
    {
      $comment = Comment::find( $id );
      $comment->message = $request->message;
      $comment->user_id = $request->user_id;
      $comment->recipe_id = $request->recipe_id;
      $comment->save();
      return $comment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     */
    public function destroy( int $id )
    {
      $comment = Comment::find( $id );
      $comment->delete();
      return $comment;
    }

  }
