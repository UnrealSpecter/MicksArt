<div class="section-wrapper d-flex flex-column justify-content-center align-items-center" style="z-index: 2;">
    <img class="background" src="{{ asset('/assets/png/contact.png')}}">
    <div class="contact-container d-flex flex-column text-center kino align-items-center justify-content-center" style="padding-left: 20px;">
        @foreach($contacts as $contact)
        <h1>Contact Info</h1>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->email }}</p>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->phone_number }}</p>
        @endforeach
    </div>
    <a href="{{ $contacts[0]->facebook_url }}" style="position: absolute; bottom: 0;">
        <img src="{{ asset('/assets/png/facebook.png') }}" alt="facebook_button" >
    </a>

</div>
