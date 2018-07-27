<?php

use Illuminate\Database\Seeder;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contacts')->insert(
            [
                'phone_number' => '0591-123456',
                'email' => 'info@micksart.nl',
                'facebook_url' => 'https://www.facebook.com/erikmicksart/'
            ]
        );
    }
}
