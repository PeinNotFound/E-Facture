import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { PencilSimple } from 'phosphor-react';

export default function BillHistory({ auth }) {
    const { bills, query } = usePage().props;
    const [searchQuery, setSearchQuery] = useState(query || '');
    const overflow = {
        overflowY: 'hidden',
    };

    const handleSearch = () => {
        // Handle search without refreshing the page
        Inertia.get(route('admin.bills'), { query: searchQuery }, { preserveState: true });
    };

    const handlePageChange = (url) => {
        // Handle page change without refreshing the page
        if (url) {
            Inertia.visit(url, {
                method: 'get',
                preserveState: true,
                preserveScroll: true,
                only: ['bills'],
            });
        }
    };

    const billType = bills.data.length > 0 ? bills.data[0].bill_type : 'Unknown';

    return (
        <AuthenticatedLayout style={overflow} user={auth.user}>
            <Head title="Electricity" />
            <div className="container mx-auto p-4">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search by User Name or ID"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded w-60 p-2 mr-2 text-black"
                    />
                    <Link
                        href={route('admin.bills')}
                        data={{ query: searchQuery }}
                        preserveState
                        preserveScroll
                        className="bg-customWhite text-black p-2 rounded hover:bg-blue-500 hover:text-white"
                    >
                        Search
                    </Link>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-customWhite">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-customGray2 dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">User ID</th>
                                <th scope="col" className="px-6 py-3">User Name</th>
                                <th scope="col" className="px-6 py-3">Bill ID</th>
                                <th scope="col" className="px-6 py-3">Bill Type</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Payment Status</th>
                                <th scope="col" className="px-6 py-3">Issue Date</th>
                                <th scope="col" className="px-6 py-3">Due Date</th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">View Details</span></th>
                                <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bills.data.map((bill) => (
                                <tr key={bill.id} className="bg-white border-b dark:bg-customGray dark:border-customGray2 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{bill.user.id}</td>
                                    <td className="px-6 py-4">{bill.user.name}</td>
                                    <td className="px-6 py-4">{bill.id}</td>
                                    <td className="px-6 py-4">{bill.bill_type}</td>
                                    <td className="px-6 py-4">${bill.total_amount_due}</td>
                                    <td className="px-6 py-4">{bill.payment_status}</td>
                                    <td className="px-6 py-4">{bill.issue_date}</td>
                                    <td className="px-6 py-4">{bill.due_date}</td>
                                    <Link href={bill.bill_type === 'electricity' ? route('electricity.show', bill.id) : route('electricity.show', bill.id)} className="hover:text-gray-300 font-medium text-blue-600 dark:text-customWhite hover:underline">
                                        <td className="px-6 py-4 text-right">
                                            View Details
                                        </td>
                                    </Link>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-center h-full">
                                            <Link href={route('admin.bills.edit', bill.id)} className="text-yellow-500 hover:text-yellow-700">
                                                <PencilSimple size={24} />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4">
                    {bills.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            preserveState
                            preserveScroll
                            className={`mr-2 px-3 py-2 border rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-blue-400 hover:text-customWhite'}`}
                        >
                            {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
                        </Link>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
