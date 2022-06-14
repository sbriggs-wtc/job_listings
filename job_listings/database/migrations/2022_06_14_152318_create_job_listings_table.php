<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_listings', function (Blueprint $table) {
            $table->id();
            $table->string("job_id");
            $table->string("company");
            $table->string("logo");
            $table->boolean("new");
            $table->boolean("featured");
            $table->string("position");
            $table->string("role");
            $table->string("level");
            $table->string("postedAt");
            $table->string("contract");
            $table->string("location");
            $table->string("languages");
            $table->string("tools");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_listings');
    }
};
