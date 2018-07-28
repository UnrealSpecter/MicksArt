<!doctype html>
<html lang="nl">
    <head data-enhance="false">
        @include('meta')
        @include('styles')
    </head>
    <body>
        <!-- start of the page content -->
        <img class="col-1" src="{{ asset('/assets/png/menu.svg') }}" style="z-index: 2; position: fixed; top: 15px; right: 15px; cursor: pointer;" onclick="on()">
        @include('partials.hover-information')
        @include('partials.menu-overlay')
        <div class="container-fluid">
            <div class="row" style="height: 100vh; width: 100%; ;">
                <div id="fullpage" style="height: 100vh; width: 100vw;">
                    @yield('content')
                </div>
            </div>
        </div>
        @include('scripts')
    </body>
</html>
