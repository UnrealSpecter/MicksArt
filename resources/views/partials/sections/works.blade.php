<div class="section-wrapper d-flex flex-row justify-content-center align-items-center">
    <img data-page="works" class="arrow-left img-fluid" style="z-index: 5; position: absolute; left: 2.5%; width: 4%;" src="{{ asset('/assets/png/arrow-left.svg') }}" data-direction="previous" alt="previous">
    @foreach($works as $index => $work)
        @if($index % 5 === 0)
        <div class="work first-work" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
        </div>
        @elseif($index % 5 === 1)
        <div class="work second-work" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text invisible animated fadeInUp">{{ $work->title }}</span>
                <span class="work-text invisible animated fadeInUp">{{ $work->artist }}</span>
            </div>
        </div>
        @elseif($index % 5 === 2)
        <div class="work third-work" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text invisible animated fadeInUp">{{ $work->title }}</span>
                <span class="work-text invisible animated fadeInUp">{{ $work->artist }}</span>
            </div>
        </div>
        @elseif($index % 5 === 3)
        <div class="work fourth-work" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text invisible animated fadeInUp">{{ $work->title }}</span>
                <span class="work-text invisible animated fadeInUp">{{ $work->artist }}</span>
            </div>
        </div>
        @elseif($index % 5 === 4)
        <div class="work fifth-work" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 100%; width: 100%;">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text invisible animated fadeInUp">{{ $work->title }}</span>
                <span class="work-text invisible animated fadeInUp">{{ $work->artist }}</span>
            </div>
        </div>
        @endif
    @endforeach
    <img data-page="works" class="arrow-right img-fluid" style="z-index: 5; position: absolute; right: 2.5%; width: 4%;" src="{{ asset('/assets/png/arrow-right.svg') }}" data-direction="next" alt="previous">
    <img class="background" src="{{ asset('/assets/png/works.png')}}">

</div>
