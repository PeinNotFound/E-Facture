<?php

use App\Http\Controllers\AdminBillController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WaterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ElectricityController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'showMainPage'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/invoice/{id}', [ElectricityController::class, 'showInvoice'])->middleware(['auth', 'verified'])->name('invoice.show');

Route::post('/electricity/{id}/pay', [ElectricityController::class, 'payBill'])->middleware(['auth', 'verified'])->name('electricity.pay');

Route::get('/electricity',  [ElectricityController::class, 'index'])->middleware(['auth', 'verified'])->name('electricity');

Route::get('/water',  [WaterController::class, 'index'])->middleware(['auth', 'verified'])->name('water');

Route::get('/electricity/{id}',  [ElectricityController::class, 'show'])->middleware(['auth', 'verified'])->name('electricity.show');

Route::get('/latest_bill',  [ElectricityController::class, 'latestBill'])->middleware(['auth', 'verified'])->name('latest_bill');

Route::get('/latest_bill_water',  [WaterController::class, 'latestBill'])->middleware(['auth', 'verified'])->name('latest_bill_water');

Route::get('/privacy_policy', function () {
    return Inertia::render('PrivacyPolicy');
})->middleware(['auth', 'verified'])->name('privacyPolicy');

Route::middleware('admin')->group(function () {
    Route::get('/admin/bills/{bill}/edit', [AdminBillController::class, 'edit'])->name('admin.bills.edit');
    Route::put('/admin/bills/{bill}', [AdminBillController::class, 'update'])->name('admin.bills.update');
    Route::get('/admin/bills', [AdminBillController::class, 'adminIndex'])->name('admin.bills');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
