<div class="section-wrapper d-flex flex-row justify-content-center align-items-center">

    @foreach($works as $index => $work)
        @if($index % 5 === 0)
        <div class="works-container first-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title}}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 1)
        <div class="works-container second-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title}}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 2)
        <div class="works-container third-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title}}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 3)
        <div class="works-container fourth-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title}}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @elseif($index % 5 === 4)
        <div class="works-container fifth-work invisible" data-artist="{{ $work->artist }}" data-title="{{ $work->title}}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
        </div>
        @endif
    @endforeach

    <img class="background" src="{{ asset('/assets/png/works.png')}}">

</div>
