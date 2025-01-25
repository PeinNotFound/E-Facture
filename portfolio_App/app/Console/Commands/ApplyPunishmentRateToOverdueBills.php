<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Bill;

class ApplyPunishmentRateToOverdueBills extends Command
{
    protected $signature = 'bills:apply-punishment';
    protected $description = 'Apply a punishment rate to overdue bills';

    public function handle()
    {
        // Retrieve all overdue bills
        $overdueBills = Bill::where('payment_status', 'overdue')->get();

        foreach ($overdueBills as $bill) {
            // Apply a 20% punishment rate if not already applied
            $bill->total_amount_due *= 1.20;
            $bill->save();
        }

        $this->info('Punishment rate applied to all overdue bills.');
    }
}
