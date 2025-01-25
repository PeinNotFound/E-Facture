import React, { useState } from 'react';
import { Link, Head, usePage, useRemember } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PaymentConfirmationModal from '@/Components/PaymentConfirmationModal';
import { Inertia } from '@inertiajs/inertia';
import { toast } from 'react-toastify';

const BillDetails = ({ bill, auth }) => {
    const [paymentStatus, setPaymentStatus] = useRemember(bill.payment_status, 'payment_status');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const billType = bill.bill_type;
    const isAdmin = auth.user.role === 'admin'; // Assuming the user's role is stored in auth.user.role

    const handlePayment = () => {
        try {
            Inertia.post(route('electricity.pay', bill.id));
            setPaymentStatus('paid');
            Inertia.visit(route('invoice.show', bill.id), {
                onSuccess: () => {
                    toast.success('Payment successful!');
                },
            });
        } catch (error) {
            console.error('Payment failed:', error);
            // Handle error appropriately
        }
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        handlePayment();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
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
                                    Bill Type
                                </dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                                    {bill.bill_type}
                                </dd>
                            </div>
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
                            {/* Highlighted Total Amount Due Block */}
                            <div className="bg-secondary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
                                <dt className="text-lg font-bold text-customWhite flex items-center">
                                    Total Amount Due
                                    <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">Urgent</span>
                                </dt>
                                <dd className="mt-1 text-2xl font-bold text-customWhite sm:mt-0 sm:col-span-2">
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
                                    <div className="flex items-center">
                                        <span
                                            className={`ml-2 ${
                                                bill.payment_status === 'overdue'
                                                    ? 'text-red-500'
                                                    : bill.payment_status === 'paid'
                                                    ? 'text-green-500'
                                                    : 'text-yellow-500'
                                            }`}
                                        >
                                            {bill.payment_status === 'overdue' ? '⚠️ Overdue' : bill.payment_status === 'paid' ? '✅ Paid' : '⌛ Pending'}
                                        </span>
                                    </div>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-6 flex justify-end">
                        {isAdmin ? (
                        <Link href={route('admin.bills')}>
                            <button className="bg-customWhite hover:bg-gray-300 text-primary font-bold py-2 px-4 rounded">
                                Bills list
                            </button>
                        </Link>
                            ): (
                        <Link href={route(billType === 'Electricity' ? 'electricity' : 'water')}>
                            <button className="bg-customWhite hover:bg-gray-300 text-primary font-bold py-2 px-4 rounded">
                                Show Bill History
                            </button>
                        </Link>
                        )}
                        {isAdmin ? (
                            <Link href={route('admin.bills.edit', bill.id)}>
                                <button className="ml-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Edit Bill
                                </button>
                            </Link>
                        ) : (
                            paymentStatus !== 'paid' && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Pay Now
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="ml-10 bg-secondary px-4 py-5 sm:px-6 rounded-lg mt-6">
                <h3 className="text-lg font-bold text-customWhite">Need Help?</h3>
                <p className="mt-2 text-gray-200">If you have any questions about your bill, please contact our support team:</p>
                <p className="text-gray-200">Phone: 1-800-123-4567</p>
                <p className="text-gray-200">Email: support@utilitycompany.com</p>
            </div>
            {/* Payment Confirmation Modal */}
            <PaymentConfirmationModal
                isOpen={isModalOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </AuthenticatedLayout>
    );
};

export default BillDetails;
