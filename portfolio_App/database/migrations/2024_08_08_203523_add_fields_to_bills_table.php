<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bills', function (Blueprint $table) {
            $table->date('billing_period_start')->nullable()->after('amount');
            $table->date('billing_period_end')->nullable()->after('billing_period_start');
            $table->date('issue_date')->nullable()->after('billing_period_end');
            $table->date('due_date')->nullable()->after('issue_date');
            $table->decimal('previous_balance', 10, 2)->default(0)->after('amount');
            $table->decimal('total_amount_due', 10, 2)->after('previous_balance');
            $table->string('payment_status')->default('pending')->after('total_amount_due');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bills', function (Blueprint $table) {
            $table->dropColumn([
                'billing_period_start',
                'billing_period_end',
                'issue_date',
                'due_date',
                'previous_balance',
                'total_amount_due',
                'payment_status',
            ]);
        });
    }
}
