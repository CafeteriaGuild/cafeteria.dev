---
sidebar_position: 6
---

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

Receitas podem ser adicionados através de Data Packs utilizando o formato abaixo:

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

`ingredient` - `item` ou `tag` podem ser usados; é o item original;

`outputItem` - o id do item pós-secagem;

`dryingTime` - quanto tempo levará para um item ser secado em ticks (20 ticks = 1 segundo).