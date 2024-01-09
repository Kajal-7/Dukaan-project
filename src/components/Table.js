import React from 'react'

function Table() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Order Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Order date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Order amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Transaction fees
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 10 }, (_, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #281209
                            </th>
                            <td className="px-6 py-4">
                                7 July, 2023
                            </td>
                            <td className="px-6 py-4">
                                ₹1278.23
                            </td>
                            <td className="px-6 py-4">
                                ₹22
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table