<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable  implements JWTSubject
{
    protected $table = 'users';

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    final public function getJWTCustomClaims()
    {
        return [];
    }

}
