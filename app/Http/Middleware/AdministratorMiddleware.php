<?php

namespace App\Http\Middleware;

use Closure;

class AdministratorMiddleware
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
        return response()->json(['code'=>'500','message'=>'Administrator middleware works'],500);
        return $next($request);
    }
}
