import React from 'react';
import { Link, usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


const LatestBill = ({auth}) => {
    const { bill } = usePage().props;

    return (
        <AuthenticatedLayout user={auth.user}
        >
            <Head title="Bill details" />

            <div className="flex justify-center items-center bg-primary text-white">
            <div className="w-full max-w-4xl p-4 sm:p-6 lg:p-8 bg-secondary shadow-lg rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">
                        Bill Details
                    </h3>
                </div>
                <div className="border-t border-customWhite">
                    <dl>
                        <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Billing Period
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                {bill.billing_period_start} to {bill.billing_period_end}
                            </dd>
                        </div>
                        <div className="bg-customGray px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Amount
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                ${bill.amount}
                            </dd>
                        </div>
                        <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Previous Balance
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                ${bill.previous_balance}
                            </dd>
                        </div>
                        <div className="bg-customGray px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Total Amount Due
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                ${bill.total_amount_due}
                            </dd>
                        </div>
                        <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Issue Date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                {bill.issue_date}
                            </dd>
                        </div>
                        <div className="bg-customGray px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Due Date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                {bill.due_date}
                            </dd>
                        </div>
                        <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-customWhite">
                                Payment Status
                            </dt>
                            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                {bill.payment_status}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-6 flex justify-end">
                    <Link href={route('electricity')}> 
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Show Bill History
                        </button>
                    </Link>
                    <Link href={route('invoice.show',bill.userID)}> 
                        <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Pay Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
};

export default LatestBill;
