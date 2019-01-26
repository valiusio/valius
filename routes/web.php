<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This configuration routes serves all the spas's files from frontend folder build
|
*/
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


Route::post("/savedata", function(\Illuminate\Http\Request $request){

    error_log($request);

});

Route::fallback(function(){
       return redirect('/');
});

