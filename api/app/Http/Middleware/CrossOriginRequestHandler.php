<?php

  namespace App\Http\Middleware;

  use Closure;
  use Illuminate\Http\Request;
  use Symfony\Component\HttpFoundation\Response;

  class CrossOriginRequestHandler
  {
    //=============================================================================
    // Gère les soucis de CORS de TOUTES les requêtes entrantes de l'API
    //-----------------------------------------------------------------------------
    // Cette méthode est exécutée AVANT le routeur
    //=============================================================================

    public function handle( Request $request, Closure $next )
    {
      $headers = [
        'Access-Control-Allow-Origin'      => config( 'app.debug' ) ? '*' : '*',
        'Access-Control-Allow-Methods'     => 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials' => 'true',
        'Access-Control-Allow-Headers'     => 'Accept, Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age'           => '0'
      ];

      if( $request->isMethod( "OPTIONS" ) )
        return response()->json( null, Response::HTTP_OK, $headers );

      if( $_SERVER['REQUEST_METHOD'] == 'OPTIONS' )
      {
        if( isset( $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] ) ) // may also be using PUT, PATCH, HEAD etc
          header( "Access-Control-Allow-Methods: GET, POST, OPTIONS" );
        if( isset( $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'] ) )
          header( "Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}" );

        exit( 0 );
      }

      $response = $next( $request );
      foreach( $headers as $key => $value )
        $response->header( $key, $value );

      return $response;
    }
  }
