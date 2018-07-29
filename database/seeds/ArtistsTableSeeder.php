<?php

use Illuminate\Database\Seeder;

class ArtistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('artists')->insert(
            [
                'name' => 'Tomi',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-1.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-2',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-2.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-3',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-3.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-4',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-4.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-5',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-5.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-6',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-6.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-7',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-7.png'
            ]
        );
        DB::table('artists')->insert(
            [
                'name' => 'Tomi-8',
                'social_media_url' => 'https://www.facebook.com/dhevakart/',
                'thumbnail_path' => 'artists/July2018/work-8.png'
            ]
        );
    }
}
