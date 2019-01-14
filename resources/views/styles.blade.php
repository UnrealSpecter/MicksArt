    <!-- BASE CSS -->
    <link rel="stylesheet" href="{{ asset('plugins/normalize/css/normalize.css') }}" />
    <link rel="stylesheet" href="{{ asset('plugins/bootstrap-4.0/css/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('plugins/animate/css/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('plugins/fullpage-scroll/css/fullpage.css') }}" />
    <link rel="stylesheet" href="{{ asset('plugins/toastr/css/toastr.min.css') }}" />

    <!-- partials css -->
    <link rel="stylesheet" href="{{ asset('/styles/micksart-style.css') }}" />

    <!-- per page additional css -->
    @yield('additional-styles')
