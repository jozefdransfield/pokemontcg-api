import {Client} from "../../src/client";

export class MockClient implements Client {
    private readonly respondWith: any[]
    private count = 0
    public urls: string[] = []

    constructor(respondWith: any[]) {
        this.respondWith = respondWith
    }

    responseFor<T>(url: string): Promise<T> {
        this.urls.push(url)
        return Promise.resolve(this.respondWith[this.count++])
    }
}