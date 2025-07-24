import { util } from "../../utils/util";
import { Main, type PartialMapDef } from "./baseDefs";
import { v2 } from "../../utils/v2";

const mapDef: PartialMapDef = {
    assets: {
        audio: [
            { name: "club_music_01", channel: "ambient" },
            { name: "club_music_02", channel: "ambient" },
            {
                name: "ambient_steam_01",
                channel: "ambient",
            },
            { name: "cluck_01", channel: "sfx" },
            { name: "cluck_02", channel: "sfx" },
            { name: "feather_01", channel: "sfx" },
            { name: "xp_pickup_01", channel: "ui" },
            { name: "xp_pickup_02", channel: "ui" },
            { name: "xp_drop_01", channel: "sfx" },
            { name: "xp_drop_02", channel: "sfx" },
            { name: "pumpkin_break_01", channel: "sfx" },
        ],
    },
    mapGen: {
            map: {
                baseWidth: 512,
                baseHeight: 512,
                scale: { small: 1.1875, large: 1.28125 },
                extension: 112,
                shoreInset: 48,
                grassInset: 18,
                rivers: {
                    lakes: [],
                    weights: [
                        { weight: 0.1, widths: [4] },
                        { weight: 0.15, widths: [8] },
                        { weight: 0.25, widths: [8, 4] },
                        { weight: 0.21, widths: [16] },
                        { weight: 0.09, widths: [16, 8] },
                        { weight: 0.2, widths: [16, 8, 4] },
                        {
                            weight: 1e-4,
                            widths: [16, 16, 8, 6, 4],
                        },
                    ],
                    smoothness: 0.45,
                    spawnCabins: true,
                    masks: [],
                },
            },
            places: [
                {
                    name: "The Killpit",
                    pos: v2.create(0.53, 0.64),
                },
                {
                    name: "Sweatbath",
                    pos: v2.create(0.84, 0.18),
                },
                {
                    name: "Tarkhany",
                    pos: v2.create(0.15, 0.11),
                },
                {
                    name: "Ytyk-Kyuyol",
                    pos: v2.create(0.25, 0.42),
                },
                {
                    name: "Todesfelde",
                    pos: v2.create(0.81, 0.85),
                },
                {
                    name: "Pineapple",
                    pos: v2.create(0.21, 0.79),
                },
                {
                    name: "Fowl Forest",
                    pos: v2.create(0.73, 0.47),
                },
                {
                    name: "Ranchito Pollo",
                    pos: v2.create(0.53, 0.25),
                },
            ],
            bridgeTypes: {
                medium: "bridge_md_structure_01",
                large: "bridge_lg_structure_01",
                xlarge: "",
            },
            customSpawnRules: {
                locationSpawns: [
                    {
                        type: "club_complex_01",
                        pos: v2.create(0.5, 0.5),
                        rad: 150,
                        retryOnFailure: true,
                    },
                ],
                placeSpawns: ["warehouse_01", "house_red_01", "house_red_02", "barn_01"],
            },
            densitySpawns: [
                {
                    stone_01: 350,
                    barrel_01: 76,
                    silo_01: 8,
                    crate_01: 50,
                    crate_02: 4,
                    crate_03: 8,
                    bush_01: 78,
                    cache_06: 12,
                    tree_01: 320,
                    hedgehog_01: 24,
                    container_01: 5,
                    container_02: 5,
                    container_03: 5,
                    container_04: 5,
                    shack_01: 7,
                    outhouse_01: 5,
                    loot_tier_1: 24,
                    loot_tier_beach: 4,
                },
            ],
            fixedSpawns: [
                {
                    // small is spawn count for solos and duos, large is spawn count for squads
                    warehouse_01: 2,
                    house_red_01: { small: 3, large: 4 },
                    house_red_02: { small: 3, large: 4 },
                    barn_01: { small: 1, large: 3 },
                    barn_02: 1,
                    hut_01: 3,
                    hut_02: 1, // spas hut
                    hut_03: 1, // scout hut
                    shack_03a: 2,
                    shack_03b: { small: 2, large: 3 },
                    greenhouse_01: 1,
                    cache_01: 1,
                    cache_02: 1, // mosin tree
                    cache_07: 1,
                    bunker_structure_01: { odds: 0.05 },
                    bunker_structure_02: 1,
                    bunker_structure_03: 1,
                    bunker_structure_04: 1,
                    bunker_structure_05: 1,
                    warehouse_complex_01: 1,
                    chest_01: 1,
                    chest_03: { odds: 0.2 },
                    mil_crate_02: { odds: 0.25 },
                    tree_02: 3,
                    teahouse_complex_01su: {
                        small: 1,
                        large: 2,
                    },
                    stone_04: 1,
                    club_complex_01: 1,
                    squash_01: 80,
                },
            ],
            randomSpawns: [
                {
                    spawns: ["mansion_structure_01", "police_01", "bank_01"],
                    choose: 2,
                },
            ],
            spawnReplacements: [{}],
            importantSpawns: ["club_complex_01"],
        },
    /* STRIP_FROM_PROD_CLIENT:END */
    gameMode: { turkeyMode: 1 },
};

export const Turkey = util.mergeDeep({}, Main, mapDef);
