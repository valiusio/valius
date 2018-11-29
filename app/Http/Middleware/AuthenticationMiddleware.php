<?php

namespace App\Http\Middleware;

use App\Http\Controllers\AuthController;
use Closure;

class AuthenticationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!AuthController::CheckAuth($request)) {
            return response()->json(['code'=>'403','message'=>'Not Authorized'],403);
        }

        return $next($request);
    }
}
