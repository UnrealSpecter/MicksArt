<div class="section-wrapper d-flex flex-column justify-content-center align-items-center" style="z-index: 2;">

    <img class="background desktop" src="{{ asset('/assets/png/contact.png')}}">
    <img class="background mobile" src="{{ asset('/assets/png/contact-mobile.png') }}">

    <div class="contact-container d-flex flex-column text-center kino align-items-center justify-content-center">
        @foreach($contacts as $contact)
            <h1>CONTACT</h1>
            <p>{{ $contact->email }}</p>
            <p>{{ $contact->phone_number }}</p>
        @endforeach
    </div>
    <a class="col-6 col-sm-2 col-md-6 col-lg-2 no-padding-margin d-flex align-items-center justify-content-center" href="{{ $contacts[0]->facebook_url }}" style="position: absolute; bottom: 0;">
        <img class="img-fluid no-padding-margin" src="{{ asset('/assets/png/facebook.png') }}" alt="facebook_button" >
    </a>

</div>
