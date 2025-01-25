<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bill;
use App\Models\User;
use PDF; // Import the PDF facade

class ElectricityController extends Controller
{
    public function index(Request $request)
    {
        $bills = Bill::where('userID', $request->user()->id)
            ->where('bill_type', 'Electricity')
            ->get();

        return Inertia::render('Electricity', [
            'bills' => $bills,
        ]);
    }
     /**
     * Fetch the latest bill for the authenticated user.
     */
    public function latestBill(Request $request)
    {
        $user = $request->user();
        $latestBill = Bill::where('userID', $user->id)->where('bill_type', 'Electricity')->orderBy('issue_date', 'desc')->first();

        return Inertia::render('BillDetails', [
            'bill' => $latestBill,
        ]);
    }

     /**
     * Display the specified bill.
     */
    public function show($id)
    {
        $bill = Bill::findOrFail($id);

        return Inertia::render('BillDetails', [
            'bill' => $bill,
        ]);
    }

    public function showInvoice($id)
    {
        // Fetch the user by ID
        $bill = Bill::with('user')->findOrFail($id);

        return Inertia::render('invoice', [
            'bill' => $bill,
            'user' => $bill->user,
        ]);
    }

    public function payBill($id)
    {
        // Find the bill by its ID
        $bill = Bill::findOrFail($id);

        // Update the payment status to 'paid'
        $bill->payment_status = 'paid';
        $bill->save();

        // Redirect back with a success flash message
        return redirect()->route('invoice.show', $id)->with('success', 'Payment successful!');
    }

    public function checkOverdueBills()
    {
        $overdueBills = Bill::where('payment_status', 'overdue')->get();

        foreach ($overdueBills as $bill) {
            $bill->applyPunishment();
        }
    }

    

}
