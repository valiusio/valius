<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users',function (Blueprint $table){
            $table->increments('id');
            $table->string('username');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('preferredemail');
            $table->string('backupemail');
            $table->string('employer');
            $table->string('title');
            $table->string('typeOfEmployer');
            $table->enum('gender',['male','female']);
            $table->string('mobile');
            $table->string('mailingaddress');
            $table->string('password');
            $table->string('salt');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
