---
sidebar_position: 8
---

# Orquídea do Fim

Uma flor mística que cresce no [End](https://pt.minecraft.wiki/w/O_End). Assim como o trigo, elas têm 7 níveis de crescimento, dando [Pérolas do Ender](https://pt.minecraft.wiki/w/P%C3%A9rola_de_ender) no estágio final.

## Comportamento

Por padrão, Orquídeas do Fim só podem ser plantadas em blocos que estão na tag `coxinhautilities:ender_orchid_strict_placement` (por padrão somente [Pedra do End](https://pt.minecraft.wiki/w/Pedra_do_End)). Você pode desativar `hasEnderOrchidStrictPlacement`, permitindo que sejam colocadas em qualquer bloco.

No entanto, elas crescerão mais rápido em blocos do colocamento estrito:

- Chance em blocos do colocamento estrito (`enderOrchidRegularGrowthRate` | padrão: 8): 100/8 = 12.5% todo tick aleatório
- Chance em outros blocos (`enderOrchidSpecialGrowthRate` | padrão: 12): 100/12 = 8.3% todo tick aleatório

Para impedir que Orquídeas do Fim sejam geradas, defina `canGenerateEnderOrchids` para `false`.