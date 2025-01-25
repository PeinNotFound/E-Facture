<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showMainPage(Request $request)
{
    return Inertia::render('Dashboard', [
        'user' => $request->user(),
    ]);
}
}
