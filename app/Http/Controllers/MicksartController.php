<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Work;
use App\Models\Artist;
use App\Models\Contact;

class MicksartController extends Controller
{
    public function index()
    {
        //push all stored markers to the view
        $works = Work::all();

        //all categories
        $artists = Artist::all();

        $contacts = Contact::all();

        //store viewData elegantly to send it to view in one go.
        $viewData = [
            'contacts' => $contacts,
            'works' => $works,
            'artists' => $artists
        ];

        // dd($viewData);

        return view('partials.sections')->with($viewData);
    }
}
