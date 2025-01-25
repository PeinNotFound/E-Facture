// resources/js/Pages/Admin/EditBill.jsx

import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function EditBill({ bill, auth }) {
    const { data, setData, put, errors } = useForm({
        amount: bill.amount || '',
        previous_balance: bill.previous_balance || '',
        total_amount_due: bill.total_amount_due || '',
        payment_status: bill.payment_status || '',
        billing_period_start: bill.billing_period_start || '',
        billing_period_end: bill.billing_period_end || '',
        issue_date: bill.issue_date || '',
        due_date: bill.due_date || '',
        bill_type: bill.bill_type || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data); // Log the data to ensure bill_type is being updated
        put(route('admin.bills.update', bill.id));
    };

    

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Bill" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl ml-[15%] text-customWhite font-bold mb-4">Edit Bill</h1>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <div className="p-6 border rounded-lg bg-gray-100 dark:bg-secondary">
                        
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                name="amount"
                                id="floating_amount"
                                value={data.amount}
                                onChange={(e) => setData('amount', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_amount" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Amount</label>
                            {errors.amount && <div className="text-red-600">{errors.amount}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                name="previous_balance"
                                id="floating_previous_balance"
                                value={data.previous_balance}
                                onChange={(e) => setData('previous_balance', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_previous_balance" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Previous Balance</label>
                            {errors.previous_balance && <div className="text-red-600">{errors.previous_balance}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                name="total_amount_due"
                                id="floating_total_amount_due"
                                value={data.total_amount_due}
                                onChange={(e) => setData('total_amount_due', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_total_amount_due" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Total Amount Due</label>
                            {errors.total_amount_due && <div className="text-red-600">{errors.total_amount_due}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="payment_status"
                                id="floating_payment_status"
                                value={data.payment_status}
                                onChange={(e) => setData('payment_status', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_payment_status" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Payment Status</label>
                            {errors.payment_status && <div className="text-red-600">{errors.payment_status}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="billing_period_start"
                                id="floating_billing_period_start"
                                value={data.billing_period_start}
                                onChange={(e) => setData('billing_period_start', e.target.value)}
                                className="inputCalender block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_billing_period_start" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Billing Period Start</label>
                            {errors.billing_period_start && <div className="text-red-600">{errors.billing_period_start}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="billing_period_end"
                                id="floating_billing_period_end"
                                value={data.billing_period_end}
                                onChange={(e) => setData('billing_period_end', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_billing_period_end" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Billing Period End</label>
                            {errors.billing_period_end && <div className="text-red-600">{errors.billing_period_end}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="issue_date"
                                id="floating_issue_date"
                                value={data.issue_date}
                                onChange={(e) => setData('issue_date', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_issue_date" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Issue Date</label>
                            {errors.issue_date && <div className="text-red-600">{errors.issue_date}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="due_date"
                                id="floating_due_date"
                                value={data.due_date}
                                onChange={(e) => setData('due_date', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="floating_due_date" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Due Date</label>
                            {errors.due_date && <div className="text-red-600">{errors.due_date}</div>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <select
                                name="bill_type"
                                id="floating_bill_type"
                                value={data.bill_type}
                                onChange={(e) => setData('bill_type', e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-customWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-customWhite dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            >
                                <option className='text-black text-lg' value="Electricity">Electricity</option>
                                <option className='text-black text-lg' value="Water">Water</option>
                            </select>
                            <label htmlFor="floating_bill_type" className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-300 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-110 peer-focus:-translate-y-6">Bill Type</label>
                            {errors.bill_type && <div className="text-red-600">{errors.bill_type}</div>}
                        </div>

                    </div>
                    <div className="flex justify-start mt-4">
                        <button type="submit" className="bg-customWhite text-black hover:bg-blue-500 hover:text-white p-2 rounded">Update Bill</button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
