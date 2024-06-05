
type Props = {
    onFilterChange: (filter: string) => void;
    currFilter: string;
}

export const Filter = ({
    onFilterChange,
    currFilter
}: Props) => {

    const isActive = true;

    return(
        <div className="flex flex-wrap gap-2 my-8 items-center justify-center lg:w-[70%]">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("all")
                }} 
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "all" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                All
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("7 Days")
                }} 
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "7 Days" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                7 Days
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("PR Open")
                }} 
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "PR Open" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                PR Open
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("PR Merged")
                }} 
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "PR Merged" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                PR Merged
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("Commits")
                }} 
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "Commits" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                Commits
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("PR Reviewed")
                }} 
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "PR Reviewed" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                PR Reviewed
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("PR Comments")
                }}
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "PR Comments" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                PR Comments
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("Incident Alerts")
                }}
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "Incident Alerts" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                Incident Alerts
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterChange("Incidents Resolved")
                }}
                className={`px-4 py-1 border-2 rounded-2xl transition ${currFilter === "Incidents Resolved" ? 'border-blue-400 bg-blue-400/20 text-blue-900' : ""}`}
            >
                Incidents Resolved
            </button>
        </div>
    )
}