<?php

  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;

  return new class extends Migration
  {

    public function up()
    {
      Schema::create( 'users', function( Blueprint $table )
      {
        $table->increments( 'id' );
        $table->string( 'username' );
        $table->string( 'password' );
        $table->timestamps();
        $table->softDeletes();
      } );

      Schema::create( 'recipes', function( Blueprint $table )
      {
        $table->increments( 'id' );
        $table->string( 'name' );
        $table->text( 'description' );
        $table->text( 'ingredients' );
        $table->timestamps();
        $table->softDeletes();

        // FK
        $table->integer( 'user_id' )->unsigned()->index();
      } );

      Schema::create( 'comments', function( Blueprint $table )
      {
        $table->increments( 'id' );
        $table->text( 'message' );
        $table->timestamps();
        $table->softDeletes();

        // FK
        $table->integer( 'recipe_id' )->unsigned()->index();
        $table->integer( 'user_id' )->unsigned()->index();
      } );
    }

    public function down()
    {
      Schema::drop( 'users' );
      Schema::drop( 'recipes' );
      Schema::drop( 'comments' );
    }
  };
