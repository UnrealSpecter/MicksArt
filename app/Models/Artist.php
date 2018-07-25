<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['social_media_url', 'name', 'thumbnail_path'];
}
