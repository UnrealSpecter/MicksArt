<!doctype html>
<html lang="nl">
    <head data-enhance="false">
        @include('meta')
        @include('styles')
    </head>
    <body>
        <!-- start of the page content -->
        <img class="menu col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 no-padding-margin" src="{{ asset('/assets/png/menu.svg') }}" onclick="on()">
        @include('partials.hover-information')
        @include('partials.menu-overlay')
        <div class="container-fluid">
            <div class="row" style="height: 100vh; width: 100%; ;">
                <div id="fullpage" style="height: 100vh; width: 100vw;">
                    @yield('content')
                </div>
            </div>
        </div>
        @include('partials.scroll-indicators')
        @include('scripts')
    </body>
</html>
