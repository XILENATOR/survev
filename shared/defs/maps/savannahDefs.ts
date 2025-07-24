import { util } from "../../utils/util";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";
import { v2 } from "../../utils/v2";

const mapDef: PartialMapDef = {
    mapId: 6,

    desc: {
        name: "Savannah",
        icon: "img/gui/player-the-hunted.svg",
        buttonCss: "btn-mode-savannah",
    },
    assets: {
        audio: [
            { name: "log_01", channel: "sfx" },
            { name: "log_02", channel: "sfx" },
            { name: "log_03", channel: "sfx" },
            { name: "log_04", channel: "sfx" },
            { name: "log_05", channel: "sfx" },
            { name: "log_06", channel: "sfx" },
            { name: "footstep_07", channel: "sfx" },
            { name: "footstep_08", channel: "sfx" },
            { name: "footstep_09", channel: "sfx" },
            { name: "cell_control_03", channel: "sfx" },
            { name: "log_11", channel: "sfx" },
            { name: "log_12", channel: "sfx" },
            { name: "log_13", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
            { name: "log_15", channel: "sfx" },
            { name: "xp_pickup_01", channel: "ui" },
            { name: "xp_pickup_02", channel: "ui" },
            { name: "xp_drop_01", channel: "sfx" },
            { name: "xp_drop_02", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "savannah", "cobalt", "faction", "halloween", "potato", "snow"],
    },
    biome: {
        colors: {
            background: 1858399,
            water: 4301994,
            waterRipple: 9892086,
            beach: 13332786,
            riverbank: 11689508,
            grass: 11841582,
            underground: 4001027,
            playerSubmerge: 5151631,
            playerGhillie: 11578411,
        },
        particles: {},
    },
    gameMode: { maxPlayers: 80, sniperMode: true},
    gameConfig: {
        planes: {
            crates: [
                /*{ name: "class_shell_02", weight: 1 },
                { name: "class_shell_03", weight: 1 },
                { name: "airdrop_crate_03", weight: 1 },
                { name: "airdrop_crate_02h", weight: 1 },
                { name: "airdrop_crate_02de", weight: 1 },
                { name: "airdrop_crate_01", weight: 1 },
                { name: "airdrop_crate_02", weight: 1 },
                { name: "airdrop_crate_04", weight: 1 },
                { name: "class_shell_01", weight: 1 },
                { name: "case_07", weight: 1 },
                { name: "case_06", weight: 1 },
                { name: "potato_01", weight: 1 },
                { name: "silo_01po", weight: 1 },
                { name: "class_crate_custom", weight: 1 },
                { name: "crate_21", weight: 1 },
                { name: "airdrop_crate_01x", weight: 1 },
                { name: "airdrop_crate_02x", weight: 1 },
                { name: "control_panel_callie", weight: 1 },
                { name: "airdrop_crate_02de", weight: 1 },
                { name: "airdrop_crate_01", weight: 1 },*/
                { name: "airdrop_crate_01sv", weight: 10 },
                { name: "airdrop_crate_02sv", weight: 1 },
                /*{ name: "recorder_01", weight: 1 },
                { name: "recorder_02", weight: 1 },
                { name: "recorder_03", weight: 1 },
                { name: "recorder_04", weight: 1 },
                { name: "recorder_05", weight: 1 },
                { name: "recorder_06", weight: 1 },
                { name: "recorder_07", weight: 1 },
                { name: "recorder_08", weight: 1 },
                { name: "recorder_09", weight: 1 },
                { name: "recorder_10", weight: 1 },
                { name: "recorder_11", weight: 1 },
                { name: "recorder_12", weight: 1 },
                { name: "recorder_13", weight: 1 },
                { name: "recorder_14", weight: 1 },
                { name: "recorder_15", weight: 1 },*/
                { name: "airdrop_crate_fake", weight: 3 },
            ],
        },
    },
    lootTable:{
        tier_airdrop_melee: [
            { name: "", count: 1, weight: 19 },
            { name: "stonehammer", count: 1, weight: 1 },
            { name: "pan", count: 1, weight: 1 },
        ],
        tier_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "smoke", count: 1, weight: 1 },
            { name: "strobe", count: 1, weight: 0.1 },
        ],
        tier_ammo_crate: [
            { name: "9mm", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "45acp", count: 60, weight: 3 },
            { name: "308sub", count: 5, weight: 1 },
            { name: "flare", count: 1, weight: 1 },
        ],
        tier_scopes: [
            { name: "4xscope", count: 1, weight: 5 },
            { name: "8xscope", count: 1, weight: 1 }, // ?
            { name: "15xscope", count: 1, weight: 0.02 }, // ?
        ],
        tier_ammo: [
            { name: "9mm", count: 30, weight: 3 },
            { name: "762mm", count: 30, weight: 3 },
            { name: "556mm", count: 30, weight: 3 },
            { name: "45acp", count: 30, weight: 3 },
        ],
        tier_guns: [
            { name: "mk12", count: 1, weight: 2 },
            { name: "scar", count: 1, weight: 0.01 },
            { name: "mosin", count: 1, weight: 1 },
            { name: "m39", count: 1, weight: 2 },
            { name: "mp5", count: 1, weight: 10 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "ump9", count: 1, weight: 3 },
            { name: "ot38", count: 1, weight: 8 },
            { name: "m9", count: 1, weight: 19 },
            { name: "m93r", count: 1, weight: 5 },
            { name: "glock", count: 1, weight: 7 },
            { name: "sv98", count: 1, weight: 0.1 },
            { name: "flare_gun", count: 1, weight: 0.145 }, // !
            { name: "flare_gun_dual", count: 1, weight: 0.0025 }, // !
            { name: "scout_elite", count: 1, weight: 1 },
            { name: "vss", count: 1, weight: 1 },
            { name: "awc", count: 1, weight: 0.15 },
            { name: "l86", count: 1, weight: 1 },
            { name: "blr", count: 1, weight: 2 },
            { name: "svd", count: 1, weight: 2 },
            { name: "colt45", count: 1, weight: 7 },
            { name: "m1911", count: 1, weight: 19 },
            { name: "m1a1", count: 1, weight: 10 },
            { name: "mkg45", count: 1, weight: 1 },
            { name: "scarssr", count: 1, weight: 0.2 },
        ],
    },
    mapGen: {
        map: {
            baseWidth: 512,
            baseHeight: 512,
            scale: { small: 1.1875, large: 1.28125 },
            extension: 112,
            shoreInset: 20,
            grassInset: 24,
            rivers: {
                lakes: [
                {
                    odds: 1,
                    innerRad: 32,
                    outerRad: 48,
                    spawnBound: {
                        pos: v2.create(0.5, 0.5),
                        rad: 100,
                    },
                },
                {
                    odds: 1,
                    innerRad: 25,
                    outerRad: 40,
                    spawnBound: {
                        pos: v2.create(0.5, 0.75),
                        rad: 100,
                    },
                },
                {
                    odds: 1,
                    innerRad: 25,
                    outerRad: 40,
                    spawnBound: {
                        pos: v2.create(0.5, 0.25),
                        rad: 100,
                    },
                },
            ],
                weights: [
                    { weight: 0.1, widths: [4] },
                    { weight: 0.15, widths: [8] },
                    { weight: 0.25, widths: [8, 4] },
                ],
                smoothness: 0.45,
                spawnCabins: false,
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
            medium: "",
            large: "",
            xlarge: "",
        },
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "mansion_structure_01",
                    pos: v2.create(0.5, 0.5),
                    rad: 150,
                    retryOnFailure: true,
                },
            ],
        },
        densitySpawns: [
            {
                stone_01: 150,
                barrel_01: 76,
                stone_07: 8,
                crate_01: 50,
                crate_02sv: 8,
                crate_03: 8,
                bush_01sv: 78,
                cache_06: 12,
                tree_01sv: 50,
                tree_12: 30,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
                grassy_cover_01: 6,
                grassy_cover_02: 6,
                grassy_cover_03: 6,
                propane_01: 58,
                crate_21b: 3,
            },
        ],
        fixedSpawns: [
            {
                // small is spawn count for solos and duos, large is spawn count for squads
                warehouse_01: 2,
                cache_01: 1,
                cache_02: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01sv: { odds: 0.05 },
                bunker_structure_03: 1,
                bunker_structure_05: 1,
                chest_01: 1,
                chest_03: { odds: 0.2 },
                mil_crate_05: { odds: 0.75 },
                tree_02: 3,
                stone_04: 1,
                /*class_crate_custom: 20,*/
                savannah_patch_01: 4,
                kopje_patch_01: 2,
                grassy_cover_complex_01: 2,
                crate_02sv_lake: 3,
                kopje_brush_01: 20,
                perch_01: 12,
            },
        ],
        randomSpawns: [
            {
                spawns: [],
                choose: 0,
            },
        ],
        spawnReplacements: [{
            tree_01: "tree_01sv",
            bush_01: "bush_01sv",
            }],
        importantSpawns: [],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};

export const Savannah = util.mergeDeep({}, Main, mapDef);
