---
title: Configuração
sidebar_position: 3
---

Todo encantamento e maldição adicionados pelo Incantationem podem ter suas maneiras de conseguir alterados através do arquivo de configuração. Esse arquivo é localizado no caminho `.minecraft/config/incantationem.json` de seu jogo, mas é muito mais fácil editá-lo usando o  [ModMenu](https://modrinth.com/mod/modmenu/).

### Terminologia

**Nível máximo**: O maior nível que este encantamento pode ser normalmente. Esta opção não está disponível em encantamentos específicos nem em todas as maldições.

**Disponível aleatoriamente**: Permite que este encantamento/maldição seja obtido através da Mesa de Encantamento e baús em estruturas simples/iniciais`*`

**Disponível em trocas de livros**: Permite que este encantamento/maldição seja obtido através de trocas com Aldeões`*`

**Disponível como tesouro**: Permite que este encantamento seja obtido através de baús em estruturas complexas/avançadas`*`


`*` Inclui livros e equipamento encantado.

## Modificando a incompatibilidade entre encantamentos

Cada lista de incompatibilidade é gerenciada por [tags](https://pt.minecraft.wiki/w/Marca%C3%A7%C3%A3o), que podem ser alteradas através do [KubeJS](https://kubejs.com/) ou [Data Packs](https://pt.minecraft.wiki/w/Pacote_de_dados). Todas as tags seguem o seguinte formato:

- `incantationem:*_incompatible`

Onde * é o nome do encantamento internamente; todos os nomes internos podem ser checados com o autocomplete do comando `/enchant @p incantationem:` (requer trapaças).

### Exemplo de arquivo de tag

```json title="data/incantationem/tags/enchantment/charmed.json"
{
  "replace": false,
  "values": [
    "incantationem:tough_luck"
  ]
}
```

Este arquivo não permite que o [Talismã](./content/enchantments#talismã) (`incantationem:charmed`) seja combinado com a [Maldição da Má Sorte](./content/curses#maldição-da-má-sorte) (`incantationem:tough_luck`).