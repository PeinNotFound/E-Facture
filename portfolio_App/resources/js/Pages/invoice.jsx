import { Head, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {getCurrentDate} from './../Components/GetDate'
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF'; // Import the InvoicePDF component


const InvoiceComponent = ({auth}) => {
    const { user, bill } = usePage().props;



    useEffect(() => {
        toast.success('Payment successful!');
    }, []);

    // useEffect(() => {
    //     if (flash.success) {
    //         toast.success(flash.success);
    //     }
    // }, [flash.success]);

    // Function to handle printing the invoice
    const handlePrint = () => {
        window.print();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="invoice" />
            <div className="pb-10">
            <style>
                    {`
                        @media print {
                            body * {
                                visibility: hidden;
                            }

                            #invoice-section, #invoice-section * {
                                visibility: visible;
                            }

                            #invoice-section {
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                            }
                        }
                    `}
                </style>
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                <div className="sm:w-11/12 lg:w-3/4 mx-auto" >
                <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800" id="invoice-section">
                    <div className="flex justify-between">
                    <div>
                        <img src='/images/fsklubcypgm2sreez5de.png' className='w-20 h-20'/>

                        <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
                        Alx Inc.
                        </h1>
                    </div>

                    <div className="text-end">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
                        Invoice #
                        </h2>
                        <span className="mt-1 block text-gray-500 dark:text-neutral-500">
                        3682303
                        </span>

                        <address className="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                        Avenue Mohamed VI
                        <br />
                        Guéliz
                        <br />
                        Marrakech
                        <br />
                        </address>
                    </div>
                    </div>

                    <div className="mt-8 grid sm:grid-cols-2 gap-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            Bill to:
                        </h3>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            {user.name}
                        </h3>
                        <address className="mt-2 not-italic w-48 text-gray-500 dark:text-neutral-500">
                            {user.address}
                        <br />
                        </address>
                    </div>

                    <div className="sm:text-end space-y-2">
                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                                Invoice date:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                {getCurrentDate()}
                            </dd>
                        </dl>
                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                                Due date:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                                {new Date(bill.due_date).toLocaleDateString()}
                            </dd>
                        </dl>
                        </div>
                    </div>
                    </div>

                    <div className="mt-6">
                    <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                        <div className="hidden sm:grid sm:grid-cols-5">
                        <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Bill
                        </div>
                        <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Qty
                        </div>
                        <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Bill Number
                        </div>
                        <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Amount
                        </div>
                        </div>

                        <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div className="col-span-full sm:col-span-2">
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Item
                            </h5>
                            <p className="font-medium text-gray-800 dark:text-neutral-200">
                            {bill.bill_type} Bill
                            </p>
                        </div>
                        <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Qty
                            </h5>
                            <p className="text-gray-800 dark:text-neutral-200">1</p>
                        </div>
                        <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Bill Number
                            </h5>
                            <p className="text-gray-800 dark:text-neutral-200">{bill.id}</p>
                        </div>
                        <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Amount
                            </h5>
                            <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                            ${bill.total_amount_due}
                            </p>
                        </div>
                        </div>

                        <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>


                        <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>


                    </div>
                    </div>

                    <div className="mt-8 flex sm:justify-end">
                    <div className="w-full max-w-2xl sm:text-end space-y-2">
                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Amount:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                            ${bill.amount}
                            </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Previous Balance:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                            ${bill.previous_balance}
                            </dd>
                        </dl>


                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Amount paid:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                            ${bill.total_amount_due}
                            </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Payment Status:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                            {bill.payment_status}
                            </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Billing Period Start:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                            {bill.billing_period_start}
                            </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Billing Period End:
                            </dt>
                            <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                            {bill.billing_period_end}
                            </dd>
                        </dl>
                        </div>
                    </div>
                    </div>

                    <div className="mt-8 sm:mt-12">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Thank you!
                    </h4>
                    <p className="text-gray-500 dark:text-neutral-500">
                        If you have any questions concerning this invoice, use the
                        following contact information:
                    </p>
                    <div className="mt-2">
                        <p className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                        example@site.com
                        </p>
                        <p className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                        +1 (062) 109-9222
                        </p>
                    </div>
                    </div>

                    <p className="mt-5 text-sm text-gray-500 dark:text-neutral-500">
                    © 2024 Alx.
                    </p>
                </div>
                {/* downlaod pdf */}
                <div className="mt-6 flex justify-end gap-x-3">
                                <PDFDownloadLink
                                    document={<InvoicePDF bill={bill} user={user} />}
                                    fileName={`invoice-${bill.id}.pdf`}
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                >
                                    {({ blob, url, loading, error }) =>
                                        loading ? 'Loading document...' : (
                                            <>
                                                <svg
                                                    className="shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1="12" x2="12" y1="15" y2="3" />
                                                </svg>
                                                Invoice PDF
                                            </>
                                        )
                                    }
                                </PDFDownloadLink>
                                <button
                                    onClick={handlePrint}
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                >
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <rect width="12" height="8" x="6" y="14" />
                                </svg>
                                Print
                            </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
            </div>

      </AuthenticatedLayout>
    );
  };

  export default InvoiceComponent;
