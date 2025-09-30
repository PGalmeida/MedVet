// --- Executa o script quando o DOM estiver totalmente carregado ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Estado da Aplicação (Dados) ---
    let patients = [
        { id: 1, petName: 'Bolinha', species: 'Cachorro', breed: 'Poodle', tutorName: 'Maria Silva', birthDate: '2020-05-10' },
        { id: 2, petName: 'Frajola', species: 'Gato', breed: 'Siamês', tutorName: 'João Costa', birthDate: '2019-11-22' },
        { id: 3, petName: 'Rex', species: 'Cachorro', breed: 'Labrador', tutorName: 'Ana Pereira', birthDate: '2022-01-15' },
        { id: 4, petName: 'Mimi', species: 'Gato', breed: 'Persa', tutorName: 'Carlos Souza', birthDate: '2021-08-30' },
    ];

    // --- Seletores de Elementos do DOM ---
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // --- Funções de Renderização ---

    // Gera o HTML para o Dashboard
    function renderDashboard() {
        const dashboardPage = document.getElementById('page-dashboard');
        const totalPatients = patients.length;
        // Dados mocados para exemplo
        const scheduledAppointments = 8; 
        const vaccinatedAnimals = 5;

        dashboardPage.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="icon-wrapper" style="background-color: #dbeafe; color: #3b82f6;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-7 0V15a5 5 0 0 1 5-5z"/><path d="M6 14.32V16a6 6 0 0 0 12 0v-1.68"/></svg></div>
                    <div>
                        <p class="stat-card-title">Total de Pacientes</p>
                        <p class="stat-card-value">${totalPatients}</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="icon-wrapper" style="background-color: #dcfce7; color: #22c55e;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
                    <div>
                        <p class="stat-card-title">Consultas Agendadas</p>
                        <p class="stat-card-value">${scheduledAppointments}</p>
                    </div>
                </div>
                <div class="stat-card">
                     <div class="icon-wrapper" style="background-color: #fef9c3; color: #eab308;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></div>
                    <div>
                        <p class="stat-card-title">Animais Vacinados</p>
                        <p class="stat-card-value">${vaccinatedAnimals}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Gera o HTML para o Formulário de Cadastro
    function renderCadastroForm() {
        const cadastroPage = document.getElementById('page-cadastro');
        cadastroPage.innerHTML = `
            <div class="form-container">
                <header class="form-header">
                    <h2>Ficha de Novo Paciente</h2>
                    <p>Por favor, preencha todos os campos com atenção.</p>
                </header>
                <form id="cadastro-form">
                    <fieldset class="form-fieldset">
                        <legend class="form-legend">Informações do Pet</legend>
                        <div class="input-group">
                            <div class="form-field">
                                <label for="petName">Nome do Pet</label>
                                <input type="text" id="petName" name="petName" required />
                            </div>
                            <div class="form-field">
                                <label for="species">Espécie</label>
                                <select id="species" name="species" required>
                                    <option value="" disabled selected>Selecione...</option>
                                    <option value="Cachorro">Cachorro</option>
                                    <option value="Gato">Gato</option>
                                    <option value="Pássaro">Pássaro</option>
                                    <option value="Roedor">Roedor</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                        </div>
                         <div class="input-group">
                            <div class="form-field">
                                <label for="breed">Raça</label>
                                <input type="text" id="breed" name="breed" required />
                            </div>
                            <div class="form-field">
                                <label for="birthDate">Data de Nascimento</label>
                                <input type="date" id="birthDate" name="birthDate" required />
                            </div>
                        </div>
                    </fieldset>
                     <fieldset class="form-fieldset">
                        <legend class="form-legend">Informações do Tutor</legend>
                         <div class="form-field">
                            <label for="tutorName">Nome Completo do Tutor</label>
                            <input type="text" id="tutorName" name="tutorName" required />
                        </div>
                         <div class="form-field">
                            <label for="tutorPhone">Telefone de Contato</label>
                            <input type="tel" id="tutorPhone" name="tutorPhone" placeholder="(00) 00000-0000" required />
                        </div>
                    </fieldset>
                    <button type="submit" class="submit-button">Finalizar Cadastro</button>
                </form>
            </div>
        `;
        // Adiciona listeners específicos para esta tela
        document.getElementById('cadastro-form').addEventListener('submit', handleCadastroSubmit);
        document.getElementById('tutorPhone').addEventListener('input', handlePhoneInput);
    }

    // Gera o HTML para a Lista de Pacientes
    function renderPacientes(filter = '') {
        const pacientesPage = document.getElementById('page-pacientes');
        const filteredPatients = patients.filter(p => 
            p.petName.toLowerCase().includes(filter.toLowerCase()) ||
            p.tutorName.toLowerCase().includes(filter.toLowerCase()) ||
            p.breed.toLowerCase().includes(filter.toLowerCase())
        );

        let tableRows = filteredPatients.map(p => `
            <tr>
                <td class="font-semibold">${p.petName}</td>
                <td>${p.species}</td>
                <td>${p.breed}</td>
                <td>${p.tutorName}</td>
                <td>${new Date(p.birthDate).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</td>
                <td class="table-actions"><button>Ver Detalhes</button></td>
            </tr>
        `).join('');

        pacientesPage.innerHTML = `
            <div class="table-container">
                <div class="table-header">
                    <h3>Lista de Pacientes</h3>
                    <p>Procure e gerencie os pacientes cadastrados.</p>
                    <input type="text" id="search-input" class="search-input" placeholder="Buscar por nome, tutor ou raça..." />
                </div>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Nome do Pet</th>
                                <th>Espécie</th>
                                <th>Raça</th>
                                <th>Tutor</th>
                                <th>Data Nasc.</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="pacientes-tbody">
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
                ${filteredPatients.length === 0 ? '<div class="empty-table"><p>Nenhum paciente encontrado.</p></div>' : ''}
            </div>
        `;
        // Adiciona listener para a busca
        document.getElementById('search-input').addEventListener('input', (e) => renderPacientes(e.target.value));
    }


    // --- Lógica de Manipulação de Eventos ---

    // Navegação principal
    function navigateTo(page) {
        // Atualiza botões
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === page);
        });
        // Atualiza páginas
        pages.forEach(p => {
            p.classList.toggle('active', p.id === `page-${page}`);
        });
        // Atualiza título
        const button = document.querySelector(`.nav-button[data-page="${page}"]`);
        pageTitle.textContent = button.querySelector('span').textContent;

        // Fecha a sidebar no mobile ao navegar
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    }

    // Submit do formulário de cadastro
    function handleCadastroSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPatient = Object.fromEntries(formData.entries());
        newPatient.id = Date.now();
        
        patients.unshift(newPatient); // Adiciona no início da lista
        
        form.reset();
        showNotification('Paciente cadastrado com sucesso!', 'success');
        
        // Atualiza as telas que dependem dos dados
        renderDashboard();
        renderPacientes();
        navigateTo('pacientes');
    }

    // Máscara de telefone
    function handlePhoneInput(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        else if (value.length > 5) value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        else if (value.length > 2) value = value.replace(/^(\d{2})(\d*)/, '($1) $2');
        else value = value.replace(/^(\d*)/, '($1');
        e.target.value = value;
    }

    // Exibir notificação
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const notificationMessage = document.getElementById('notification-message');
        
        notificationMessage.textContent = message;
        notification.className = 'notification'; // Limpa classes antigas
        notification.classList.add(type, 'show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }

    // Lógica da Sidebar Responsiva
    menuButton.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('open');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    });


    // --- Inicialização da Aplicação ---
    
    // Adiciona evento de clique a todos os botões de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigateTo(button.dataset.page);
        });
    });

    // Renderiza o conteúdo inicial de todas as páginas
    renderDashboard();
    renderCadastroForm();
    renderPacientes();
    
    // Inicia na página de dashboard
    navigateTo('dashboard');
});
