export type CardSetLegalities = {
    unlimited: string
    expanded: string
}

export type CardSetImages = {
    symbol: string
    logo: string
}

export type CardSet = {
    id: string
    name: string
    series: string
    printedTotal: number
    total: number
    legalities: CardSetLegalities
    releaseDate: string
    updatedAt: string
    images: CardSetImages
}

export type PokemonCardAbilities = {
    name: string
    text: string
    type: string
}

export enum PokemonCardType {
    Colorless = "Colorless",
    Darkness = "Darkness",
    Dragon = "Dragon",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Grass = "Grass",
    Lightning = "Lightning",
    Metal = "Metal",
    Psychic = "Psychic",
    Water = "Water",
}

export type PokemonCardAttacks = {
    name: string
    cost: PokemonCardType[]
    convertedEnergyCost: number
    damage: string
    text: string
}

export type PokemonCardWeaknesses = {
    type: PokemonCardType
    value: string
}

export type PokemonCardLegalities = {
    unlimited: string
    standard: string
    expanded: string //enums?
}

export type PokemonCardImages = {
    small: string
    large: string
}

export type TCGPlayerPriceRange = {
    low: number
    mid: number
    high: number
    directLow: number
}

export type TCGPlayerPrices = {
    normal: TCGPlayerPriceRange
    reverseHolofoil: TCGPlayerPriceRange
}

export type TCGPlayerData = {
    url: string
    updatedAt: string
    prices: TCGPlayerPrices
}

export type CardMarketPrices = {
    averageSellPrice: number
    lowPrice: number
    trendPrice: number
    germanProLow: number
    suggestedPrice: number
    reverseHoloSell: number
    reverseHoloLow: number
    reverseHoloTrend: number
    lowPriceExPlus: number
    avg1: number
    avg7: number
    avg30: number
    reverseHoloAvg1: number
    reverseHoloAvg7: number
    reverseHoloAvg30: number
}

export type CardMarketData = {
    url: string
    updatedAt: string
    prices: CardMarketPrices
}

export type PokemonCard = {
    id: string
    name: string
    supertype: string
    images: PokemonCardImages
    subtype: string[]
    subtypes: string[]
    hp: string
    types: PokemonCardType[]
    evolvesFrom: string
    abilities: PokemonCardAbilities[]
    attacks: PokemonCardAttacks[]
    weaknesses: PokemonCardWeaknesses[]
    retreatCost: PokemonCardType[]
    convertedRetreatCost: number
    set: CardSet
    number: string
    artist: string
    rarity: string
    flavorText: string
    nationalPokedexNumbers: number[]
    legalities: PokemonCardLegalities
    tcgplayer: TCGPlayerData
    cardmarket: CardMarketData
}

export type ApiResponse<T> = {
    data: T;
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
}