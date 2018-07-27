<?php

use Illuminate\Database\Seeder;

class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('works')->insert(
            [
                'title' => 'title-1',
                'artist' => 'artist-1',
                'image_path' => '/works/July2018/slide_1.jpg'
            ]
        );
        DB::table('works')->insert(
            [
                'title' => 'title-2',
                'artist' => 'artist-2',
                'image_path' => '/works/July2018/slide_2.jpg'
            ]
        );
        DB::table('works')->insert(
            [
                'title' => 'title-3',
                'artist' => 'artist-3',
                'image_path' => '/works/July2018/slide_3.jpg'
            ]
        );
        DB::table('works')->insert(
            [
                'title' => 'title-4',
                'artist' => 'artist-4',
                'image_path' => '/works/July2018/slide_4.jpg'
            ]
        );
        DB::table('works')->insert(
            [
                'title' => 'title-5',
                'artist' => 'artist-5',
                'image_path' => '/works/July2018/slide_5.jpg'
            ]
        );
        DB::table('works')->insert(
            [
                'title' => 'title-6',
                'artist' => 'artist-6',
                'image_path' => '/works/July2018/slide_6.jpg'
            ]
        );
        DB::table('works')->insert(
            [
                'title' => 'title-7',
                'artist' => 'artist-7',
                'image_path' => '/works/July2018/slide_7.jpg'
            ]
        );
    }
}
