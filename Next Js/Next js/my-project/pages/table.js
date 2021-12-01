
function table() {
    return (
        <div className="container mx-auto mt-8">
        <div className="flex justify-center">
            <table className="border-collapse border border-green-800 w-80 ">
                <thead className="w-64">
                    <tr>
                    <th className="border border-green-600 w-1/3">State</th>
                    <th className="border border-green-600 w-1/2">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-green-600">Indiana</td>
                    <td className="border border-green-600">Indianapolis</td>
                    </tr>
                    <tr>
                    <td className="border border-green-600">Ohio</td>
                    <td className="border border-green-600">Columbus</td>
                    </tr>
                    <tr>
                    <td className="border border-green-600">Michigan</td>
                    <td className="border border-green-600">Detroit</td>
                    </tr>
                </tbody>
            </table>

        </div>
        
        <div className="flex justify-center mt-8">
            <button className="rounded bg-blue-500 p-2 text-white transition transform hover:-translate-y-1 transition transform ease-in-out">Click Me!</button>
        </div>
        </div>
    )
}

export default table
