<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HallOfFame extends Model
{
    protected $fillable = [ 'artist_social_media_url', 'artist', 'image_path'];
}
