export let cardSet =   {
    data: {
        id: "swsh1",
        name: "Sword & Shield",
        series: "Sword & Shield",
        printedTotal: 202,
        total: 216,
        legalities: {
            unlimited: "Legal",
            expanded: "Legal"
        },
        ptcgoCode: "SSH",
        releaseDate: "2020/02/07",
        updatedAt: "2020/08/14 09:35:00",
        images: {
            symbol: "https://images.pokemontcg.io/swsh1/symbol.png",
            logo: "https://images.pokemontcg.io/swsh1/logo.png"
        }
    }
}

export let cardSetsPage1 = {
    data: [
        {
            id: "base1",
            name: "Base",
            series: "Base",
            printedTotal: 102,
            total: 102,
            legalities: {
                unlimited: "Legal"
            },
            ptcgoCode: "BS",
            releaseDate: "1999/01/09",
            updatedAt: "2022/10/10 15:12:00",
            images: {
                symbol: "https://images.pokemontcg.io/base1/symbol.png",
                logo: "https://images.pokemontcg.io/base1/logo.png"
            }
        },
        {
            id: "base2",
            name: "Jungle",
            series: "Base",
            printedTotal: 64,
            total: 64,
            legalities: {
                unlimited: "Legal"
            },
            ptcgoCode: "JU",
            releaseDate: "1999/06/16",
            updatedAt: "2020/08/14 09:35:00",
            images: {
                symbol: "https://images.pokemontcg.io/base2/symbol.png",
                logo: "https://images.pokemontcg.io/base2/logo.png"
            }
        }
    ],
    page: 1,
    pageSize: 2,
    count: 2,
    totalCount: 3
}


export let cardSetsPage2 = {
    data: [
        {
            id: "basep",
            name: "Wizards Black Star Promos",
            series: "Base",
            printedTotal: 53,
            total: 53,
            legalities: {
                unlimited: "Legal"
            },
            ptcgoCode: "PR",
            releaseDate: "1999/07/01",
            updatedAt: "2020/08/14 09:35:00",
            images: {
                symbol: "https://images.pokemontcg.io/basep/symbol.png",
                logo: "https://images.pokemontcg.io/basep/logo.png"
            }
        }
    ],
    page: 2,
    pageSize: 2,
    count: 1,
    totalCount: 3
}

export let cardResponse = {
    "data": {
        "id": "xy1-1",
        "name": "Venusaur-EX",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "EX"
        ],
        "hp": "180",
        "types": [
            "Grass"
        ],
        "evolvesTo": [
            "M Venusaur-EX"
        ],
        "rules": [
            "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
        ],
        "attacks": [
            {
                "name": "Poison Powder",
                "cost": [
                    "Grass",
                    "Colorless",
                    "Colorless"
                ],
                "convertedEnergyCost": 3,
                "damage": "60",
                "text": "Your opponent's Active Pokémon is now Poisoned."
            },
            {
                "name": "Jungle Hammer",
                "cost": [
                    "Grass",
                    "Grass",
                    "Colorless",
                    "Colorless"
                ],
                "convertedEnergyCost": 4,
                "damage": "90",
                "text": "Heal 30 damage from this Pokémon."
            }
        ],
        "weaknesses": [
            {
                "type": "Fire",
                "value": "×2"
            }
        ],
        "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 4,
        "set": {
            "id": "xy1",
            "name": "XY",
            "series": "XY",
            "printedTotal": 146,
            "total": 146,
            "legalities": {
                "unlimited": "Legal",
                "expanded": "Legal"
            },
            "ptcgoCode": "XY",
            "releaseDate": "2014/02/05",
            "updatedAt": "2018/03/04 10:35:00",
            "images": {
                "symbol": "https://images.pokemontcg.io/xy1/symbol.png",
                "logo": "https://images.pokemontcg.io/xy1/logo.png"
            }
        },
        "number": "1",
        "artist": "Eske Yoshinob",
        "rarity": "Rare Holo EX",
        "nationalPokedexNumbers": [
            3
        ],
        "legalities": {
            "unlimited": "Legal",
            "expanded": "Legal"
        },
        "images": {
            "small": "https://images.pokemontcg.io/xy1/1.png",
            "large": "https://images.pokemontcg.io/xy1/1_hires.png"
        },
        "tcgplayer": {
            "url": "https://prices.pokemontcg.io/tcgplayer/xy1-1",
            "updatedAt": "2021/07/09",
            "prices": {
                "holofoil": {
                    "low": 1.0,
                    "mid": 3.46,
                    "high": 12.95,
                    "market": 3.32,
                    "directLow": 2.95
                }
            }
        }
    }
}

export let cardsPage1 = {
    data: [
        {
            id: "hgss4-1",
            name: "Aggron",
            supertype: "Pokémon",
            subtypes: [
                "Stage 2"
            ],
            hp: "140",
            types: [
                "Metal"
            ],
            evolvesFrom: "Lairon",
            attacks: [
                {
                    name: "Second Strike",
                    cost: [
                        "Metal",
                        "Metal",
                        "Colorless"
                    ],
                    convertedEnergyCost: 3,
                    damage: "40",
                    text: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage."
                },
                {
                    name: "Guard Claw",
                    cost: [
                        "Metal",
                        "Metal",
                        "Colorless",
                        "Colorless"
                    ],
                    convertedEnergyCost: 4,
                    damage: "60",
                    text: "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance)."
                }
            ],
            weaknesses: [
                {
                    type: "Fire",
                    value: "×2"
                }
            ],
            resistances: [
                {
                    type: "Psychic",
                    value: "-20"
                }
            ],
            retreatCost: [
                "Colorless",
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            convertedRetreatCost: 4,
            set: {
                id: "hgss4",
                name: "HS—Triumphant",
                series: "HeartGold & SoulSilver",
                printedTotal: 102,
                total: 103,
                legalities: {
                    unlimited: "Legal"
                },
                ptcgoCode: "TM",
                releaseDate: "2010/11/03",
                updatedAt: "2018/03/04 10:35:00",
                images: {
                    symbol: "https://images.pokemontcg.io/hgss4/symbol.png",
                    logo: "https://images.pokemontcg.io/hgss4/logo.png"
                }
            },
            number: "1",
            artist: "Kagemaru Himeno",
            rarity: "Rare Holo",
            flavorText: "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.",
            nationalPokedexNumbers: [
                306
            ],
            legalities: {
                unlimited: "Legal"
            },
            images: {
                small: "https://images.pokemontcg.io/hgss4/1.png",
                large: "https://images.pokemontcg.io/hgss4/1_hires.png"
            },
            tcgplayer: {
                url: "https://prices.pokemontcg.io/tcgplayer/hgss4-1",
                updatedAt: "2024/10/21",
                prices: {
                    holofoil: {
                        low: 1.69,
                        mid: 2.97,
                        high: 4.04,
                        market: 3.15,
                        directLow: null
                    },
                    reverseHolofoil: {
                        low: 1.98,
                        mid: 2.43,
                        high: 4.8,
                        market: 2.4,
                        directLow: 3.1
                    }
                }
            },
            cardmarket: {
                url: "https://prices.pokemontcg.io/cardmarket/hgss4-1",
                updatedAt: "2024/10/21",
                prices: {
                    averageSellPrice: 2.69,
                    lowPrice: 0.15,
                    trendPrice: 2.14,
                    germanProLow: 0,
                    suggestedPrice: 0,
                    reverseHoloSell: 4.03,
                    reverseHoloLow: 0.8,
                    reverseHoloTrend: 3.78,
                    lowPriceExPlus: 0.79,
                    avg1: 9.98,
                    avg7: 3.14,
                    avg30: 2.71,
                    reverseHoloAvg1: 4.99,
                    reverseHoloAvg7: 4.27,
                    reverseHoloAvg30: 3.14
                }
            }
        },
        {
            id: "xy5-1",
            name: "Weedle",
            supertype: "Pokémon",
            subtypes: [
                "Basic"
            ],
            hp: "50",
            types: [
                "Grass"
            ],
            evolvesTo: [
                "Kakuna"
            ],
            attacks: [
                {
                    name: "Multiply",
                    cost: [
                        "Grass"
                    ],
                    convertedEnergyCost: 1,
                    damage: "",
                    text: "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward."
                }
            ],
            weaknesses: [
                {
                    type: "Fire",
                    value: "×2"
                }
            ],
            retreatCost: [
                "Colorless"
            ],
            convertedRetreatCost: 1,
            set: {
                id: "xy5",
                name: "Primal Clash",
                series: "XY",
                printedTotal: 160,
                total: 164,
                legalities: {
                    unlimited: "Legal",
                    expanded: "Legal"
                },
                ptcgoCode: "PRC",
                releaseDate: "2015/02/04",
                updatedAt: "2020/05/01 16:06:00",
                images: {
                    symbol: "https://images.pokemontcg.io/xy5/symbol.png",
                    logo: "https://images.pokemontcg.io/xy5/logo.png"
                }
            },
            number: "1",
            artist: "Midori Harada",
            rarity: "Common",
            flavorText: "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
            nationalPokedexNumbers: [
                13
            ],
            legalities: {
                unlimited: "Legal",
                expanded: "Legal"
            },
            images: {
                small: "https://images.pokemontcg.io/xy5/1.png",
                large: "https://images.pokemontcg.io/xy5/1_hires.png"
            },
            tcgplayer: {
                url: "https://prices.pokemontcg.io/tcgplayer/xy5-1",
                updatedAt: "2024/10/21",
                prices: {
                    normal: {
                        low: 0.03,
                        mid: 0.15,
                        high: 1.33,
                        market: 0.13,
                        directLow: null
                    },
                    reverseHolofoil: {
                        low: 0.24,
                        mid: 0.5,
                        high: 28.73,
                        market: 0.76,
                        directLow: 0.74
                    }
                }
            },
            cardmarket: {
                url: "https://prices.pokemontcg.io/cardmarket/xy5-1",
                updatedAt: "2024/10/21",
                prices: {
                    averageSellPrice: 0.18,
                    lowPrice: 0.02,
                    trendPrice: 0.11,
                    germanProLow: 0,
                    suggestedPrice: 0,
                    reverseHoloSell: 0.16,
                    reverseHoloLow: 0.14,
                    reverseHoloTrend: 0.47,
                    lowPriceExPlus: 0.02,
                    avg1: 0.05,
                    avg7: 0.16,
                    avg30: 0.11,
                    reverseHoloAvg1: 0.2,
                    reverseHoloAvg7: 0.41,
                    reverseHoloAvg30: 0.5
                }
            }
        },
    ],
    page: 1,
    pageSize: 2,
    count: 2,
    totalCount: 3
}


export let cardsPage2 = {
    data: [
        {
            id: "pl1-1",
            name: "Ampharos",
            supertype: "Pokémon",
            subtypes: [
                "Stage 2"
            ],
            level: "57",
            hp: "130",
            types: [
                "Lightning"
            ],
            evolvesFrom: "Flaaffy",
            abilities: [
                {
                    name: "Damage Bind",
                    text: "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
                    type: "Poké-Body"
                }
            ],
            attacks: [
                {
                    name: "Gigavolt",
                    cost: [
                        "Lightning",
                        "Colorless"
                    ],
                    convertedEnergyCost: 2,
                    damage: "30+",
                    text: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."
                },
                {
                    name: "Reflect Energy",
                    cost: [
                        "Lightning",
                        "Colorless",
                        "Colorless"
                    ],
                    convertedEnergyCost: 3,
                    damage: "70",
                    text: "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon."
                }
            ],
            weaknesses: [
                {
                    type: "Fighting",
                    value: "+30"
                }
            ],
            resistances: [
                {
                    type: "Metal",
                    value: "-20"
                }
            ],
            retreatCost: [
                "Colorless",
                "Colorless"
            ],
            convertedRetreatCost: 2,
            set: {
                id: "pl1",
                name: "Platinum",
                series: "Platinum",
                printedTotal: 127,
                total: 133,
                legalities: {
                    unlimited: "Legal"
                },
                ptcgoCode: "PL",
                releaseDate: "2009/02/11",
                updatedAt: "2020/08/14 09:35:00",
                images: {
                    symbol: "https://images.pokemontcg.io/pl1/symbol.png",
                    logo: "https://images.pokemontcg.io/pl1/logo.png"
                }
            },
            number: "1",
            artist: "Atsuko Nishida",
            rarity: "Rare Holo",
            nationalPokedexNumbers: [
                181
            ],
            legalities: {
                unlimited: "Legal"
            },
            images: {
                small: "https://images.pokemontcg.io/pl1/1.png",
                large: "https://images.pokemontcg.io/pl1/1_hires.png"
            },
            tcgplayer: {
                url: "https://prices.pokemontcg.io/tcgplayer/pl1-1",
                updatedAt: "2024/10/21",
                prices: {
                    holofoil: {
                        low: 3.75,
                        mid: 8,
                        high: 14.45,
                        market: 12.6,
                        directLow: null
                    },
                    reverseHolofoil: {
                        low: 3.72,
                        mid: 5.19,
                        high: 9.88,
                        market: 6.2,
                        directLow: null
                    }
                }
            },
            cardmarket: {
                url: "https://prices.pokemontcg.io/cardmarket/pl1-1",
                updatedAt: "2024/10/21",
                prices: {
                    averageSellPrice: 5.03,
                    lowPrice: 0.6,
                    trendPrice: 5.04,
                    germanProLow: 0,
                    suggestedPrice: 0,
                    reverseHoloSell: 3.61,
                    reverseHoloLow: 0.9,
                    reverseHoloTrend: 2.34,
                    lowPriceExPlus: 2,
                    avg1: 6.95,
                    avg7: 4.55,
                    avg30: 3.65,
                    reverseHoloAvg1: 1.95,
                    reverseHoloAvg7: 2.79,
                    reverseHoloAvg30: 2.98
                }
            }
        },
    ],
    page: 2,
    pageSize: 2,
    count: 1,
    totalCount: 3
}




