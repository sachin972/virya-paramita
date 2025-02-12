import { motion } from "framer-motion";

const EnergyTable = () => {
    const columns = [
        "Energy Sources",
        "Thermal Energy",
        "Hydroelectric Energy",
        "Solar Energy",
        "Wind Energy",
        "Wave Energy",
        "Hydrogen Energy",
    ];

    const rows = [
        {
            title: "Indicative PPA",
            values: [
                "Medium ($0.08-0.1/Units)",
                "Medium ($0.05/Units)",
                "Low ($0.04/Units)",
                "Medium ($0.06/Units)",
                "Medium ($0.09-0.1/Units)",
                "High ($0.1-0.2/Units)",
            ],
        },
        {
            title: "Material & Infra Cost",
            values: [
                "Medium ($875K/MW)",
                "Medium ($1 Mn/MW)",
                "Low ($625K/MW)",
                "Medium ($1.25 Mn/MW)",
                "Medium ($1-1.25 Mn/MW)",
                "High ($4 Mn/MW)",
            ],
        },
        {
            title: "Operation & Maintenance Cost",
            values: [
                "Medium ($50K/MW/year)",
                "Medium ($38K/MW/year)",
                "Low ($13K/MW/year)",
                "Medium ($50K/MW/year)",
                "Medium ($38K/MW/year)",
                "High ($2.5 Mn/MW/year)",
            ],
        },
        {
            title: "Land Requirement",
            values: [
                "Medium (0.75 acres/MW)",
                "Medium (0.265 acres/MW)",
                "High (4 acres/MW)",
                "High (5 acres/MW)",
                "Low (Minimal)",
                "Medium (0.75 acres/MW)",
            ],
        },
        {
            title: "Impact on Ecology & Local Population",
            values: ["High", "High", "Medium", "Medium", "Low", "High"],
        },
    ];

    return (
        <div className="p-4 overflow-x-auto">
            <motion.table
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full border-collapse shadow-lg"
            >
                <thead>
                    <tr className="bg-blue-500 text-black text-lg">
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className={`px-4 py-2 ${
                                    index === 5 ? "bg-blue-900" : ""
                                }`}
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <motion.tr
                            key={rowIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: rowIndex * 0.2,
                            }}
                            className="border-b"
                        >
                            <td className="px-4 py-2 font-semibold bg-blue-200 text-black">
                                {row.title}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`px-4 py-2 text-cente ${
                                        colIndex === 4
                                            ? "bg-blue-900 font-bold shadow-md text-white"
                                            : "bg-white text-gray-400"
                                    }`}
                                >
                                    {value}
                                </td>
                            ))}
                        </motion.tr>
                    ))}
                </tbody>
            </motion.table>
            <p className="mt-3 text-gray-600 text-sm italic">
                *Expected to go down with further research.
                <br />
                *Feasibility of setting up Hybrid plants i.e. Wind + Wave Energy
                & Green Hydrogen + Wave Energy are being explored.
            </p>
        </div>
    );
};

export default EnergyTable;
