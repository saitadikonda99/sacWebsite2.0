import React, { useEffect, useState } from 'react';

const DepartmentWise = () => {
    const [departmentActivityCounts, setDepartmentActivityCounts] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({
        TEC: {},
        ESO: {},
        CLH: {},
        IIE: {},
        HWB: {},
    });

    useEffect(() => {
        // Fetch data from the registrations table (replace with your API endpoint)
        fetch('http://localhost:3001/api/registrations') // Replace with the actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                const newDepartmentActivityCounts = {};
                const newCategoryCounts = {
                    TEC: {},
                    ESO: {},
                    CLH: {},
                    IIE: {},
                    HWB: {},
                };

                data.forEach((row) => {
                    Object.keys(newCategoryCounts).forEach((category) => {
                        const activities = row[category]?.split(';').map((activity) => activity.trim()).filter(Boolean) || [];

                        activities.forEach((activity) => {
                            const parts = activity.split('-');
                            if (parts.length > 1) {
                                const department = parts[parts.length - 1].trim();
                                if (department.length <= 20) {
                                    // Use an associative array to ensure uniqueness of activities per department
                                    newDepartmentActivityCounts[department] = newDepartmentActivityCounts[department] || {};
                                    newDepartmentActivityCounts[department][activity] = true;

                                    // Increment the activity count for the category and department
                                    newCategoryCounts[category][department] = (newCategoryCounts[category][department] || 0) + 1;
                                }
                            }
                        });
                    });
                });

                setDepartmentActivityCounts(newDepartmentActivityCounts);
                setCategoryCounts(newCategoryCounts);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Registration Data</h1>

            <h2>Unique Activities Organized by Each Department</h2>
            {Object.keys(departmentActivityCounts).length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>TEC Activities</th>
                            <th>ESO Activities</th>
                            <th>CLH Activities</th>
                            <th>IIE Activities</th>
                            <th>HWB Activities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(departmentActivityCounts).map((department) => (
                            <tr key={department}>
                                <td>{department}</td>
                                <td>{categoryCounts.TEC[department] || 0}</td>
                                <td>{categoryCounts.ESO[department] || 0}</td>
                                <td>{categoryCounts.CLH[department] || 0}</td>
                                <td>{categoryCounts.IIE[department] || 0}</td>
                                <td>{categoryCounts.HWB[department] || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No unique activities found for any department.</p>
            )}
        </div>
    );
};

export default DepartmentWise;
