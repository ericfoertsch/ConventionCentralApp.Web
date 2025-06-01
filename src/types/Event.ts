export interface Event {
    event_id: number,
    name: string,
    settings: EventSettings,
    metrics: EventMetrics
}

export interface EventSettings {
    vendor_cost: number
}

export interface EventMetrics {
    vendor_count: number,
    income: number
}