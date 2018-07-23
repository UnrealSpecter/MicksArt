<!doctype html>
<html lang="nl">
    <head data-enhance="false">
        @include('meta')
        @include('styles')
    </head>
    <body>
        <!-- start of the page content -->
        <div class="container-fluid">
            <div class="row" id="fullpage" style="height: 100vh; width: 100%; margin: 0; padding: 0;">
                @yield('content')
            </div>
        </div>
        @include('scripts')
    </body>
</html>
