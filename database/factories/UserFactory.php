<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'username'     => $faker->name,
        'firstname'    => $faker->name,
        'lastname'     => $faker->name,
        'email'        => $faker->email,
        'backupemail'        => $faker->email,
        'employer'     => $faker->name,
        'employertitle' => $faker->unique()->safeEmail,
        'typeOfEmployer' => $faker->unique()->safeEmail,
        'gender'       => ['male','female'][rand(0,1)],
         'mobile'      => '6956996969',
        'mailingaddress' =>$faker->address,
        'password'  => hash('sha256',123),

    ];
});
