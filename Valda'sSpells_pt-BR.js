SpellsList["abduct"] = {
	name : "Abduzir",
	classes : ["necromancer", "Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 329],
	level : 7,
	school : "Conj",
	time : "1 min",
	range : "1 mile",
	components : "V,S,M",
	compMaterial : "Um pires de prata",
	duration : "1 h",
	save : "Cha",
	description : "1 criatura conhecida no alcance faz teste de resistência ou é teleportada para até 30 pés de mim; sentada/em pé/caída/amarrada; fica ou retorna ao final",
	descriptionFull : "Esta magia teleporta uma criatura para sua localização. Escolha como alvo desta magia uma criatura conhecida por você que esteja dentro do alcance. Uma criatura não voluntária pode realizar um teste de resistência de Carisma para resistir a este efeito. O alvo é colocado em um local à sua escolha a até 30 pés de você. Você escolhe se o alvo está sentado, em pé, caído ou amarrado com meios de contenção próximos. Ao final da duração da magia, você pode escolher se o alvo permanece em sua localização ou é teleportado de volta para o local de onde foi abduzido."
};
SpellsList["aberrate"] = {
	name : "Aberrar",
	classes : ["Bruxa", "Druida", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 329],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 min",
	description : "Não sofro dano adicional de acertos críticos; após sofrer dano, uso reação para obter resistência àquele tipo de dano (não ao dano desencadeador)",
	descriptionFull : "Esta magia faz sua anatomia se tornar fluida, remodelando-se constantemente em formas novas e mais terríveis. Pela duração, você não sofre dano adicional de acertos críticos." + "\n   " + "Além disso, seu corpo se adapta às ameaças enquanto se deforma. Imediatamente após sofrer dano enquanto esta magia estiver ativa, você pode usar sua reação para ganhar resistência àquele tipo de dano até a magia terminar ou até usar esta habilidade novamente para ganhar resistência a um tipo de dano diferente. Essa resistência não se aplica ao dano que a desencadeou."
};
SpellsList["accelerate/decelerate"] = {
	name : "Acelerar/Desacelerar",
	classes : ["Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 329],
	level : 1,
	school : "Trans",
	time : "1 rea",
	timefull : "1 reação, realizada quando uma criatura que você possa ver a até 60 pés é atingida por um ataque",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma gota de óleo ou uma gota de melaço",
	duration : "Instantaneous",
	description : "O dano do ataque desencadeador aumenta ou diminui em 1d6+1d6/SL+modificador de habilidade de conjuração",
	descriptionFull : "Esta magia acelera ou desacelera um ataque no instante anterior ao impacto, reduzindo ou multiplicando sua força." + "\n   " + toUni("Acelerar") + ": Aumente o dano que o alvo sofre em 1d6 + seu modificador de habilidade de conjuração." + "\n   " + toUni("Desacelerar") + ": Reduza o dano que o alvo sofre em 1d6 + seu modificador de habilidade de conjuração (até um mínimo de 0 de dano)." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, a alteração no dano aumenta em 1d6 para cada nível do espaço acima do 1º."
};
SpellsList["accursed act"] = {
	name : "Ato Amaldiçoado",
	classes : ["Bruxa"],
	source : ["VSoS", 329],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Incenso ou uma vela preta",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 criatura faz teste de resistência ou sofre 1d8+1d8/SL+modificador de habilidade de conjuração de dano Psy 1/turno ao atacar ou conjurar; caso não faça isso, repete o teste de resistência no EOT para encerrar",
	descriptionFull : "Ao acender uma vela, você profere maldições sombrias em uma língua perdida, dirigidas a uma criatura que você possa ver dentro do alcance. Essa criatura deve realizar um teste de resistência de Sabedoria ou fica amaldiçoada pela duração da magia. Enquanto estiver amaldiçoada, a criatura sofre dano psíquico uma vez por turno, igual a 1d8 + seu modificador de habilidade de conjuração, sempre que atacar ou conjurar uma magia. Se o alvo não atacar nem conjurar uma magia no próprio turno, ele pode repetir o teste de resistência ao final desse turno, encerrando o efeito em caso de sucesso." + "\n   " + "Uma magia remover maldição encerra esta maldição antecipadamente." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, você causa 1d8 de dano psíquico adicional para cada nível do espaço acima do 1º."
};
SpellsList["action"] = {
	name : "Ação",
	classes : ["Bruxa", "Bardo", "paladin", "Feiticeiro", "Mago"],
	source : ["VSoS", 329],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "Uma lasca de raiz de alcaçuz",
	duration : "1 rnd",
	description : "1 criatura voluntária ganha uma ação adicional no próximo turno para Atacar (1 ataque com arma), Disparada, Desengajar, Esconder-se ou Usar um Objeto",
	descriptionFull : "Escolha uma criatura voluntária que você possa ver dentro do alcance. Durante o próximo turno dela, o alvo ganha uma ação adicional. Essa ação só pode ser usada para realizar a ação Atacar (apenas um ataque com arma), Disparada, Desengajar, Esconder-se ou Usar um Objeto."
};
SpellsList["aerial alacrity"] = {
	name : "Agilidade Aérea",
	classes : ["Bruxa", "Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 330],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma pena de uma ave de rapina",
	duration : "10 min",
	description : "1 criatura voluntária com deslocamento de voo ganha capacidade de pairar, vantagem em testes de Dex(Acro), não provoca AoO ao voar e pode usar Disparada como ação bônus",
	descriptionFull : "Escolha como alvo uma criatura voluntária que você possa ver dentro do alcance e que tenha deslocamento de voo (incluindo aquelas com deslocamento de voo temporário ou concedido por magia). Essa criatura ganha os seguintes benefícios pela duração da magia:" + "\n •" + "O alvo pode realizar a ação Disparada como uma ação bônus." + "\n •" + "O alvo pode pairar." + "\n •" + "O alvo tem vantagem em testes de Destreza (Acrobacia)." + "\n •" + "O alvo não provoca ataques de oportunidade quando voa para fora do alcance de um inimigo."
};
SpellsList["after image"] = {
	name : "Imagem Residual",
	classes : ["investigator", "Ranger", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 330],
	level : 3,
	school : "Illus",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Um espelho de mão de prata no valor de 50 gp",
	duration : "10 min",
	ritual: false,
	description : "Ao ser atingido por um ataque, chance de 50/50 de ele atingir a duplicata ilusória; ela desaparece até eu me mover 10 pés ou realizar a ação Esquivar (50 gp)",
	descriptionFull : "Você cria uma duplicata ilusória de si mesmo que acompanha todos os seus movimentos. Quando você é atingido por um ataque durante a duração da magia, role qualquer dado. Se o resultado for ímpar, o ataque tem a duplicata como alvo e a atinge em vez de você. A duplicata desaparece e reaparece depois que você se move 10 pés ou mais ou realiza a ação Esquivar. Se o resultado for par, o ataque tem você como alvo normalmente."
};
SpellsList["antiballistics field"] = {
	name : "Campo Antibalístico",
	classes : ["necromancer", "cleric", "Mago"],
	source : ["VSoS", 330],
	level : 6,
	school : "Abjur",
	time : "1 a",
	range : "S:40-ft rad",
	components : "V,S,M",
	compMaterial : "Uma pitada de pólvora molhada",
	duration : "Conc, 10 min",
	ritual: false,
	description : "Ataques com armas de fogo falham e as emperram; 1 ação para desemperrar; ataques com armas de fogo vindos de fora têm desvantagem e causam 1/2 do dano",
	descriptionFull : "Um campo mágico invisível de 40 pés de raio se estende a partir de você, interferindo nas balas e causando falhas nas armas de fogo. Dentro da esfera, ataques com armas de fogo falham, e as armas de fogo usadas para realizar um ataque emperram imediatamente. Uma arma de fogo emperrada não pode ser usada para realizar um ataque até que uma criatura use sua ação para corrigir a falha da arma." + "\n   " + "Armas de fogo fora da esfera disparadas contra alvos dentro dela têm desvantagem nas jogadas de ataque e causam apenas metade do dano ao acertar."
};
SpellsList["arcane anomaly"] = {
	name : "Anomalia Arcana",
	classes : ["necromancer", "Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 330],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "S:30-ft rad",
	components : "V,S,M",
	compMaterial : "Um espelho quebrado",
	duration : "Conc, 1 min",
	ritual: false,
	description : "Magias conjuradas dentro do alcance têm 1/6 de chance de falhar, gastando o espaço de magia, mas não os componentes",
	descriptionFull : "Você espalha fissuras na energia mágica que permeia o multiverso. Pela duração, sempre que uma magia for conjurada dentro do alcance, role um d6. Com um resultado de 1, a conjuração falha, gastando um espaço de magia normalmente, mas sem consumir componentes materiais caros."
};
SpellsList["arc blade"] = {
	name : "Lâmina de Arco Elétrico",
	classes : ["warmage"],
	source : ["VSoS", 330],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,M",
	compMaterial : "Uma arma corpo a corpo",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque com arma corpo a corpo ao conjurar; acerto: +0d8 de dano elétrico, 1 criatura a até 5 pés sofre 1d6 de dano elétrico; +1 dado em cada CL5/11/17",
	descriptionCantripDie : "Ataque corpo a corpo com arma ao conjurar; acerto: +`CD-1`d8 de dano elétrico, 1 criatura a até 5 pés sofre `CD`d6 de dano de fogo",
	descriptionFull : "Como parte da ação usada para conjurar esta magia, você deve realizar um ataque corpo a corpo com uma arma contra uma criatura dentro do alcance da magia; caso contrário, a magia falha. Se acertar, o alvo sofre os efeitos normais do ataque com arma, exceto que todo o dano causado pelo ataque é elétrico, em vez de seu tipo normal. Além disso, um arco de relâmpago salta para uma criatura à sua escolha a até 5 pés do alvo, causando 1d6 de dano elétrico." + "\n   " + "O dano desta magia aumenta quando você alcança determinados níveis. No 5º nível, o ataque corpo a corpo causa 1d8 de dano elétrico adicional, e o dano secundário causa 1d6 de dano elétrico adicional aos respectivos alvos. Ambas as rolagens de dano aumentam em um dado no 11º nível (2d8 e 3d6) e no 17º nível (3d8 e 4d6)."
};
SpellsList["arcane capacitor"] = {
	name : "Capacitor Arcano",
	classes : ["Feiticeiro", "Mago"],
	source : ["VSoS", 330],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma batata",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico corpo a corpo para causar 5d10 de dano de energia; acertando ou errando, recupera um espaço de magia de 1º nível; 7º: 2º, 9º: 3º",
	descriptionFull : "Você canaliza uma onda de poder arcano para as pontas dos dedos, reciclando a energia restante em um novo espaço de magia. Realize um ataque mágico corpo a corpo contra uma criatura que você possa alcançar. Se acertar, o alvo sofre 5d10 de dano de energia. Quer acerte ou erre, você então recupera um espaço de magia de 1º nível gasto." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 7º nível, recupera um espaço de magia de 2º nível gasto, em vez disso. Se a conjurar usando um espaço de magia de 9º nível, recupera um espaço de magia de 3º nível gasto, em vez disso."
};
SpellsList["benign dismemberment"] = {
	name : "Desmembramento Ben.",
	classes : ["investigator", "necromancer", "Bruxa", "Mago"],
	source : ["VSoS", 331],
	level : 3,
	school : "Necro",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "1 h",
	ritual: true,
	description : "1 criatura voluntária pode ser desmembrada sem sofrer dano; encoste as partes para reanexá-las; irreversível ao término da magia",
	descriptionFull : "Enquanto a magia durar, partes do corpo de um alvo voluntário (dedos, pernas, cauda e até mesmo a cabeça) podem ser separadas de seu corpo sem causar ferimentos. O alvo não sofre dano desse desmembramento, desde que o corte que remova a parte do corpo seja rápido e limpo. A cabeça do alvo permanece viva e consciente, e as partes conectadas a ela também permanecem vivas. Todas as partes separadas do corpo se tornam inanimadas, mas não começam a se decompor enquanto a magia durar. Qualquer parte do corpo do alvo removida durante a duração desta magia pode ser encostada ao coto, o que faz com que ela se una instantaneamente a ele, restaurando a parte do corpo." + "\n   " + "Ao término da duração, as partes separadas do corpo permanecem permanentemente separadas. O alvo morre se os órgãos vitais não tiverem sido reconectados à cabeça."
};
SpellsList["blood print"] = {
	name : "Impressão Sanguínea",
	classes : ["investigator", "martyr", "necromancer", "Bruxa", "Bardo", "cleric", "Druida", "paladin", "Ranger", "Feiticeiro", "Mago"],
	source : ["VSoS", 331],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma onça ou mais de sangue",
	duration : "Instantaneous",
	ritual: true,
	description : "Descobre de que tipo de criatura veio uma amostra de sangue e a identifica individualmente; pode preservar e comparar impressões",
	descriptionFull : "Ao seu toque, sangue ainda úmido sobre uma superfície se move e se reorganiza em um padrão de manchas carmesins. Essa impressão sanguínea é exclusiva da criatura à qual o sangue pertence, mas você pode determinar a espécie da criatura (como humano, gnoll, cervo ou gigante do fogo) examinando o formato geral. Uma impressão pode ser preservada pressionando uma folha de papel contra ela. Se esta magia for conjurada duas vezes, é possível identificar amostras de sangue provenientes da mesma criatura comparando as impressões."
};
SpellsList["boomering"] = {
	name : "Anel Bumerangue",
	classes : ["martyr", "cleric", "paladin", "Feiticeiro"],
	source : ["VSoS", 331],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância para causar 3d6+1d6/SL de dano radiante; erro: role novamente uma vez; alvos adicionais em níveis superiores",
	descriptionFull : "Um vertiginoso anel de faíscas é lançado da sua mão estendida e ricocheteia de volta para você instantes depois. Faça uma jogada de ataque mágico à distância contra uma criatura dentro do alcance. Se acertar, você causa 3d6 de dano radiante. Se esse ataque errar, você pode repetir a jogada de ataque contra o mesmo alvo uma vez." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1º." + "\n   " + "Se você conjurar esta magia usando um espaço de magia de 3º nível ou superior, após o anel atingir o primeiro alvo, ele ricocheteia para um segundo alvo à sua escolha que você possa ver a até 30 pés do primeiro alvo, causando dano normalmente se acertar. Se você conjurar esta magia usando um espaço de magia de 5º nível ou superior, o anel pode ricochetear para um terceiro alvo à sua escolha que você possa ver a até 30 pés do segundo alvo. Independentemente de quantas criaturas o anel atingir ao ricochetear, você só pode repetir a jogada de ataque contra um dos alvos da magia."
};
SpellsList["burning blade"] = {
	name : "Lâmina Ardente",
	classes : ["warmage"],
	source : ["VSoS", 331],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,M",
	compMaterial : "Uma arma corpo a corpo",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque corpo a corpo com arma ao conjurar; acerto: dano da arma é de fogo +0d6 de dano de fogo, fogo permanece no espaço do alvo; +1d6 CL5/11/17, B",
	descriptionCantripDie : "Ataque corpo a corpo com arma ao conjurar; acerto: +`CD-1`d6 de dano de fogo, fogo permanece no espaço do alvo; B",
	descriptionFull : "Como parte da ação usada para conjurar esta magia, você deve realizar um ataque corpo a corpo com uma arma contra uma criatura dentro do alcance da magia; caso contrário, a magia falha. Se acertar, o alvo sofre os efeitos normais do ataque com arma, exceto que todo o dano causado pelo ataque é de fogo, em vez de seu tipo normal. Além disso, brasas giram no espaço do alvo. Até o início do seu próximo turno, quando uma criatura entrar nesse espaço pela primeira vez ou terminar seu turno nele, você pode usar sua reação para causar 1d6 de dano de fogo à criatura, encerrando a magia." + "\n   " + "O dano desta magia aumenta quando você alcança determinados níveis. No 5º nível, o ataque corpo a corpo causa 1d6 de dano de fogo adicional ao alvo se acertar, e o dano secundário causa 1d6 de dano de fogo adicional ao seu alvo. Ambas as rolagens de dano aumentam em um dado no 11º nível (2d6 e 3d6) e no 17º nível (3d6 e 4d6)."
};
SpellsList["burnt offering"] = {
	name : "Oferenda Queimada",
	classes : ["martyr"],
	source : ["VSoS", 332],
	level : 1,
	school : "Abjur",
	time : "10 min",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Uma pira e um animal morto",
	duration : "24 h",
	ritual: true,
	description : "Enquanto estiver usando armadura, +Wis à AC em vez de +Dex; 3º: repita 1 teste de resistência",
	descriptionFull : "Ao construir uma pira e queimar o cadáver de um animal, você busca o favor dos deuses. Pela duração, enquanto estiver usando armadura, você pode adicionar seu modificador de Sabedoria, em vez de seu modificador de Destreza, à sua Classe de Armadura." + AtHigherLevels + "Se você conjurar esta magia usando um espaço de magia de 3º nível ou superior, também pode repetir um teste de resistência que fizer durante a duração. Você pode escolher repetir o teste de resistência após rolar o dado, mas deve decidir antes que o resultado seja determinado e deve usar a nova rolagem."
};
SpellsList["candy blast"] = {
	name : "Rajada de Doces",
	classes : ["Bruxa", "Feiticeiro", "Mago"],
	source : ["VSoS", 332],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância causa 1d8 de dano contundente e o espaço do alvo se torna terreno difícil; 1 ação para limpar; +1d8 CL5/11/17",
	descriptionCantripDie : "Ataque mágico à distância causa `CD`d8 de dano contundente e o espaço do alvo se torna terreno difícil; 1 ação para limpar",
	descriptionFull : "Você invoca um punhado de doces duros — balas de açúcar, pastilhas de menta, jujubas etc. — e os arremessa contra um alvo que você possa ver dentro do alcance. Faça uma jogada de ataque mágico à distância. Se acertar, o alvo sofre 1d8 de dano contundente, e o espaço que ele ocupa, até um quadrado de 5 pés de lado, se torna terreno difícil até que uma criatura use uma ação para recolher os doces caídos. Os doces produzidos por esta magia são comestíveis, mas não têm valor nutricional." + "\n   " + "O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8)."
};
SpellsList["card trick"] = {
	name : "Truque de Cartas",
	classes : ["warmage", "Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 332],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um baralho de cartas de jogar",
	duration : "Instantaneous",
	save : "Dex",
	ritual: false,
	description : "Escolha um ataque mágico à distância ou um teste de resistência de Destreza para 1 criatura; acerto/falha: 1d6 de dano de energia; +1d6 CL5/11/17",
	descriptionFull : "Com um movimento rápido das mãos, você arremessa uma carta de jogar ou de tarô carregada de energia contra seus oponentes. Escolha entre realizar uma jogada de ataque mágico à distância ou fazer com que o alvo realize um teste de resistência de Destreza. Em caso de acerto ou de falha no teste de resistência, o alvo sofre 1d6 de dano de energia." + "\n   " + "O dano desta magia aumenta em 1d6 quando você alcança o 5º nível (2d6), o 11º nível (3d6) e o 17º nível (4d6)."
};
SpellsList["caustic blade"] = {
	name : "Lâmina Cáustica",
	classes : ["necromancer", "warmage"],
	source : ["VSoS", 332],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,M",
	compMaterial : "Uma arma corpo a corpo",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque corpo a corpo com arma ao conjurar; acerto: o dano da arma é de ácido +0d8 de dano de ácido; erro: 1d8 de dano de ácido; +1d8 CL5/11/17",
	descriptionCantripDie : "Ataque corpo a corpo com arma ao conjurar; acerto: +`CD-1`d8 de dano de ácido; erro: `CD`d8 de dano de ácido",
	descriptionFull : "Como parte da ação usada para conjurar esta magia, você deve realizar um ataque corpo a corpo com uma arma contra uma criatura dentro do alcance da magia; caso contrário, a magia falha. Em caso de acerto, o alvo sofre os efeitos normais do ataque com a arma, exceto que todo dano causado pelo ataque é de ácido, em vez de seu tipo normal. Se você errar por 3 ou menos, ácido respinga no alvo, e você causa 1d8 de dano de ácido em vez disso." + "\n   " + "O dano desta magia aumenta quando você alcança determinados níveis. No 5º nível, o ataque corpo a corpo causa 1d8 de dano de ácido adicional ao alvo em caso de acerto, e o dano de ácido causado em caso de erro aumenta para 2d8. Ambas as jogadas de dano aumentam em um dado no 11º nível (2d8 e 3d8) e no 17º nível (3d8 e 4d8)."
};
SpellsList["cheat"] = {
	name : "Trapaça",
	classes : ["necromancer", "warmage", "Bruxa", "Bardo", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 332],
	level : 0,
	school : "Div",
	time : "1 bns",
	range : "Self",
	components : "S,M",
	compMaterial : "Um dado viciado",
	duration : "1 rnd",
	ritual: false,
	description : "Jogue novamente testes de habilidade para participar de jogos não mágicos de habilidade",
	descriptionFull : "Você move os dedos discretamente, e o destino parece acompanhar seus movimentos. Pela duração da magia, você pode jogar novamente qualquer teste de habilidade que realizar para participar de jogos não mágicos de habilidade. Assim, esta magia pode influenciar uma partida de pôquer, mas não o resultado de um baralho das maravilhas."
};
SpellsList["chromatic bullet"] = {
	name : "Bala Cromática",
	classes : ["paladin", "Ranger"],
	source : ["VSoS", 333],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Uma arma de fogo",
	duration : "Conc, 1 min",
	ritual: false,
	description : "Próximo ataque com arma de fogo: +2d4+2d4/SL de dano de ácido/frio/fogo/elétrico/veneno/trovejante; então pode alterar o tipo de dano da arma",
	descriptionFull : "Na próxima vez que você acertar uma criatura com um ataque à distância com arma usando uma arma de fogo durante a duração da magia, sua bala crepita com energia elemental. O ataque causa 2d4 de dano adicional ao alvo. Você escolhe se esse dano adicional é de ácido, frio, fogo, elétrico, veneno ou trovejante, e pode optar por alterar o dano da arma de fogo para um desses tipos de dano. Você não precisa escolher o mesmo tipo de dano para ambos." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 2d4 para cada nível do espaço acima do 1º."
};
SpellsList["clue"] = {
	name : "Pista",
	classes : ["investigator", "Bruxa", "Bardo", "cleric", "Druida", "paladin", "Ranger", "Mago"],
	source : ["VSoS", 333],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma lupa e um cachimbo",
	duration : "10 min",
	ritual: true,
	description : "Pegadas e impressões digitais em um raio de 45 pés brilham; escolha qualquer período nos últimos 10 dias; cada criatura tem uma cor diferente; pode revelar criaturas invisíveis.",
	descriptionFull : "Quando você conjura esta magia, todas as pegadas e impressões digitais em um raio de 45 pés de um ponto que você toca ficam destacadas e brilham fracamente pela duração da magia. No momento da conjuração, escolha qualquer período entre os últimos 10 dias e o presente; apenas as pegadas e impressões digitais deixadas nesse período serão destacadas. Cada criatura cujas pegadas ou impressões digitais sejam detectadas pela magia recebe uma cor exclusiva, mas não é identificada de nenhuma outra forma. Qualquer criatura que se mova ou toque objetos na área também deixará pegadas e impressões digitais coloridas, o que pode revelar criaturas invisíveis na área."
};
SpellsList["concealed shot"] = {
	name : "Disparo Oculto",
	classes : ["Bardo", "Druida", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 333],
	level : 0,
	school : "Illus",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "Uma arma à distância",
	duration : "Instantaneous",
	description : "Faça um ataque com arma à distância ao conjurar; o projétil fica invisível durante o voo e a arma não revela sua posição.",
	descriptionFull : "Como parte da ação usada para conjurar esta magia, você deve realizar um ataque com uma arma à distância; caso contrário, a magia falha. O projétil do ataque fica invisível durante o voo, e a própria arma fica silenciosa. Se a arma for uma arma de fogo, esta magia suprime a fumaça e a luz produzidas por ela, tornando impossível ver ou ouvir de onde veio o disparo." + "\n   " + "Esta magia oculta apenas o primeiro disparo que você realiza; quaisquer disparos adicionais não são ocultados."
};
SpellsList["conjure cannonball"] = {
	name : "Conjurar Bala de Canhão",
	classes : ["Feiticeiro", "Mago"],
	source : ["VSoS", 333],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "600 ft",
	components : "V,S,M",
	compMaterial : "Uma pequena réplica de canhão",
	duration : "Instantaneous",
	save : "Dex",
	description : "Ataque mágico à distância causa 4d10+1d10/SL de dano contundente; depois, criaturas a até 5 pés fazem um teste de resistência ou sofrem metade do dano.",
	descriptionFull : "Você invoca uma bala de canhão, já em pleno voo e à velocidade máxima, que explode no impacto. Faça uma jogada de ataque mágico contra um alvo que você possa ver dentro do alcance. Se acertar, o alvo sofre 4d10 de dano contundente, e cada criatura a até 5 pés do alvo deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofre metade desse dano." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 4º nível ou superior, o dano aumenta em 1d10 para cada nível do espaço de magia acima do 3º."
};
SpellsList["conjure cover"] = {
	name : "Conjurar Cobertura",
	classes : ["investigator", "Druida", "Ranger", "Feiticeiro", "Mago"],
	source : ["VSoS", 333],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "10 ft",
	components : "V,S,M",
	compMaterial : "Uma estatueta de pato",
	duration : "Conc, 1 h",
	ritual: true,
	description : "Cria um muro baixo que fornece cobertura; consulte o livro para os efeitos.",
	descriptionFull : "Você conjura uma mureta de pedras sobre o chão, uma fonte perfeita de cobertura, em um ponto que possa ver dentro do alcance. A mureta tem 18 polegadas de espessura e é composta por três segmentos de 5 pés de comprimento por 3 pés de altura. Cada segmento deve ser contíguo a pelo menos um outro segmento." + "\n   " + "Uma criatura Média que se abaixe atrás da mureta tem meia cobertura contra ataques à distância, e uma criatura Pequena que se abaixe atrás dela tem três quartos de cobertura contra ataques à distância. Uma criatura caída tem cobertura total atrás da mureta. É possível saltar por cima da mureta sem gastar movimento adicional." + "\n   " + "Cada segmento tem CA 10 e 60 pontos de vida. Reduzir um segmento da mureta a 0 pontos de vida faz com que ele desmorone, destruindo-o. A mureta desaparece quando todos os segmentos forem destruídos ou a magia terminar."
};
SpellsList["consecrated armor"] = {
	name : "Armadura Consagrada",
	classes : ["investigator", "cleric"],
	source : ["VSoS", 334],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Uma gota de óleo abençoado",
	duration : "8 h",
	ritual: true,
	description : "A CA se torna 12+Dex, ou 15+Dex contra ínferos e mortos-vivos",
	descriptionFull : "Você traça um símbolo sagrado no peito, e uma barreira invisível o protege até a magia terminar. Sua CA base se torna 12 + seu modificador de Destreza. Se você for atacado por um ínfero ou morto-vivo, sua CA se torna 15 + seu modificador de Destreza contra esse ataque."
};
SpellsList["corruption curse"] = {
	name : "Maldição da Corrupção",
	classes : ["Bruxa"],
	source : ["VSoS", 334],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	ritual: false,
	description : "1 criatura amaldiçoada; escolha Dex, Wis ou Con; desvantagem no teste de resistência escolhido e efeito adicional; veja o livro",
	descriptionFull : "Com um olhar penetrante e um gesto sinistro, você envia uma fita de magia sombria para dentro do corpo de um alvo. Uma criatura que você possa ver dentro do alcance fica amaldiçoada pela duração da magia e sofre um dos seguintes efeitos, à sua escolha, enquanto estiver amaldiçoada:" + "\n   " + toUni("Reflexos Embotados") + ": O alvo tem desvantagem em testes de Destreza e testes de resistência de Destreza." + "\n   " + toUni("Fortitude Frágil") + ": O alvo tem desvantagem em testes de resistência de Constituição e não pode recuperar pontos de vida." + "\n   " + toUni("Vontade Fraca") + ": O alvo tem desvantagem em testes de resistência de Sabedoria e em jogadas de ataque mágico." + "\n   " + "Uma magia remover maldição conjurada usando um espaço de magia de 6º nível ou superior encerra esta maldição antecipadamente."
};
SpellsList["cryptogram"] = {
	name : "Criptograma",
	classes : ["necromancer", "warmage", "Bruxa", "Bardo", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 334],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "Unlimited",
	components : "V,S,M",
	compMaterial : "Uma pequena mensagem escrita",
	duration : "Instantaneous",
	description : "Envia uma mensagem de até 8 caracteres (incluindo espaços) a uma criatura conhecida no mesmo plano, 1/dia",
	descriptionFull : "Você envia um pequeno pergaminho com uma mensagem curta a uma criatura à sua escolha. O destinatário deve ser uma criatura que você conhece e estar no mesmo plano de existência que você. Esse pergaminho flutua diante do destinatário, cai em seu bolso ou aparece sobre algo próximo. A mensagem do pergaminho pode ter até 8 caracteres (espaços contam como caracteres). Você pode enviar apenas um pergaminho a um único alvo por dia."
};
SpellsList["curse of binding"] = {
	name : "Maldição do Vínculo",
	classes : ["Bruxa"],
	source : ["VSoS", 334],
	level : 7,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma parte do corpo do alvo pretendido, como uma unha, uma mecha de cabelo ou uma gota de sangue",
	duration : "Until dispelled",
	save : "Cha",
	ritual: true,
	description : "1 criatura ou objeto fica vinculado a permanecer a até 20 pés de um local escolhido; veja o livro",
	descriptionFull : "Você vincula uma criatura ou objeto a um local, amaldiçoando o alvo para que nunca possa partir. Escolha um alvo e um local dentro do alcance; você deve ser capaz de ver ambos. Se o alvo for uma criatura, ele deve realizar um teste de resistência de Carisma (uma criatura voluntária pode escolher falhar nesse teste) ou será amaldiçoado, ficando permanentemente vinculado ao local escolhido. Enquanto estiver amaldiçoado, o alvo pode agir e se mover livremente, desde que permaneça a até 20 pés do ponto ao qual está vinculado. Se o alvo começar seu turno fora dessa área, ele deve realizar um teste de resistência de Força contra a CD para evitar suas magias ou será arrastado 60 pés em direção ao ponto ao qual foi vinculado." + "\n   " + "Além disso, se a criatura tentar usar uma viagem extraplanar, ela deve realizar outro teste de resistência de Carisma. Em caso de falha, a tentativa de viagem fracassa e quaisquer recursos usados são desperdiçados. Em caso de sucesso, a maldição é suprimida até que a criatura retorne ao plano no qual foi vinculada, momento em que o efeito que a arrasta volta a funcionar." + "\n   " + "Uma magia remover maldição conjurada usando um espaço de magia de 7º nível ou superior encerra esta maldição antecipadamente."
};
SpellsList["curse of blades"] = {
	name : "Maldição das Lâminas",
	classes : ["necromancer", "Bruxa", "Bardo", "warlock", "Mago"],
	source : ["VSoS", 334],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 criatura segurando uma arma realiza um teste de resistência ou não pode largar/guardar a arma; ao realizar a ação Atacar, faz 1 ataque adicional com a arma contra si mesma",
	descriptionFull : "Faixas profanas de energia negra prendem uma criatura à sua arma. Escolha uma criatura que você possa ver dentro do alcance e que esteja segurando uma arma para realizar um teste de resistência de Sabedoria. Em caso de falha, a criatura fica amaldiçoada pela duração. Um alvo amaldiçoado não pode largar ou guardar sua arma voluntariamente. Além disso, sempre que realizar a ação Atacar em seu turno, ele faz um ataque adicional com sua arma contra si mesmo, contra sua própria AC, causando dano normalmente se acertar." + "\n   " + "Uma magia remover maldição encerra esta maldição antecipadamente."
};
SpellsList["curse of chains"] = {
	name : "Maldição das Correntes",
	classes : ["Bruxa"],
	source : ["VSoS", 335],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	ritual: false,
	description : "2 criaturas a até 30 pés uma da outra realizam um teste de resistência ou não podem se afastar voluntariamente uma da outra",
	descriptionFull : "Uma marca negra semelhante a grilhões de ferro escurece os tornozelos de duas criaturas que você possa ver. Escolha duas criaturas que você possa ver dentro do alcance da magia e que estejam a até 30 pés uma da outra. Cada uma deve realizar um teste de resistência de Constituição. Uma criatura voluntária pode escolher falhar nesse teste de resistência. Em caso de falha, o alvo fica amaldiçoado pela duração. Se apenas um alvo for amaldiçoado por esta magia, você pode usar sua ação ou ação bônus em um turno subsequente para escolher outro alvo a até 30 pés da criatura amaldiçoada para realizar um teste de resistência. Enquanto duas criaturas estiverem amaldiçoadas por esta magia, elas não podem se afastar voluntariamente uma da outra." + "\n   " + "Uma magia remover maldição encerra esta maldição antecipadamente."
};
SpellsList["curse ward"] = {
	name : "Proteção contra Maldições",
	classes : ["investigator", "martyr", "necromancer", "Bruxa", "cleric", "paladin", "warlock", "Mago"],
	source : ["VSoS", 335],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 h",
	ritual: false,
	description : "1 criatura voluntária recebe resistência a dano necrótico; fica imune a maldições, possessão e bruxarias; seu máximo de pontos de vida não pode ser reduzido",
	descriptionFull : "Você estende a mão e toca uma criatura voluntária ao seu alcance, erguendo ao redor dela uma barreira semelhante a fumaça. Pela duração, o alvo tem resistência a dano necrótico e não pode ser amaldiçoado, possuído ou escolhido como alvo de uma bruxaria. Além disso, seu máximo de pontos de vida não pode ser reduzido. Se o alvo já estiver sob um desses efeitos, o efeito fica suspenso até a magia terminar."
};
SpellsList["dead fog"] = {
	name : "Névoa Morta",
	classes : ["necromancer"],
	source : ["VSoS", 335],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	ritual: false,
	description : "Cria esfera de névoa com 15 pés de raio; criatura que entrar ou iniciar o turno na área faz teste de resistência ou sofre 3d8+1d8/SL de dano necrótico; B",
	descriptionFull : "Uma esfera de névoa com 15 pés de raio, preenchida pelas necromânticas Brumas Mortas, surge centrada em um ponto que você possa ver dentro do alcance. A névoa se espalha ao redor de cantos, e sua área é de escuridão densa. Ela permanece pela duração ou até que um vento forte a disperse, encerrando a magia." + "\n   " + "Ao conjurar esta magia, você pode potencializá-la com sua própria essência vital, perdendo 10, 15 ou 20 pontos de vida durante a conjuração. Ao fazer isso, considere o espaço de magia usado para conjurá-la como sendo de um nível superior se você perdeu 10 pontos de vida, dois níveis superiores se perdeu 15 pontos de vida e três níveis superiores se perdeu 20 pontos de vida, até o máximo de 9º nível." + "\n   " + "Quando uma criatura entra na área pela primeira vez em um turno ou inicia seu turno nela, deve realizar um teste de resistência de Constituição, sofrendo 3d8 de dano necrótico se falhar." + "\n   " + "Além disso, quando uma criatura tenta sair da esfera de névoa, você pode fazer com que a névoa a agarre com tentáculos de bruma. A criatura deve realizar um teste de resistência de Força para sair da névoa e, se falhar, não pode se mover." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 4º nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 3º."
};
SpellsList["dead mist lash"] = {
	name : "Chicote de Bruma Morta",
	classes : ["necromancer"],
	source : ["VSoS", 335],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância que causa 3d8+1d8/SL de dano necrótico; pode aumentar o nível da magia sacrificando 5 HP por SL",
	descriptionFull : "Você conjura um tentáculo branco brilhante formado pelas sinistras e necromânticas Brumas Mortas, que chicoteia um inimigo que você possa ver dentro do alcance. Ao conjurar esta magia, você pode potencializá-la com sua própria essência vital, perdendo 5, 10 ou 15 pontos de vida durante a conjuração. Ao fazer isso, considere o espaço de magia usado para conjurá-la como sendo de um nível superior para cada 5 pontos de vida perdidos, até o máximo de 9º nível." + "\n   " + "Realize uma jogada de ataque mágico à distância contra uma criatura dentro do alcance. Se acertar, o alvo sofre 3d8 de dano necrótico." + AtHigherLevels + "Se você conjurar esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 1º."
};
SpellsList["defenestration"] = {
	name : "Defenestração",
	classes : ["Bardo"],
	source : ["VSoS", 336],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	ritual: false,
	description : "1 criatura faz teste de resistência ou é deslocada até 20 pés através de uma janela e sofre 4d6+1d6/SL de dano cortante; B",
	descriptionFull : "Uma onda de força irrompe da sua mão aberta, arremessando uma criatura que você possa ver dentro do alcance através de uma janela. O alvo realiza um teste de resistência de Força. Se falhar, é arremessado até 20 pés através de uma janela à sua escolha. Se não houver uma janela a até 20 pés do alvo, ele é arremessado através de uma janela de força arcana, que se materializa 10 pés atrás dele e desaparece depois que a criatura a estilhaça. O alvo sofre 4d6 de dano cortante ao atravessar uma janela. Se obtiver sucesso no teste de resistência, o alvo é apenas empurrado 5 pés para trás e não sofre dano." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, o alvo pode ser empurrado mais 5 pés para trás para cada nível do espaço acima do 2º e sofre 1d6 de dano cortante adicional para cada nível do espaço acima do 2º."
};
SpellsList["delay"] = {
	name : "Retardar",
	classes : ["necromancer", "Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 336],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma placa octogonal",
	duration : "Instantaneous",
	save : "Wis",
	ritual: false,
	description : "1 cria faz teste de resistência ou vai para o fim da iniciativa",
	descriptionFull : "Você desacelera brevemente o tempo para uma criatura à sua escolha que possa ver dentro do alcance. O alvo deve ser bem-sucedido em um teste de resistência de Sabedoria ou será movido para a última posição na ordem de iniciativa a partir do início da próxima rodada."
};
SpellsList["demand"] = {
	name : "Exigência",
	classes : ["Bruxa", "Bardo", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 336],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "Unlimited",
	components : "V,S,M",
	compMaterial : "Uma língua de cobra e um pedaço de fio de cobre",
	duration : "Conc, 8 h",
	save : "Wis",
	ritual: false,
	description : "Envia 25 palavras ou menos para 1 cria, que pode responder; pode ser usada como Sugestão; B",
	descriptionFull : "Você envia uma mensagem curta de vinte e cinco palavras ou menos para uma criatura com a qual tenha familiaridade. A criatura ouve a mensagem em sua mente, reconhece você como o remetente se conhecer você e pode responder da mesma maneira imediatamente. A magia permite que criaturas com valor de Inteligência de pelo menos 1 compreendam o significado da sua mensagem." + "\n   " + "Você pode enviar a mensagem a qualquer distância, até mesmo para outros planos de existência, mas, se o alvo estiver em um plano diferente do seu, há 5 por cento de chance de a mensagem não chegar." + "\n   " + "Você pode usar essa mensagem para sugerir ao alvo um curso de ação que pareça razoável. Nesse caso, o alvo deve ser bem-sucedido em um teste de resistência de Sabedoria ou será compelido a seguir suas instruções pela duração da magia, conforme a magia Sugestão."
};
SpellsList["dire charm"] = {
	name : "Enfeitiçar Terrível",
	classes : ["Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 336],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "Um cílio de ninfa, no valor de pelo menos 100 po",
	duration : "10 days",
	save : "Wis",
	ritual: false,
	description : "1 humanoide faz teste de resistência ou fica enfeitiçado; desvantagem, exceto se estiver em combate",
	descriptionFull : "Você tenta enfeitiçar um humanoide que possa ver dentro do alcance. Ele deve realizar um teste de resistência de Sabedoria e tem desvantagem nesse teste, a menos que você ou seus companheiros estejam lutando contra ele. Se falhar no teste de resistência, ele fica enfeitiçado por você até a magia terminar. Se você ou seus companheiros fizerem algo que o prejudique, ele pode repetir o teste de resistência. A criatura enfeitiçada considera você um conhecido amigável. Quando a magia termina, a criatura sabe que foi enfeitiçada por você." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 8º nível ou superior, a duração se torna permanente (até ser dissipada)."
};
SpellsList["dire warning"] = {
	name : "Aviso Terrível",
	classes : ["investigator", "necromancer", "cleric", "Mago"],
	source : ["VSoS", 336],
	level : 4,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Recebe 6 palavras úteis de seu eu futuro; deve realizar um ritual de 10 min em até 1 semana para enviá-las; B",
	descriptionFull : "Você recebe uma mensagem de até 6 palavras de seu eu futuro, alertando sobre uma ameaça crítica ou indicando um caminho promissor. Em algum momento no futuro, assim que descobrir por que enviou a mensagem, você deve realizar um ritual de 10 minutos para enviar a mensagem de volta no tempo ao seu eu passado. Depois de conjurar esta magia, você não pode conjurá-la novamente até realizar esse ritual, ou até uma semana depois, caso não descubra essa informação. Se você conjurar esta magia e não receber nenhuma mensagem, isso indica que você nunca conclui o ritual no futuro, possivelmente devido à sua morte ou a algum outro impedimento."
};
SpellsList["distort gravity"] = {
	name : "Distorcer Gravidade",
	classes : ["investigator", "necromancer", "Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 337],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Um giroscópio",
	duration : "Conc, 1 h",
	ritual: true,
	description : "Altera a direção da gravidade em uma superfície; veja o livro",
	descriptionFull : "A magia manipula a direção da gravidade em uma superfície não horizontal que você toca, fazendo com que ela atraia criaturas e objetos a até 15 pés dela como se fosse o chão. A superfície pode ocupar uma área de até um quadrado de 60 pés de lado e pode envolver uma estrutura, se sua geometria permitir. Uma criatura pode caminhar sobre essa superfície como se fosse um chão plano, mesmo que a superfície seja perpendicular ao chão ou esteja de cabeça para baixo." + "\n   " + "Quando a duração termina, todas as criaturas e objetos caem da superfície."
};
SpellsList["eldritch orb"] = {
	name : "Orbe Místico",
	classes : ["necromancer", "Bruxa", "warlock"],
	source : ["VSoS", 337],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	ritual: false,
	description : "Ataque mágico à distância causa 1d8 de dano de energia; outras criaturas a até 5 pés fazem teste de resistência ou sofrem metade do dano; +1d8 CL5/11/17",
	descriptionCantripDie : "Ataque mágico à distância causa `CD`d8 de dano de energia; outras criaturas a até 5 pés fazem teste de resistência ou sofrem metade do dano",
	descriptionFull : "Você lança uma esfera de energia mística contra uma criatura ou objeto dentro do alcance. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d8 de dano de energia, e cada outra criatura a até 5 pés do alvo deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofre metade desse dano." + "\n   " + "O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8)."
};
SpellsList["elemental curse"] = {
	name : "Maldição Elemental",
	classes : ["Bruxa"],
	source : ["VSoS", 337],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	ritual: false,
	description : "1 criatura faz teste de resistência ou fica vulnerável a ácido/frio/fogo/elétrico/trovejante; se tiver resistência, perde a resistência; se tiver imunidade, passa a ter resistência",
	descriptionFull : "Uma faísca salta do seu dedo para uma criatura que você toca, espalhando-se em fissuras brilhantes pela pele dela. O alvo deve realizar um teste de resistência de Constituição ou fica amaldiçoado pela duração. Enquanto estiver amaldiçoado, o alvo tem vulnerabilidade a um tipo de dano à sua escolha: ácido, frio, fogo, elétrico ou trovejante. Se a criatura tiver resistência ao tipo de dano escolhido, em vez disso, ela apenas perde essa resistência. Se o alvo tiver imunidade ao tipo de dano escolhido, ele é considerado como tendo apenas resistência a esse dano." + "\n   " + "Uma magia remover maldição encerra esta maldição antecipadamente."
};
SpellsList["evasiveness"] = {
	name : "Evasividade",
	classes : ["Feiticeiro", "Mago"],
	source : ["VSoS", 337],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,M",
	compMaterial : "Um retalho de seda",
	duration : "Conc, 1 h",
	ritual: false,
	description : "A CA de 1 criatura passa a ser 20 e ela recebe vantagem em testes de resistência de Destreza",
	descriptionFull : "Você toca uma criatura voluntária. Até a magia terminar, o alvo ganha uma capacidade sobre-humana de esquivar-se de ataques. A CA do alvo passa a ser 20, caso seja menor, independentemente do tipo de armadura que esteja vestindo, e ele tem vantagem em testes de resistência de Destreza."
};
SpellsList["exhume"] = {
	name : "Exumar",
	classes : ["necromancer", "cleric", "Mago"],
	source : ["VSoS", 337],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma gota de sangue",
	duration : "Instantaneous",
	ritual: true,
	description : "Uma pilha de ossos emerge do chão, ou 1d4 pilhas se a magia for conjurada em um local de sepultamento",
	descriptionFull : "Escolha um quadrado desocupado de 20 pés de lado dentro do alcance — observe que a área deve ter terra firme abaixo dela; esta magia falha se for conjurada em um andar superior de um edifício. A magia faz com que uma pilha de ossos de humanoide emerja do chão dentro desse quadrado. Se você conjurar esta magia em um local de sepultamento, como um cemitério, mausoléu ou túmulo sob um monte de terra, 1d4 pilhas de ossos são exumadas em vez de 1. O chão em si não é alterado nem remexido por esta magia; os ossos simplesmente surgem do chão."
};
SpellsList["eye of anubis"] = {
	name : "Olho de Anubis",
	classes : ["necromancer", "Bruxa", "cleric"],
	source : ["VSoS", 337],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "M",
	compMaterial : "Um símbolo sagrado",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância, acerto: 1d8 de dano necrótico, alvo não pode Desengajar até o fim do meu próximo turno; +1d8 CL5/11/17; B",
	descriptionCantripDie : "Ataque mágico à distância, acerto: `CD`d8 de dano necrótico, alvo não pode Desengajar até o fim do meu próximo turno; B",
	descriptionFull : "Um raio de luar tenebroso parte do seu olho esquerdo em direção a uma criatura dentro do alcance. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d8 de dano necrótico e não pode realizar a ação Desengajar até o fim do seu próximo turno. Esta magia cria um raio adicional e causa mais dano em níveis superiores. No 5º nível, você dispara um segundo raio, que se origina do seu olho direito. O dano do seu primeiro raio aumenta em 1d8 (2d8) quando você alcança o 11º nível, e o dano do seu segundo raio aumenta em 1d8 (2d8) quando você alcança o 17º nível."
};
SpellsList["eye of ra"] = {
	name : "Olho de Ra",
	classes : ["cleric"],
	source : ["VSoS", 338],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "M",
	compMaterial : "Um símbolo sagrado",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância, acerto: 1d8 de dano radiante e alvo não pode se Esconder até o fim do meu próximo turno; +1d8 CL5/11/17; B",
	descriptionCantripDie : "Ataque mágico à distância, acerto: `CD`d8 de dano radiante e alvo não pode se Esconder até o fim do meu próximo turno; B",
	descriptionFull : "Um raio de fulgor furioso irrompe do seu olho direito, direcionado a uma criatura que você possa ver dentro do alcance. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d8 de dano radiante e não pode realizar a ação Esconder-se até o fim do seu próximo turno. Esta magia cria um raio adicional e causa mais dano em níveis superiores. No 5º nível, você dispara um segundo raio, que se origina do seu olho esquerdo. O dano do seu primeiro raio aumenta em 1d8 (2d8) quando você alcança o 11º nível, e o dano do seu segundo raio aumenta em 1d8 (2d8) quando você alcança o 17º nível."
};
SpellsList["false vision"] = {
	name : "Visão Falsa",
	classes : ["investigator", "necromancer", "Bruxa", "Bardo", "Mago"],
	source : ["VSoS", 338],
	level : 4,
	school : "Illus",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma pitada de pó de uma gema preciosa",
	duration : "8 h",
	ritual: false,
	description : "1 criatura/local/objeto oculto de adivinhação, ou posso enganar o adivinho; B",
	descriptionFull : "Pela duração, você oculta da magia de adivinhação um alvo que tocar. O alvo pode ser uma criatura voluntária, um local ou um objeto que não tenha mais de 10 pés em nenhuma dimensão. Se o alvo for alvo de qualquer magia de adivinhação ou for percebido pelos sensores de uma magia de Vidência, você pode apresentar ao adivinho informações falsas à sua escolha, desde que esteja consciente no momento da tentativa de adivinhação. O alvo pode parecer estar em circunstâncias diferentes, em um ou mais locais falsos ou ser completamente indetectável."
};
SpellsList["finger guns"] = {
	name : "Armas de Dedo",
	classes : ["warmage", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 338],
	level : 0,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 min",
	ritual: false,
	description : "Ação para ataque mágico à distância, 60 pés, 1d8 de dano de energia ao acertar; conta como arma de fogo; +1d8 CL5/11/17",
	descriptionCantripDie : "Ação para ataque mágico à distância, 60 pés, `CD`d8 de dano de energia ao acertar; conta como arma de fogo",
	descriptionFull : "Você estende o indicador e o polegar, fazendo um gesto perigoso que imita uma arma de fogo. Pela duração, você pode usar sua ação para fazer um ataque mágico à distância contra uma criatura que possa ver a até 60 pés de você, causando 1d8 de dano de energia se acertar." + "\n   " + "Sua arma de dedo não exige munição, mas é considerada uma arma de fogo para magias e efeitos que se aplicam a armas de fogo." + "\n   " + "O dano da magia aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8)."
};
SpellsList["flawed reconstruction"] = {
	name : "Reconstrução Imperfeita",
	classes : ["necromancer", "Bruxa", "warlock", "Mago"],
	source : ["VSoS", 338],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma agulha e linha",
	duration : "Instantaneous",
	ritual: false,
	description : "1 crea recupera 4d6+1d6/SL pontos de vida; máximo de pontos de vida reduzido no mesmo valor até LR",
	descriptionFull : "Você costura as feridas de uma criatura voluntária que tocar, que recupera 4d6 pontos de vida. No entanto, a reparação é imperfeita, e o máximo de pontos de vida do alvo é reduzido no mesmo valor até que ele termine um descanso longo. Uma criatura que recupere pontos de vida por meio desta magia ficará com algumas cicatrizes permanentes." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, a cura aumenta em 1d6 para cada nível do espaço acima do 1º."
};
SpellsList["flesh ripper"] = {
	name : "Rasgador de Carne",
	classes : ["necromancer"],
	source : ["VSoS", 338],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	ritual: false,
	description : "Ataque mágico à distância causa 1d8 de dano Prc; alvo faz teste de resistência ou não pode se afastar mais de 30 pés de mim; +1d8 CL5/11/17",
	descriptionCantripDie : "Ataque mágico à distância, acerto: `CD`d8 de dano Prc, alvo não pode se afastar mais de 30 pés de mim sem um teste de resistência",
	descriptionFull : "Ao conjurar esta magia, um gancho de açougue espectral, preso a uma corrente espectral, é lançado contra a criatura à sua escolha. Faça um ataque mágico à distância contra uma criatura dentro do alcance. Se acertar, o alvo sofre 1d8 de dano perfurante enquanto o gancho de açougue espectral se crava em seu corpo. Até o início do seu próximo turno, o alvo deve realizar um teste de resistência de Força para se afastar mais de 30 pés de você. Se falhar, ele fica impedido de se mover até o início do seu turno. Este efeito termina se você estiver a mais de 30 pés do alvo." + "\n   " + "O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8)."
};
SpellsList["force buckler"] = {
	name : "Broquel de Energia",
	classes : ["warmage"],
	source : ["VSoS", 339],
	level : 0,
	school : "Abjur",
	time : "1 bns",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Uma manopla especialmente preparada, no valor mínimo de 5 gp",
	duration : "1 rnd",
	ritual: false,
	description : "Minha AC recebe +2 como se eu estivesse empunhando um escudo; termina se eu for atingido por um ataque",
	descriptionFull : "Você invoca um campo de energia translúcido, mas visível, que emerge da manopla preparada. Até o início do seu próximo turno, este escudo concede a você um bônus de +2 na sua Classe de Armadura, como se você estivesse empunhando um escudo. Esta magia termina antecipadamente se você for atingido por um ataque."
};
SpellsList["force dart"] = {
	name : "Dardo de Energia",
	classes : ["warmage"],
	source : ["VSoS", 339],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M\u0192",
	compMaterial : "Uma manopla especialmente preparada, no valor mínimo de 5 gp",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância causa 1d10 de dano energético; +1d10 CL5/11/17",
	descriptionCantripDie : "Ataque mágico à distância, `CD` feixes causam 1d10 de dano energético cada",
	descriptionFull : "Você lança um dardo de energia mágica contra uma criatura ou objeto dentro do alcance. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d10 de dano energético." + "\n   " + "O dano desta magia aumenta em 1d10 quando você alcança o 5º nível (2d10), o 11º nível (3d10) e o 17º nível (4d10)."
};
SpellsList["force weapon"] = {
	name : "Arma de Energia",
	classes : ["warmage"],
	source : ["VSoS", 339],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u0192",
	compMaterial : "Uma manopla especialmente preparada, no valor mínimo de 5 gp",
	duration : "1 rnd",
	ritual: false,
	description : "Ataque mágico corpo a corpo causa 1d10 de dano de energia; pode realizar ataque de oportunidade até o próximo turno; +1 ataque CL5/11/17",
	descriptionCantripDie : "`CD` ataques mágicos corpo a corpo causam 1d10 de dano de energia cada; pode realizar 1 ataque de oportunidade antes do próximo turno",
	descriptionFull : "Você conjura no ar uma lâmina de energia mágica, que golpeia seus inimigos. Faça um ataque mágico corpo a corpo contra uma criatura dentro do alcance. Se acertar, o alvo sofre 1d10 de dano de energia. A lâmina permanece por um breve período; até o início do seu próximo turno, você pode desferir um único golpe com sua lâmina mística como um ataque de oportunidade." + "\n   " + "Você pode realizar 1 ataque adicional no seu turno no 5º nível (2 ataques), no 11º nível (3 ataques) e no 17º nível (4 ataques)."
};
SpellsList["free throw"] = {
	name : "Arremesso Livre",
	classes : ["Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 339],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "Um retalho de couro de porco",
	duration : "1 rnd",
	save : "Dex",
	ritual: false,
	description : "1 objeto de 5 libras ou menos percorre qualquer trajetória de até 150 pés; se atingir, teste de resistência ou 4d4+2d4/SL de dano contundente; sucesso: metade do dano",
	descriptionFull : "Como parte da conjuração desta magia, você arremessa um objeto que possa segurar na mão e que pese 5 libras ou menos. Pela duração da magia, você escolhe a trajetória exata do objeto, até uma distância de 150 pés. O objeto pode contornar obstáculos e esquinas e ignora meia cobertura e cobertura de três quartos se for direcionado a uma criatura. Se o objeto atingir uma criatura, ela deve realizar um teste de resistência de Destreza, sofrendo 4d4 de dano contundente se falhar, ou metade desse dano se obtiver sucesso. O objeto para de se mover após atingir uma criatura ou um objeto." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o peso máximo dos objetos que você pode arremessar com esta magia aumenta em 5 libras, e o dano aumenta em 2d4 para cada nível do espaço acima do 1º."
};
SpellsList["frenzy"] = {
	name : "Frenesi",
	classes : ["necromancer", "Bruxa", "Bardo", "Mago"],
	source : ["VSoS", 340],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Uma gota de sangue fresco",
	duration : "Conc, 1 min",
	save : "Wis",
	ritual: false,
	description : "Criaturas a até 20 pés de um ponto fazem teste de resistência ou atacam uma criatura ao alcance ou a si mesmas; B",
	descriptionFull : "Com um gesto, você reduz uma multidão a instintos primitivos e violência. Escolha um ponto que você possa ver dentro do alcance. Cada criatura a até 20 pés desse ponto deve realizar um teste de resistência de Sabedoria. Se falhar, a criatura fica em frenesi pela duração da magia. Quando uma criatura fica em frenesi, ela saca uma arma corpo a corpo, se tiver uma." + "\n   " + "Uma criatura em frenesi deve usar sua ação no início do próprio turno para atacar uma criatura ao seu alcance. Ela usa uma arma corpo a corpo, se tiver uma, ou uma arma improvisada ou um ataque desarmado, se não tiver. Se houver vários alvos ao alcance da criatura, ela escolhe seu alvo aleatoriamente. Se não houver nenhum alvo ao alcance da criatura, ela ataca a si mesma, contra sua própria CA, causando dano normalmente se acertar." + "\n   " + "No final do próprio turno, uma criatura em frenesi pode repetir seu teste de resistência, encerrando o efeito sobre si mesma antecipadamente se obtiver sucesso."
};
SpellsList["frigid blade"] = {
	name : "Lâmina Gélida",
	classes : ["warmage"],
	source : ["VSoS", 340],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,M",
	compMaterial : "Uma arma corpo a corpo",
	duration : "1 rnd",
	ritual: false,
	description : "Ataque corpo a corpo com arma ao conjurar; acerto: +0d8 de dano de frio, 1d8 de frio se mover antes do meu turno; +1d8 CL5/11/17, B",
	descriptionCantripDie : "Ataque corpo a corpo com arma ao conjurar; acerto: +`CD-1`d8 de dano de frio, `CD`d8 de dano de frio se mover antes do meu turno",
	descriptionFull : "Como parte da ação usada para conjurar esta magia, você deve realizar um ataque corpo a corpo com uma arma contra uma criatura dentro do alcance da magia; caso contrário, a magia falha. Se acertar, o ataque causa dano normalmente, mas causa dano de frio em vez de seu tipo normal de dano. Além disso, o alvo fica coberto por uma camada de geada quebradiça até o início do seu próximo turno. Se o alvo se mover voluntariamente antes disso, você pode usar sua reação para causar 1d8 de dano de frio a ele, encerrando a magia." + "\n   " + "No 5º nível, tanto o ataque corpo a corpo quanto o dano secundário causam 1d8 de dano de frio adicional cada. Ambas as rolagens de dano aumentam em 1d8 no 11º nível (2d8 e 3d8) e no 17º nível (3d8 e 4d8)."
};
SpellsList["frolicking fountain"] = {
	name : "Fonte Brincalhona",
	classes : ["Bruxa", "Bardo", "Druida", "warlock", "Mago"],
	source : ["VSoS", 340],
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Uma batuta de maestro",
	duration : "Conc, 1 min",
	save : "Wis",
	ritual: false,
	description : "Cria cubo de água de 5 pés; criaturas a até 60 pés fazem teste de resistência ou ficam enfeitiçadas; B",
	descriptionFull : "Você conjura um cubo de água de 5 pés de lado que se anima em movimentos hipnóticos em um espaço desocupado dentro do alcance. A água rodopia pela duração da magia, sem sair de seu espaço, exceto para lançar pequenos jatos a até cinco pés de altura. Cada criatura a até 60 pés, exceto você, que veja a fonte deve realizar um teste de resistência de Sabedoria ou ficar enfeitiçada por você pela duração da magia. Enquanto estiver enfeitiçada por esta magia, uma criatura deve usar seu movimento em cada um de seus turnos para se aproximar o máximo possível da água. Uma criatura enfeitiçada não pode se afastar voluntariamente da fonte. Ao final de seu turno, uma criatura enfeitiçada pode repetir o teste de resistência, encerrando o efeito sobre si em caso de sucesso. Depois que uma criatura obtiver sucesso em um teste de resistência contra esta magia, ela não poderá ser afetada novamente pela mesma conjuração." + "\n   " + "Se uma criatura estiver a até 5 pés da fonte, você pode usar uma ação bônus para ordenar que a água golpeie essa criatura. Realize um ataque mágico corpo a corpo contra o alvo. Se acertar, a água causa 4d6 de dano de concussão ao alvo. Se o alvo estiver enfeitiçado por esta magia, ele pode repetir o teste de resistência após sofrer esse dano."
};
SpellsList["gahoul's glorious gothic"] = {
	name : "Gótico Glorioso de Gahoul",
	classes : ["necromancer"],
	source : ["VSoS", 340],
	level : 8,
	school : "Conj",
	time : "1 h",
	range : "1 mile",
	components : "V,S,M\u0192",
	compMaterial : "Uma miniatura de uma mansão gótica decorada, no valor de pelo menos 1.000 po",
	duration : "7 days",
	ritual: false,
	description : "Cria uma propriedade gótica com servos esqueletos e abastecida com comida; B",
	descriptionFull : "Uma fenda se abre, despejando toneladas de tijolos e pedras de alvenaria que se organizam de maneira ordenada e rápida para formar uma vasta propriedade gótica. A propriedade consiste em uma mansão contendo um cofre, um pátio espaçoso de 200 por 200 pés e uma cerca de ferro forjado de 10 pés de altura ao redor do perímetro. Qualquer criatura na área da propriedade é conduzida para fora por espectros inofensivos, mas enérgicos." + "\n   " + "Você pode criar a planta que desejar para a mansão, mas seu espaço não pode exceder 50 cubos, cada um com 10 pés de lado, nem cinco andares no total, incluindo porões. A mansão é adornada com janelas gradeadas e gárgulas decorativas, mas sua mobília e decoração ficam a seu critério. Quando a mansão é criada pela primeira vez, esses detalhes ficam registrados na miniatura de mansão usada para conjurar a magia e não podem ser alterados. A mansão conta com 50 esqueletos que obedecem a você e contém comida suficiente para alimentar 50 pessoas por dia durante uma semana. Os esqueletos podem realizar qualquer tarefa que um servo humano comum poderia realizar, mas não podem atacar nem realizar qualquer ação que prejudique diretamente outra criatura." + "\n   " + "A mansão contém um cofre cúbico de 15 pés de lado, que é um espaço extradimensional. Itens colocados dentro do cofre estarão presentes na próxima vez que você conjurar esta magia." + "\n   " + "O pátio está impregnado de magia necromântica, de modo que qualquer humanoide enterrado em seu terreno se ergue 24 horas depois como um carniçal sob seu controle, conforme a magia criar mortos-vivos. Quando a magia é conjurada, 3 carniçais são animados no pátio. Esses mortos-vivos estão sob seu controle, mas não podem sair da propriedade. Eles patrulham a propriedade caso não recebam outras instruções. Mortos-vivos não podem ser expulsos dentro da propriedade." + "\n   " + "A propriedade se desfaz em pó e ossos após 7 dias, e todos os itens colocados dentro da mansão aparecem em segurança no espaço que ela ocupava. Se a magia for conjurada no mesmo local uma vez a cada 7 dias durante um ano, a propriedade se torna permanente."
};
SpellsList["gahoul's scapegoat"] = {
	name : "Bode Expiatório de Gahoul",
	classes : ["necromancer", "Bruxa"],
	source : ["VSoS", 341],
	level : 4,
	school : "Abjur",
	time : "1 min",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Giz, tinta ou óleo preto",
	duration : "8 h",
	ritual: false,
	description : "Marca 1 crea voluntária; ao ser atingido por atk, pode usar rea e encerrar a magia para trocar de lugar com ela e fazer o atk atingir a crea",
	descriptionFull : "Você traça um símbolo arcano complexo na carne de uma criatura voluntária a até 5 pés de você, marcando-a para o sacrifício. Durante a duração da magia, quando você for atingido por um ataque e a criatura marcada estiver a até 60 pés de você, você pode usar sua reação para trocar de posição com ela, fazendo com que ela seja atingida pelo ataque em seu lugar. A magia então termina."
};
SpellsList["gahoul's shrieking skull"] = {
	name : "Crânio Gritante de Gahoul",
	classes : ["necromancer"],
	source : ["VSoS", 341],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um crânio",
	duration : "Instantaneous",
	ritual: false,
	description : "Crea em um cubo de 10 pés sofrem 2d4+1d4/SL de dmg trovejante",
	descriptionFull : "Você arremessa um crânio que gargalha em um ponto que possa ver dentro do alcance. Ele emite um grito aterrador, audível a até 300 pés. Cada criatura em um cubo de 10 pés centrado no crânio sofre 2d4 de dano trovejante, sem realizar um teste de resistência." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d4 para cada nível do espaço acima do 1º."
};
SpellsList["gahoul's spectral scythe"] = {
	name : "Foice Espectral de Gahoul",
	classes : ["necromancer"],
	source : ["VSoS", 341],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "S:60-ft line",
	components : "V,S",
	duration : "1 rnd",
	save : "Dex",
	ritual: false,
	description : "Crea na área fazem um teste de resistência ou sofrem 6d8+1d8/SL de dmg Necro; sucesso: metade do dmg; B",
	descriptionFull : "Você conjura uma foice fantasmagórica da morte em sua mão aberta e a arremessa, girando pelo ar. A foice percorre uma linha de 60 pés de comprimento e 10 pés de largura, parando e flutuando no ar ao final da linha ou antes de atingir qualquer objeto sólido. Cada criatura na área enquanto a foice estiver em movimento deve realizar um teste de resistência de Destreza, sofrendo 6d8 de dano necrótico se falhar, ou metade desse dano se obtiver sucesso. Uma criatura tem desvantagem nesse teste de resistência se a foice parar no espaço dela." + "\n   " + "Se você estiver a até 120 pés da foice no início do seu próximo turno, ela retorna até você em uma linha de 10 pés de largura, obrigando as criaturas na área de seu trajeto a realizar testes de resistência contra o dano da foice." + AtHigherLevels +  "Quando você conjura esta magia usando um espaço de magia de 7º nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 6º."
};
SpellsList["game of fate"] = {
	name : "Jogo do Destino",
	classes : ["investigator", "Bardo", "Mago"],
	source : ["VSoS", 341],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um conjunto de jogos",
	duration : "1 h",
	save : "Wis",
	ritual: false,
	description : "Desafia uma criatura para um jogo que causa 6d6 de dmg psíquico e envolve apostas combinadas; B",
	descriptionFull : "Você compele magicamente uma criatura dentro do alcance a participar de um jogo não mágico com consequências vitais. Se a criatura escolhida tiver Inteligência 3 ou inferior, ou não falar nenhum idioma, ela não é afetada. Uma criatura que não esteja disposta pode realizar um teste de resistência de Sabedoria para resistir a este efeito. Se falhar, a criatura é compelida a participar do jogo com você. Se o alvo sofrer dano ou ficar inconsciente, esta magia termina." + "\n   " + "O perdedor do jogo sofre 6d6 de dano psíquico. Se nenhum jogador perder ou tiver vencido até o fim da duração da magia, tanto você quanto o alvo sofrem esse dano." + "\n   " + "Além disso, você e a criatura alvo podem negociar apostas maiores. Vocês podem apostar mais dano psíquico (até um máximo de 10d6), propriedades ou recompensas mais esotéricas, como a concessão de um título de nobreza, no jogo. A magia revela se uma criatura tentar apostar uma propriedade que não lhe pertence. Uma aposta é firmada quando você e o alvo concordam com seus termos, selando-a com um aperto de mãos ou gesto semelhante. Propriedades ou moedas apostadas no jogo são teletransportadas para o vencedor ao término do jogo. O perdedor também é compelido magicamente a realizar qualquer ação (como conceder um título) prometida como parte da aposta." + "\n   " + "Por fim, nenhuma magia, efeito mágico ou criatura além de você e do alvo pode influenciar o resultado do jogo."
};
SpellsList["geomantic discernment"] = {
	name : "Discernimento Geo.",
	classes : ["investigator", "Druida", "Ranger", "Mago"],
	source : ["VSoS", 342],
	level : 3,
	school : "Div",
	time : "1 a",
	range : "S:100-ft rad",
	components : "V,S",
	duration : "Conc, 10 min",
	ritual: true,
	description : "Você vê uma aura ao redor de metais preciosos, gemas etc.; não é bloqueada por nenhum obstáculo não mágico",
	descriptionFull : "Você adquire a capacidade de detectar minerais valiosos em um raio de 100 pés ao seu redor. Uma aura brilhante que apenas você pode ver aparece ao redor de quaisquer metais valiosos, gemas, minérios, elementos nativos ou outros recursos nesse raio pela duração da magia. Você pode ver essa aura através de qualquer quantidade de material não mágico."
};
SpellsList["glitterdust"] = {
	name : "Poeira Cintilante",
	classes : ["Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 342],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "S:15-ft cone",
	components : "V,S,M",
	compMaterial : "Um punhado de mica em pó",
	duration : "Conc, 1 min",
	save : "Con",
	ritual: false,
	description : "Criaturas na área fazem um teste de resistência ou ficam cegas; criaturas na área não recebem benefícios da invisibilidade",
	descriptionFull : "Você espalha partículas douradas em um cone de 15 pés, cobrindo todas as criaturas e objetos nessa área. Cada criatura na área deve ser bem-sucedida em um teste de resistência de Constituição ou ficará cega pela duração da magia. Uma criatura que ficar cega por esta magia pode repetir o teste de resistência ao final de cada um de seus turnos, encerrando o efeito sobre si em caso de sucesso. Cada criatura na área, independentemente de ser bem-sucedida ou não no teste de resistência, não pode se beneficiar de estar invisível pela duração da magia."
};
SpellsList["grasp of the grave"] = {
	name : "Aperto da Sepultura",
	classes : ["necromancer"],
	source : ["VSoS", 342],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Uma mão encolhida",
	duration : "Conc, 1 min",
	save : "Str",
	ritual: false,
	description : "Raio de 20 pés se torna terreno difícil; criaturas que entram ou iniciam o turno fazem um teste de resistência ou sofrem 3d6+1d6/SL de dano necrótico; B",
	descriptionFull : "Braços esqueléticos espectrais emergem do chão em um círculo de 20 pés de raio, centrado em um ponto que você possa ver dentro do alcance. Os braços tentam agarrar as criaturas na área, exceto mortos-vivos, que ignoram os efeitos desta magia. A área é terreno difícil." + "\n   " + "Quando uma criatura entra na área pela primeira vez em um turno ou inicia seu turno nela, deve realizar um teste de resistência de Força. Em caso de falha, a criatura sofre 3d6 de dano necrótico e é arrastada pelas mãos até um espaço desocupado à sua escolha dentro da área. Em caso de sucesso, a criatura sofre metade do dano e não é movida." + "\n   " + "Até a magia terminar, você pode usar sua ação para forçar cada criatura na área a realizar imediatamente um teste de resistência contra esta magia." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 5º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 4º."
};
SpellsList["guided missile"] = {
	name : "Míssil Guiado",
	classes : ["Bardo", "Druida", "paladin"],
	source : ["VSoS", 342],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	ritual: false,
	description : "O próximo ataque com arma à distância tem vantagem e o dobro do alcance normal e longo",
	descriptionFull : "Você profere uma prece para guiar seu projétil, fazendo-o descrever um arco em direção ao alvo. O próximo ataque com arma à distância que você fizer antes do término da magia tem vantagem, e seus alcances normal e longo são dobrados."
};
SpellsList["halo of flame"] = {
	name : "Halo de Chamas",
	classes : ["martyr", "cleric", "paladin"],
	source : ["VSoS", 342],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:10-ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	ritual: false,
	description : "Cria um anel de 10 pés de raio e 5 pés de largura; criaturas na área fazem um teste de resistência ou sofrem 4d6+1d6/SL de dano de fogo; sucesso: metade do dano",
	descriptionFull : "Um anel de chamas se acende acima da sua cabeça e então se expande para fora, formando um círculo ardente. O círculo é composto por uma linha de chamas de 5 pés de largura, que se curva para formar um anel de 10 pés de raio ao seu redor. Cada criatura à sua escolha na área deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofre 4d6 de dano de fogo, ou metade desse dano se obtiver sucesso." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 2º."
};
SpellsList["hangover"] = {
	name : "Ressaca",
	classes : ["Bardo"],
	source : ["VSoS", 343],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "Um pequeno frasco de bebida alcoólica forte",
	duration : "Instantaneous",
	save : "Con",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou sofre 3d8+1d8/SL de dano psíquico e fica envenenada até meu próximo turno; desvantagem no teste de resistência para manter a concentração causado por esse dano",
	descriptionFull : "Você emana uma aura de embriaguez que rapidamente se dissipa, deixando a sensação de uma ressaca intensa. Uma criatura à sua escolha dentro do alcance deve ser bem-sucedida em um teste de resistência de Constituição ou sofrerá 3d8 de dano psíquico. O alvo tem desvantagem nos testes de resistência de Constituição que realizar para manter a concentração em uma magia devido a esse dano. Além disso, se falhar no teste de resistência, o alvo fica envenenado até o início do seu próximo turno." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2º."
};
SpellsList["heart of darkness"] = {
	name : "Coração das Trevas",
	classes : ["necromancer"],
	source : ["VSoS", 343],
	level : 9,
	school : "Necro",
	time : "1 h",
	range : "S:1-mile rad",
	components : "V,S,M\u0192",
	compMaterial : "Um coração de humanoide preparado com ônix e pó de diamante no valor de pelo menos 10.000 gp",
	duration : "Until dispelled",
	ritual: false,
	description : "Ergue e comanda até 100 mortos-vivos enquanto segura o coração; veja o livro",
	descriptionFull : "Ao conjurar esta magia, você perfura um coração negro de humanoide preparado ritualmente. O icor do coração infecta a terra com energias necromânticas nefastas, fazendo com que até cem pilhas de ossos ou cadáveres de humanoides Médios ou Pequenos em um raio de 1 milha se ergam dos mortos, tornando-se esqueletos ou zumbis (o GM possui as estatísticas de jogo dessas criaturas). Os mortos-vivos escavam seu caminho para fora das sepulturas, destroem mausoléus para sair deles e derrubam portões de cemitérios." + "\n   " + "A criatura que estiver segurando o coração pode usar sua ação para emitir uma ordem geral a todos os mortos-vivos criados pela magia, como destruir uma cidade ou caçar uma criatura específica. Apenas uma ordem geral pode ser emitida aos mortos-vivos a cada 24 horas. Se não receberem uma ordem, os mortos-vivos atacam indiscriminadamente as criaturas vivas, exceto a criatura que estiver segurando o coração e as criaturas designadas por ela. Uma vez que recebam uma ordem, os mortos-vivos continuam a segui-la da melhor maneira possível até que a tarefa esteja concluída." + "\n   " + "Mesmo enquanto você segura o coração, os mortos-vivos não estão diretamente sob seu controle e, portanto, não contam para quaisquer limites de mortos-vivos que você possa comandar." + "\n   " + "Os mortos-vivos permanecem animados até o término da magia. A magia termina se o coração for destruído (AC 20, HP 10, imunidade a dano necrótico, venenoso e psíquico) ou se for alvo de uma magia dissipar magia conjurada como uma magia de 9º nível. Quando a magia termina, todos os mortos-vivos animados por ela são instantaneamente destruídos, desmoronando em uma pilha de restos. A magia também termina se todos os mortos-vivos criados por ela forem destruídos."
};
SpellsList["hocuspocus"] = {
	name : "Abracadabra",
	classes : ["necromancer", "Bruxa", "warlock"],
	source : ["VSoS", 343],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 min",
	ritual: false,
	description : "Fenômenos menores; velas tremeluzem; sons baixos; orbes brilhantes; ar frio/quente; B",
	descriptionFull : "Você conjura fenômenos paranormais menores e outros efeitos sinistros. Você cria um dos seguintes efeitos mágicos dentro do alcance por 1 minuto:" + "\n •" + "Você faz com que todas as velas, tochas e outras chamas expostas escureçam e tremeluzam." + "\n •" + "Você cria um som baixo que se origina de um ponto à sua escolha dentro do alcance, como sussurros sinistros, o zumbido de insetos ou o som de choro." + "\n •" + "Você cria até quatro orbes espectrais brilhantes do tamanho de uma tocha, que flutuam dentro do alcance. Os orbes não fornecem iluminação, apenas um brilho tênue."  + "\n •" + "Você pode resfriar ou aquecer o ar em um cubo de 10 pés em 10 graus." + "\n •" + "Você faz com que pequenos objetos que não estejam sendo vestidos ou carregados chacoalhem ou levitem a uma polegada do chão." + "\n   " + "Se você conjurar esta magia várias vezes, poderá manter até três de seus efeitos ativos ao mesmo tempo e poderá encerrar um desses efeitos com uma ação."
};
SpellsList["hollowing curse"] = {
	name : "Maldição do Esvaziamento",
	classes : ["necromancer", "Bruxa", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 344],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	ritual: false,
	description : "1 criatura faz teste de resistência ou sofre 2d6+1d6/SL de dano necrótico; posso usar 1 ação para causar 1d6+1d6/SL de dano necrótico; sucesso: metade; B",
	descriptionFull : "Tentáculos de névoa negra se estendem das pontas dos seus dedos, prendendo-se a uma criatura e drenando sua vitalidade. Escolha uma criatura que você possa ver dentro do alcance para realizar um teste de resistência de Destreza. Se falhar, o alvo sofre 2d6 de dano necrótico e fica amaldiçoado por até um minuto. Se obtiver sucesso, o alvo sofre metade do dano e não fica amaldiçoado. Enquanto o alvo estiver amaldiçoado, você pode usar sua ação para causar automaticamente 1d6 de dano necrótico a ele. A maldição termina antecipadamente se você usar sua ação para fazer qualquer outra coisa, se o alvo sair do alcance da magia ou se tiver cobertura total em relação a você. Uma magia remover maldição também encerra esta maldição." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano inicial e o secundário aumentam, cada um, em 1d6 para cada nível do espaço acima do 1º."
};
SpellsList["hunger of the earth"] = {
	name : "Fome da Terra",
	classes : ["Druida", "Mago"],
	source : ["VSoS", 344],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	save : "Str",
	ritual: false,
	description : "1 criatura Grande ou menor faz teste de resistência ou é puxada para dentro do solo; veja o livro",
	descriptionFull : "Escolha uma criatura Grande ou menor que esteja no chão dentro do alcance. A terra se abre sob essa criatura e tenta engoli-la. O alvo deve realizar um teste de resistência de Força ou ficará impedido pela duração. Além disso, se o alvo falhar no teste de resistência, começará a afundar no solo." + "\n   " + "Um alvo impedido, ou outra criatura a até 5 pés dele, pode tentar libertar o alvo usando uma ação para realizar um teste de Força contra a CD para evitar suas magias, libertando-o em caso de sucesso. O alvo tem desvantagem nesse teste de Força. A magia termina antecipadamente se o alvo for libertado." + "\n   " + "No final do turno do alvo, ele afunda mais no solo. Uma criatura Pequena ou menor afunda completamente no solo após 2 rodadas afundando, uma criatura Média afunda completamente após 3 rodadas e uma criatura Grande afunda completamente após 4 rodadas. Se um alvo afundar completamente no solo, ele começa a sufocar."
};
SpellsList["ice claw prison"] = {
	name : "Prisão de Garra de Gelo",
	classes : ["Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 344],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma garra de cristal",
	duration : "Conc, 1 min",
	save : "Str",
	ritual: false,
	description : "Cria uma mão de gelo Grande que pode Cortar, Aprisionar ou Soltar sob comando; veja o livro",
	descriptionFull : "Você escolhe um quadrado desocupado de 10 pés de lado que possa ver dentro do alcance. Uma mão Grande com garras, feita de gelo afiado como navalha, aparece nesse espaço e permanece pela duração da magia. Ela age sob seu comando, mas não pode se mover de sua localização inicial." + "\n   " + "A mão é um objeto com CA 18 e pontos de vida iguais à metade do seu máximo de pontos de vida. Ela tem imunidade a dano venenoso e psíquico. Se seus pontos de vida forem reduzidos a 0, a magia termina. A garra não preenche seu espaço. Ao conjurar a magia e, como uma ação bônus nos seus turnos subsequentes, você pode ordenar que a garra execute uma das seguintes tarefas:" + "\n   " + toUni("Cortar") + ": A garra golpeia um alvo a até 10 pés dela. Faça um ataque mágico corpo a corpo usando seu próprio bônus de ataque mágico. Se acertar, o alvo sofre 3d8 de dano cortante ou de frio (à sua escolha)." + "\n   " + toUni("Aprisionar") + ": A garra agarra uma criatura Grande ou menor a até 10 pés dela. O alvo deve ser bem-sucedido em um teste de resistência de Força contra a CD para evitar suas magias ou será arrastado para o espaço da garra e ficará impedido pela duração da magia. Ao final de cada um de seus turnos, o alvo impedido pode fazer um teste de Força contra a CD para evitar suas magias. Em caso de sucesso, o alvo escapa e não está mais impedido pela mão, mas, em caso de falha, sofre 1d8 de dano de frio. Enquanto uma criatura estiver impedida pela mão, a mão não pode aprisionar nem cortar outra criatura. A garra pode cortar uma criatura que tenha aprisionado." + "\n   " + toUni("Soltar") + ": A garra solta um alvo aprisionado, que não está mais impedido." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 4º nível ou superior, o dano das opções Cortar e Aprisionar aumenta em 1d8 para cada nível do espaço acima do 3º."
};
SpellsList["icicle javelin"] = {
	name : "Azagaia de Gelo",
	classes : ["Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 344],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um pequeno pingente de gelo",
	duration : "Instantaneous",
	save : "Str",
	ritual: false,
	description : "Ataque mágico à distância que causa 3d8+1d8/SL de dano de frio e prende a uma superfície adjacente; B",
	descriptionFull : "Você arremessa um enorme pingente de gelo contra um alvo à sua escolha dentro do alcance. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 3d8 de dano de frio. Se o alvo também estiver adjacente a uma parede ou a um objeto semelhante, grande e imóvel, ele também poderá ficar preso a essa superfície no próximo turno dele. No início de seu turno, o alvo pode fazer um teste de resistência de Força. Em caso de falha, seu deslocamento é 0 até o início do próximo turno dele." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 1º."
};
SpellsList["identity curse"] = {
	name : "Maldição da Identidade",
	classes : ["Bruxa"],
	source : ["VSoS", 345],
	level : 9,
	school : "Ench",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Until dispelled",
	save : "Wis",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou esquece sua identidade e suas memórias pessoais (mas não suas estatísticas)",
	descriptionFull : "Você estende um dedo até a têmpora de uma criatura, que então esquece o próprio nome. Escolha uma criatura que você possa tocar para realizar um teste de resistência de Sabedoria. Se falhar, o alvo fica inconsciente por 1 hora e é amaldiçoado a esquecer sua identidade. Quando desperta, o alvo perde todas as suas memórias pessoais, mas mantém todos os seus conhecimentos gerais, proficiências e demais estatísticas. O alvo não percebe que possui características de classe ou habilidades especiais e, por isso, não as usa voluntariamente. Se deixado por conta própria, o alvo rapidamente adota um novo nome e começa a construir uma nova identidade." + "\n   " + "Uma magia remover maldição conjurada com um espaço de magia de 9º nível encerra esta maldição. Quando esta maldição termina, o alvo recupera todas as suas memórias anteriores."
};
SpellsList["impressions of the past"] = {
	name : "Impressões do Passado",
	classes : ["cleric", "Mago"],
	source : ["VSoS", 345],
	level : 7,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Uma ampulheta e um olho de vidro no valor de pelo menos 100 gp",
	duration : "Conc, 1 min",
	save : "Wis",
	ritual: false,
	description : "Observe, com todos os sentidos, um momento de até 100 anos atrás; compartilhe o efeito com um espaço de magia de 8º nível ou superior",
	descriptionFull : "Você projeta seus sentidos para o passado para perceber sua localização atual como ela era em algum momento anterior, incluindo quaisquer eventos que estavam ocorrendo naquele momento. Você deve especificar o momento exato que deseja observar, que não pode ser de mais de 100 anos atrás. Ao observar o passado, ele parece onírico e sombrio, mas você consegue distinguir detalhes e ouvir conversas normalmente, e quaisquer sentidos especiais que possua, como visão no escuro, também funcionam normalmente." + "\n   " + "Enquanto percebe o passado, você pode olhar em qualquer direção, mas não pode se mover nem falar, e é incapaz de perceber o ambiente ao seu redor no presente." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 8º nível ou superior, pode compartilhá-la com uma outra criatura que tocar. Um alvo involuntário pode realizar um teste de resistência de Sabedoria para evitar ser afetado."
};
SpellsList["indemnify"] = {
	name : "Indenizar",
	classes : ["martyr", "necromancer"],
	source : ["VSoS", 345],
	level : 1,
	school : "Necro",
	time : "1 bns",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "Uma gota de sangue",
	duration : "Conc, 1 h",
	save : "Con",
	ritual: false,
	description : "1 criatura faz teste de resistência ou sofre 1d8 de dano Rad/Necro sempre que eu perder HP enquanto estiver no alcance",
	descriptionFull : "Você lança uma gota de sangue em um alvo que possa ver dentro do alcance, marcando-o para um acerto de contas. O alvo deve realizar um teste de resistência de Constituição. Se falhar, o alvo sofre 1d8 de dano radiante ou necrótico, à sua escolha, sempre que você perder pontos de vida durante a duração. Esta magia termina antecipadamente se o alvo começar seu turno a mais de 60 pés de você."
};
SpellsList["inevitable boulder"] = {
	name : "Rochedo Inevitável",
	classes : ["Druida", "Mago"],
	source : ["VSoS", 345],
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma pedra quase esférica",
	duration : "Conc, 1 min",
	save : "Dex",
	ritual: false,
	description : "Crie um rochedo que se move 60 pés em direção ao alvo a cada turno; veja o livro",
	descriptionFull : "Em um ponto à sua escolha dentro do alcance, você conjura um rochedo Grande com 8 pés de diâmetro, que rola em perseguição a uma criatura à sua escolha que você possa ver. O rochedo tem AC 18, 75 HP, imunidade a dano venenoso e psíquico e resistência a dano contundente, perfurante e cortante de ataques não mágicos. Se o rochedo for reduzido a 0 pontos de vida, ele desaparece e a magia termina." + "\n   " + "No início de cada um dos seus turnos, o rochedo se move 60 pés na direção de seu alvo. Se o rochedo entrar no espaço de uma criatura, ela deve realizar um teste de resistência de Destreza. Se falhar, sofre 6d10 de dano contundente e, se seu tamanho for Grande ou menor, fica caída. Em caso de sucesso, a criatura sofre metade do dano e não fica caída. O rochedo também esmaga objetos não mágicos menores que ele em seu caminho. Se o rochedo alcançar seu alvo, passa por cima dele e segue adiante, completando seu movimento de 60 pés. O rochedo continua a perseguir seu alvo pela duração, passando por cima dele mais de uma vez, se possível." + "\n   " + "Depois que a magia termina, o rochedo continua a perseguir seu alvo por até 24 horas. Assim que o rochedo atingir seu alvo após o término da magia, ele desaparece imediatamente."
};
SpellsList["inexorable sarcophagus"] = {
	name : "Sarcófago Inexorável",
	classes : ["necromancer"],
	source : ["VSoS", 346],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M\u0192",
	compMaterial : "Um sarcófago em miniatura finamente trabalhado, no valor mínimo de 1.000 po",
	duration : "Conc, 1 min",
	save : "Dex",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou fica presa dentro de um sarcófago; veja o livro",
	descriptionFull : "Você arremessa um sarcófago do tamanho da palma da mão em um ponto desocupado que possa ver dentro do alcance. Ali, ele cresce instantaneamente até seu tamanho normal e tenta enredar uma criatura Média ou menor a até 5 pés dele com faixas de gaze encardidas. A criatura deve ser bem-sucedida em um teste de resistência de Destreza ou fica impedida e é puxada para dentro do sarcófago aberto." + "\n   " + "A gaze que mantém a criatura impedida é um objeto com AC 10 e 100 HP. Ela tem vulnerabilidade a dano cortante e de fogo e imunidade a dano psíquico e de veneno. Se for reduzida a 0 pontos de vida, a magia termina." + "\n   " + "Uma criatura impedida por esta magia deve fazer outro teste de resistência de Destreza ao final de cada um de seus turnos. Se for bem-sucedida nos testes de resistência contra esta magia três vezes, ela se desvencilha da gaze, encerrando a magia. Se falhar três vezes, o sarcófago se fecha com força e afunda nas profundezas da terra. A criatura é envolvida pela gaze da cabeça aos pés e fica incapacitada. A magia termina, mas o sarcófago permanece enterrado. O sarcófago contém ar suficiente para 1 minuto, e a criatura começa a sufocar após esse período." + "\n   " + "Se um humanoide morrer dentro do sarcófago, ele se ergue 24 horas depois como uma múmia sob seu controle, conforme a magia criar mortos-vivos. Você só pode comandar uma múmia animada por esta magia por vez." + "\n   " + "A qualquer momento após esta magia terminar, você pode usar uma ação para fazer o sarcófago subir à superfície. Você também pode usar sua ação para reduzir o sarcófago ao tamanho original enquanto ele estiver desocupado."
};
SpellsList["instant replay"] = {
	name : "Repetição Instantânea",
	classes : ["martyr", "Bardo", "paladin", "Ranger"],
	source : ["VSoS", 346],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 min",
	ritual: false,
	description : "Na próxima vez que eu errar um ataque, posso repetir a jogada",
	descriptionFull : "Na próxima vez que você errar um ataque contra uma criatura antes de esta magia terminar, você pode retornar instantaneamente ao momento anterior ao ataque e repeti-lo contra o mesmo alvo."
};
SpellsList["intensify gravity"] = {
	name : "Intensificar Gravidade",
	classes : ["cleric", "Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 346],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "100 ft",
	components : "V,S,M",
	compMaterial : "Uma magnetita e limalha de ferro",
	duration : "Conc, 1 min",
	ritual: false,
	description : "Criaturas na área gastam o dobro de movimento (incluindo escalada, voo etc.); acumula com terreno difícil; B",
	descriptionFull : "Esta magia intensifica a gravidade em um cilindro de 50 pés de raio e 100 pés de altura, centrado em um ponto dentro do alcance. Cada criatura nessa área deve gastar dois pés de movimento para cada pé percorrido, incluindo movimento de voo, salto e escalada. Esse efeito pode ser combinado com terreno difícil para reduzir o movimento a um quarto do deslocamento normal. Se uma criatura caída quiser se levantar, ela deve ser bem-sucedida em um teste de Força contra a CD para evitar suas magias. Em caso de falha, ela não pode se mover de forma alguma nesse turno." + "\n   " + "Objetos na área, incluindo os que estão sendo vestidos ou carregados, pesam o dobro do peso normal, o que pode fazer com que criaturas fiquem sobrecarregadas ou que magias que sustentam peso, como levitação, falhem. Quaisquer ataques à distância com arma que entrem na área, saiam dela ou a atravessem têm desvantagem, e qualquer dano de queda causado dentro da área da magia é dobrado."
};
SpellsList["intrusive thought"] = {
	name : "Pensamento Intrusivo",
	classes : ["Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 346],
	level : 2,
	school : "Ench",
	time : "1 rea",
	timeFull : "1 reação, que você realiza quando vê uma criatura a até 60 pés de você realizando uma ação",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	ritual: false,
	description : "1 criatura realizando uma ação faz um teste de resistência ou realiza outra ação à minha escolha em vez dela; B",
	descriptionFull : "Como uma reação quando uma criatura que você possa ver dentro do alcance usa sua ação para atacar ou realiza a ação Disparada, Esquivar ou Desengajar, você pode tentar distorcer seus pensamentos. O alvo realiza um teste de resistência de Sabedoria. Um alvo é automaticamente bem-sucedido nesse teste de resistência se não puder ser enfeitiçado. Em caso de falha, a criatura realiza uma ação à sua escolha dentre essas opções, em vez da ação que pretendia realizar."
};
SpellsList["invisibility purge"] = {
	name : "Expurgar Invisibilidade",
	classes : ["investigator", "Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 346],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "S:120-ft rad",
	components : "V,S,M\u0192",
	compMaterial : "prata em pó no valor de pelo menos 100 gp",
	duration : "Instantaneous",
	ritual: false,
	description : "Efeitos de invisibilidade no alcance são dissipados, se possível, ou suprimidos por 1 min. caso contrário, exceto invisibilidade inata.",
	descriptionFull : "Você expurga efeitos de invisibilidade mágica a até 120 pés de você. Qualquer criatura, objeto, local ou efeito a até 120 pés de você que esteja oculto por invisibilidade mágica é revelado, e a invisibilidade é dissipada." + "\n   " + "Esta magia se aplica a habilidades inatas de natureza mágica, como a Invisibilidade de um diabrete, mas não afeta criaturas em outros planos de existência, como o Plano Etéreo. Ela também não revela criaturas naturalmente invisíveis. Itens que concedem invisibilidade mágica (como um anel de invisibilidade) têm seus efeitos suprimidos por 1 minuto."
};
SpellsList["jam weapon"] = {
	name : "Emperrar Arma",
	classes : ["Bruxa", "Bardo", "Mago"],
	source : ["VSoS", 347],
	level : 2,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reação, realizada quando uma criatura que você possa ver dentro do alcance ataca com uma arma de fogo",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Uma pitada de pólvora molhada",
	duration : "Instantaneous",
	ritual: false,
	description : "Emperra 1+1/SL arma de fogo, impedindo que dispare; 1 ação para desemperrar.",
	descriptionFull : "A arma de fogo que você escolhe como alvo emperra ao disparar. O ataque falha, e a arma de fogo fica emperrada. Uma arma de fogo emperrada não pode ser usada para realizar um ataque até que uma criatura use sua ação para corrigir o mau funcionamento da arma. Em Níveis Superiores. Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, pode emperrar uma arma de fogo adicional dentro do alcance para cada nível do espaço acima do 2º."
};
SpellsList["jethro's instant reload"] = {
	name : "Recarga Instantânea de Jethro",
	classes : ["investigator", "Bardo", "Ranger", "Mago"],
	source : ["VSoS", 347],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Um estojo de munição deflagrada",
	duration : "1 h",
	ritual: true,
	description : "1 arma recarrega automaticamente; se a arma levar 1 ação ou mais para recarregar, ela recarrega ao final do turno.",
	descriptionFull : "Uma arma à distância que você toca é encantada para recarregar automaticamente. Se a arma tiver a propriedade Carregamento ou Recarga, você pode ignorá-la pela duração da magia. Quando a munição da arma se esgota, nova munição é teleportada de seus pertences para sua mão ou para dentro da arma, conforme apropriado. Se a arma levar uma ação ou mais para recarregar, ela recarrega automaticamente ao final do seu turno. Se você não estiver carregando munição suficiente para recarregar a arma, a magia termina."
};
SpellsList["lashing tendrils"] = {
	name : "Tentáculos Açoitadores",
	classes : ["warlock"],
	source : ["VSoS", 347],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A ponta de um tentáculo de polvo",
	duration : "Conc, 1 min",
	save : "Dex",
	ritual: false,
	description : "Criatura que se aproxima a até 5 pés de você ou começa o turno ali faz um teste de resistência; falha: 1d6+1d6/SL de dano contundente, até 6d6; sucesso: metade do dano.",
	descriptionFull : "Tentáculos grotescos e açoitados brotam de você e atacam automaticamente criaturas próximas. Quando uma criatura se aproxima a até 5 pés de você ou começa seu turno ali, ela deve realizar um teste de resistência de Destreza. A criatura sofre 1d6 de dano contundente em caso de falha, ou metade desse dano em caso de sucesso." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1º, até o máximo de 6d6."
};
SpellsList["legendary libation"] = {
	name : "Libação Lendária",
	classes : ["Bardo", "cleric", "Druida"],
	source : ["VSoS", 347],
	level : 0,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V,M",
	compMaterial : "Um recipiente, como uma caneca, uma caneca de cerveja ou um cantil, cheio de líquido que é purificado pela magia",
	duration : "Instantaneous",
	ritual: false,
	description : "Uma bebida que sacia a sede por 24 h; quem a bebe também recebe vantagem em testes de resistência contra medo por 1 h",
	descriptionFull : "Você pronuncia uma palavra de poder, e seu recipiente se enche com uma bebida à sua escolha, que pode ser consumida com uma ação. A bebida é deliciosa e sacia a sede de quem a bebe pelas próximas 24 horas. Além disso, por uma hora após consumir esta libação, a criatura tem vantagem nos testes de resistência que fizer para evitar ou encerrar a condição amedrontado em si mesma. Se a bebida não for consumida dentro de uma hora após ser conjurada, ela perde sua magia e se transforma em água comum e sem sabor." + "\n   " + "Uma criatura não pode se beneficiar de mais de uma libação lendária em um mesmo período de 24 horas."
};
SpellsList["lightning surge"] = {
	name : "Surto de Relâmpagos",
	classes : ["necromancer", "warmage", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 347],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:5-ft rad",
	components : "V,S,M",
	compMaterial : "Dois pedaços de fio de cobre",
	duration : "Instantaneous",
	save : "Dex",
	ritual: false,
	description : "Criaturas a até 5 pés fazem teste de resistência ou sofrem 1d6 de dano elétrico; +1d6 CL5/11/17",
	descriptionCantripDie : "Criaturas a até 5 pés fazem teste de resistência ou sofrem `CD`d6 de dano elétrico",
	descriptionFull : "Você emite uma profusão deslumbrante de relâmpagos curtos em todas as direções. Todas as outras criaturas a até 5 pés de você devem ser bem-sucedidas em um teste de resistência de Destreza ou sofrer 1d6 de dano elétrico." + "\n   " + "O dano desta magia aumenta em 1d6 quando você alcança o 5º nível (2d6), o 11º nível (3d6) e o 17º nível (4d6)."
};
SpellsList["magic daggers"] = {
	name : "Adagas Mágicas",
	classes : ["warmage", "Bardo"],
	source : ["VSoS", 347],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico à distância com adaga, 1d6 de dano perfurante; CL5:2, CL11:3, CL17:4 adagas",
	descriptionCantripDie : "`CD` ataques mágicos à distância que causam 1d6 de dano perfurante cada",
	descriptionFull : "Com um floreio, você conjura do nada uma adaga de arremesso feita de energia mágica e, com um movimento do pulso, a lança contra um alvo que possa ver. Faça uma jogada de ataque mágico à distância contra uma criatura dentro do alcance. Se acertar, o alvo sofre 1d6 de dano perfurante mágico. A adaga desaparece após o ataque." + "\n   " + "Em níveis superiores, você conjura mais adagas de energia e faz ataques adicionais: duas adagas no 5º nível, três adagas no 11º nível e quatro adagas no 17º nível. Você pode usar as adagas para atacar o mesmo alvo ou alvos diferentes. Faça uma jogada de ataque separada para cada adaga."
};
SpellsList["mandy's enchanted carriage"] = {
	name : "Carruagem Encantada de Mandy",
	classes : ["Bruxa", "Druida"],
	source : ["VSoS", 348],
	level : 4,
	school : "Trans",
	time : "1 min",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "Um vegetal",
	duration : "Special",
	ritual: false,
	description : "Cria uma carruagem para seis pessoas, que dura até a meia-noite ou por 24 h; veja o livro",
	descriptionFull : "Você transforma um vegetal em uma carruagem mágica Grande, equipada com rédeas e dois cavalos quase reais. A carruagem é luxuosa e transporta até seis passageiros — quatro em seu interior e dois no alto, no banco do cocheiro. As criaturas dentro da carruagem têm cobertura total contra efeitos externos, mas podem enxergar o lado de fora por duas janelas compostas de energia mágica. Enquanto estiver sentada no banco do cocheiro, uma criatura pode controlar a carruagem, que tem deslocamento de 100 pés e pode percorrer 10 milhas em uma hora, ou 13 milhas em ritmo rápido." + "\n   " + "A duração desta magia varia conforme quando e onde ela foi conjurada. Se for conjurada em um local onde o tempo passa normalmente, a magia dura até a décima segunda badalada da próxima meia-noite, independentemente de quanto tempo isso leve. Em outros locais, a magia dura 24 horas. Quando a magia termina, os ocupantes da carruagem são ejetados para espaços desocupados adjacentes, a carruagem encolhe e volta a ser um vegetal, e os cavalos quase reais desaparecem." + "\n   " + "A carruagem e os cavalos contam como um único objeto com 12 AC e 100 HP. A magia termina antecipadamente se a carruagem e os cavalos forem reduzidos a 0 pontos de vida."
};
SpellsList["mandy's feral follower"] = {
	name : "Seguidor Feral de Mandy",
	classes : ["Bruxa", "Druida"],
	source : ["VSoS", 348],
	level : 4,
	school : "Trans",
	time : "1 min",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "Uma pequena sineta de chamar criados",
	duration : "Special",
	ritual: false,
	description : "Transforma 1+1/SL Bestas Pequenas/Miúdas em plebeus sob meu comando",
	descriptionFull : "Após passar o tempo de conjuração cantando uma canção, você toca uma besta Pequena ou menor. O alvo deve ter Inteligência 3 ou menos. A besta então se transforma em um humanoide com as estatísticas de um plebeu e uma aparência à sua escolha. O plebeu é amistoso com você e seus aliados, tem uma compreensão básica de todas as tarefas simples que não exigem treinamento e pode entender os idiomas que você fala, mas não fala. O plebeu veste roupas comuns, mas não possui nenhum outro equipamento." + "\n   " + "Em combate, o plebeu rola sua própria iniciativa e age em seu próprio turno. Ele se comporta como se fosse seu empregado dedicado." + "\n   " + "A duração desta magia varia conforme quando e onde ela foi conjurada. Se for conjurada em um local onde o tempo passa normalmente, a magia dura até a décima segunda badalada da próxima meia-noite, independentemente de quanto tempo isso leve. Em outros locais, a magia dura 24 horas." + "\n   " + "A transformação permanece pela duração da magia, ou até o alvo cair a 0 pontos de vida ou morrer. Quando reverte à sua forma verdadeira, a criatura retorna ao número de pontos de vida que tinha antes de se transformar. Se reverter por ter caído a 0 pontos de vida, qualquer dano excedente é transferido para sua forma verdadeira. Desde que o dano excedente não reduza a forma normal da criatura a 0 pontos de vida, ela não fica inconsciente." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 5º nível ou superior, pode transformar um animal adicional para cada nível do espaço de magia acima do 4º."
};
SpellsList["mandy's marvelous dress"] = {
	name : "Vestido Maravilhoso de Mandy",
	classes : ["Bruxa", "Bardo"],
	source : ["VSoS", 349],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "Um sapatinho de vidro no valor de pelo menos 100 gp",
	duration : "Conc, special",
	save : "Wis",
	ritual: false,
	description : "1 criatura pode substituir o d20 de um teste de Carisma por 10; atacantes fazem teste de resistência ou erram; dura até a meia-noite ou por 24 h",
	descriptionFull : "Uma criatura voluntária que você toca é instantaneamente vestida com um fabuloso vestido de baile, perfeitamente ajustado e acompanhado de um conjunto de joias cintilantes. Você pode escolher que o vestido fique sobre as roupas ou a armadura da criatura, ou que substitua magicamente seu traje. A criatura não pode remover o vestido até a magia terminar; da mesma forma, as joias desaparecem se forem removidas do vestido. Até a magia terminar, quando a criatura que veste o vestido fizer um teste de Carisma, ela pode substituir o número obtido na rolagem por 10." + "\n   " + "Além disso, se a criatura que veste o vestido for atacada por uma criatura que possa vê-la, o atacante deve ser bem-sucedido em um teste de resistência de Sabedoria ou errar o ataque. Em caso de sucesso, o atacante fica imune a esse efeito até esta magia terminar." + "\n   " + "A duração desta magia varia conforme quando e onde ela foi conjurada. Se for conjurada em um local onde o tempo passa normalmente, a magia dura até a décima segunda badalada da próxima meia-noite, independentemente de quanto tempo isso leve. Em outros locais, a magia dura 24 horas. Quando a magia termina, o vestido desaparece em uma nuvem de brilhos, e a criatura volta a vestir seu traje original."
};
SpellsList["mass skirmish"] = {
	name : "Escaramuça em Massa",
	classes : ["cleric", "Mago"],
	source : ["VSoS", 349],
	level : 7,
	school : "Trans",
	time : "1 a",
	range : "S:30-ft rad",
	components : "V,S,M",
	compMaterial : "Um galho de árvore",
	duration : "Conc, 10 min",
	ritual: false,
	description : "Qualquer número de criaturas recebe +15 pés de deslocamento, ignora terreno difícil e não provoca ataques de oportunidade",
	descriptionFull : "Esta magia permite que você aprimore a mobilidade de qualquer número de criaturas voluntárias que possa ver dentro do alcance. Você fortalece cada alvo, permitindo que se mova facilmente através de formações inimigas. Pela duração, o deslocamento de cada alvo aumenta em 15 pés, ele não é afetado por terreno difícil não mágico e não provoca ataques de oportunidade."
};
SpellsList["memorize"] = {
	name : "Memorizar",
	classes : ["investigator", "necromancer", "Bardo", "cleric", "Mago"],
	source : ["VSoS", 349],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Uma página de texto escrito e um pedaço de fio de prata no valor de 10 po, amarrado em um nó, que a magia consome",
	duration : "Instantaneous",
	ritual: true,
	description : "Memoriza perfeitamente uma página por 1 ano; vantagem em testes de Inteligência para recordá-la",
	descriptionFull : "Ao conjurar esta magia, seus olhos percorrem as palavras da página, que são gravadas em sua memória. Durante o próximo ano, você se lembra com exatidão dos detalhes de todas as informações dessa página. Após esse período, você tem vantagem em todos os testes de Inteligência que fizer para recordar essas informações."
};
SpellsList["might of the abyss"] = {
	name : "Poder do Abismo",
	classes : ["necromancer", "cleric"],
	source : ["VSoS", 349],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "15 ft",
	components : "V,S,M",
	compMaterial : "Uma pequena tira de fita preta",
	duration : "Conc, 1 min",
	ritual: false,
	description : "3+1/SL criaturas (exceto você) recebem +1d4 de dano em ataques com arma enquanto estiverem no alcance; alcance 20 ao conjurar com espaço de nível superior",
	descriptionFull : "Você canaliza um poder sombrio de uma fonte extraplanar, fortalecendo três criaturas além de você dentro do alcance. Sempre que um alvo fizer um ataque com arma, ele acrescenta 1d4 de dano à rolagem de dano. Se um alvo se afastar mais de 15 pés de você, ele perde o efeito até estar dentro do alcance novamente." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o alcance aumenta em 5 pés, e você pode escolher uma criatura adicional como alvo para cada nível do espaço acima do 1º."
};
SpellsList["minor lifesteal"] = {
	name : "Roubo de Vida Menor",
	classes : ["necromancer", "Feiticeiro", "Mago"],
	source : ["VSoS", 349],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 criatura faz um teste de resistência ou sofre 1d4 de dano necrótico, e você ganha esse valor em pontos de vida temporários; +1d4 CL5/11/17",
	descriptionCantripDie : "1 criatura faz um teste de resistência ou sofre `CD`d4 de dano necrótico, e você ganha esse valor em pontos de vida temporários",
	descriptionFull : "Você drena a energia vital de uma criatura hostil que possa ver dentro do alcance. O alvo deve ser bem-sucedido em um teste de resistência de Constituição ou sofrerá 1d4 de dano necrótico. Em seguida, você ganha pontos de vida temporários iguais à quantidade de dano causado, que duram até você terminar um descanso longo. Esta magia não afeta mortos-vivos nem constructos." + "\n   " + "O dano desta magia aumenta em 1d4 quando você alcança o 5º nível (2d4), o 11º nível (3d4) e o 17º nível (4d4)."
};
SpellsList["moment to think"] = {
	name : "Momento para Pensar",
	classes : ["warmage", "cleric", "Feiticeiro", "Mago"],
	source : ["VSoS", 350],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Instantaneous",
	ritual: false,
	description : "Mova-se dentro do seu espaço e realize a ação Procurar, Usar um Objeto ou um teste de Int para recordar informações enquanto o tempo está parado",
	descriptionFull : "Ao conjurar esta magia, você interrompe brevemente o tempo para todos, exceto você. Você pode realizar uma ação adicional e se mover dentro do seu espaço enquanto nenhum tempo passa para as outras criaturas. Essa ação só pode ser usada para realizar a ação Procurar ou Usar um Objeto, ou para fazer um teste de Inteligência para recordar informações sobre algo." + "\n   " + "Além disso, você não pode afetar nem causar dano a qualquer criatura ou objeto, exceto aos objetos que estiver vestindo ou carregando. Se um objeto sair da sua mão, ele também fica congelado no tempo."
};
SpellsList["nondescript"] = {
	name : "Aparência Comum",
	classes : ["investigator", "necromancer", "Bruxa", "Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 350],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	ritual: false,
	description : "Criaturas que me veem enquanto estou sob o efeito desta magia não conseguem se lembrar da minha aparência",
	descriptionFull : "Esta magia faz você parecer comum e sem características marcantes para os outros, embora não altere sua aparência real. Criaturas que veem você enquanto estiver sob o efeito desta magia não conseguem recordar detalhes específicos da sua aparência quando perguntadas se viram você ou alguém que corresponda à sua descrição. No entanto, suas lembranças das ações que você realizou ou dos eventos que vivenciaram não são afetadas."
};
SpellsList["paradox"] = {
	name : "Paradoxo",
	classes : ["Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 350],
	level : 9,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Desfaça 1 ação da última rodada e seus efeitos diretos; a criatura que a realizou sofre 10d8 de dano psíquico",
	descriptionFull : "Ao torcer o fluxo do tempo em nós, você desfaz uma ação à sua escolha realizada dentro do alcance durante a última rodada. A realidade então se restabelece, reagindo ao dano causado pela remoção de um evento do tempo. Os efeitos diretos dessa ação, como o dano causado por um ataque ou magia, são desfeitos, mas os efeitos indiretos, como criaturas decidindo se mover para outros locais, não são. A criatura que realizou a ação sofre 10d8 de dano psíquico ao lidar com a alteração de sua história."
};
SpellsList["perforating smite"] = {
	name : "Destruição Perfurante",
	classes : ["paladin"],
	source : ["VSoS", 350],
	level : 2,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	ritual: false,
	description : "O próximo ataque com arma de fogo se torna uma linha de 5 pés de largura até o alcance normal; criaturas na área fazem um teste de resistência contra o dano normal; sucesso: metade do dano",
	descriptionFull : "Na próxima vez que você realizar um ataque com uma arma de fogo antes do término desta magia, o disparo será carregado com uma quantidade incrível de poder. Em vez de realizar uma jogada de ataque contra um único alvo, o disparo se torna uma linha de 5 pés de largura que se estende de você até o alcance normal da arma. Cada criatura nessa linha deve realizar um teste de resistência de Destreza. Uma criatura sofre o dano normal da arma se falhar no teste, ou metade desse dano se obtiver sucesso."
};
SpellsList["petal storm"] = {
	name : "Tempestade de Pétalas",
	classes : ["Bruxa", "Druida"],
	source : ["VSoS", 350],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um punhado de pétalas de flores",
	duration : "Conc, 1 min",
	save : "Str",
	ritual: false,
	description : "Criaturas que entram na área ou começam o turno nela fazem um teste de resistência ou sofrem 3d4+2d4/SL de dano cortante; mova 30 pés como ação bônus; B",
	descriptionFull : "Escolha um cubo de ar desocupado de 15 pés de lado que você possa ver dentro do alcance. Uma força elemental de ventos rodopiantes surge no cubo e permanece pela duração da magia. A nuvem deixa sua área sob obscurecimento pesado." + "\n   " + "Qualquer criatura que entrar na tempestade pela primeira vez em um turno ou começar seu turno nela deve realizar um teste de resistência de Força. Se falhar, a criatura sofre 3d4 de dano cortante. Como uma ação bônus, você pode mover a tempestade até 30 pés em qualquer direção. Na primeira vez que a área da tempestade contiver folhas caídas, flores, arbustos ou árvores, ela suga material adicional, e o dano causado pela magia aumenta em 2d4." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, o dano aumenta em 2d4 para cada nível do espaço acima do 2º."
};
SpellsList["phantasmal beauty"] = {
	name : "Beleza Fantasmagórica",
	classes : ["Bruxa", "Bardo", "Mago"],
	source : ["VSoS", 350],
	level : 3,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou fica incapacitada, não pode se mover e tem desvantagem em todos os testes de Sabedoria (Percepção)",
	descriptionFull : "Você acessa os sonhos de uma criatura que possa ver dentro do alcance e cria uma manifestação ilusória de seus desejos mais profundos, visível apenas para essa criatura. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar, o alvo fica incapacitado e incapaz de se mover pela duração da magia. Além disso, ele tem desvantagem em todos os testes de Sabedoria (Percepção) que realizar. Ao final de cada um de seus turnos, o alvo pode realizar outro teste de resistência de Sabedoria. Em caso de sucesso, a magia termina para o alvo."
};
SpellsList["phantom grapnel"] = {
	name : "Arpéu Fantasma",
	classes : ["warmage"],
	source : ["VSoS", 351],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	ritual: false,
	description : "Move você até uma criatura Enorme ou maior ou um espaço desocupado, ou puxa uma criatura Grande ou menor 10 pés em sua direção se ela falhar no teste de resistência",
	descriptionFull : "Você conjura uma corrente e um gancho feitos de força mágica, que lança contra uma criatura ou um espaço desocupado que possa ver dentro do alcance. Quando você tem como alvo um espaço ou uma criatura de tamanho Enorme ou maior, seu arpéu puxa você até esse alvo em linha reta. Você provoca ataques de oportunidade por esse movimento normalmente. Quando você tem como alvo uma criatura de tamanho Grande ou menor, você puxa o alvo até 10 pés em sua direção. Uma criatura pode realizar um teste de resistência de Força para resistir a esse movimento."
};
SpellsList["pharaoh's curse"] = {
	name : "Maldição do Faraó",
	classes : ["necromancer", "Bruxa"],
	source : ["VSoS", 351],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Until dispelled",
	save : "Con",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou não pode recuperar HP, e seu máximo de HP diminui em 3d6 a cada 24 h",
	descriptionFull : "Ao abrir a palma da mão, você libera uma nuvem de poeira, a pestilência da podridão de múmia. Escolha uma criatura dentro do alcance para realizar um teste de resistência de Constituição. Se falhar, o alvo é amaldiçoado com podridão de múmia. O alvo amaldiçoado não pode recuperar pontos de vida, e seu máximo de pontos de vida diminui em 3d6 a cada 24 horas decorridas. Se a maldição reduzir o máximo de pontos de vida do alvo a 0, ele morre e seu corpo se transforma em poeira." + "\n   " + "A maldição dura até ser removida por uma magia ou efeito mágico que cure a podridão de múmia. Uma magia remover maldição conjurada usando um espaço de magia de 5º nível ou superior também encerra esta magia."
};
SpellsList["pillar of salt"] = {
	name : "Pilar de Sal",
	classes : ["martyr"],
	source : ["VSoS", 351],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Uma gota de óleo de lamparina e uma pitada de enxofre",
	duration : "Instantaneous",
	save : "Con",
	ritual: false,
	description : "Criaturas em uma esfera de 10 pés fazem um teste de resistência ou sofrem 7d6+1d6/SL de dano necrótico; sucesso: metade; 0 HP: transformam-se em sal",
	descriptionFull : "Você envia uma centelha de ira divina a um ponto que possa ver dentro do alcance. Cada criatura à sua escolha em uma esfera de 10 pés de raio centrada nesse ponto deve realizar um teste de resistência de Constituição. Se falhar, uma criatura sofre 7d6 de dano necrótico, ou metade desse dano em caso de sucesso. Se esse dano reduzir a 0 os pontos de vida de um alvo que tenha falhado no teste de resistência, ele se transforma em um pilar de sal." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 4º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3º."
};
SpellsList["polybrachia"] = {
	name : "Polibraquia",
	classes : ["martyr", "paladin", "Ranger", "warlock", "Mago"],
	source : ["VSoS", 351],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Um par de braçadeiras",
	duration : "Conc, 10 min",
	ritual: false,
	description : "1 criatura ganha 2 novos braços; vantagem em testes de Força (Atletismo) que os utilizem; ação bônus para atacar com uma arma empunhada por eles",
	descriptionFull : "Dois braços musculosos feitos de energia arcana brilhante surgem em uma criatura voluntária que você tocar. Esses braços são totalmente funcionais e podem ser usados para empunhar armas e escudos (permitindo que o alvo empunhe 2 armas de duas mãos ou 4 armas de uma mão), executar componentes somáticos de magias e realizar outras ações, embora os braços em si não concedam ações adicionais ao alvo. Pela duração, o alvo tem vantagem em testes de Força (Atletismo) feitos usando os braços adicionais. Além disso, se os braços forem usados para empunhar armas, o alvo pode usar uma ação bônus para realizar um ataque adicional corpo a corpo com arma usando esses braços."
};
SpellsList["prehensile hair"] = {
	name : "Cabelo Preênsil",
	classes : ["Bruxa"],
	source : ["VSoS", 351],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Uma corda trançada",
	duration : "1 h",
	ritual: true,
	description : "Faz crescer cabelo preênsil; pode realizar tarefas simples a até 10 pés; pode lançar magias de toque",
	descriptionFull : "Seu cabelo cresce de forma extraordinária e se torna resistente (até mesmo o das suas sobrancelhas), e você pode manipulá-lo à vontade. Você pode usar seu cabelo para realizar tarefas simples a até 10 pés de você, como manipular um objeto, abrir uma porta ou um recipiente destrancado, guardar ou retirar um item de um recipiente aberto ou despejar o conteúdo de um frasco. Você pode lançar magias com alcance de Toque usando seu cabelo, a um alcance de até 10 pés. Seu cabelo volta ao comprimento normal quando esta magia termina."
};
SpellsList["protection from ballistics"] = {
	name : "Proteção contra Projéteis Balísticos",
	classes : ["martyr", "necromancer", "cleric", "Druida", "paladin", "Ranger", "warlock", "Mago"],
	source : ["VSoS", 351],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	ritual: false,
	description : "Ataques à distância com armas de fogo têm desvantagem contra o alvo; o alvo tem resistência ao dano de armas de fogo",
	descriptionFull : "Um escudo cintilante de energia envolve uma criatura voluntária que você tocar. Pela duração, ataques à distância feitos com armas de fogo têm desvantagem contra o alvo, e o alvo tem resistência a qualquer dano causado por armas de fogo."
};
SpellsList["protect threshold"] = {
	name : "Proteger Limiar",
	classes : ["investigator", "necromancer", "Bruxa", "Feiticeiro", "Mago"],
	source : ["VSoS", 352],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma onça de sal para cada pé do perímetro da passagem protegida",
	duration : "10 min",
	save : "Wis",
	ritual: true,
	description : "Criaturas que atravessam a porta/janela/passagem fazem um teste de resistência ou sofrem 4d6+1d6/SL de dano psíquico; sucesso: metade do dano",
	descriptionFull : "Traçando sigilos arcanos ao longo de seu contorno, você pode proteger uma porta, janela ou outra passagem contra a entrada. Pela duração, uma criatura sobrenatural invisível espreita a passagem protegida. Qualquer criatura que tente atravessar a passagem deve realizar um teste de resistência de Sabedoria ou sofrer 4d6 de dano psíquico, ou metade desse dano se obtiver sucesso." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 2º."
};
SpellsList["psychedelics"] = {
	name : "Psicodelia",
	classes : ["Bruxa", "Bardo", "Druida", "Ranger"],
	source : ["VSoS", 352],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "S:60-ft rad",
	components : "V,S,M",
	compMaterial : "Um cogumelo",
	duration : "1 rnd",
	save : "Dex",
	ritual: false,
	description : "Criaturas na área fazem um teste de resistência ou têm desvantagem em ataques até o fim do próximo turno delas; criaturas e objetos ficam com cores psicodélicas por 1 h",
	descriptionFull : "Por um momento, as cores ao seu redor se transformam em um turbilhão de arco-íris, antes de se estabilizarem em tons muito diferentes dos originais. Cada criatura à sua escolha dentro do alcance deve realizar um teste de resistência de Destreza. Se falhar, a criatura tem desvantagem nas jogadas de ataque até o fim do próximo turno dela. Além disso, as cores de todas as criaturas e objetos à sua escolha dentro do alcance mudam aleatoriamente e permanecem vibrantes e sobrenaturais por 1 hora."
};
SpellsList["quickstep"] = {
	name : "Passo Rápido",
	classes : ["warmage"],
	source : ["VSoS", 352],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "1 rnd",
	ritual: false,
	description : "Meu deslocamento de caminhada aumenta em 10 pés até o início do meu próximo turno",
	descriptionFull : "Você recorre às suas reservas interiores para obter um breve surto de velocidade. Ao conjurar esta magia, seu deslocamento de caminhada aumenta em 10 pés até o início do seu próximo turno."
};
SpellsList["recall"] = {
	name : "Retorno",
	classes : ["Feiticeiro", "Mago"],
	source : ["VSoS", 352],
	level : 2,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	ritual: false,
	description : "Reação para me teleportar para onde eu estava quando conjurei esta magia",
	descriptionFull : "Registre sua localização ao conjurar esta magia. Até o final do seu próximo turno, você pode usar sua reação para se teleportar de volta para esse local ou para o espaço desocupado mais próximo. Se usar essa reação em resposta a um ataque, magia, efeito mágico ou qualquer outro efeito que cause dano, resolva o efeito desencadeador antes de se teleportar."
};
SpellsList["repulsor ring"] = {
	name : "Anel Repulsor",
	classes : ["cleric", "Mago"],
	source : ["VSoS", 352],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "5 ft",
	components : "V,S,M",
	compMaterial : "Um pedaço de giz",
	duration : "Conc, 1 min",
	ritual: false,
	description : "Só criaturas que eu escolher podem entrar; ataques à distância contra criaturas na área têm desvantagem; ataques corpo a corpo empurram o atacante 10 pés",
	descriptionFull : "Você traça no chão um círculo de 5 pés de diâmetro, protegido contra intrusos. Apenas criaturas que você escolher podem entrar no círculo. Qualquer jogada de ataque à distância contra um alvo dentro do círculo tem desvantagem. Se uma criatura hostil realizar um ataque corpo a corpo contra um alvo dentro do círculo, o atacante é empurrado 10 pés para trás imediatamente após o ataque."
};
SpellsList["ruby-eye curse"] = {
	name : "Maldição dos Olhos de Rubi",
	classes : ["necromancer", "Bruxa"],
	source : ["VSoS", 353],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou fica cega além de 5 pés",
	descriptionFull : "Uma névoa vermelha turva os olhos de uma criatura que cruza o olhar com você. Escolha uma criatura que você possa ver dentro do alcance para fazer um teste de resistência de Constituição. Se falhar, a criatura fica amaldiçoada pela duração da magia. Um alvo amaldiçoado pode enxergar normalmente até 5 pés, mas fica cego além desse raio." + "\n   " + "Uma magia remover maldição encerra esta maldição antecipadamente."
};
SpellsList["rumbling charge"] = {
	name : "Investida Estrondosa",
	classes : ["Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 353],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Um pedaço de granito",
	duration : "Instantaneous",
	save : "Str",
	ritual: false,
	description : "Mova-se 30 pés; ao atingir objeto/criatura: ele faz um teste de resistência ou sofre 2d12+1d12/2SL de dano contundente; sucesso: metade do dano",
	descriptionFull : "Você se imbui do poder elemental de um deslizamento de terra. Ao conjurar esta magia, você imediatamente se move 30 pés em linha reta sem provocar ataques de oportunidade. Se seu caminho for bloqueado por uma criatura ou objeto, você para de se mover nesse ponto, e essa criatura ou objeto deve fazer um teste de resistência de Força, sofrendo 2d12 de dano contundente se falhar, ou metade desse dano se obtiver sucesso." + AtHigherLevels + "Ao conjurar esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d12 para cada dois níveis do espaço acima do 1º."
};
SpellsList["rumor"] = {
	name : "Rumor",
	classes : ["investigator", "Bruxa", "Bardo", "Mago"],
	source : ["VSoS", 353],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "S:100-ft rad",
	components : "V,S",
	duration : "1 min",
	ritual: true,
	description : "Rumor de 10 palavras ou menos ouvido por todas as criaturas próximas de três ou mais outras criaturas que compartilhem um idioma",
	descriptionFull : "Você espalha magicamente um rumor de 10 palavras ou menos. Qualquer criatura dentro do alcance que esteja próxima de três ou mais outras criaturas que falem o mesmo idioma que ela acredita ouvir o rumor sendo repetido por alguém nas proximidades. Criaturas diferentes ouvem o rumor de pessoas diferentes, de modo que é impossível discernir um ponto de origem específico. Em geral, as criaturas não se tornam imediatamente hostis ao ouvir até mesmo os rumores mais maliciosos, mas ouvir um rumor pode afetar sua disposição positiva ou negativamente."
};
SpellsList["rusting grasp"] = {
	name : "Toque Enferrujante",
	classes : ["necromancer", "Bruxa", "Druida", "Mago"],
	source : ["VSoS", 353],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Ataque mágico corpo a corpo causa 6d4+2d4/SL de dano ácido e danifica/destrói armadura/escudo; B",
	descriptionFull : "Você conjura um ácido potente na ponta dos dedos, capaz de corroer metal e queimar carne. Faça um ataque mágico corpo a corpo contra uma criatura ou objeto ao seu alcance. Se atingir, uma criatura sofre 6d4 de dano ácido e, se estiver vestindo uma armadura de metal não mágica ou empunhando um escudo de metal não mágico, você pode corroer a armadura ou o escudo dela. Uma armadura corroída sofre uma penalidade permanente e cumulativa de -3 na CA que oferece. Uma armadura cuja CA seja reduzida a 10 é destruída. Um escudo corroído é destruído." + "\n   " + "Se você escolher como alvo desta magia um objeto de metal não mágico que não esteja sendo vestido ou carregado, você corrói e destrói partes do objeto à sua escolha que caibam em um cubo de 1 pé de lado." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 4º nível ou superior, o dano aumenta em 2d4 para cada nível do espaço acima do 3º. Além disso, você pode destruir 1 pé cúbico adicional de um objeto não mágico para cada nível do espaço acima do 3º."
};
SpellsList["scrutinize foe"] = {
	name : "Escrutinar Inimigo",
	classes : ["investigator", "necromancer", "cleric", "Mago"],
	source : ["VSoS", 353],
	level : 5,
	school : "Div",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Escolha 1 criatura; o GM informa 2 destes: AC, HP atuais, imunidades a condições, imunidades a dano, resistências a dano, vulnerabilidades a dano, encantamentos/magias",
	descriptionFull : "Você discerne detalhes minuciosos sobre uma criatura que possa ver dentro do alcance. Você descobre duas das seguintes informações, à sua escolha, sobre o alvo: sua Classe de Armadura, pontos de vida atuais, imunidades a condições, imunidades a dano, resistências a dano, vulnerabilidades a dano e encantamentos (o que revela quaisquer magias que estejam afetando o alvo no momento). O GM deve fornecer as informações solicitadas."
};
SpellsList["seance"] = {
	name : "Sessão Espírita",
	classes : ["investigator", "necromancer", "Bruxa"],
	source : ["VSoS", 353],
	level : 3,
	school : "Necro",
	time : "10 min",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Uma bola de cristal, um baralho de tarô ou um tabuleiro ouija",
	duration : "1 min",
	ritual: false,
	description : "Faça 3 perguntas a um espírito conhecido; 5% de chance de contatar o espírito errado; veja o livro",
	descriptionFull : "Você e pelo menos três criaturas voluntárias dão as mãos em um momento de meditação para conjurar um espírito do além que responda às suas perguntas. Descreva ou diga o nome de uma criatura que você conheça. Se a alma da criatura estiver livre e disposta, ela se manifesta como um espectro fantasmagórico. Esta magia falha se o espírito tiver sido alvo desta magia nos últimos 10 dias." + "\n   " + "Até a magia terminar, você pode fazer até três perguntas ao espectro. O espectro sabe apenas o que sabia em vida, incluindo os idiomas que conhecia. As respostas costumam ser breves, enigmáticas ou repetitivas, e o espectro não é obrigado a oferecer uma resposta verdadeira se você for hostil a ele ou se ele reconhecer você como um inimigo. Há 5% de chance de esta magia contatar o espírito errado, que responderá às perguntas de forma falsa ou ambígua."
};
SpellsList["skirmish"] = {
	name : "Escaramuça",
	classes : ["cleric", "Ranger", "Mago"],
	source : ["VSoS", 354],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Um galho de árvore",
	duration : "Conc, 10 min",
	save : "Wis",
	ritual: false,
	description : "1 criatura tem o deslocamento dobrado, ignora terreno difícil e não provoca ataques de oportunidade",
	descriptionFull : "Você aprimora a mobilidade de uma criatura voluntária que tocar, permitindo que ela se mova facilmente através de formações inimigas. Pela duração, o deslocamento do alvo é dobrado, ele não é afetado por terreno difícil não mágico e não provoca ataques de oportunidade."
};
SpellsList["snakestaff"] = {
	name : "Cajado Serpente",
	classes : ["martyr", "cleric", "Druida", "Mago"],
	source : ["VSoS", 354],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um bordão",
	duration : "Conc, 1 h",
	ritual: false,
	description : "Transforma um cajado em uma serpente constritora gigante sob meu controle; o cajado se quebra se a serpente morrer",
	descriptionFull : "Você lança um cajado ao chão, onde ele se contorce e cresce, transformando-se em uma serpente constritora gigante sob seu controle, que age em sua própria iniciativa. A serpente é amistosa a você e aos seus companheiros. Ela obedece a quaisquer comandos verbais que você lhe der (nenhuma ação sua é necessária). Se você não der nenhum comando, ela se defende de criaturas hostis, mas não realiza nenhuma outra ação. Se a serpente for reduzida a 0 pontos de vida, ela morre e volta à forma de um cajado quebrado. O Mestre tem as estatísticas da criatura."
};
SpellsList["sonic pulse"] = {
	name : "Pulso Sônico",
	classes : ["warmage"],
	source : ["VSoS", 354],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	ritual: false,
	description : "1 criatura faz um teste de resistência ou sofre 1d8 de dano trovejante e fica surda até meu próximo turno; 1d10 a até 10 pés; +1d8/1d10 CL5/11/17",
	descriptionCantripDie : "1 criatura faz um teste de resistência ou sofre `CD`d8 de dano trovejante e fica surda até meu próximo turno; `CD`d10 a até 10 pés",
	descriptionFull : "Você comprime um estrondo trovejante em uma esfera invisível e a projeta contra uma criatura que possa ver dentro do alcance. O alvo deve ser bem-sucedido em um teste de resistência de Constituição ou sofre 1d8 de dano trovejante e fica surdo até o início do seu próximo turno." + "\n   " + "Se o alvo da magia estiver a até 10 pés de você, os dados de dano desta magia se tornam d10s em vez de d8s." + "\n   " + "O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), o 11º nível (3d8) e o 17º nível (4d8)."
};
SpellsList["spark of life"] = {
	name : "Centelha de Vida",
	classes : ["necromancer"],
	source : ["VSoS", 354],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	ritual: false,
	description : "Um cadáver próximo se reanima brevemente, se move e realiza um ataque; veja o livro",
	descriptionFull : "Com uma rápida descarga de energia necromântica, os mortos se erguem momentaneamente para obedecer a você, ainda que por apenas alguns segundos. Escolha o cadáver de uma criatura Enorme ou menor que esteja morta há no máximo uma hora. Ao conjurar esta magia, o cadáver se levanta e pode se mover até 15 pés e realizar um único ataque de pancada corpo a corpo contra um alvo à sua escolha dentro do alcance dele, usando seu modificador de ataque mágico. Se acertar, esse ataque causa dano contundente de acordo com o tamanho do cadáver: um cadáver Minúsculo causa 1d4, um Pequeno causa 1d6, um Médio causa 1d8, um Grande causa 1d10 e um Enorme causa 1d12. Depois de atacar, o cadáver desaba novamente no chão. Um cadáver que seja alvo desta magia não se torna uma criatura morta-viva." + "\n   " + "O dano desta magia aumenta conforme você ganha níveis. No 5º nível, o cadáver causa dois dados de dano de acordo com seu tamanho. No 11º nível, ele causa três dados de dano e, no 17º nível, causa quatro dados de dano."
};
SpellsList["springheel"] = {
	name : "Calcanhar de Mola",
	classes : ["springheel", "Druida"],
	source : ["VSoS", 354],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "1 rnd",
	ritual: false,
	description : "O deslocamento de salto aumenta em 10 pés, e é possível realizar um salto em altura ou em distância com corrida sem uma corrida inicial",
	descriptionFull : "Você infunde magia nas suas pernas, permitindo que salte bem alto a partir de uma posição parada. Ao conjurar esta magia, sua distância de salto aumenta em 10 pés até o início do seu próximo turno, e você pode realizar um salto em altura ou em distância com corrida sem precisar de uma corrida inicial."
};
SpellsList["stone bones"] = {
	name : "Ossos de Pedra",
	classes : ["investigator", "martyr", "necromancer", "Druida", "Ranger", "Feiticeiro", "stone bones"],
	source : ["VSoS", 355],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "30 ft",
	components : "V,S",
	duration : "1 rnd",
	ritual: false,
	description : "1 criatura tem resistência a dano contundente/perfurante/cortante não mágico até o fim do meu próximo turno",
	descriptionFull : "Você reforça magicamente uma criatura que possa ver dentro do alcance, concedendo a ela resistência a dano contundente, perfurante e cortante causado por ataques não mágicos até o final do seu próximo turno."
};
SpellsList["swift flight"] = {
	name : "Voo Veloz",
	classes : ["Bruxa", "Feiticeiro", "Mago"],
	source : ["VSoS", 355],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Uma pena da asa de qualquer pássaro",
	duration : "1 rnd",
	ritual: false,
	description : "1 criatura voluntária recebe deslocamento de voo de 30 pés",
	descriptionFull : "Faixas de energia fluem das costas de uma criatura voluntária que você toca, delineando formas de asas. Até o final do próximo turno do alvo, ele tem deslocamento de voo de 30 pés. Quando a magia termina, o alvo cai se ainda estiver no ar, a menos que possa impedir a queda."
};
SpellsList["tag"] = {
	name : "Pichação",
	classes : ["Bardo", "Feiticeiro", "Mago"],
	source : ["VSoS", 355],
	level : 0,
	school : "Illus",
	time : "1 a",
	range : "Touch",
	components : "S,M",
	compMaterial : "Uma gota de tinta",
	duration : "Instantaneous",
	ritual: false,
	description : "Cria imagem de 10 pés ou mensagem de até 3 palavras; dura 7 dias; limpeza não mágica não pode remover",
	descriptionFull : "Você pressiona a mão contra uma superfície plana de um objeto e imprime nela uma imagem elaborada e vibrante que caiba em um quadrado de 10 pés de lado. A imagem pode conter uma mensagem de até três palavras e incluir desenhos, caricaturas ou logotipos de identificação em qualquer combinação de cores, escolhida quando você conjura a magia. Produtos de limpeza não mágicos não podem remover a imagem, que desaparece após sete dias."
};
SpellsList["thunderous distortion"] = {
	name : "Distorção Trovejante",
	classes : ["warmage"],
	source : ["VSoS", 355],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:10-ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	ritual: false,
	description : "Criaturas na área fazem teste de resistência ou sofrem 1d6 de dano trovejante; se conjurada no turno anterior, 1d8 de dano; +1d6/1d8 CL 5/11/17",
	descriptionCantripDie : "Criaturas na área fazem teste de resistência ou sofrem `CD`d6 de dano trovejante; se conjurada no turno anterior, `CD`d8 em vez disso",
	descriptionFull : "Você produz uma onda distorcida de ruído em um cone de 10 pés, que pode ser ouvida a até 100 pés de distância. Cada criatura nessa área deve ser bem-sucedida em um teste de resistência de Constituição ou sofrer 1d6 de dano trovejante." + "\n   " + "Um eco desse ruído persiste até o final do seu próximo turno. Se você conjurar esta magia novamente antes do final do seu próximo turno, os dados de dano dela se tornam d8, em vez de d6." + "\n   " + "O dano desta magia aumenta em 1d6 quando você alcança o 5º nível (2d6), o 11º nível (3d6) e o 17º nível (4d6)."
};
SpellsList["time hop"] = {
	name : "Salto Temporal",
	classes : ["Feiticeiro", "Mago"],
	source : ["VSoS", 355],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V,S,M",
	compMaterial : "O ponteiro dos segundos de um relógio",
	duration : "Varies",
	ritual: false,
	description : "Deixa de existir por 1/2/3 rodadas; 3º nível: 1 min, 5º nível: 1 hora",
	descriptionFull : "Você se desloca alguns segundos para o futuro. Escolha uma duração: 1 rodada, 2 rodadas ou 3 rodadas. Você desaparece, reaparecendo após essa duração, no início do seu turno, no espaço desocupado mais próximo de onde desapareceu. Enquanto estiver desaparecido, você está fora do tempo; não pode realizar ações ou reações, o tempo não passa para você, os efeitos das suas magias ficam suspensos e você não pode ser afetado por ataques ou efeitos." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 3º nível ou superior, pode escolher uma duração de 1 minuto. Se conjurar esta magia usando um espaço de magia de 5º nível ou superior, pode escolher uma duração de 1 hora."
};
SpellsList["time's arrow"] = {
	name : "Flecha do Tempo",
	classes : ["Ranger", "Mago"],
	source : ["VSoS", 355],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Um projétil físico pesando uma libra ou menos, como uma flecha, um virote ou uma bala de funda",
	duration : "1 h",
	ritual: false,
	description : "Congela um projétil no ar até que seja tocado, um vento sopre sobre ele, o efeito seja dissipado ou a magia termine; veja o livro",
	descriptionFull : "Esta magia encanta um projétil, congelando-o no tempo e no espaço. Você pode reposicionar o projétil como parte da ação usada para conjurar a magia." + "\n   " + "O projétil permanece congelado no lugar até que uma criatura passe a até 120 pés à sua frente, algo o toque, um vento forte sopre sobre ele, o efeito seja dissipado ou a duração termine. Nesse momento, o projétil se move subitamente, como se tivesse acabado de ser disparado ou arremessado com um alcance de 120 pés. Se uma criatura estiver na linha de tiro, o projétil realiza um ataque, adicionando seu bônus de ataque mágico à jogada de ataque, e causa o dano básico do tipo de projétil usado (projéteis cujo dano varia conforme a arma que os dispara usam os maiores dados de dano possíveis)."
};
SpellsList["transient bulwark"] = {
	name : "Baluarte Transitório",
	classes : ["investigator", "martyr", "Mago"],
	source : ["VSoS", 356],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u2020",
	compMaterial : "Uma pérola no valor de 10 gp, que a magia consome",
	duration : "8 h",
	ritual: true,
	description : "O próximo ataque contra você tem -10 na jogada de ataque",
	descriptionFull : "O próximo ataque realizado contra você durante a duração sofre uma penalidade de -10 na jogada de ataque."
};
SpellsList["tyra's coerced karaoke"] = {
	name : "Karaokê Coagido de Tyra",
	classes : ["Bardo", "Mago"],
	source : ["VSoS", 356],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "S:30-ft rad",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	ritual: false,
	description : "Criaturas no alcance fazem um teste de resistência ou cantam com você; pode manter concentração junto com Dança Irresistível",
	descriptionFull : "Enquanto instrumentos espectrais aparecem tocando ao seu redor, você começa a cantar uma canção conhecida, e os outros se sentem compelidos a acompanhar. Durante a duração, quando uma criatura se aproxima a até 30 pés de você ou começa seu turno nessa área, ela deve realizar um teste de resistência de Sabedoria ou começar a cantar com você. Uma criatura que esteja cantando acompanha o tom e as palavras da canção o mais fielmente possível, mesmo que não saiba falar o idioma da canção. Além disso, ela não pode falar normalmente (embora ainda possa se comunicar telepaticamente) e não pode executar os componentes verbais de magias. Criaturas que não podem ser enfeitiçadas são imunes a esta magia." + "\n   " + "Diferentemente de outras magias, você pode manter a concentração nesta magia e na magia dança irresistível ao mesmo tempo. Perder a concentração em qualquer uma delas encerra ambas as magias."
};
SpellsList["unseen accountant"] = {
	name : "Contador Invisível",
	classes : ["investigator", "necromancer", "Bardo", "Mago"],
	source : ["VSoS", 356],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um ábaco",
	duration : "8 h",
	ritual: true,
	description : "Cria um servo invisível para realizar tarefas intelectuais; veja o livro",
	descriptionFull : "Esta magia cria uma força invisível e sem forma que realiza tarefas intelectuais sob seu comando até a magia terminar. O servo surge em um espaço desocupado no chão dentro do alcance. Ele tem AC 10, 1 ponto de vida, Inteligência 12 e não pode atacar. Se seus pontos de vida forem reduzidos a 0, a magia termina. Uma vez em cada um dos seus turnos, como uma ação bônus, você pode comandar mentalmente o servo para que se mova até 15 pés e interaja com um objeto. O contador pode realizar tarefas intelectuais que um funcionário administrativo humano poderia executar, como avaliar preços, atualizar contas, gerenciar estoques ou calcular juros. Depois que você dá o comando, o contador realiza a tarefa da melhor maneira possível até concluí-la e, então, aguarda seu próximo comando. O contador não pode realizar nenhum trabalho físico e não é capaz de erguer qualquer objeto mais pesado que um frasco de tinta. Se você ordenar que o contador realize uma tarefa que o leve a mais de 300 pés de distância de você, a magia termina."
};
SpellsList["watery tentacles"] = {
	name : "Tentáculos de Água",
	classes : ["Druida", "warlock", "Mago"],
	source : ["VSoS", 356],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Um tentáculo de polvo",
	duration : "Conc, 1 min",
	save : "Str",
	ritual: false,
	description : "Você ganha 3+1/SL tentáculos que podem agarrar a até 30 pés e erguer 100 libras; veja o livro",
	descriptionFull : "Quando você conjura esta magia, três tentáculos feitos de água aparecem ao redor do seu corpo pela duração. Como parte da ação usada para conjurar a magia, e como uma ação bônus nos turnos subsequentes até a magia terminar, você pode comandar um desses tentáculos para agarrar uma criatura Grande ou menor que você possa ver a até 30 pés de você. O alvo deve realizar um teste de resistência de Força ou ficará agarrado e impedido pelo tentáculo. Ao final de cada um de seus turnos, um alvo impedido pode repetir o teste de resistência, libertando-se em caso de sucesso." + "\n   " + "Você pode agarrar tantas criaturas quantos forem seus tentáculos. Você pode usar uma ação ou ação bônus no seu turno para soltar uma criatura agarrada ou arrastá-la por até 20 pés em uma direção à sua escolha." + "\n   " + "Você também pode usar os tentáculos para manipular objetos como uma ação ou ação bônus. Cada tentáculo pode erguer até 100 libras, e você pode comandar vários tentáculos para trabalharem juntos e erguerem o mesmo objeto como parte da mesma ação ou ação bônus. Os tentáculos não são capazes de manipulação precisa — por exemplo, não podem abrir um baú nem tirar a rolha de uma garrafa. Objetos em chamas são apagados quando um tentáculo os agarra." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 5º nível ou superior, você ganha um tentáculo adicional para cada nível do espaço acima do 4º."
};
SpellsList["whispering wind"] = {
	name : "Vento Sussurrante",
	classes : ["investigator", "Bruxa", "Bardo", "cleric", "Druida", "Mago"],
	source : ["VSoS", 356],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "1 mile",
	components : "V,S,M",
	compMaterial : "Uma pena",
	duration : "1 rnd",
	ritual: false,
	description : "Sussurre 25 palavras ou menos para até 6 criaturas no alcance e na mesma direção geral; elas podem responder",
	descriptionFull : "Você aponta o dedo em uma direção e sussurra uma mensagem de vinte e cinco palavras ou menos, especificando até seis criaturas como alvos. Se um alvo estiver no alcance e na direção aproximada indicada, ele (e somente ele) ouve a mensagem carregada pelo vento. Ele pode responder com um sussurro que somente você pode ouvir." + "\n   " + "Você só pode conjurar esta magia quando houver um caminho desobstruído para o ar circular entre você e os alvos. A magia não precisa seguir uma linha reta e pode contornar esquinas ou passar por aberturas livremente, mas é bloqueada por objetos sólidos e áreas de silêncio mágico."
};
SpellsList["wildfire"] = {
	name : "Incêndio Selvagem",
	classes : ["Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 357],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Um pedaço de pederneira",
	duration : "Conc, 1 min",
	save : "Dex",
	ritual: false,
	description : "Crie uma área de 10 cubos de 5 pés; criaturas que entram na área ou começam o turno nela fazem um teste de resistência ou sofrem 8d8 de dano de fogo; sucesso: metade; B",
	descriptionFull : "Você cria um fogo mágico que preenche dez cubos de 5 pés no chão, que você pode dispor como desejar dentro do alcance. Cada cubo que você posicionar deve ter uma face adjacente à face de outro cubo. Em cada um dos seus turnos após conjurar esta magia, você pode usar uma ação bônus para expandir a área do fogo em até dez cubos adicionais de 5 pés, cada um com uma face adjacente à face de outro cubo de fogo. O fogo causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados." + "\n   " + "Quando uma criatura entra na área do fogo pela primeira vez ou começa seu turno nela, ela deve realizar um teste de resistência de Destreza. Ela sofre 8d8 de dano de fogo se falhar no teste de resistência, ou metade desse dano em caso de sucesso."
};
SpellsList["winter flower"] = {
	name : "Flor de Inverno",
	classes : ["Druida", "Feiticeiro", "Mago"],
	source : ["VSoS", 357],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Uma flor de cristal",
	duration : "24 h",
	save : "Dex",
	ritual: false,
	description : "Flor Minúscula com 1 HP explode como ação bônus ou ao chegar a 0 HP; criaturas a até 30 pés fazem teste de resistência ou sofrem 10d8 de dano de frio; sucesso: metade",
	descriptionFull : "Você faz uma flor branca Minúscula brotar em um ponto no chão que você possa ver dentro do alcance. A flor tem AC 15, 1 ponto de vida, vulnerabilidade a dano de fogo e imunidade a dano de frio. Durante a duração da magia, você pode usar uma ação bônus para ordenar que ela exploda em uma chuva de gelo. Alternativamente, a flor explode se for reduzida a 0 pontos de vida. Quando a flor explode, cada criatura a até 30 pés dela deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofre 10d8 de dano de frio, ou metade desse dano se obtiver sucesso. A flor murcha e morre se não explodir em até 24 horas." + "\n   " + "Se você conjurar esta magia novamente enquanto ela estiver ativa, poderá manter a existência da flor por mais 24 horas. Você pode criar uma flor permanente conjurando esta magia sobre a mesma flor por sete dias."
};
SpellsList["zephyr's feather"] = {
	name : "Pena de Zéfiro",
	classes : ["Ranger", "Feiticeiro", "warlock", "Mago"],
	source : ["VSoS", 357],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Uma pena de pomba",
	duration : "Conc, 1 min",
	ritual: false,
	description : "3 penas; ao conjurar ou como ação, ataque mágico à distância a até 120 pés causa 2d8+1d8/SL de dano cortante; SL3:5,SL5:7 penas",
	descriptionFull : "Você acena com a mão, e três penas de alabastro, magicamente afiadas como navalhas, aparecem e orbitam ao seu redor. Ao conjurar esta magia, faça um ataque mágico à distância usando uma de suas penas contra uma criatura a até 120 pés de você. Se acertar, o alvo sofre 2d8 de dano cortante. Até a magia terminar, enquanto você tiver penas restantes, poderá usar uma ação em cada um de seus turnos para fazer um ataque com uma pena." + AtHigherLevels + "Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 1º, até um máximo de 6d8. Você recebe duas penas adicionais ao conjurar esta magia usando um espaço de magia de 3º nível ou superior (5 penas), e mais duas ao conjurá-la usando um espaço de magia de 5º nível ou superior (7 penas)."
};

// Add weapons (attack cantrips)
WeaponsList["arc blade"] = {
	regExpSearch : /^(?=.*arc)(?=.*blade).*$/i,
	name : "Lâmina de Arco Elétrico",
	source : ["VSoS", 330],
	list : "spell",
	ability : 0,
	type : "Cantrip",
	damage : ["Bd8/Cd6", "", "lightning"],
	range : "With melee wea",
	description : "O dano da arma é elétrico; o 1º dano é adicionado ao ataque; o 2º é causado a um alvo a até 5 pés ao acertar",
	abilitytodamage : false,
	dc : false
};
WeaponsList["burning blade"] = {
	regExpSearch : /^(?=.*burning)(?=.*blade).*$/i,
	name : "Lâmina Ardente",
	source : ["VSoS", 331],
	list : "spell",
	ability : 0,
	type : "Cantrip",
	damage : ["Bd6/Cd6", "", "fire"],
	range : "With melee wea",
	description : "O dano da arma é de fogo; o 1º dano é adicionado ao ataque; o 2º é causado como reação a um alvo no espaço; B",
	abilitytodamage : false,
	dc : false
};
WeaponsList["candy blast"] = {
	regExpSearch : /candy blast/i,
	name : "Rajada de Doces",
	source : ["VSoS", 332],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "bludgeoning"],
	range : "60 ft",
	description : "Ao acertar, o espaço do alvo se torna terreno difícil; 1 ação para limpar",
	abilitytodamage : false,
	dc : false
};
WeaponsList["card trick"] = {
	regExpSearch : /card trick/i,
	name : "Truque de Cartas",
	source : ["VSoS", 332],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "force"],
	range : "60 ft",
	description : "Escolha: ataque mágico ou teste de resistência de Destreza do alvo contra a CD para evitar suas magias",
	abilitytodamage : false,
	dc : false
};
WeaponsList["caustic blade"] = {
	regExpSearch : /caustic blade/i,
	name : "Lâmina Cáustica",
	source : ["VSoS", 332],
	list : "spell",
	ability : 0,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "acid"],
	range : "With melee wea",
	description : "O dano da arma é ácido; o 1º dano é causado ao acertar, o 2º ao errar por 3 ou menos",
	abilitytodamage : false,
	dc : false
};
WeaponsList["eldritch orb"] = {
	regExpSearch : /eldritch orb/i,
	name : "Orbe Místico",
	source : ["VSoS", 337],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "force"],
	range : "60 ft",
	description : "Ao acertar, criaturas a até 5 pés fazem teste de resistência de Destreza; sucesso: nada; falha: metade do dano",
	abilitytodamage : false,
	dc : false
};
WeaponsList["eye of anubis"] = {
	regExpSearch : /eye of anubis/i,
	name : "Olho de Anubis",
	source : ["VSoS", 337],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "necrotic"],
	range : "60 ft",
	description : "Ao acertar, o alvo não pode realizar a ação Desengajar até o final do meu próximo turno; consulte o livro para a progressão",
	abilitytodamage : false,
	dc : false
};
WeaponsList["eye of ra"] = {
	regExpSearch : /eye of ra/i,
	name : "Olho de Ra",
	source : ["VSoS", 338],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "radiant"],
	range : "60 ft",
	description : "Ao acertar, o alvo não pode realizar a ação Esconder-se até o final do meu próximo turno; consulte o livro para a progressão",
	abilitytodamage : false,
	dc : false
};
WeaponsList["finger guns"] = {
	regExpSearch : /finger guns/i,
	name : "Armas de Dedo",
	source : ["VSoS", 338],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "force"],
	range : "60 ft",
	description : "1 ação para atacar por 1 minuto; conta como arma de fogo",
	abilitytodamage : false,
	dc : false
};
WeaponsList["flesh ripper"] = {
	regExpSearch : /flesh ripper/i,
	name : "Rasgador de Carne",
	source : ["VSoS", 338],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "piercing"],
	range : "30 ft",
	description : "Ao acertar, o alvo não pode se afastar mais de 30 pés de mim sem passar em um teste de resistência de Força.",
	abilitytodamage : false,
	dc : false
};
WeaponsList["force dart"] = {
	regExpSearch : /force dart/i,
	name : "Dardo de Energia",
	source : ["VSoS", 339],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 10, "force"],
	range : "120 ft",
	description : "Pode ter criaturas ou objetos como alvo.",
	abilitytodamage : false,
	dc : false
};
WeaponsList["force weapon"] = {
	regExpSearch : /force weapon/i,
	name : "Arma de Energia",
	source : ["VSoS", 339],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 10, "Force"],
	range : "5 ft",
	description : "Também posso realizar 1 ataque de oportunidade antes do meu próximo turno; a progressão acrescenta ataques, não dano.",
	abilitytodamage : false,
	dc : false
};
WeaponsList["frigid blade"] = {
	regExpSearch : /frigid blade/i,
	name : "Lâmina Gélida",
	source : ["VSoS", 340],
	list : "spell",
	ability : 0,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "cold"],
	range : "With melee wea",
	description : "O dano da arma é de frio; o primeiro dano é acrescentado ao ataque; o segundo é causado ao alvo se ele se mover antes do meu próximo turno.",
	abilitytodamage : false,
	dc : false
};
WeaponsList["lightning surge"] = {
	regExpSearch : /lightning surge/i,
	name : "Surto de Relâmpagos",
	source : ["VSoS", 347],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "lightning"],
	range : "S:5-ft rad",
	description : "Criaturas ao alcance fazem um teste de resistência de Destreza; em caso de sucesso, nada acontece.",
	abilitytodamage : false,
	dc : true
};
WeaponsList["magic daggers"] = {
	regExpSearch : /magic daggers/i,
	name : "Adagas Mágicas",
	source : ["VSoS", 348],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "60 ft",
	description : "Cada dado corresponde a uma adaga separada (a progressão acrescenta ataques, não dano).",
	abilitytodamage : false,
	dc : false
};
WeaponsList["minor lifesteal"] = {
	regExpSearch : /minor lifesteal/i,
	name : "Roubo de Vida Menor",
	source : ["VSoS", 349],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, "necrotic"],
	range : "60 ft",
	description : "Teste de resistência de Constituição; em caso de sucesso, nada acontece; em caso de falha, ganho pontos de vida temporários iguais ao dano causado.",
	abilitytodamage : false,
	dc : true
};
WeaponsList["sonic pulse"] = {
	regExpSearch : /sonic pulse/i,
	name : "Pulso Sônico",
	source : ["VSoS", 354],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "thunder"],
	range : "60 ft",
	description : "Teste de resistência de Constituição; em caso de falha, o alvo fica surdo até o meu próximo turno; a até 10 pés, use d10 em vez de d8.",
	abilitytodamage : false,
	dc : true
};
WeaponsList["spark of life"] = {
	regExpSearch : /spark of life/i,
	name : "Centelha de Vida",
	source : ["VSoS", 354],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Special", "", "bludgeoning"],
	range : "60 ft",
	description : "Um cadáver ao alcance se move até 15 pés e realiza um ataque que causa 1d4/1d6/1d8/1d10/1d12 de dano; consulte o livro.",
	abilitytodamage : false,
	dc : false
};
WeaponsList["thunderous distortion"] = {
	regExpSearch : /thunderous distortion/i,
	name : "Distorção Trovejante",
	source : ["VSoS", 355],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "thunder"],
	range : "S:10-ft cone",
	description : "Criaturas na área fazem um teste de resistência de Constituição; conjure novamente no próximo turno para usar d8 em vez de d6.",
	abilitytodamage : false,
	dc : true
};
