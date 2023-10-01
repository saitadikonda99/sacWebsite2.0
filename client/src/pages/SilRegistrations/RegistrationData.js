import React, { useEffect, useState } from 'react';

const RegistrationData = () => {
    const [categoryActivities, setCategoryActivities] = useState({
        ESO: [],
        TEC: [],
        CLH: [],
        IIE: [],
        HWB: [],
    });

    useEffect(() => {
        // Fetch data from the registrations table (replace with your API endpoint)
        fetch('http://localhost:3001/api/registrations') // Replace with the actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                const newCategoryActivities = { ...categoryActivities };

                data.forEach((row) => {
                    Object.keys(newCategoryActivities).forEach((category) => {
                        const activities = row[category]?.split(';').map((activity) => activity.trim()).filter(Boolean) || [];
                        activities.forEach((activity) => {
                            if (!newCategoryActivities[category].find((item) => item.activity === activity)) {
                                newCategoryActivities[category].push({ activity, count: 1 });
                            } else {
                                const index = newCategoryActivities[category].findIndex((item) => item.activity === activity);
                                newCategoryActivities[category][index].count += 1;
                            }
                        });
                    });
                });

                setCategoryActivities(newCategoryActivities);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Registration Data</h1>

            {Object.entries(categoryActivities).map(([category, activities]) => (
                <div key={category}>
                    <h2>{category} Activities</h2>
                    {activities.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activities.map((activity) => (
                                    <tr key={activity.activity}>
                                        <td>{activity.activity}</td>
                                        <td>{activity.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No data found for {category} Activities.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RegistrationData;
