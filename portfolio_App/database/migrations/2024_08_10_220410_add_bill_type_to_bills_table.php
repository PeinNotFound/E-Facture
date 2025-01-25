<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('bills', function (Blueprint $table) {
            // Adding the 'bill_type' column with the allowed values 'Electricity' or 'Water'
            $table->enum('bill_type', ['Electricity', 'Water'])->default('Electricity')->after('due_date');
        });
    }

    public function down()
    {
        Schema::table('bills', function (Blueprint $table) {
            // Dropping the 'bill_type' column
            $table->dropColumn('bill_type');
        });
    }
};
