---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Laje de Secar

Seca itens específicos conforme um (muitas vezes) longo período de tempo, os transformando em outro sem custos adicionais.
Para secar um item, segure-o e dê um clique-direito na Laje de Secar. Não remova o item até que o processo seja completo, caso contrário o temporizador será reiniciado.

## Receita

![](/img/coxinha/recipes/drying_rack.png)

## Receitas

![](/img/coxinha/recipes/drying_rack/leather.png)
![](/img/coxinha/recipes/drying_rack/dried_kelp.png)
![](/img/coxinha/recipes/drying_rack/popped_chorus_fruit.png)
![](/img/coxinha/recipes/drying_rack/sponge.png)

Se o [Kibe Utilities](https://www.curseforge.com/minecraft/mc-mods/kibe) está instalado, seus Funis de Flúido podem ser secados em Funis comuns:

![](/img/coxinha/recipes/drying_rack/hopper.png)

### Adicionando receitas personalizadas 

Receitas podem ser adicionadas através de [Data Packs](https://pt.minecraft.wiki/w/Pacote_de_dados) utilizando o formato abaixo:

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


- `ingredient` pode ser um `item` ou `tag`;

- `dryingTime` é medido em ticks (20 ticks = 1 segundo).