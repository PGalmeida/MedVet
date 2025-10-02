// --- Executa o script quando o DOM estiver totalmente carregado ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Funções de Armazenamento (Banco de Dados Local) ---
    function getPetsFromStorage() {
        const storedPets = localStorage.getItem('vetcare_pets');
        if (storedPets) {
            return JSON.parse(storedPets);
        } else {
            // Se não houver nada, retorna os dados iniciais e salva no storage
            const initialPets = [
                { id: 1, petName: 'Bolinha', species: 'Cachorro', breed: 'Poodle', tutorName: 'Maria Silva', birthDate: '2020-05-10', serviceDate: '2025-10-02' },
                { id: 2, petName: 'Frajola', species: 'Gato', breed: 'Siamês', tutorName: 'João Costa', birthDate: '2019-11-22', serviceDate: '2025-10-03' },
                { id: 3, petName: 'Rex', species: 'Cachorro', breed: 'Labrador', tutorName: 'Ana Pereira', birthDate: '2022-01-15', serviceDate: '2025-10-05' },
                { id: 4, petName: 'Mimi', species: 'Gato', breed: 'Persa', tutorName: 'Carlos Souza', birthDate: '2021-08-30', serviceDate: '2025-10-05' },
            ];
            savePetsToStorage(initialPets);
            return initialPets;
        }
    }

    function savePetsToStorage(petsData) {
        localStorage.setItem('vetcare_pets', JSON.stringify(petsData));
    }

    // --- Estado da Aplicação (Dados) ---
    let pets = getPetsFromStorage();

    // --- Seletores de Elementos do DOM ---
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const notificationButton = document.getElementById('notification-button');
    const notificationDropdown = document.getElementById('notification-dropdown');

    // --- Funções de Renderização ---

    function renderCadastroForm() {
        const cadastroPage = document.getElementById('page-cadastro');
        cadastroPage.innerHTML = `
            <div class="form-container">
                <header class="form-header">
                    <h2>Ficha de Novo Pet</h2>
                    <p>Por favor, preencha todos os campos com atenção.</p>
                </header>
                <form id="cadastro-form">
                    <fieldset class="form-fieldset">
                        <legend class="form-legend">Informações do Pet</legend>
                        <div class="input-group">
                            <div class="form-field"><label for="petName">Nome do Pet</label><input type="text" id="petName" name="petName" required /></div>
                            <div class="form-field"><label for="species">Espécie</label><select id="species" name="species" required><option value="" disabled selected>Selecione...</option><option value="Cachorro">Cachorro</option><option value="Gato">Gato</option><option value="Pássaro">Pássaro</option><option value="Roedor">Roedor</option><option value="Outro">Outro</option></select></div>
                        </div>
                        <div class="input-group">
                            <div class="form-field"><label for="breed">Raça</label><input type="text" id="breed" name="breed" required /></div>
                            <div class="form-field"><label for="birthDate">Data de Nascimento</label><input type="date" id="birthDate" name="birthDate" required /></div>
                        </div>
                         <div class="form-field">
                            <label for="serviceDate">Data de Atendimento</label>
                            <input type="date" id="serviceDate" name="serviceDate" required />
                        </div>
                    </fieldset>
                    <fieldset class="form-fieldset">
                        <legend class="form-legend">Informações do Tutor</legend>
                        <div class="form-field"><label for="tutorName">Nome Completo do Tutor</label><input type="text" id="tutorName" name="tutorName" required /></div>
                        <div class="form-field"><label for="tutorPhone">Telefone de Contato</label><input type="tel" id="tutorPhone" name="tutorPhone" placeholder="(00) 00000-0000" required /></div>
                    </fieldset>
                    <button type="submit" class="submit-button">Finalizar Cadastro</button>
                </form>
            </div>`;
        document.getElementById('cadastro-form').addEventListener('submit', handleCadastroSubmit);
        document.getElementById('tutorPhone').addEventListener('input', handlePhoneInput);
    }

    function renderPets(filter = '') {
        const petsPage = document.getElementById('page-pets');
        const filteredPets = pets.filter(p => 
            p.petName.toLowerCase().includes(filter.toLowerCase()) ||
            p.tutorName.toLowerCase().includes(filter.toLowerCase()) ||
            p.breed.toLowerCase().includes(filter.toLowerCase())
        );

        let tableRows = filteredPets.map(p => `
            <tr>
                <td>${p.petName}</td>
                <td>${p.tutorName}</td>
                <td>${new Date(p.serviceDate).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</td>
                <td>${p.species}</td>
                <td>${p.breed}</td>
                <td class="table-actions"><button>Ver Detalhes</button></td>
            </tr>`).join('');

        petsPage.innerHTML = `
            <div class="table-container">
                <div class="table-header">
                    <h3>Lista de Pets</h3>
                    <p>Procure e gerencie os pets cadastrados.</p>
                    <form id="search-form" class="search-form">
                        <input type="text" id="search-input" class="search-input" placeholder="Buscar por nome, tutor ou raça..." value="${filter}" />
                        <button type="submit" class="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
                    </form>
                </div>
                <div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome do Pet</th><th>Tutor</th><th>Data Atendimento</th><th>Espécie</th><th>Raça</th><th>Ações</th></tr></thead><tbody id="pets-tbody">${tableRows}</tbody></table></div>
                ${filteredPets.length === 0 ? '<div class="empty-table"><p>Nenhum pet encontrado.</p></div>' : ''}
            </div>`;
        document.getElementById('search-form').addEventListener('submit', handleSearchSubmit);
        document.getElementById('search-input').addEventListener('input', handleSearchInput);
    }

    // --- Lógica de Manipulação de Eventos ---

    function navigateTo(page) {
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.page === page));
        pages.forEach(p => p.classList.toggle('active', p.id === `page-${page}`));
        const button = document.querySelector(`.nav-button[data-page="${page}"]`);
        pageTitle.textContent = button.querySelector('span').textContent;
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    }

    function handleCadastroSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const newPet = Object.fromEntries(new FormData(form).entries());
        newPet.id = Date.now();
        
        pets.unshift(newPet);
        savePetsToStorage(pets);
        
        form.reset();
        showToast('Pet cadastrado com sucesso!', 'success');
        
        renderPets();
        navigateTo('pets');
    }
    
    function handleSearchSubmit(e) {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        renderPets(searchInput.value);
    }
    
    function handleSearchInput(e) {
        renderPets(e.target.value);
    }

    function handlePhoneInput(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        e.target.value = value;
    }

    function showToast(message, type = 'success') {
        const toast = document.getElementById('notification-toast');
        const messageSpan = document.getElementById('notification-message');
        
        messageSpan.textContent = message;
        toast.className = 'notification-toast';
        toast.classList.add(type, 'show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // --- Lógica de UI (Dropdowns, Modais, etc.) ---
    notificationButton.addEventListener('click', () => {
        notificationDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!notificationButton.contains(e.target) && !notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.remove('show');
        }
    });
    
    menuButton.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('open');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    });

    // --- Inicialização da Aplicação ---
    navButtons.forEach(button => {
        button.addEventListener('click', () => navigateTo(button.dataset.page));
    });

    renderCadastroForm();
    renderPets();
    
    navigateTo('cadastro'); // Inicia na página de cadastro
});

