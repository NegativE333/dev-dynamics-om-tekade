export type ActivityMeta = {
    label: string;
    fillColor: string;
}

export type ActivityItem = {
    name: string;
    value: string;
}

export type DayWiseActivityItem = {
    count: string;
    label: string;
    fillColor: string;
}

export type DayWiseActivity = {
    date: string;
    items: {
        children: DayWiseActivityItem[];
    };
}

export type DeveloperActivity = {
    name: string;
    totalActivity: ActivityItem[];
    dayWiseActivity: DayWiseActivity[];
}

export type Data = {
    AuthorWorklog: {
        activityMeta: ActivityMeta[];
        rows: DeveloperActivity[];
    };
}
