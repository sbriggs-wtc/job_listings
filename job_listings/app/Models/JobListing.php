<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobListing extends Model
{
    use HasFactory;

    protected $fillable = [
    
            "id",
            "company",
            "logo",
            "new",
            "featured",
            "position",
            "role",
            "level",
            "postedAt",
            "contract",
            "location",
            "languages",
            "tools"
    ];
}
