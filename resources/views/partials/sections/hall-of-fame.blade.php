<div class="section-wrapper d-flex flex-row justify-content-center align-items-center">
    <img class="background" src="{{ asset('/assets/png/hall-of-fame.png')}}">
    <img class="arrow-left img-fluid" style="z-index: 5; position: absolute; left: 2.5%; width: 4%;" src="{{ asset('/assets/png/arrow-left.svg') }}" data-direction="previous" data-page="hall-of-fame" alt="previous">
    @foreach($artists as $index => $artist)
        @if($index % 5 === 0)
        <a class="first-artist artist col-3 d-flex justify-content-center" target="_blank" href="{{ $artist->social_media_url }}" data-artist="{{ $artist->name }}">
            <img src="{{ url('/storage') }}/{{ $artist->thumbnail_path }}" style="    z-index: 2;
    position: absolute;
    top: 10%;
    height: 63%;
    width: 74%;
    background-color: red;" alt="{{ $artist->name }}">
            <img src="{{ asset('/assets/png/hall-of-fame-mobile.png')}}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        </a>
        @elseif($index % 5 === 1)

        @elseif($index % 5 === 2)

        @elseif($index % 5 === 3)

        @elseif($index % 5 === 4)

        @endif
    @endforeach
    <img class="arrow-right img-fluid" style="z-index: 5; position: absolute; right: 2.5%; width: 4%;" src="{{ asset('/assets/png/arrow-right.svg') }}" data-page="hall-of-fame" data-direction="next" alt="previous">

</div>
