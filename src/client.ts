
export interface Client {
    responseFor<T>(url) : Promise<T>
}

export class BrowserFetchClient implements Client {

    private readonly apiKey?: string // TODO: Set this on the header
    private readonly baseUrl: string

    constructor(apiKey?: string, baseUrl?: string) {
        this.apiKey = apiKey
        this.baseUrl = baseUrl ? baseUrl : "https://api.pokemontcg.io"
    }

    async responseFor<T>(url: string) : Promise<T> {
        let response = await fetch(this.baseUrl + url, {
            headers: {
                "X-Api-Key" : this.apiKey
            }
        });
        return await response.json()
    }
}