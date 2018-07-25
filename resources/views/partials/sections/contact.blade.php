<div class="section-wrapper d-flex flex-column justify-content-center align-items-center">
    <img src="{{ asset('/assets/optimised/contact.svg')}}" style="z-index: 1; position: absolute; top: 0; left: 0; bottom: 0; right: 0;">
    <div class="contact-container d-flex flex-column text-center" style="padding-left: 20px;">
        @foreach($contacts as $contact)
        <h1>Contact Info</h1>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->email }}</p>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->phone_number }}</p>
        <p style="font-size: 2em; text-transform: uppercase; ">{{ $contact->facebook_url }}</p>
        @endforeach
    </div>

</div>
