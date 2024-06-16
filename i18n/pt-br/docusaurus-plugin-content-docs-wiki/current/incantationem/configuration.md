---
title: Configuração
description: Como mudar propriedades de encantamentos e suas incompatibilidades entre si
sidebar_position: 3
---

Todo encantamento e maldição adicionados pelo Incantationem podem ter suas maneiras de conseguir alterados através do arquivo de configuração. Esse arquivo é localizado no caminho `.minecraft/config/incantationem.json` de seu jogo, mas é muito mais fácil editá-lo usando o  [ModMenu](https://modrinth.com/mod/modmenu/).

### Terminologia

**Baseado em Sorte**: Se os efeitos deste encantamento devem ser ativados através de sorte ou toda vez.

**Taxa de Sucesso**: Se baseado em sorte, quão frequentemente, em porcentagem, este encantamento deve ser ativado. 

**Exibir Mensagem de Aplicação**: Se uma mensagem deve ser mostrada quando encantamentos baseados em sorte são ativados; note que se você estiver conectado(a) a um servidor em que isto está desativado, sua preferência será ignorada.

## Modificando a incompatibilidade entre encantamentos

Cada lista de incompatibilidade é gerenciada por [tags](https://pt.minecraft.wiki/w/Marca%C3%A7%C3%A3o), que podem ser alteradas através do [KubeJS](https://kubejs.com/) ou [Data Packs](https://pt.minecraft.wiki/w/Pacote_de_dados). Todas as tags seguem o seguinte formato:

- `incantationem:exclusive_set/<id>`

Os ids de todos encantamentos podem ser checados com o autocomplete do comando `/enchant @p incantationem:` (requer trapaças).


### Exemplo de arquivo de tag

```json title="data/incantationem/tags/enchantment/exclusive_set/charmed.json"
{
  "replace": false,
  "values": [
    "incantationem:tough_luck"
  ]
}
```

Este arquivo não permite que o [Talismã](./content/enchantments#talismã) (`incantationem:charmed`) seja combinado com a [Maldição da Má Sorte](./content/curses#maldição-da-má-sorte) (`incantationem:tough_luck`).