<div class="section-wrapper d-flex flex-row justify-content-center align-items-center">
    <img class="arrow-left img-fluid" style="z-index: 5; position: absolute; left: 2.5%; width: 4%;" src="{{ asset('/assets/png/arrow-left.svg') }}" data-direction="previous" alt="previous">
    @foreach($works as $index => $work)
        @if($index % 5 === 0)
        <div class="work first-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 1)
        <div class="work second-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 2)
        <div class="work third-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 3)
        <div class="work fourth-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 4)
        <div class="work fifth-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @endif
    @endforeach
    <img class="arrow-right img-fluid" style="z-index: 5; position: absolute; right: 2.5%; width: 4%;" src="{{ asset('/assets/png/arrow-right.svg') }}" data-direction="next" alt="previous">

    <img class="background" src="{{ asset('/assets/png/works.png')}}">

</div>
