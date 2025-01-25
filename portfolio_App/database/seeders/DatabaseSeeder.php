<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Bill;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 10 users
        User::factory(10)->create()->each(function ($user) {
            // Create 1 bill each month for the last 5 months for each user
            for ($i = 0; $i < 5; $i++) {
                // Generate a start date for each of the last 5 months
                $billingPeriodStart = Carbon::now()->subMonths($i + 1)->startOfMonth();

                // Billing period end date is the end of the same month
                $billingPeriodEnd = (clone $billingPeriodStart)->endOfMonth();

                // Issue date is one day after the billing period end
                $issueDate = (clone $billingPeriodEnd)->addDay();

                // Due date is 15 days after the issue date
                $dueDate = (clone $issueDate)->addDays(15);

                // Calculate previous balance and total amount due
                $amount = fake()->randomFloat(2, 50, 500);
                $previousBalance = fake()->randomFloat(2, 0, 100);
                $totalAmountDue = $amount + $previousBalance;

                // Determine payment status based on current date and due date
                $paymentStatus = Carbon::now()->greaterThan($dueDate) ? 'overdue' : 'pending';

                // Create the bill
                Bill::factory()->create([
                    'userID' => $user->id,
                    'amount' => $amount,
                    'previous_balance' => $previousBalance,
                    'total_amount_due' => $totalAmountDue,
                    'payment_status' => $paymentStatus,
                    'billing_period_start' => $billingPeriodStart,
                    'billing_period_end' => $billingPeriodEnd,
                    'issue_date' => $issueDate,
                    'due_date' => $dueDate,
                ]);
            }
        });
    }
}
