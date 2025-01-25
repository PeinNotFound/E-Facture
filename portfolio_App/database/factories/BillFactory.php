<?php

namespace Database\Factories;

use App\Models\Bill;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class BillFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Bill::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // Generate a random start date within the past year
        $billingPeriodStart = Carbon::now()->subMonths(rand(1, 5))->startOfMonth();

        // Billing period end date is one month after the start date
        $billingPeriodEnd = (clone $billingPeriodStart)->endOfMonth();

        // Issue date is one day after the billing period end
        $issueDate = (clone $billingPeriodEnd)->addDay();

        // Due date is 15 days after the issue date
        $dueDate = (clone $issueDate)->addDays(15);

        // Calculate previous balance and total amount due
        $amount = $this->faker->randomFloat(2, 50, 500);
        $previousBalance = $this->faker->randomFloat(2, 0, 100);
        $totalAmountDue = $amount + $previousBalance;
        $punishment_rate = 20.00;

        // Determine payment status based on current date and due date
        $paymentStatus = Carbon::now()->greaterThan($dueDate) ? 'overdue' : 'pending';

        return [
            'userID' => $this->faker->numberBetween(1, 10),
            'amount' => $amount,
            'previous_balance' => $previousBalance,
            'total_amount_due' => $totalAmountDue,
            'payment_status' => $paymentStatus,
            'punishment_rate' => $punishment_rate,
            'billing_period_start' => $billingPeriodStart,
            'billing_period_end' => $billingPeriodEnd,
            'issue_date' => $issueDate,
            'due_date' => $dueDate,
            'bill_type' => $this->faker->randomElement(['Electricity', 'Water']),
        ];
    }
}
