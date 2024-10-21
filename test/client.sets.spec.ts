import {expect, describe, it} from 'vitest'

import {PokemonTcgApi} from "../src/api";
import {cardSet, cardSetsPage1, cardSetsPage2} from "./util/responses";
import {MockClient} from "./util/mock-client";

describe("The sets api", () => {

    it('should get a card set by id', async () => {
        let mockClient = new MockClient([cardSet])

        const api = new PokemonTcgApi(mockClient);

        const set = await api.sets.get("swsh1")

        expect(set.id).toBe("swsh1")
        expect(mockClient.urls).toStrictEqual(["/v2/sets/swsh1"])
    })

    it('should get all card sets', async () => {
        let mockClient = new MockClient([cardSetsPage1, cardSetsPage2])

        const api = new PokemonTcgApi(mockClient);

        const sets = await api.sets.list().all()

        expect(sets).toHaveLength(3)

        expect(mockClient.urls).toStrictEqual(["/v2/sets?pageSize=250&page=1", "/v2/sets?pageSize=250&page=2"])
    })

    it('should get a page of card sets', async () => {
        let mockClient = new MockClient([cardSetsPage2])

        const api = new PokemonTcgApi(mockClient);

        const sets = await api.sets.list().paged(2, 30)

        expect(sets).toHaveLength(1)
        expect(mockClient.urls).toStrictEqual(["/v2/sets?pageSize=30&page=2"])
    })


    it('should get card sets with a query', async () => {
        let mockClient = new MockClient([cardSetsPage1, cardSetsPage2])

        const api = new PokemonTcgApi(mockClient);


        const sets = await api.sets.list({where: "name:xy"}).all()

        expect(sets).toHaveLength(3)

        expect(mockClient.urls).toStrictEqual(["/v2/sets?q=name%3Axy&pageSize=250&page=1", "/v2/sets?q=name%3Axy&pageSize=250&page=2"])
    })

    it('should get all card sets with an order by clause', async () => {
        let mockClient = new MockClient([cardSetsPage1, cardSetsPage2])

        const api = new PokemonTcgApi(mockClient);

        const sets = await api.sets.list({order: "name"}).all()

        expect(sets).toHaveLength(3)
        expect(mockClient.urls).toStrictEqual(["/v2/sets?orderBy=name&pageSize=250&page=1", "/v2/sets?orderBy=name&pageSize=250&page=2"])
    })

    it('should get all card sets with a where and order by clause', async () => {
        let mockClient = new MockClient([cardSetsPage1, cardSetsPage2])

        const api = new PokemonTcgApi(mockClient);

        const sets = await api.sets.list({where: "name:xy", order: "name"}).all()

        expect(sets).toHaveLength(3)
        expect(mockClient.urls).toStrictEqual(["/v2/sets?q=name%3Axy&orderBy=name&pageSize=250&page=1", "/v2/sets?q=name%3Axy&orderBy=name&pageSize=250&page=2"])
    })

    it('should get paged card sets with a where and order by clause', async () => {
        let mockClient = new MockClient([cardSetsPage2])

        const api = new PokemonTcgApi(mockClient);

        const sets = await api.sets.list({where: "name:xy", order: "name"}).paged(2, 30)

        expect(sets).toHaveLength(1)
        expect(mockClient.urls).toStrictEqual(["/v2/sets?q=name%3Axy&orderBy=name&pageSize=30&page=2"])
    })
})

