---
title: Configuration
description: How to modify enchantment properties and their incompatibilities between each other
sidebar_position: 3
---

Every enchantment and curse added by Incantationem can have their ways of obtaining altered via the configuration file. This file is located at your game's `.minecraft/config/incantationem.json`, although it's much easier to edit it with [ModMenu](https://modrinth.com/mod/modmenu/).

### Terminology

**Max level**: The maximum level this enchantment can be by normal means. This option is not available on select enchantments and all curses.

**Available randomly**: Allows this enchantment/curse to be obtainable via the Enchanting Table and low-tiered loot chests`*`

**Available for book offers**: Allows this enchantment/curse to be obtainable via Villager trades`*`

**Available as treasure**: Allows this enchantment to be obtainable via high-tiered loot chests`*`


`*` This includes standalone books and enchanted gear.

## Modifying incompatibility between enchantments

Each enchantment and curse's incompatiblity list is managed through [tags](https://minecraft.wiki/w/Tag), which can be altered through [KubeJS](https://kubejs.com/) and [Data Packs](https://minecraft.wiki/w/Data_pack). All tags have the following format:

- `incantationem:*_incompatible`

Where * is the enchantment's registry name; all registry names can be checked with the command `/enchant @p incantationem:`'s autocomplete (requires cheats).


### Example tag file

```json title="data/incantationem/tags/enchantment/charmed.json"
{
  "replace": false,
  "values": [
    "incantationem:tough_luck"
  ]
}
```

This file disallows [Charmed](./content/enchantments#charmed) (`incantationem:charmed`) from being combined with [Tough Luck](./content/curses#curse-of-tough-luck) (`incantationem:tough_luck`).