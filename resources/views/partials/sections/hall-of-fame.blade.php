<div class="section-wrapper d-flex flex-row justify-content-center align-items-center">
    <h1 class="kino title">Hall of Fame</h1>
    <img class="background desktop" src="{{ asset('/assets/png/hall-of-fame.png')}}">
    <img class="arrow-left invisible img-fluid animated fadeInLeft d-none" src="{{ asset('/assets/png/arrow-left.svg') }}" data-direction="previous" data-page="hall-of-fame" alt="previous">
    @foreach($artists as $index => $artist)
        <a class="artist mobile-artist no-padding-margin animated fadeIn mobile" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}" style="position: absolute;">
            <div class="col-12 d-flex justify-content-center no-padding-margin" style="height: 100%;">
                <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" class="thumbnail img-fluid" alt="{{ $artist->name }}">
            </div>
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" class="polaroid-frame">
            <p class="artist-name kino w-100 text-center d-flex align-items-center justify-content-center no-padding-margin">{{ $artist->name }}</p>
        </a>
        @if($index % 5 === 0)
        <a class="first-artist artist col-3 no-padding-margin animated fadeIn desktop" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}">
            <div class="col-12 d-flex justify-content-center no-padding-margin" style="height: 100%;">
                <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" class="thumbnail img-fluid" alt="{{ $artist->name }}">
            </div>
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" class="polaroid-frame">
            <p class="artist-name kino w-100 text-center d-flex align-items-center justify-content-center no-padding-margin">{{ $artist->name }}</p>
        </a>
        @elseif($index % 5 === 1)
        <a class="second-artist artist col-3 no-padding-margin animated fadeIn desktop" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}">
            <div class="col-12 d-flex justify-content-center no-padding-margin" style="height: 100%;">
                <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" class="thumbnail img-fluid" alt="{{ $artist->name }}">
            </div>
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" class="polaroid-frame">
            <p class="artist-name kino w-100 text-center d-flex align-items-center justify-content-center no-padding-margin">{{ $artist->name }}</p>
        </a>
        @elseif($index % 5 === 2)
        <a class="third-artist artist col-3 no-padding-margin animated fadeIn desktop" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}">
            <div class="col-12 d-flex justify-content-center no-padding-margin" style="height: 100%;">
                <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" class="thumbnail img-fluid" alt="{{ $artist->name }}">
            </div>
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" class="polaroid-frame">
            <p class="artist-name kino w-100 text-center d-flex align-items-center justify-content-center no-padding-margin">{{ $artist->name }}</p>
        </a>
        @elseif($index % 5 === 3)
        <a class="fourth-artist artist col-3 no-padding-margin animated fadeIn desktop" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}">
            <div class="col-12 d-flex justify-content-center no-padding-margin" style="height: 100%;">
                <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" class="thumbnail img-fluid" alt="{{ $artist->name }}">
            </div>
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" class="polaroid-frame">
            <p class="artist-name kino w-100 text-center d-flex align-items-center justify-content-center no-padding-margin">{{ $artist->name }}</p>
        </a>
        @elseif($index % 5 === 4)
        <a class="fifth-artist artist col-3 no-padding-margin animated fadeIn desktop" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}">
            <div class="col-12 d-flex justify-content-center no-padding-margin" style="height: 100%;">
                <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" class="thumbnail img-fluid" alt="{{ $artist->name }}">
            </div>
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" class="polaroid-frame">
            <p class="artist-name kino w-100 text-center d-flex align-items-center justify-content-center no-padding-margin">{{ $artist->name }}</p>
        </a>
        @endif
    @endforeach
    <img class="arrow-right img-fluid animated fadeInRight d-none" src="{{ asset('/assets/png/arrow-right.svg') }}" data-page="hall-of-fame" data-direction="next" alt="previous">

</div>
