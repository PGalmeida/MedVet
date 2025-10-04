/**
 * VetCare Management System
 * Este script controla toda a lógica da aplicação de gestão de pets.
 * @version 1.0 - Final
 */
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================================
    // STATE MANAGEMENT (GERENCIAMENTO DE DADOS E ESTADO)
    // =================================================================================

    let pets = getPetsFromStorage();
    let petIdToDelete = null; // Armazena o ID do pet a ser excluído

    /**
     * Carrega os pets do localStorage ou retorna dados iniciais.
     * @returns {Array} A lista de pets.
     */
    function getPetsFromStorage() {
        const storedPets = localStorage.getItem('vetcare_pets');
        if (storedPets) {
            return JSON.parse(storedPets);
        }
        const initialPets = [
            { id: 1, petName: 'Bolinha', species: 'Cachorro', breed: 'Poodle', tutorName: 'Maria Silva', birthDate: '2020-05-10', serviceDate: '2025-10-02' },
            { id: 2, petName: 'Frajola', species: 'Gato', breed: 'Siamês', tutorName: 'João Costa', birthDate: '2019-11-22', serviceDate: '2025-10-03' },
        ];
        savePetsToStorage(initialPets);
        return initialPets;
    }

    /**
     * Salva a lista de pets no localStorage.
     * @param {Array} petsData - A lista de pets a ser salva.
     */
    function savePetsToStorage(petsData) {
        localStorage.setItem('vetcare_pets', JSON.stringify(petsData));
    }

    // =================================================================================
    // DOM SELECTORS (SELETORES DE ELEMENTOS DA PÁGINA)
    // =================================================================================

    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const notificationButton = document.getElementById('notification-button');
    const notificationDropdown = document.getElementById('notification-dropdown');
    const modalOverlay = document.getElementById('modal-overlay');
    const detailsModal = document.getElementById('details-modal');
    const modalCloseButton = document.getElementById('modal-close-button');

    // =================================================================================
    // RENDERING FUNCTIONS (FUNÇÕES DE RENDERIZAÇÃO DE CONTEÚDO)
    // =================================================================================

    /**
     * Renderiza o formulário de cadastro na página.
     */
    const renderCadastroForm = () => {
        const cadastroPage = document.getElementById('page-cadastro');
        cadastroPage.innerHTML = `
            <div class="form-container">
                <header class="form-header">
                    <h2>Ficha de Novo Pet</h2>
                    <p>Por favor, preencha todos os campos com atenção.</p>
                </header>
                <form id="cadastro-form">
                    <fieldset class="form-fieldset"><legend class="form-legend">Informações do Pet</legend>
                        <div class="input-group">
                            <div class="form-field"><label for="petName">Nome do Pet</label><input type="text" id="petName" name="petName" required /></div>
                            <div class="form-field"><label for="species">Espécie</label><select id="species" name="species" required><option value="" disabled selected>Selecione...</option><option value="Cachorro">Cachorro</option><option value="Gato">Gato</option><option value="Pássaro">Pássaro</option><option value="Roedor">Roedor</option><option value="Outro">Outro</option></select></div>
                        </div>
                        <div class="input-group">
                            <div class="form-field"><label for="breed">Raça</label><input type="text" id="breed" name="breed" required /></div>
                            <div class="form-field"><label for="birthDate">Data de Nascimento</label><input type="date" id="birthDate" name="birthDate" required /></div>
                        </div>
                         <div class="form-field"><label for="serviceDate">Data de Atendimento</label><input type="date" id="serviceDate" name="serviceDate" required /></div>
                    </fieldset>
                    <fieldset class="form-fieldset"><legend class="form-legend">Informações do Tutor</legend>
                        <div class="form-field"><label for="tutorName">Nome Completo do Tutor</label><input type="text" id="tutorName" name="tutorName" required /></div>
                        <div class="form-field"><label for="tutorPhone">Telefone de Contato</label><input type="tel" id="tutorPhone" name="tutorPhone" placeholder="(00) 00000-0000" required /></div>
                    </fieldset>
                    <button type="submit" class="submit-button">Finalizar Cadastro</button>
                </form>
            </div>`;
        document.getElementById('cadastro-form').addEventListener('submit', handleCadastroSubmit);
        document.getElementById('tutorPhone').addEventListener('input', handlePhoneInput);
    };

    /**
     * Atualiza apenas as linhas da tabela de pets.
     * @param {string} [filter=''] - O texto para filtrar a lista.
     */
    const renderPetList = (filter = '') => {
        const tableBody = document.querySelector('#pets-tbody');
        const emptyMessage = document.querySelector('#empty-pets-message');
        if (!tableBody) return;

        const filterText = filter.toLowerCase();
        const filteredPets = pets.filter(p => 
            p.petName.toLowerCase().includes(filterText) ||
            p.tutorName.toLowerCase().includes(filterText) ||
            p.breed.toLowerCase().includes(filterText)
        );

        tableBody.innerHTML = filteredPets.map(p => `
            <tr data-id="${p.id}">
                <td>${p.petName}</td>
                <td>${p.tutorName}</td>
                <td>${formatDate(p.serviceDate)}</td>
                <td>${p.species}</td>
                <td>${p.breed}</td>
                <td class="table-actions">
                    <button class="details-button" data-id="${p.id}">Ver Detalhes</button>
                </td>
            </tr>`).join('');
        
        emptyMessage.style.display = filteredPets.length === 0 ? 'block' : 'none';
    };

    /**
     * Renderiza a estrutura da página da lista de pets (executado apenas uma vez).
     */
    const renderPetsPage = () => {
        const petsPage = document.getElementById('page-pets');
        if (petsPage.innerHTML !== '') return;

        petsPage.innerHTML = `
            <div class="table-container">
                <div class="table-header">
                    <h3>Lista de Pets</h3>
                    <p>Procure e gerencie os pets cadastrados.</p>
                    <form id="search-form" class="search-form">
                        <input type="text" id="search-input" class="search-input" placeholder="Buscar por nome, tutor ou raça..." />
                        <button type="submit" class="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
                    </form>
                </div>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>Nome do Pet</th><th>Tutor</th><th>Data Atendimento</th><th>Espécie</th><th>Raça</th><th>Ações</th></tr></thead>
                        <tbody id="pets-tbody"></tbody>
                    </table>
                </div>
                <div id="empty-pets-message" class="empty-table" style="display: none;"><p>Nenhum pet encontrado.</p></div>
            </div>`;
        
        document.getElementById('search-form').addEventListener('submit', handleSearchSubmit);
        document.getElementById('search-input').addEventListener('input', handleSearchInput);
        document.getElementById('pets-tbody').addEventListener('click', handleTableClick);
        renderPetList();
    };

    // =================================================================================
    // EVENT HANDLERS (FUNÇÕES QUE LIDAM COM EVENTOS)
    // =================================================================================

    /**
     * Lida com a navegação entre páginas.
     * @param {string} page - A página de destino ('cadastro' ou 'pets').
     */
    const navigateTo = (page) => {
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.page === page));
        pages.forEach(p => p.classList.toggle('active', p.id === `page-${page}`));
        pageTitle.textContent = document.querySelector(`.nav-button[data-page="${page}"] span`).textContent;
        if (page === 'pets') renderPetsPage();
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    };

    /**
     * Lida com o envio do formulário de cadastro.
     * @param {Event} e - O objeto do evento de submit.
     */
    const handleCadastroSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newPet = Object.fromEntries(new FormData(form).entries());
        newPet.id = Date.now();
        
        pets.unshift(newPet);
        savePetsToStorage(pets);
        
        form.reset();
        showToast('Pet cadastrado com sucesso!', 'success');
        
        renderPetsPage();
        renderPetList();
        navigateTo('pets');
    };

    /**
     * Lida com o clique no botão de busca.
     * @param {Event} e - O objeto do evento de submit.
     */
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        renderPetList(document.getElementById('search-input').value);
    };
    
    /**
     * Lida com a digitação em tempo real no campo de busca.
     * @param {Event} e - O objeto do evento de input.
     */
    const handleSearchInput = (e) => {
        renderPetList(e.target.value);
    };
    
    /**
     * Lida com cliques na tabela para abrir o modal de detalhes.
     * @param {Event} e - O objeto do evento de clique.
     */
    const handleTableClick = (e) => {
        if (e.target.classList.contains('details-button')) {
            const petId = Number(e.target.dataset.id);
            openDetailsModal(petId);
        }
    };
    
    /**
     * Lida com a exclusão de um pet.
     */
    const handleDeletePet = () => {
        if (!petIdToDelete) return;
        
        if (confirm('Tem certeza de que deseja excluir este registro? Esta ação não pode ser desfeita.')) {
            pets = pets.filter(p => p.id !== petIdToDelete);
            savePetsToStorage(pets);
            renderPetList(document.getElementById('search-input')?.value || '');
            closeDetailsModal();
            showToast('Registro do pet excluído com sucesso.', 'success');
        }
    };

    // =================================================================================
    // UI LOGIC (LÓGICA DE INTERFACE: MODAL, NOTIFICAÇÕES, ETC.)
    // =================================================================================

    /**
     * Abre o modal com os detalhes de um pet específico.
     * @param {number} petId - O ID do pet a ser exibido.
     */
    const openDetailsModal = (petId) => {
        const pet = pets.find(p => p.id === petId);
        if (!pet) return;

        petIdToDelete = pet.id; // Armazena o ID para possível exclusão

        document.getElementById('modal-title').textContent = `Detalhes de ${pet.petName}`;
        document.getElementById('modal-body').innerHTML = `
            <div class="detail-item"><strong>Nome do Pet:</strong> <span>${pet.petName}</span></div>
            <div class="detail-item"><strong>Espécie:</strong> <span>${pet.species}</span></div>
            <div class="detail-item"><strong>Raça:</strong> <span>${pet.breed}</span></div>
            <div class="detail-item"><strong>Nascimento:</strong> <span>${formatDate(pet.birthDate)}</span></div>
            <div class="detail-item"><strong>Atendimento:</strong> <span>${formatDate(pet.serviceDate)}</span></div>
            <hr style="border: none; border-top: 1px solid var(--color-border); margin: 1rem 0;">
            <div class="detail-item"><strong>Tutor:</strong> <span>${pet.tutorName}</span></div>
            <div class="detail-item"><strong>Telefone:</strong> <span>${pet.tutorPhone}</span></div>
        `;
        document.getElementById('modal-footer').innerHTML = `
            <button id="modal-delete-button" class="modal-button danger">Excluir Registro</button>
            <button id="modal-secondary-close" class="modal-button secondary">Fechar</button>
        `;
        
        modalOverlay.classList.add('show');
        detailsModal.classList.add('show');
        
        document.getElementById('modal-delete-button').addEventListener('click', handleDeletePet);
        document.getElementById('modal-secondary-close').addEventListener('click', closeDetailsModal);
    };

    /**
     * Fecha o modal de detalhes.
     */
    const closeDetailsModal = () => {
        petIdToDelete = null; // Limpa o ID
        modalOverlay.classList.remove('show');
        detailsModal.classList.remove('show');
    };

    /**
     * Exibe uma notificação toast.
     * @param {string} message - A mensagem a ser exibida.
     * @param {('success'|'error')} type - O tipo de notificação.
     */
    const showToast = (message, type = 'success') => {
        const toast = document.getElementById('notification-toast');
        toast.querySelector('span').textContent = message;
        toast.className = 'notification-toast';
        toast.classList.add(type, 'show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    };
    
    // =================================================================================
    // UTILITIES (FUNÇÕES UTILITÁRIAS)
    // =================================================================================
    
    /**
     * Formata uma string de data (YYYY-MM-DD) para o formato DD/MM/YYYY.
     * @param {string} dateString - A data no formato YYYY-MM-DD.
     * @returns {string} A data formatada.
     */
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    
    /**
     * Formata o campo de telefone enquanto o usuário digita.
     * @param {Event} e - O evento de input.
     */
    const handlePhoneInput = (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 11);
        if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        else if (value.length > 6) value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        else if (value.length > 2) value = value.replace(/^(\d{2})(\d*)/, '($1) $2');
        e.target.value = value;
    };

    // =================================================================================
    // INITIALIZATION (INICIALIZAÇÃO DA APLICAÇÃO)
    // =================================================================================
    
    // Configura os ouvintes de eventos principais
    navButtons.forEach(button => button.addEventListener('click', () => navigateTo(button.dataset.page)));
    menuButton.addEventListener('click', () => { sidebar.classList.add('open'); sidebarOverlay.classList.add('open'); });
    sidebarOverlay.addEventListener('click', () => { sidebar.classList.remove('open'); sidebarOverlay.classList.remove('open'); });
    notificationButton.addEventListener('click', () => notificationDropdown.classList.toggle('show'));
    document.addEventListener('click', (e) => { if (!notificationButton.parentElement.contains(e.target)) notificationDropdown.classList.remove('show'); });
    modalOverlay.addEventListener('click', closeDetailsModal);
    modalCloseButton.addEventListener('click', closeDetailsModal);

    // Renderiza o conteúdo inicial
    renderCadastroForm();
    navigateTo('cadastro'); // Inicia na página de cadastro
});

