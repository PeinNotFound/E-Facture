import React, { useState } from 'react';
import { Link, Head, usePage, useRemember } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';

export default function PrivacyPolicy({auth}) {
    return(
    <AuthenticatedLayout user={auth.user}>
        <Head title="Bill details" />
        <div className="bg-primary text-gray-300 min-h-screen py-10 px-6">
            <div className="max-w-4xl mx-auto bg-secondary rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                <p className="leading-relaxed">
                    Welcome to My Portfolio Project. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                    <strong>Personal Information:</strong> We collect personal data such as your name, email address, phone number, and payment details when you register or make payments on our platform.
                    </li>
                    <li>
                    <strong>Usage Data:</strong> We collect data about how you interact with our website, such as your IP address, browser type, pages visited, and time spent on our platform.
                    </li>
                    <li>
                    <strong>Cookies:</strong> We use cookies to enhance your experience, remember your preferences, and track your activity on our website.
                    </li>
                </ul>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                    <strong>To Provide Services:</strong> We use your information to process payments, manage your account, and provide customer support.
                    </li>
                    <li>
                    <strong>To Improve Our Platform:</strong> We analyze usage data to enhance the functionality, security, and user experience of our website.
                    </li>
                    <li>
                    <strong>To Communicate with You:</strong> We may send you updates, promotional materials, and notifications about your account.
                    </li>
                </ul>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">How We Protect Your Information</h2>
                <p className="leading-relaxed">
                    We implement robust security measures, including encryption and secure servers, to protect your personal data from unauthorized access, disclosure, or alteration.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <p className="leading-relaxed">
                    You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request that we restrict its use. To exercise these rights, please contact us at <a href="mailto:ahmed0hmimida@gmail.com" className="text-blue-500">ahmed0hmimida@gmail.com</a>.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the "Last updated" date below.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                    If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:ahmed0hmimida@gmail.com" className="text-blue-500">ahmed0hmimida@gmail.com</a>.
                </p>
                </section>

                <div className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
                </div>
            </div>
            </div>

    </AuthenticatedLayout>
)}
