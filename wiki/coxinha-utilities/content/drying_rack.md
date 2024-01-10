---
sidebar_position: 5
---

# Drying Rack

Dries select items over a (often) long period of time, transforming it into another at no additional cost.
To dry an item, hold it and right-click the Drying Rack. Do not remove the item until the process is over, otherwise the timer will reset.

## Recipe

![](/img/coxinha/recipes/drying_rack.png)
## Recipes

![](/img/coxinha/recipes/drying_rack/leather.png)
![](/img/coxinha/recipes/drying_rack/dried_kelp.png)
![](/img/coxinha/recipes/drying_rack/popped_chorus_fruit.png)
![](/img/coxinha/recipes/drying_rack/sponge.png)

If [Kibe Utilities](https://www.curseforge.com/minecraft/mc-mods/kibe) is installed, its Fluid Hoppers can be dried into regular Hoppers:

![](/img/coxinha/recipes/drying_rack/hopper.png)
### Adding custom recipes

Recipes can be added through Data Packs following the schema bellow:

```json
{
  "type": "coxinhautilities:drying",

  "ingredient": {
    "item": "minecraft:chorus_fruit"
  },
  "outputItem": "minecraft:popped_chorus_fruit",
  "dryingTime": 220
}
```

`ingredient` - can be either an `item` or `tag`, is the input of the recipe;

`outputItem` - the id of the resulting item

`dryingTime` - how long it'll take for the item to be dried in ticks (20 ticks = 1 second)