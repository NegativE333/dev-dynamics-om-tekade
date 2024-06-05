import { DayWiseActivity } from "../types";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { SummaryCard } from "./SummaryCard";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
    data: DayWiseActivity[];
    developerName: string;
}

export const ActivityChart = ({
    data,
    developerName
}: Props) => {

    let name = developerName.split("@")[0];
    const index = name.indexOf(".");
    if(index !== -1){
        name = name.substring(0, 6);
    }
    name = name[0].toUpperCase() + name.substring(1);

    const labels = data.map((day) => (
        day.date
    ));

    const activities = data.reduce((a, day) => {
        day.items.children.forEach(item => {
            if (!a[item.label]) {
                a[item.label] = [];
            }
            a[item.label].push({ x: day.date, y: parseInt(item.count) })
        })
        return a;
    }, {} as Record<string, { x: string, y: number }[]>
    );

    const colors = new Map([
        ["PR Open", "rgba(239, 107, 107, 1)"],
        ["PR Merged", "rgba(97, 205, 187, 1)"],
        ["Commits", "rgba(250, 199, 110, 1)"],
        ["PR Reviewed", "rgba(194, 82, 139, 1)"],
        ["PR Comments", "rgba(3, 150, 166, 1)"],
        ["Incident Alerts", "rgba(95, 80, 169, 1)"],
        ["Incidents Resolved", "rgba(143, 53, 25, 1)"],
    ]);

    const backgroundColors = new Map([
        ["PR Open", "rgba(239, 107, 107, 0.2)"],
        ["PR Merged", "rgba(97, 205, 187, 0.2)"],
        ["Commits", "rgba(250, 199, 110, 0.2)"],
        ["PR Reviewed", "rgba(194, 82, 139, 0.2)"],
        ["PR Comments", "rgba(3, 150, 166, 0.2)"],
        ["Incident Alerts", "rgba(95, 80, 169, 0.2)"],
        ["Incidents Resolved", "rgba(143, 53, 25, 0.2)"],
    ]);

    const datasets = Object.keys(activities).map((key) => ({
        label: key,
        data: activities[key],
        borderColor: colors.get(key) || 'rgba(0, 0, 0, 1)',
        backgroundColor: backgroundColors.get(key) || 'rgba(0, 0, 0, 0.2)',
        fill: true,
    }));

    const chartData = {
        labels,
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `${name} Activity Over the Week`,
            },
        },
        scales: {
            x: {
                type: 'category' as const,
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Activity Count',
                },
            },
        },
    };

    return (
        <div className="flex w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] items-center lg:justify-between justify-center mx-8">
            <SummaryCard 
                developerName={developerName}
                activities={activities}
            />
            <div className="bg-white/90 rounded-lg shadow-sm lg:w-[72%] w-[100%]">
                <Line data={chartData} options={options} />
            </div>
        </div>
    )
}