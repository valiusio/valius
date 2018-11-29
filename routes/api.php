<?php

use Illuminate\Http\Request;

Route::post('login', 'AuthController@login');



Route::middleware(['AuthenticationMiddleware'])->group(function () {



        Route::resource('user', 'UserController');





});


