

type Props = {
    developerName: string;
    activities: Record<string, { x: string, y: number }[]>;
}

export const SummaryCard = ({
    developerName,
    activities
}: Props) => {

    let prOpen = 0;
    let prMerged = 0;
    let commits = 0;
    let prReviewed = 0;
    let prCommits = 0;
    let incidentAlerts = 0;
    let incidentsResolved = 0;

    if(activities["PR Open"]) activities["PR Open"].forEach((i) => prOpen += i.y);

    if(activities["PR Merged"]) activities["PR Merged"].forEach((i) => prMerged += i.y);

    if(activities["Commits"]) activities["Commits"].forEach((i) => commits += i.y);

    if(activities["PR Reviewed"]) activities["PR Reviewed"].forEach((i) => prReviewed += i.y);

    if(activities["PR Comments"]) activities["PR Comments"].forEach((i) => prCommits += i.y);
    
    if(activities["Incident Alerts"]) activities["Incident Alerts"].forEach((i) => incidentAlerts += i.y);
    
    if(activities["Incidents Resolved"]) activities["Incidents Resolved"].forEach((i) => incidentsResolved += i.y);

    return(
        <div className="hidden lg:flex flex-col bg-white/90 lg:w-[25%] p-4 rounded-md shadow-sm">
                <h3 className="w-full font-semibold">
                    {developerName}
                </h3>
                <hr className="my-2"/>
                <ul className="flex flex-col gap-1">
                    <li className="flex">
                        PR Open 
                        <p className="ml-auto text-blue-600">
                            {prOpen}
                        </p>
                    </li>
                    <li className="flex">
                        PR Merged
                        <p className="ml-auto text-blue-600">
                            {prMerged}
                        </p>
                    </li>
                    <li className="flex">
                        Commits 
                        <p className="ml-auto text-blue-600">
                            {commits}
                        </p>
                    </li>
                    <li className="flex">
                        PR Reviewed 
                        <p className="ml-auto text-blue-600">
                            {prReviewed}
                        </p>
                    </li>
                    <li className="flex">
                        PR Comments 
                        <p className="ml-auto text-blue-600">
                            {prCommits}
                        </p>
                    </li>
                    <li className="flex">
                        Incident Alerts 
                        <p className="ml-auto text-blue-600">
                            {incidentAlerts}
                        </p>
                    </li>
                    <li className="flex">
                        Incidents Resolved 
                        <p className="ml-auto text-blue-600">
                            {incidentsResolved}
                        </p>
                    </li>
                </ul>
            </div>
    )
}