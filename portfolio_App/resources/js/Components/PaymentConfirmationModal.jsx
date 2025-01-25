import React from 'react';

const PaymentConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-customWhite dark:bg-customGray dark:text-white text-black  rounded-lg shadow-lg p-6 w-full max-w-md" >
                <h2 className="text-lg font-bold mb-4">Confirm Payment</h2>
                <p>Are you sure you want to pay this bill?</p>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmationModal;
