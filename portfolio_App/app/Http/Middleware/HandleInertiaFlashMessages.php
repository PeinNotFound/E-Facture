<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Inertia\Inertia; // Import Inertia facade

class HandleInertiaFlashMessages extends Middleware
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // Adding flash messages to Inertia responses
        if ($request->session()->has('success') || $request->session()->has('error')) {
            return Inertia::share([
                'flash' => [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ],
            ])->then(fn () => $response);
        }

        return $response;
    }
}
