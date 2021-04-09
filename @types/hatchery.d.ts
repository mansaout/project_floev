interface Hatchery {
    deviceId: string
    userId: string | null
    hatcheryId: string
    status: string
    currentSessionId: number
    birth: number | null
    gender: string | null
    name: string | null
    phoneNumber: string | null
}

interface HatcheryEvent {
    sessionId: number
    eventId: number
    eventName: string
    eventTimestamp: string
    status: string
}

interface Utm {
    utm_source: string
    utm_
}

interface PostData {
    hatchery: Hatchery
    event: HatcheryEvent
    device: any
    // ipAddress: string
}