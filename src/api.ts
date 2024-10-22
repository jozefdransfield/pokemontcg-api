import {ApiResponse, CardSet, PokemonCard} from "./types";
import {Client} from "./client";
import {lastValueFrom, Observable, Subject, toArray} from "rxjs";

export class PokemonTcgApi {
    private readonly client: Client

    constructor(client: Client) {
        this.client = client
    }

    public get sets(): Resource<CardSet> {
        return new Resource("sets", this.client)
    }

    public get cards(): Resource<PokemonCard> {
        return new Resource("cards", this.client)
    }

}

type ListOptions = {
    where?: string;
    order?: string;
}

class Resource<R> {
    private readonly url: string
    private readonly client: Client

    constructor(resource: string, client: Client) {
        this.url = "/v2/" + resource
        this.client = client
    }

    async get(id: string): Promise<R> {
        let response = await this.client.responseFor<ApiResponse<R>>(this.url + "/" + id)
        return response.data
    }

    list(options?: ListOptions): Query<R> {
        return new Query(this.url, this.client, options?.where, options?.order)
    }

}


class Query<R> {
    private readonly baseUrl: string
    private readonly client: Client
    private readonly whereClause: string
    private readonly orderBy: string

    constructor(baseUrl: string, client: Client, whereClause: string, orderBy: string) {
        this.baseUrl = baseUrl
        this.client = client
        this.whereClause = whereClause
        this.orderBy = orderBy
    }

    async all(): Promise<R[]> {
        return lastValueFrom(this.stream().pipe(toArray()))
    }

    stream(): Observable<R> {
        return new Observable<R>((subscriber) => {
            (async () => {
                let params = new URLSearchParams()

                this.addOptionalParams(params)
                params.append("pageSize", "250")

                let pageNumber = 1
                let pageSize = 0
                let count = 0

                do {
                    params.set("page", (pageNumber++).toString())
                    const response = await this.client.responseFor<ApiResponse<R[]>>(this.baseUrl + "?" + params.toString())
                    pageSize = response.pageSize
                    count = response.count
                    response.data.forEach((it) => {
                        subscriber.next(it)
                    })
                } while (pageSize == count)
                subscriber.complete()
            })()
        })
    }

    async paged(pageNumber: number, pageSize: number): Promise<R[]> {
        let params = new URLSearchParams()

        this.addOptionalParams(params)

        params.append("pageSize", pageSize.toString())
        params.append("page", pageNumber.toString())

        let response = await this.client.responseFor<ApiResponse<R[]>>(this.baseUrl + "?" + params.toString())

        return response.data
    }

    private addOptionalParams(params: URLSearchParams) {
        if (this.whereClause) {
            params.append("q", this.whereClause)
        }
        if (this.orderBy) {
            params.append("orderBy", this.orderBy)
        }
    }
}