---
title: Configuration
description: How to modify info visibility
sidebar_position: 2
---

Every enchantment and curse added by Incantationem can have their ways of obtaining altered via the configuration file. This file is located at your game's `.minecraft/config/incantationem.json`. It can be edited in-game, although by different methods on each loader:

- **Neoforge**: Mods > select Incantationem > Config
- **Fabric**: Install [ModMenu](https://modrinth.com/mod/modmenu/) then click Mods > select Incantationem > click the sliders at the top-right corner.

### Config options

**Max level**: The maximum level this enchantment can be by normal means. This option is not available on select enchantments and all curses.

**Available randomly**: Allows this enchantment/curse to be obtainable via the Enchanting Table and low-tiered loot chests`*`

**Available for book offers**: Allows this enchantment/curse to be obtainable via Villager trades`*`

**Available as treasure**: Allows this enchantment to be obtainable via high-tiered loot chests`*`

**Is Luck Based**: Whether this enchantment's effects should be triggered through luck or every time.

**Show apply message**: Whether or not a message should be displayed when luck-based enchantments are triggered; note that if you're connected to a server where this is disabled, your own configuration will be ignored.


`*` This includes standalone books and enchanted gear.