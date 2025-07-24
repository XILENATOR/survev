import { GameConfig } from "../../gameConfig";
import { v2 } from "../../utils/v2";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";
import { util } from "../../utils/util";

// @NOTE: Entries defined as single-element arrays, like fixedSpawns: [{ }],
// are done this way so that util.mergeDeep(...) will function as expected
// when used by derivative maps.
//
// Arrays are not mergeable, so the derived map will always redefine all
// elements if that property is set.

const mapDef: PartialMapDef = {
    desc: { name: "Cursed", icon: "img/gui/skull.svg", buttonCss: "btn-mode-cursed" },
    assets: {
        audio: [
            { name: "club_music_01", channel: "ambient" },
            { name: "club_music_02", channel: "ambient" },
            { name: "ambient_steam_01", channel: "ambient" },
            { name: "log_11", channel: "sfx" },
            { name: "log_12", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
            { name: "log_15", channel: "sfx" },
            { name: "howl_01", channel: "sfx" },
            { name: "wheel_control_01", channel: "sfx" },
            { name: "cell_control_03", channel: "sfx" },
            { name: "last_man_assigned_01", channel: "ui" },
            { name: "trick_01", channel: "ui" },
            { name: "trick_02", channel: "ui" },
            { name: "trick_03", channel: "ui" },
            { name: "ping_unlock_01", channel: "ui" },
        ],
        atlases: ["gradient", "loadout", "shared", "main", "desert", "savannah", "potato", "faction", "cobalt", "halloween", "snow", "woods"],
    },
    biome: {
        colors: {
            background: 0x170000,
            water: 465718,
            waterRipple: 11792639,
            beach: 0x64410e,
            riverbank: 0x3c1b05,
            grass: 0x212404,
            underground: 0x120801,
            playerSubmerge: 1192009,
            playerGhillie: 5005348,
        },
        valueAdjust: 1,
        sound: { riverShore: "sand" },
        particles: { camera: "" },
        tracerColors: {},
        airdrop: {
            planeImg: "map-plane-01.img",
            planeSound: "plane_01",
            airdropImg: "map-chute-01.img",
        },
    },
    gameMode: {
        maxPlayers: 80,
        potatoMode: true,
        sniperMode: true,
        killLeaderEnabled: true,
    },
    gameConfig: {
        planes: {
            timings: [
                {
                    circleIdx: 1,
                    wait: 10,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 3,
                    wait: 2,
                    options: { type: GameConfig.Plane.Airdrop },
                },
            ],
            crates: [
                { name: "airdrop_crate_fake", weight: 10 },
                { name: "airdrop_crate_02sv", weight: 1 },
                /*{ name: "wheel_01", weight: 1 },*/
            ],
        },
        unlocks: {
            timings: [
                {
                    type: "bunker_twins_sublevel_01",
                    stagger: 0.2,
                    circleIdx: 2,
                    wait: 5,
                },
            ],
        },
        bagSizes: {},
        bleedDamage: 2,
        bleedDamageMult: 1,
    },
    lootTable: {
        tier_world: [
            { name: "tier_guns", count: 1, weight: 0.29 }, // TODO get more data on this from original
            { name: "tier_ammo", count: 1, weight: 0.04 }, // ?
            { name: "tier_scopes", count: 1, weight: 0.15 }, // ?
            { name: "tier_armor", count: 1, weight: 0.1 }, // ?
            { name: "tier_medical", count: 1, weight: 0.17 }, // ?
            { name: "tier_throwables", count: 1, weight: 0.05 }, // ?
            { name: "tier_packs", count: 1, weight: 0.09 }, // ?
        ],
        tier_surviv: [
            { name: "tier_scopes", count: 1, weight: 0.15 }, // TODO get more data on this from original
            { name: "tier_armor", count: 1, weight: 0.1 }, // ?
            { name: "tier_medical", count: 1, weight: 0.17 }, // ?
            { name: "tier_throwables", count: 1, weight: 0.05 }, // ?
            { name: "tier_packs", count: 1, weight: 0.09 }, // ?
        ],
        tier_container: [
            { name: "tier_guns", count: 1, weight: 0.29 },
            { name: "tier_ammo", count: 1, weight: 0.04 },
            { name: "tier_scopes", count: 1, weight: 0.15 },
            { name: "tier_armor", count: 1, weight: 0.1 },
            { name: "tier_medical", count: 1, weight: 0.17 },
            { name: "tier_throwables", count: 1, weight: 0.05 },
            { name: "tier_packs", count: 1, weight: 0.09 },
            { name: "tier_outfits", count: 1, weight: 0.035 }, // !
        ],
        tier_leaf_pile: [
            { name: "tier_ammo", count: 1, weight: 0.2 },
            { name: "tier_scopes", count: 1, weight: 0.2 },
            { name: "tier_armor", count: 1, weight: 0.2 },
            { name: "tier_medical", count: 1, weight: 0.2 },
            { name: "tier_throwables", count: 1, weight: 0.15 },
            { name: "tier_packs", count: 1, weight: 0.05 },
        ],
        tier_soviet: [
            { name: "tier_guns", count: 1, weight: 3 }, // ?
            { name: "tier_armor", count: 1, weight: 2 }, // ?
            { name: "tier_packs", count: 1, weight: 1 }, // ?
        ],
        tier_toilet: [
            { name: "tier_guns", count: 1, weight: 0.1 },
            { name: "tier_scopes", count: 1, weight: 0.05 },
            { name: "tier_medical", count: 1, weight: 0.6 },
            { name: "tier_throwables", count: 1, weight: 0.05 },
            { name: "tier_outfits", count: 1, weight: 0.025 }, // !
        ],
        tier_scopes: [
            { name: "2xscope", count: 1, weight: 0.02 },
            { name: "4xscope", count: 1, weight: 1 },
            { name: "8xscope", count: 1, weight: 5 },
            { name: "15xscope", count: 1, weight: 24 },
        ],
        tier_armor: [
            { name: "helmet01", count: 1, weight: 5 }, // !
            { name: "helmet02", count: 1, weight: 2 },
            { name: "helmet03", count: 1, weight: 1 },
            { name: "helmet04_last_man_red", count: 1, weight: 0.15 },
            { name: "chest01", count: 1, weight: 11 }, // !
            { name: "chest02", count: 1, weight: 2 },
            { name: "chest03", count: 1, weight: 1 },
        ],
        tier_packs: [
            { name: "backpack01", count: 1, weight: 15 }, // !
            { name: "backpack02", count: 1, weight: 6 },
            { name: "backpack03", count: 1, weight: 0.2 },
        ],
        tier_medical: [
            { name: "bandage", count: 5, weight: 16 },
            { name: "healthkit", count: 1, weight: 4 },
            { name: "soda", count: 1, weight: 15 },
            { name: "painkiller", count: 1, weight: 5 },
        ],
        tier_throwables: [
            { name: "frag", count: 2, weight: 10 },
            { name: "smoke", count: 1, weight: 10 },
            { name: "mirv", count: 2, weight: 8 },
            { name: "strobe", count: 2, weight: 6 },
            { name: "mirv_ultra", count: 2, weight: 3 },
            { name: "fireworks", count: 2, weight: 1 },
        ],
        tier_ammo: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "50AE", count: 7, weight: 1 },
            { name: "308sub", count: 2, weight: 1 },
            { name: "flare", count: 1, weight: 1 },
            { name: "40mm", count: 2, weight: 1 },
        ],
        tier_ammo_crate: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "50AE", count: 21, weight: 1 },
            { name: "308sub", count: 5, weight: 1 },
            { name: "flare", count: 1, weight: 1 },
            { name: "40mm", count: 5, weight: 1 },
        ],
        tier_vending_soda: [
            { name: "soda", count: 1, weight: 1 }, // ?
            { name: "tier_ammo", count: 1, weight: 1 }, // ?
        ],
        tier_sv98: [{ name: "sv98", count: 1, weight: 1 }],
        tier_scopes_sniper: [
            { name: "4xscope", count: 1, weight: 0.02 },
            { name: "8xscope", count: 1, weight: 1 },
            { name: "15xscope", count: 1, weight: 5 },
        ],
        tier_chrys_03: [
            { name: "2xscope", count: 1, weight: 0.1 },
            { name: "4xscope", count: 1, weight: 0.1 },
            { name: "8xscope", count: 1, weight: 0.1 },
            { name: "15xscope", count: 1, weight: 5 },
        ],
        tier_chrys_case: [
            { name: "", count: 1, weight: 5 },
            { name: "tier_katanas", count: 1, weight: 3 },
            { name: "naginata", count: 1, weight: 1 },
            { name: "crowbar_garry", count: 1, weight: 1 },
        ],
        tier_eye_block: [
            { name: "trick_nothing", count: 1, weight: 1 },
        ],
        tier_sledgehammer: [{ name: "sledgehammer", count: 1, weight: 1 }],
        tier_chest_04: [
            { name: "p30l_dual", count: 1, weight: 40 },
            { name: "m9_super", count: 1, weight: 1 },
        ],
        tier_woodaxe: [{ name: "trick_nothing", count: 1, weight: 1 }],
        tier_club_melee: [{ name: "m9_cursed", count: 1, weight: 1 }],
        tier_guns: [
            { name: "famas", count: 1, weight: 5 },
            { name: "hk416", count: 1, weight: 6 },
            { name: "mk12", count: 1, weight: 1 },
            { name: "m134", count: 1, weight: 0.4 },
            { name: "pkp", count: 1, weight: 0.5 },
            { name: "m249", count: 1, weight: 0.6 },
            { name: "ak47", count: 1, weight: 4.7 },
            { name: "scar", count: 1, weight: 0.1 },
            { name: "dp28", count: 1, weight: 0.528 },
            { name: "mosin", count: 1, weight: 1 },
            { name: "m39", count: 1, weight: 1.1 },
            { name: "mp5", count: 1, weight: 12 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "ump9", count: 1, weight: 3 },
            { name: "m870", count: 1, weight: 9 },
            { name: "m1100", count: 1, weight: 3 },
            { name: "mp220", count: 1, weight: 4 },
            { name: "saiga", count: 1, weight: 0.1 },
            { name: "ot38", count: 1, weight: 4 },
            { name: "awc", count: 1, weight: 19 },
            { name: "m93r", count: 1, weight: 0.99 },
            { name: "glock", count: 1, weight: 1.01 },
            { name: "deagle", count: 1, weight: 0.288 },
            { name: "vector", count: 1, weight: 0.01736104 },
            { name: "sv98", count: 1, weight: 0.69 },
            { name: "spas12", count: 1, weight: 0.01 },
            { name: "qbb97", count: 1, weight: 1 },
            { name: "flare_gun", count: 1, weight: 1.45 },
            { name: "flare_gun_dual", count: 1, weight: 0.25 },
            { name: "groza", count: 1, weight: 0.869 },
            { name: "scout_elite", count: 1, weight: 1 },
            { name: "vss", count: 1, weight: 0.7 },
            { name: "launcher", count: 1, weight: 0.2 },
            { name: "laser_of_doom", count: 1, weight: 0.005 },
        ],
        tier_police: [
            { name: "scar", count: 1, weight: 0.5 },
            { name: "helmet03", count: 1, weight: 0.15 },
            { name: "chest03", count: 1, weight: 0.1 },
            { name: "backpack03", count: 1, weight: 0.25 },
            { name: "helmet03_forest", count: 1, weight: 0.05 },
        ],
        tier_ring_case: [
            { name: "trick_nothing", count: 1, weight: 0.75 },
            { name: "m9_cursed", count: 1, weight: 0.15 },
            { name: "launcher", count: 1, weight: 0.1 },
            { name: "awc", count: 1, weight: 0.1 },
            { name: "usas_ultra", count: 1, weight: 0.01 },
        ],
        tier_chest: [
            { name: "famas", count: 1, weight: 1.15 },
            { name: "hk416", count: 1, weight: 4 },
            { name: "mk12", count: 1, weight: 0.55 },
            { name: "m249", count: 1, weight: 0.07 },
            { name: "ak47", count: 1, weight: 4 },
            { name: "scar", count: 1, weight: 0.27 },
            { name: "dp28", count: 1, weight: 0.55 },
            { name: "mosin", count: 1, weight: 0.55 },
            { name: "m39", count: 1, weight: 0.55 },
            { name: "saiga", count: 1, weight: 0.26 },
            { name: "mp220", count: 1, weight: 1.5 },
            { name: "deagle", count: 1, weight: 0.15 },
            { name: "vector", count: 1, weight: 0.1 },
            { name: "sv98", count: 1, weight: 0.1 },
            { name: "spas12", count: 1, weight: 1 },
            { name: "groza", count: 1, weight: 1.15 },
            { name: "helmet02", count: 1, weight: 1 },
            { name: "helmet03", count: 1, weight: 0.25 },
            { name: "chest02", count: 1, weight: 1 },
            { name: "chest03", count: 1, weight: 0.25 },
            { name: "chestultra", count: 1, weight: 0.1 },
            { name: "15xscope", count: 1, weight: 0.5 },
        ],
        tier_hatchet: [
            { name: "pan", count: 1, weight: 0.4 },
            { name: "martyrdom", count: 1, weight: 0.25 },
            { name: "m1014_ultra", count: 1, weight: 0.15 },
            { name: "m134", count: 1, weight: 0.1 },
            { name: "launcher", count: 1, weight: 0.1 },
            { name: "launcher_cluster", count: 1, weight: 0.05 },
            { name: "trick_nothing", count: 1, weight: 0.025 },
        ],
        tier_airdrop_uncommon: [
            { name: "awc", count: 1, weight: 2.5 },
            { name: "scarssr", count: 1, weight: 0.75 },
            { name: "mosin", count: 1, weight: 2.5 },
            { name: "m39", count: 1, weight: 2.5 },
            { name: "saiga", count: 1, weight: 1 },
            { name: "deagle", count: 1, weight: 1 },
            { name: "vector", count: 1, weight: 1 },
            { name: "sv98", count: 1, weight: 0.5 },
            { name: "qbb97", count: 1, weight: 1.5 },
            { name: "m9", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.5 },
            { name: "scout_elite", count: 1, weight: 1.5 },
            { name: "vss", count: 1, weight: 1.5 }, // !
        ],
        tier_airdrop_rare: [
            { name: "garand", count: 1, weight: 6 },
            { name: "awc", count: 1, weight: 3 },
            { name: "pkp", count: 1, weight: 0.8 },
            { name: "m249", count: 1, weight: 1 },
            { name: "m4a1", count: 1, weight: 4 },
            { name: "scorpion", count: 1, weight: 5 },
            { name: "usas_ultra", count: 1, weight: 2.5 },
            { name: "m1014_ultra", count: 1, weight: 2.5 },
            { name: "launcher", count: 1, weight: 2.5 },
            { name: "laser_of_doom", count: 1, weight: 0.1 },
        ],
        tier_airdrop_ammo: [
            { name: "9mm", count: 30, weight: 3 },
            { name: "762mm", count: 30, weight: 3 },
            { name: "556mm", count: 30, weight: 3 },
            { name: "12gauge", count: 5, weight: 3 },
            { name: "50AE", count: 4, weight: 3 },
            { name: "308sub", count: 1, weight: 3 },
            { name: "40mm", count: 1, weight: 3 },
        ],
        tier_airdrop_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "fireworks", count: 2, weight: 0.25 },
        ],
        tier_airdrop_melee: [
            { name: "", count: 1, weight: 9 },
            { name: "pan", count: 1, weight: 3 },
            { name: "crowbar_garry", count: 1, weight: 1 },
        ],
        tier_airdrop_armor: [
            { name: "helmet03", count: 1, weight: 3 },
            { name: "chest03", count: 1, weight: 3 },
            { name: "backpack03", count: 1, weight: 3 },
            { name: "helmet04_last_man_red", count: 1, weight: 1 },
            { name: "helmet03_lt_aged", count: 1, weight: 2 },
        ],
        tier_airdrop_scopes: [
            { name: "", count: 1, weight: 24 },
            { name: "4xscope", count: 1, weight: 0.02 },
            { name: "8xscope", count: 1, weight: 1 },
            { name: "15xscope", count: 1, weight: 5 },
        ],
        tier_airdrop_faction_outfits: [{ name: "outfitGhillie", count: 1, weight: 1 }],
        tier_airdrop_faction_melee: [{ name: "pan", count: 1, weight: 1 }],
        tier_perks: [
            { name: "firepower", count: 1, weight: 1 },
            { name: "windwalk", count: 1, weight: 1 },
            { name: "endless_ammo", count: 1, weight: 1 },
            { name: "steelskin", count: 1, weight: 1 },
            { name: "splinter", count: 1, weight: 1 },
            { name: "small_arms", count: 1, weight: 1 },
            { name: "takedown", count: 1, weight: 1 },
            { name: "field_medic", count: 1, weight: 1 },
            { name: "tree_climbing", count: 1, weight: 1 },
            { name: "scavenger", count: 1, weight: 1 },
            { name: "chambered", count: 1, weight: 1 },
            { name: "martyrdom", count: 1, weight: 1 },
            { name: "self_revive", count: 1, weight: 1 },
            { name: "bonus_9mm", count: 1, weight: 1 },
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
                    { weight: 0.125, widths: [20] },
                    { weight: 1e-4, widths: [16, 16, 8, 6, 4] },
                ],
                smoothness: 0.45,
                spawnCabins: true,
                masks: [],
            },
        },
        places: [
            {
                name: "are you sure",
                pos: v2.create(0.53, 0.64),
            },
            {
                name: "sploon 4 when",
                pos: v2.create(0.84, 0.18),
            },
            {
                name: "savannah mode when",
                pos: v2.create(0.15, 0.11),
            },
            {
                name: "aye",
                pos: v2.create(0.25, 0.42),
            },
            {
                name: "Peak Heights",
                pos: v2.create(0.81, 0.85),
            },
            {
                name: "Pineapple",
                pos: v2.create(0.21, 0.79),
            },
            {
                name: "Mid Forest",
                pos: v2.create(0.73, 0.47),
            },
            {
                name: "Ran- no one cares",
                pos: v2.create(0.53, 0.25),
            },
        ],
        bridgeTypes: {
            medium: "bridge_md_structure_01",
            large: "bridge_lg_structure_01",
            xlarge: "bridge_xlg_structure_01",
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
                stone_01: 100,
                barrel_01: 76,
                barrel_01c: 42,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01: 78,
                cache_06: 12,
                tree_01: 80,
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
                greenhouse_02: 1,
                cache_01: 1,
                cache_02: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                bunker_structure_06: 1,
                bunker_structure_09: 1,
                warehouse_complex_01: 2,
                chest_01: 1,
                chest_03: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                tree_02: 3,
                teahouse_complex_01su: {
                    small: 1,
                    large: 2,
                },
                stone_04: 10,
                club_complex_01: 1,
                river_town_01: 1,
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
};

export const Cursed = util.mergeDeep({}, Main, mapDef) as MapDef;
