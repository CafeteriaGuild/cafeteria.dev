---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

Recipes can be added through [Data Packs](https://minecraft.wiki/w/Data_pack) following the schema bellow:

<Tabs>
<TabItem value="twenty-one" label="1.21+">

```json
{
  "type": "coxinhautilities:drying",

  "ingredient": {
    "item": "minecraft:chorus_fruit"
  },
  "result": {
    "id": "minecraft:popped_chorus_fruit"
  },
  "dryingTime": 240
}
```

</TabItem>
<TabItem value="twenty" label="1.20-">

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

</TabItem>
</Tabs>


- `ingredient` can be either an `item` or `tag`;

- `dryingTime` is measured in ticks (20 ticks = 1 second).