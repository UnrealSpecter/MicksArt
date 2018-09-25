@section('additional-styles')
@endsection

@extends('master') @section('content')
    <div class="section d-none">@include('partials.sections.home')</div>
    <div class="section d-none">@include('partials.sections.works')</div>
    <div class="section d-none">@include('partials.sections.hall-of-fame')</div>
    <div class="section d-none">@include('partials.sections.contact')</div>
@endsection

@section('additional-scripts')
    <script src="{{ URL::asset('scripts/fullpage.js')}}"></script>
@endsection
