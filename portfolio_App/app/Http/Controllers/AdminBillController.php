<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminBillController extends Controller
{
    public function adminIndex(Request $request)
    {
        $query = $request->input('query');

        $bills = Bill::with('user')->whereHas('user', function ($q) use ($query) {
            $q->where('name', 'LIKE', "%$query%")
            ->orWhere('id', $query);
        })->paginate(7);

        return Inertia::render('BillHistory', [
            'bills' => $bills,
            'query' => $query,
        ]);
    }

    public function edit(Bill $bill)
    {
        return Inertia::render('EditBill', [
            'bill' => $bill,
        ]);
    }

    public function update(Request $request, $id)
{
    $validated = $request->validate([
        'amount' => 'required|numeric',
        'previous_balance' => 'required|numeric',
        'total_amount_due' => 'required|numeric',
        'payment_status' => 'required|string',
        'billing_period_start' => 'required|date',
        'billing_period_end' => 'required|date',
        'issue_date' => 'required|date',
        'due_date' => 'required|date',
        'bill_type' => 'required|string',
    ]);

    $bill = Bill::findOrFail($id);
    $bill->update($validated);

    return redirect()->route('admin.bills')->with('success', 'Bill updated successfully');
}
}
