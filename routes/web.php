<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This configuration routes serves all the spas's files from frontend folder build
|
*/
use Illuminate\Support\Facades\DB;

Route::get("/",function(){
     $index =  \Illuminate\Support\Facades\File::get(public_path() . '/../frontend/valius/dist/index.html');
    return   response($index, 200)->header('Content-Type', 'text/html');

});

Route::get("/css/{cssname}",function($cssname){
    $file =  \Illuminate\Support\Facades\File::get(public_path() . '/../frontend/valius/dist/css/'. $cssname);
    return   response($file, 200)->header('Content-Type', 'text/css');
});

Route::get("/js/{jschunk}",function($jschunk){
    $jschunkFile =  \Illuminate\Support\Facades\File::get(public_path() . '/../frontend/valius/dist/js/'. $jschunk);
    return   response($jschunkFile, 200)->header('Content-Type', 'text/javascript');
});
Route::get("/img/{imgfile}",function($imgfile){
    $imgFile =  \Illuminate\Support\Facades\File::get(public_path() . '/../frontend/valius/dist/img/'. $imgfile);
    return   response($imgFile, 200)->header('Content-Type', 'image');
});

Route::get("/favicon.ico",function(){
    return \Illuminate\Support\Facades\File::get(public_path() . '/../frontend/valius/dist/favicon.ico');
});


Route::fallback(function(){
       return redirect('/');
});



Route::post("/api/register", function(\Illuminate\Http\Request $request){

    try {
        
        DB::beginTransaction();

        $newUser = new \App\User();
        $newUser->email = $request->get('email');
        $newUser->password = Hash::make($request->get('password'));
        $newUserSaved = $newUser->save();
        $token =JWTAuth::FromUser($newUser,['exp' => \Carbon\Carbon::now()->addDays(1)->timestamp]);
        if ($newUserSaved) {
            DB::commit();
            return response()->json('ok');
        }
        throw new Exception('error', 500);


    } catch (Exception $e) {
        return response()->json([ 'code'=> $e->getCode(), 'message' => $e->getMessage() ], $e->getCode());
    }catch (Throwable $th){
        return response()->json([ 'code'=> $th->getCode(), 'message' => $th->getMessage() ], 500);
    }

});
Route::post("/api/login", "AuthController@login");

Route::post("/api/saveState", function(\Illuminate\Http\Request $request){
    $user = JWTAuth::parseToken()->authenticate();
    if(!$user){
        return response()->json('Authorization expired', 401);
    }

    $newState = $request->input('state');
    $user->state = $newState;
    $user->update();
});

Route::get("api/getState", function(\Illuminate\Http\Request $request){
    $user = JWTAuth::parseToken()->authenticate();
    if(!$user){
        return response()->json('Authorization expired', 401);
    }

    $state = \App\User::find($user->id)->state;
    return response()->json($state);
});

