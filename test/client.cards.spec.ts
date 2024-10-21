import {expect, describe, it} from 'vitest'

import {cardResponse, cardSet, cardsPage1, cardsPage2} from "./util/responses";
import {MockClient} from "./util/mock-client";
import {BrowserFetchClient} from "../src/client";
import {PokemonTcgApi} from "../src/api";

describe("The cards api", () => {

    it('should get a card  by id', async () => {
        let mockClient = new MockClient([cardResponse])

        const api = new PokemonTcgApi(mockClient);

        const card = await api.cards.get("xy1-1")

        expect(card.id).toBe("xy1-1")
        expect(mockClient.urls).toStrictEqual(["/v2/cards/xy1-1"])
    })

    it('should get all card cards', async () => {
        let mockClient = new MockClient([cardsPage1, cardsPage2])

        const api = new PokemonTcgApi(mockClient);

        const cards = await api.cards.list().all()

        expect(cards).toHaveLength(3)

        expect(mockClient.urls).toStrictEqual(["/v2/cards?pageSize=250&page=1", "/v2/cards?pageSize=250&page=2"])
    })

    it('should get a page of card cards', async () => {
        let mockClient = new MockClient([cardsPage2])

        const api = new PokemonTcgApi(mockClient);

        const cards = await api.cards.list().paged(2, 30)

        expect(cards).toHaveLength(1)
        expect(mockClient.urls).toStrictEqual(["/v2/cards?pageSize=30&page=2"])
    })


    it('should get card cards with a query', async () => {
        let mockClient = new MockClient([cardsPage1, cardsPage2])

        const api = new PokemonTcgApi(mockClient);


        const cards = await api.cards.list({where: "name:xy"}).all()

        expect(cards).toHaveLength(3)

        expect(mockClient.urls).toStrictEqual(["/v2/cards?q=name%3Axy&pageSize=250&page=1", "/v2/cards?q=name%3Axy&pageSize=250&page=2"])
    })

    it('should get all card cards with an order by clause', async () => {
        let mockClient = new MockClient([cardsPage1, cardsPage2])

        const api = new PokemonTcgApi(mockClient);

        const cards = await api.cards.list({order: "name"}).all()

        expect(cards).toHaveLength(3)
        expect(mockClient.urls).toStrictEqual(["/v2/cards?orderBy=name&pageSize=250&page=1", "/v2/cards?orderBy=name&pageSize=250&page=2"])
    })

    it('should get all card cards with a where and order by clause', async () => {
        let mockClient = new MockClient([cardsPage1, cardsPage2])

        const api = new PokemonTcgApi(mockClient);

        const cards = await api.cards.list({where: "name:xy", order: "name"}).all()

        expect(cards).toHaveLength(3)
        expect(mockClient.urls).toStrictEqual(["/v2/cards?q=name%3Axy&orderBy=name&pageSize=250&page=1", "/v2/cards?q=name%3Axy&orderBy=name&pageSize=250&page=2"])
    })

    it('should get paged card cards with a where and order by clause', async () => {
        let mockClient = new MockClient([cardsPage2])

        const api = new PokemonTcgApi(mockClient);

        const cards = await api.cards.list({where: "name:xy", order: "name"}).paged(2, 30)

        expect(cards).toHaveLength(1)
        expect(mockClient.urls).toStrictEqual(["/v2/cards?q=name%3Axy&orderBy=name&pageSize=30&page=2"])
    })
})

