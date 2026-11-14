// assets/js/filtros-magias.js
document.addEventListener("DOMContentLoaded", function () {
    // ============= CONFIGURAÇÕES =============
    const MAGIAS_POR_CARGA = 30;
    const ALTURA_CABECALHO = 10; // 10rem
    const DEBOUNCE_TIME = 300; // ms

    // ============= ESTADO =============
    let todasMagias = [];
    let magiasFiltradas = [];
    let indiceAtual = 0;
    let carregando = false;
    let primeiraCarga = true;
    let imprimindo = false;
    const magiasSelecionadas = new Set();

    // ============= ELEMENTOS DOM =============
    const elementos = {
        listaMagias: document.getElementById("lista-magias"),
        scrollTrigger: document.getElementById("scroll-trigger"),
        busca: document.getElementById("busca"),
        nivel: document.getElementById("filtro-nivel"),
        escola: document.getElementById("filtro-escola"),
        ritual: document.getElementById("filtro-ritual"),
        concentracao: document.getElementById("filtro-concentracao"),
        componentes: document.querySelectorAll(".componente"),
        ordenar: document.getElementById("ordenar-por"),
        classe: document.getElementById("filtro-classe"),
        livroRef: document.getElementById("filtro-livro-ref"),
        limpar: document.getElementById("limpar-filtros"),
        listaSelecao: document.getElementById("lista-selecao"),
        contadorSelecao: document.getElementById("contador-selecao"),
        limparSelecao: document.getElementById("limpar-selecao"),
        imprimir: document.getElementById("btn-imprimir")
    };

    // ============= FUNÇÕES PRINCIPAIS =============

    // 1. Inicialização
    async function inicializar() {
        try {
            await carregarBaseMagias();
        } catch (erro) {
            console.error("Não foi possível carregar a lista de magias.", erro);
            elementos.listaMagias.textContent = window.location.protocol === "file:"
                ? "O navegador bloqueia o carregamento dos arquivos JSON ao abrir o HTML diretamente. Execute abrir-magias.bat nesta pasta e acesse http://127.0.0.1:8000/."
                : `Não foi possível carregar os arquivos de magias (${erro.message}). Verifique se os arquivos JSON estão na pasta do site e tente recarregar.`;
            return;
        }

        configurarObservador();
        configurarEventListeners();
        aplicarFiltros();
        primeiraCarga = false;
    }

    // 2. Carrega todas as magias uma vez
    async function carregarBaseMagias() {
        const magias = await carregarArquivoMagias("./magias.json");

        todasMagias = magias.map((magia, indice) => criarCartaMagia(magia, indice));
        popularFiltroLivroRef(magias);
        ordenarOpcoesSelect();
        atualizarListaSelecao();
    }

    async function carregarArquivoMagias(caminho) {
        const resposta = await fetch(caminho);
        if (!resposta.ok) {
            throw new Error(`${caminho}: HTTP ${resposta.status}`);
        }

        const magias = await resposta.json();
        if (!Array.isArray(magias)) {
            throw new Error(`${caminho} deve conter uma lista de magias.`);
        }
        return magias;
    }

    function popularFiltroLivroRef(magias) {
        const livros = [...new Set(magias.map((magia) => magia.livroRef))].sort((a, b) =>
            a.localeCompare(b, "pt-BR")
        );

        elementos.livroRef.replaceChildren(new Option("Todos os livros", ""));
        livros.forEach((livro) => elementos.livroRef.add(new Option(livro, livro)));
    }

    function criarCartaMagia(magia, indice) {
        const carta = document.createElement("div");
        carta.className = "carta-magia";
        carta.dataset.spellId = String(indice);
        carta.dataset.nome = magia.nomeBusca;
        carta.dataset.original = magia.originalBusca;
        carta.dataset.nivel = magia.nivel;
        carta.dataset.escola = magia.escola;
        carta.dataset.ritual = String(magia.ritual);
        carta.dataset.concentracao = String(magia.concentracao);
        carta.dataset.componentes = magia.componentes;
        carta.dataset.classes = magia.classes;
        carta.dataset.livroRef = magia.livroRef;
        carta.dataset.alcance = magia.alcance;
        carta.dataset.tempo = magia.tempo;
        carta.style.display = "none";

        const controleSelecao = document.createElement("label");
        controleSelecao.className = "selecao-carta";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox-selecao-magia";
        checkbox.dataset.spellId = String(indice);
        checkbox.setAttribute("aria-label", `Selecionar ${magia.nome} para o PDF`);
        const textoSelecao = document.createElement("span");
        textoSelecao.textContent = "Incluir no PDF";
        controleSelecao.append(checkbox, textoSelecao);

        const cabecalho = document.createElement("div");
        cabecalho.className = "magia-cabecalho";

        const nome = document.createElement("p");
        nome.className = "magia-nome";
        nome.textContent = magia.nome;

        const original = document.createElement("span");
        original.className = "ingles";
        original.textContent = magia.original;

        const metadados = document.createElement("div");
        metadados.className = "magia-metadados";
        metadados.innerHTML = magia.metadadosHtml;
        const tags = metadados.querySelector(".tags");
        if (magia.classes && !magia.metadadosHtml.includes(magia.classes)) {
            adicionarMetadado(tags, "Classes:", magia.classes);
        }
        adicionarMetadado(tags, "Ritual:", magia.ritual ? "Sim" : "Não");
        adicionarMetadado(tags, "Concentração:", magia.concentracao ? "Sim" : "Não");

        cabecalho.append(nome, original, metadados);

        const descricao = document.createElement("div");
        descricao.className = "magia-descricao";
        descricao.innerHTML = magia.descricaoHtml;

        carta.append(controleSelecao, cabecalho, descricao);
        return carta;
    }

    function adicionarMetadado(tags, rotulo, valor) {
        const linha = document.createElement("p");
        const titulo = document.createElement("span");
        titulo.className = "negrito";
        titulo.textContent = `${rotulo} `;
        linha.append(titulo, document.createTextNode(valor));
        tags.append(linha);
    }

    // 3. Carregamento progressivo automático
    function carregarMagias() {
        if (imprimindo || carregando || indiceAtual >= magiasFiltradas.length) return;

        carregando = true;
        mostrarLoader(true);

        // Simula um pequeno delay para melhor UX
        setTimeout(() => {
            const fragment = document.createDocumentFragment();
            const fim = Math.min(indiceAtual + MAGIAS_POR_CARGA, magiasFiltradas.length);

            for (let i = indiceAtual; i < fim; i++) {
                fragment.appendChild(clonarCarta(magiasFiltradas[i]));
            }

            elementos.listaMagias.appendChild(fragment);
            indiceAtual = fim;
            carregando = false;
            mostrarLoader(false);
        }, 150);
    }

    function clonarCarta(magia) {
        const clone = magia.cloneNode(true);
        clone.style.display = "block";
        clone.querySelector(".checkbox-selecao-magia").checked = magiasSelecionadas.has(magia.dataset.spellId);
        return clone;
    }

    // 4. Filtragem otimizada
    function aplicarFiltros() {
        const termoBusca = elementos.busca.value.toLowerCase();
        const nivelSelecionado = elementos.nivel.value;
        const escolaSelecionada = elementos.escola.value;
        const ritualAtivo = elementos.ritual.checked;
        const concentracaoAtiva = elementos.concentracao.checked;
        const classeSelecionada = elementos.classe.value;
        const livroRefSelecionado = elementos.livroRef.value;

        const componentesSelecionados = Array.from(elementos.componentes)
            .filter((c) => c.checked)
            .map((c) => c.value);

        magiasFiltradas = todasMagias.filter((magia) => {
            const nome = magia.dataset.nome.toLowerCase();
            const original = magia.dataset.original.toLowerCase();
            const nivel = magia.dataset.nivel;
            const escola = magia.dataset.escola;
            const ritual = magia.dataset.ritual === "true";
            const concentracao = magia.dataset.concentracao === "true";
            const componentes = magia.dataset.componentes;
            const classesMagia = magia.dataset.classes.split(",").map((c) => c.trim().toLowerCase());

            return (
                (() => {
                    if (termoBusca === "") return true;
                
                    // divide em termos pelo "or"
                    const termos = termoBusca.split(/\s+or\s+/).map(t => t.trim());
                
                    // basta um termo aparecer em nome ou original
                    return termos.some(t => nome.includes(t) || original.includes(t));
                })() &&
                (nivelSelecionado === "" || nivel === nivelSelecionado) &&
                (escolaSelecionada === "" || escola === escolaSelecionada) &&
                (!ritualAtivo || ritual) &&
                (!concentracaoAtiva || concentracao) &&
                (componentesSelecionados.length === 0 ||
                    componentesSelecionados.every((c) => componentes.includes(c))) &&
                (classeSelecionada === "" || classesMagia.includes(classeSelecionada.toLowerCase())) &&
                (livroRefSelecionado === "" || magia.dataset.livroRef === livroRefSelecionado)
            );
        });

        // Reseta a paginação
        elementos.listaMagias.innerHTML = "";
        indiceAtual = 0;

        // Ordena e carrega a primeira página
        ordenarMagias();
        carregarMagias();

        if (!primeiraCarga) scrollParaTopo();
    }

    // 5. Ordenação
    function ordenarMagias() {
        const ordenacao = elementos.ordenar.value;

        magiasFiltradas.sort((a, b) => {
            switch (ordenacao) {
                case "nome-asc":
                    return a.dataset.nome.localeCompare(b.dataset.nome);
                case "nome-desc":
                    return b.dataset.nome.localeCompare(a.dataset.nome);
                case "original-asc":
                    return a.dataset.original.localeCompare(b.dataset.original);
                case "original-desc":
                    return b.dataset.original.localeCompare(a.dataset.original);
                case "nivel-asc":
                    return parseInt(a.dataset.nivel) - parseInt(b.dataset.nivel);
                case "nivel-desc":
                    return parseInt(b.dataset.nivel) - parseInt(a.dataset.nivel);
                default:
                    return 0;
            }
        });
    }

    // ============= FUNÇÕES AUXILIARES =============

    function scrollParaTopo() {
        const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const offset = ALTURA_CABECALHO * remToPx;

        window.scrollTo({
            top: elementos.listaMagias.offsetTop - offset,
            behavior: "smooth"
        });
    }

    function mostrarLoader(mostrar) {
        elementos.scrollTrigger.innerHTML = mostrar ? '<div class="loading">Carregando mais magias...</div>' : "";
    }

    function ordenarOpcoesSelect() {
        const select = elementos.classe;
        const options = Array.from(select.options);
        const valoresUnicos = new Set();

        // Remove duplicatas e espaços
        for (let i = options.length - 1; i >= 0; i--) {
            const value = options[i].value.trim();
            if (value === "") continue;

            if (valoresUnicos.has(value)) {
                select.remove(i);
            } else {
                options[i].value = value;
                options[i].textContent = value;
                valoresUnicos.add(value);
            }
        }

        // Ordena alfabeticamente
        const [firstOpt, ...restOpts] = Array.from(select.options);
        const sorted = restOpts.sort((a, b) => a.text.localeCompare(b.text, "pt-BR"));

        select.innerHTML = "";
        select.add(firstOpt);
        sorted.forEach((opt) => select.add(opt));
    }

    // ============= OBSERVADOR DE SCROLL =============
    function configurarObservador() {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !imprimindo && !carregando) {
                    carregarMagias();
                }
            },
            {
                rootMargin: "100px",
                threshold: 0.1
            }
        );

        observer.observe(elementos.scrollTrigger);
    }

    // ============= EVENT LISTENERS =============
    function configurarEventListeners() {
        elementos.listaMagias.addEventListener("change", (evento) => {
            const checkbox = evento.target.closest(".checkbox-selecao-magia");
            if (!checkbox) return;

            const id = checkbox.dataset.spellId;
            if (checkbox.checked) {
                magiasSelecionadas.add(id);
            } else {
                magiasSelecionadas.delete(id);
            }

            const cartaOriginal = todasMagias[Number(id)];
            cartaOriginal.querySelector(".checkbox-selecao-magia").checked = checkbox.checked;
            atualizarListaSelecao();
        });

        elementos.listaSelecao.addEventListener("click", (evento) => {
            const botaoRemover = evento.target.closest("[data-remover-magia]");
            if (!botaoRemover) return;

            const id = botaoRemover.dataset.removerMagia;
            magiasSelecionadas.delete(id);
            todasMagias[Number(id)].querySelector(".checkbox-selecao-magia").checked = false;
            elementos.listaMagias
                .querySelectorAll(`.checkbox-selecao-magia[data-spell-id="${id}"]`)
                .forEach((checkbox) => (checkbox.checked = false));
            atualizarListaSelecao();
        });

        elementos.limparSelecao.addEventListener("click", limparSelecao);
        elementos.imprimir.addEventListener("click", gerarPdfSelecionadas);

        // Debounce para busca
        let timeoutBusca;
        elementos.busca.addEventListener("input", () => {
            clearTimeout(timeoutBusca);
            timeoutBusca = setTimeout(aplicarFiltros, DEBOUNCE_TIME);
        });

        // Filtros imediatos
        elementos.nivel.addEventListener("change", aplicarFiltros);
        elementos.escola.addEventListener("change", aplicarFiltros);
        elementos.ritual.addEventListener("change", aplicarFiltros);
        elementos.concentracao.addEventListener("change", aplicarFiltros);
        elementos.classe.addEventListener("change", aplicarFiltros);
        elementos.livroRef.addEventListener("change", aplicarFiltros);
        elementos.ordenar.addEventListener("change", aplicarFiltros);

        // Componentes
        elementos.componentes.forEach((c) => c.addEventListener("change", aplicarFiltros));

        // Limpar filtros
        elementos.limpar.addEventListener("click", function () {
            elementos.busca.value = "";
            elementos.nivel.value = "";
            elementos.escola.value = "";
            elementos.ritual.checked = false;
            elementos.concentracao.checked = false;
            elementos.classe.value = "";
            elementos.livroRef.value = "";
            elementos.ordenar.value = "nome-asc";
            elementos.componentes.forEach((c) => (c.checked = false));
            aplicarFiltros();
        });
    }

    function atualizarListaSelecao() {
        const selecionadas = [...magiasSelecionadas]
            .map((id) => todasMagias[Number(id)])
            .filter(Boolean)
            .sort((a, b) => {
                const nivelDiff = Number(a.dataset.nivel) - Number(b.dataset.nivel);
                return nivelDiff || a.dataset.nome.localeCompare(b.dataset.nome, "pt-BR");
            });

        elementos.contadorSelecao.textContent =
            `${selecionadas.length} ${selecionadas.length === 1 ? "magia selecionada" : "magias selecionadas"}`;
        elementos.imprimir.disabled = selecionadas.length === 0;
        elementos.limparSelecao.disabled = selecionadas.length === 0;
        elementos.listaSelecao.replaceChildren();

        if (selecionadas.length === 0) {
            const vazio = document.createElement("p");
            vazio.className = "selecao-vazia";
            vazio.textContent = "Selecione magias para montar seu PDF.";
            elementos.listaSelecao.append(vazio);
            return;
        }

        let nivelAtual = null;
        let listaNivel;

        selecionadas.forEach((magia) => {
            const nivel = magia.dataset.nivel;
            if (nivel !== nivelAtual) {
                nivelAtual = nivel;
                const secao = document.createElement("section");
                secao.className = "grupo-selecao";
                const titulo = document.createElement("h3");
                titulo.textContent = nivel === "0" ? "Truques" : `${nivel}º Círculo`;
                listaNivel = document.createElement("ul");
                secao.append(titulo, listaNivel);
                elementos.listaSelecao.append(secao);
            }

            const item = document.createElement("li");
            const nome = document.createElement("span");
            nome.textContent = magia.querySelector(".magia-nome").textContent;
            const remover = document.createElement("button");
            remover.type = "button";
            remover.className = "remover-magia-selecionada";
            remover.dataset.removerMagia = magia.dataset.spellId;
            remover.setAttribute("aria-label", `Remover ${nome.textContent} da seleção`);
            remover.textContent = "×";
            item.append(nome, remover);
            listaNivel.append(item);
        });
    }

    function limparSelecao() {
        magiasSelecionadas.clear();
        todasMagias.forEach((magia) => {
            magia.querySelector(".checkbox-selecao-magia").checked = false;
        });
        elementos.listaMagias
            .querySelectorAll(".checkbox-selecao-magia")
            .forEach((checkbox) => (checkbox.checked = false));
        atualizarListaSelecao();
    }

    async function gerarPdfSelecionadas() {
        if (imprimindo || magiasSelecionadas.size === 0) return;

        imprimindo = true;
        elementos.imprimir.disabled = true;
        const cartasVisiveis = Array.from(elementos.listaMagias.children);

        try {
            const fragmento = document.createDocumentFragment();
            [...magiasSelecionadas]
                .map((id) => todasMagias[Number(id)])
                .filter(Boolean)
                .sort((a, b) => {
                    const nivelDiff = Number(a.dataset.nivel) - Number(b.dataset.nivel);
                    return nivelDiff || a.dataset.nome.localeCompare(b.dataset.nome, "pt-BR");
                })
                .forEach((magia) => fragmento.append(clonarCarta(magia)));

            elementos.listaMagias.replaceChildren(fragmento);
            await new Promise((resolve) => setTimeout(resolve, 100));
            window.print();
        } finally {
            elementos.listaMagias.replaceChildren(...cartasVisiveis);
            imprimindo = false;
            elementos.imprimir.disabled = magiasSelecionadas.size === 0;
        }
    }

    // ============= INICIALIZAÇÃO =============
    inicializar();

});
