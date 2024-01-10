---
sidebar_position: 6
---

# Ender Orchid

A mystical flower that grows on [The End](https://minecraft.wiki/w/The_End). Not unlike crops, they have 7 levels of growth, dropping [Ender Pearls](https://minecraft.wiki/w/Ender_Pearl) when fully grown.

## Behavior

By default, Ender Orchids can only be placed on blocks that are on the `coxinhautilities:ender_orchid_strict_placement` (usually just [End Stone](https://minecraft.wiki/w/End_Stone)). You can disable `hasEnderOrchidStrictPlacement`, allowing placement on any block.

However, they'll grow faster on strict placement blocks:

- On strict placement block odds (`enderOrchidRegularGrowthRate` | default: 8): 100/8 = 12.5% every random tick
- Other blocks odds (`enderOrchidSpecialGrowthRate` | default: 12): 100/12 = 8.3% every random tick

To disable Ender Orchids' generation, set `canGenerateEnderOrchids` to `false`.