import { DayWiseActivity } from "../types"

type Props = {
    data: DayWiseActivity[];
    developerName: string;
}

export const ActivityChart = ({
    data,
    developerName
}: Props) => {

    const labels = data.map((day) => (
        day.date
    ));

    const activities = data.reduce((a, day) => {
        day.items.children.forEach(item => {
            if(!a[item.label]){
                a[item.label] = [];
            }
            a[item.label].push({x: day.date, y: parseInt(item.count)})
        })
        return a;
    }, {} as Record<string, {x: string, y: number}[]>
    );

    return(
        <div className="flex items-center justify-center w-[90%] md:w-[75%] lg:w-[45%] bg-white/90 rounded-lg shadow-sm">
            <div>
                {developerName}
            </div>
        </div>
    )
}