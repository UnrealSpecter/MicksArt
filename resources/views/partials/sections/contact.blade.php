<div class="section-wrapper d-flex flex-column justify-content-center align-items-center">
    <img class="background" src="{{ asset('/assets/png/contact.png')}}">
    <div class="contact-container d-flex flex-column text-center kino" style="padding-left: 20px;">
        @foreach($contacts as $contact)
        <h1>Contact Info</h1>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->email }}</p>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->phone_number }}</p>
        <a href="{{ $contact->facebook_url }}">
            <img src="{{ asset('/assets/png/facebook_icon.png')}}">
        </a>
        @endforeach
    </div>

</div>
