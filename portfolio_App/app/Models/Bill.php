<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $fillable = [
        'userID',
        'amount',
        'previous_balance',
        'total_amount_due',
        'payment_status',
        'punishment_rate',
        'billing_period_start',
        'billing_period_end',
        'due_date',
        'issue_date',
        'bill_type',
    ];

    // Define the inverse relationship with User
    public function user()
    {
        return $this->belongsTo(User::class, 'userID');
    }

    public function calculatePunishment()
    {
        if ($this->payment_status === 'overdue') {
            return $this->total_amount_due * ($this->punishment_rate / 100);
        }

        return 0;
    }

    public function applyPunishment()
    {
        if ($this->payment_status === 'overdue') {
            $punishment = $this->calculatePunishment();
            $this->total_amount_due += $punishment;
            $this->save();
        }
    }
}
