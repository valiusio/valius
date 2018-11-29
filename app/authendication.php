<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class authendication extends Model
{
    protected $table = 'authentication';
    public $timestamps = false;

    public function user(){

        return $this->belongsTo('App\user');
    }
}
