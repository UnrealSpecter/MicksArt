<div class="section-wrapper d-flex flex-row justify-content-center align-items-center">
    <h1 class="kino title">Gallerij</h1>
    <img data-page="works" class="arrow-left img-fluid animated fadeInLeft d-none" src="{{ asset('/assets/png/arrow-left.svg') }}" data-direction="previous" alt="previous">
    @foreach($works as $index => $work)
        <div class="work mobile-work animated fadeIn mobile" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}" style="position: absolute;">
            <div class="d-flex flex-column align-items-center justify-content-center work-information" style="z-index: 2;">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
            <div class="work-images-wrapper d-flex justify-content-center align-items-center" style="position: relative; height: 100%; width: 100%;">
                <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 90%; width: 80%;">
                <img src="{{ asset('/assets/png/work-mobile.png') }}" style="height: 100%; width: 100%; position: absolute; top: 0;">
            </div>
        </div>
        @if($index % 5 === 0)
        <div class="work first-work animated fadeIn desktop" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
            <div class="work-images-wrapper d-flex justify-content-center align-items-center" style="height: 100%; width: 100%;">
                <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 90%; width: 80%;">
                <img src="{{ asset('/assets/png/work-mobile.png') }}" style="height: 100%; width: 100%; position: absolute; top: 0;">
            </div>
        </div>
        @elseif($index % 5 === 1)
        <div class="work second-work animated fadeIn desktop" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
            <div class="work-images-wrapper d-flex justify-content-center align-items-center" style="height: 100%; width: 100%;">
                <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 90%; width: 80%;">
                <img src="{{ asset('/assets/png/work-mobile.png') }}" style="height: 100%; width: 100%; position: absolute; top: 0;">
            </div>
        </div>
        @elseif($index % 5 === 2)
        <div class="work third-work animated fadeIn desktop" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
            <div class="work-images-wrapper d-flex justify-content-center align-items-center" style="height: 100%; width: 100%;">
                <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 90%; width: 80%;">
                <img src="{{ asset('/assets/png/work-mobile.png') }}" style="height: 100%; width: 100%; position: absolute; top: 0;">
            </div>
        </div>
        @elseif($index % 5 === 3)
        <div class="work fourth-work animated fadeIn desktop" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
            <div class="work-images-wrapper d-flex justify-content-center align-items-center" style="height: 100%; width: 100%;">
                <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 90%; width: 80%;">
                <img src="{{ asset('/assets/png/work-mobile.png') }}" style="height: 100%; width: 100%; position: absolute; top: 0;">
            </div>
        </div>
        @elseif($index % 5 === 4)
        <div class="work fifth-work animated fadeIn desktop" data-artist="{{ $work->artist }}" data-title="{{ $work->title }}">
            <div class="d-flex flex-column align-items-center justify-content-center work-information">
                <span class="work-text animated fadeInUp d-none">{{ $work->title }}</span>
                <span class="work-text animated fadeInUp d-none">{{ $work->artist }}</span>
            </div>
            <div class="work-images-wrapper d-flex justify-content-center align-items-center" style="height: 100%; width: 100%;">
                <img src="{{ url('/storage') }}/{{ $work->image_path }}" style="height: 90%; width: 80%;">
                <img src="{{ asset('/assets/png/work-mobile.png') }}" style="height: 100%; width: 100%; position: absolute; top: 0;">
            </div>
        </div>
        @endif
    @endforeach
    <img data-page="works" class="arrow-right img-fluid animated fadeInRight d-none" src="{{ asset('/assets/png/arrow-right.svg') }}" data-direction="next" alt="previous">
    <img class="background desktop" src="{{ asset('/assets/png/works.png')}}">

</div>
