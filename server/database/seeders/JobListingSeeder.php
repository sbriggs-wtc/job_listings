<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JobListing;
use File;

class JobListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JobListing::truncate();
  
        $json = File::get("database/data.json");
        $jobs = json_decode($json);
  
        foreach ($jobs as $key => $value) {
            JobListing::create([
                "job_id" => $value->id,
                "company" => $value->company,
                "logo" => $value->logo,
                "new" => $value->new,
                "featured" => $value->featured,
                "position" => $value->position,
                "role" => $value->role,
                "level" => $value->level,
                "posted_at" => $value->postedAt,
                "contract" => $value->contract,
                "location" => $value->location,
                "languages" => implode(',', $value->languages),
                "tools" => implode(',', $value->tools),
            ]);
        }
    }
}
