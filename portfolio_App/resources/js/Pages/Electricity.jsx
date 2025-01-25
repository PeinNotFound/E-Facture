import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { bills } = usePage().props;

    const overflow = {
        overflowY: 'hidden',
    };

    const billType = bills.length > 0 ? bills[0].bill_type : 'Unknown';

    return (
        <AuthenticatedLayout style={overflow} user={auth.user}>
            <Head title="Electricity" />
            {/* <h1 className="ml-10 text-2xl font-bold mb-4 text-customWhite">Electricity Bills</h1> */}

            <div className="ml-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-customWhite">
                <caption className="border-b dark:border-customGray2 p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-customGray3">
                {billType} Bills
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">View your complete history of electricity bills, including payment status, amounts due, and billing periods, all in one organized table. Click 'View Details' to see more information about each bill and make a payment.</p>
                </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-customGray2 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">Bill ID</th>
                            <th scope="col" className="px-6 py-3">Amount</th>
                            <th scope="col" className="px-6 py-3">Previous Balance</th>
                            <th scope="col" className="px-6 py-3">Total Amount Due</th>
                            <th scope="col" className="px-6 py-3">Payment Status</th>
                            <th scope="col" className="px-6 py-3">Billing Period Start</th>
                            <th scope="col" className="px-6 py-3">Billing Period End</th>
                            <th scope="col" className="px-6 py-3">Due Date</th>
                            <th scope="col" className="px-6 py-3">Issue Date</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">View Details</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr key={bill.id} className="bg-white border-b dark:bg-customGray dark:border-customGray2 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {bill.id}
                                </th>
                                <td className="px-6 py-4">${bill.amount}</td>
                                <td className="px-6 py-4">${bill.previous_balance}</td>
                                <td className="px-6 py-4">${bill.total_amount_due}</td>
                                <td className="px-6 py-4">{bill.payment_status}</td>
                                <td className="px-6 py-4">{bill.billing_period_start}</td>
                                <td className="px-6 py-4">{bill.billing_period_end}</td>
                                <td className="px-6 py-4">{new Date(bill.due_date).toLocaleDateString()}</td>
                                <td className="px-6 py-4">{new Date(bill.issue_date).toLocaleDateString()}</td>
                                <Link href={route('electricity.show', bill.id)} className="hover:text-gray-300 font-medium text-blue-600 dark:text-customWhite hover:underline">
                                    <td className="px-6 py-4 text-right">
                                        View Details
                                    </td>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
