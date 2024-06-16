---
title: Configuration
description: How to modify enchantment properties and their incompatibilities between each other
sidebar_position: 3
---

Every enchantment and curse added by Incantationem can have their ways of obtaining altered via the configuration file. This file is located at your game's `.minecraft/config/incantationem.json`. It can be edited in-game, although by different methods on each loader:

- **Neoforge**: Mods > select Incantationem > Config
- **Fabric**: Install [ModMenu](https://modrinth.com/mod/modmenu/) then click Mods > select Incantationem > click the sliders at the top-right corner.

### Config options

**Is Luck Based**: Whether this enchantment's effects should be triggered through luck or every time.

**Success Rate**: If luck based, how often in percentage this enchantment can be triggered

**Show apply message**: Whether or not a message should be displayed when luck-based enchantments are triggered; note that if you're connected to a server where this is disabled, your own configuration will be ignored.

## Modifying incompatibility between enchantments

Each enchantment and curse's incompatiblity list is managed through [tags](https://minecraft.wiki/w/Tag), which can be altered through [KubeJS](https://kubejs.com/) and [Data Packs](https://minecraft.wiki/w/Data_pack). All tags have the following format:

- `incantationem:exclusive_set/<id>`

All enchantments' ids can be checked with the command `/enchant @p incantationem:`'s autocomplete (requires cheats).


### Example tag file

```json title="data/incantationem/tags/enchantment/exclusive_set/charmed.json"
{
  "replace": false,
  "values": [
    "incantationem:tough_luck"
  ]
}
```

This file disallows [Charmed](./content/enchantments#charmed) (`incantationem:charmed`) from being combined with [Tough Luck](./content/curses#curse-of-tough-luck) (`incantationem:tough_luck`).