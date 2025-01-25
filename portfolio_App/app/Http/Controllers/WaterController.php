<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;
use Inertia\Inertia;

class WaterController extends Controller
{
    //
    public function index(Request $request)
    {
        // Fetching only the water bills for the authenticated user
        $bills = Bill::where('userID', $request->user()->id)
                    ->where('bill_type', 'Water')
                    ->get();

        return Inertia::render('Electricity', [
            'bills' => $bills,
        ]);
    }
    public function latestBill(Request $request)
    {
        $user = $request->user();
        $latestBill = Bill::where('userID', $user->id)->where('bill_type', 'Water')->orderBy('issue_date', 'desc')->first();

        return Inertia::render('BillDetails', [
            'bill' => $latestBill,
        ]);
    }

    
}
