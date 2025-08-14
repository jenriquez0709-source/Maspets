class Database {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.requests = JSON.parse(localStorage.getItem('requests')) || [];
        this.animals = this.getAnimalsData();
        this.animalInfo = this.getAnimalInfoData();
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    saveCurrentUser() {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }

    saveRequests() {
        localStorage.setItem('requests', JSON.stringify(this.requests));
    }

    getAnimalsData() {
        return {
            luna: {
                id: 'luna',
                name: 'Luna',
                type: 'Perra',
                age: '2 años',
                breed: 'Mestiza',
                personality: 'Muy cariñosa, juguetona y buena con niños',
                status: 'Vacunada y esterilizada',
                emoji: '🐕',
                description: 'Luna es una perra increíblemente dulce que llegó a nosotros después de ser rescatada de la calle. A pesar de su difícil pasado, mantiene una actitud positiva y llena de amor.',
                health: ['Vacunada completa', 'Esterilizada', 'Desparasitada', 'Microchip implantado'],
                requirements: ['Casa con patio', 'Familia activa', 'Experiencia con perros', 'Tiempo para ejercicio diario'],
                story: 'Luna fue encontrada vagando por las calles con sus cachorros. Después de cuidar a sus bebés hasta que fueron adoptados, ahora es su turno de encontrar una familia que la ame.',
                contact: 'Refugio Central - Tel: (555) 123-4567'
            },
            milo: {
                id: 'milo',
                name: 'Milo',
                type: 'Gato',
                age: '1 año',
                breed: 'Común europeo',
                personality: 'Tranquilo, independiente y muy limpio',
                status: 'Vacunado y castrado',
                emoji: '🐱',
                description: 'Milo es un gato joven con una personalidad equilibrada. Le encanta observar por la ventana y es muy cariñoso cuando confía en ti.',
                health: ['Vacunado completa', 'Castrado', 'Desparasitado', 'Revisión veterinaria reciente'],
                requirements: ['Ambiente tranquilo', 'Acceso a ventanas', 'Juguetes para gatos', 'Paciencia para ganar su confianza'],
                story: 'Milo llegó como un gatito huérfano y ha crecido en nuestro refugio. Es momento de que conozca el amor de una familia.',
                contact: 'Refugio Central - Tel: (555) 123-4567'
            },
            coco: {
                id: 'coco',
                name: 'Coco',
                type: 'Conejo',
                age: '6 meses',
                breed: 'Holandés',
                personality: 'Activo, curioso y sociable',
                status: 'Saludable y desparasitado',
                emoji: '🐰',
                description: 'Coco es un conejo joven lleno de energía. Le encanta explorar y es muy inteligente. Necesita una familia que entienda las necesidades especiales de los conejos.',
                health: ['Vacunado', 'Desparasitado', 'Revisión veterinaria mensual', 'Dieta balanceada'],
                requirements: ['Espacio amplio para correr', 'Dieta rica en fibra', 'Veterinario especializado en conejos', 'Tiempo para socialización'],
                story: 'Coco fue abandonado en una caja cerca del refugio. A pesar de su juventud, ha mostrado una gran capacidad de adaptación.',
                contact: 'Refugio Central - Tel: (555) 123-4567'
            },
            max: {
                id: 'max',
                name: 'Max',
                type: 'Perro',
                age: '3 años',
                breed: 'Golden Retriever',
                personality: 'Energético, leal y protector',
                status: 'Vacunado y esterilizado',
                emoji: '🐕',
                description: 'Max es un Golden Retriever con un corazón de oro. Es perfecto para familias activas que disfruten de actividades al aire libre.',
                health: ['Vacunado completa', 'Esterilizado', 'Excelente condición física', 'Entrenamiento básico completado'],
                requirements: ['Familia muy activa', 'Casa con jardín grande', 'Ejercicio diario intenso', 'Experiencia con razas grandes'],
                story: 'Max fue entregado por una familia que no podía dedicarle el tiempo que necesitaba. Es un perro maravilloso que merece una segunda oportunidad.',
                contact: 'Refugio Central - Tel: (555) 123-4567'
            }
        };
    }

    getAnimalInfoData() {
        return {
            perro: {
                title: 'Todo sobre los Perros',
                emoji: '🐕',
                description: 'Los perros son los compañeros más leales del ser humano. Han evolucionado junto a nosotros durante miles de años.',
                characteristics: [
                    'Animales sociales que viven en manadas',
                    'Excelente capacidad de aprendizaje',
                    'Comunicación a través de ladridos, gestos y olores',
                    'Lealtad extrema hacia su familia humana',
                    'Necesidad de ejercicio y estimulación mental'
                ],
                care: [
                    'Ejercicio diario mínimo de 30 minutos',
                    'Alimentación balanceada según edad y tamaño',
                    'Visitas veterinarias regulares',
                    'Socialización temprana y continua',
                    'Entrenamiento básico de obediencia',
                    'Cepillado regular según tipo de pelaje'
                ],
                breeds: [
                    'Labrador Retriever - Familiar y amigable',
                    'Pastor Alemán - Inteligente y protector',
                    'Golden Retriever - Gentil y paciente',
                    'Bulldog Francés - Pequeño y cariñoso',
                    'Beagle - Energético y curioso'
                ],
                tips: [
                    'Establece rutinas desde cachorro',
                    'Usa refuerzo positivo en el entrenamiento',
                    'Proporciona juguetes para masticar',
                    'Mantén un ambiente seguro en casa',
                    'Socializa con otros perros y personas'
                ]
            },
            gato: {
                title: 'Todo sobre los Gatos',
                emoji: '🐱',
                description: 'Los gatos son animales independientes y elegantes, perfectos para quienes buscan una mascota más autónoma pero igualmente cariñosa.',
                characteristics: [
                    'Cazadores naturales con excelentes reflejos',
                    'Animales muy limpios que se acicalan constantemente',
                    'Comunicación a través de maullidos, ronroneos y lenguaje corporal',
                    'Independientes pero capaces de formar vínculos fuertes',
                    'Activos principalmente durante el amanecer y atardecer'
                ],
                care: [
                    'Arenero limpio y accesible',
                    'Alimentación de alta calidad',
                    'Rascadores para mantener uñas saludables',
                    'Juguetes para estimulación mental',
                    'Revisiones veterinarias anuales',
                    'Espacio vertical para trepar'
                ],
                breeds: [
                    'Persa - Pelaje largo y personalidad tranquila',
                    'Siamés - Vocal y muy social',
                    'Maine Coon - Grande y gentil',
                    'Británico de pelo corto - Robusto y calmado',
                    'Bengalí - Activo con patrón salvaje'
                ],
                tips: [
                    'Respeta su espacio personal',
                    'Proporciona múltiples recursos (agua, comida, areneros)',
                    'Crea rutinas de juego interactivo',
                    'Mantén la casa segura (plantas tóxicas, ventanas)',
                    'Considera adoptar dos gatos para compañía'
                ]
            },
            ave: {
                title: 'Todo sobre las Aves',
                emoji: '🐦',
                description: 'Las aves son mascotas inteligentes y sociales que pueden formar vínculos profundos con sus cuidadores y vivir muchos años.',
                characteristics: [
                    'Altamente inteligentes y capaces de aprender',
                    'Animales sociales que necesitan interacción',
                    'Comunicación compleja a través de vocalizaciones',
                    'Necesidad de estimulación mental constante',
                    'Longevidad variable según la especie'
                ],
                care: [
                    'Jaula espaciosa con perchas variadas',
                    'Dieta balanceada con semillas, frutas y verduras',
                    'Tiempo fuera de la jaula supervisado',
                    'Interacción social diaria',
                    'Veterinario especializado en aves exóticas',
                    'Ambiente libre de corrientes de aire'
                ],
                breeds: [
                    'Canario - Pequeño y melodioso',
                    'Periquito - Social y fácil de cuidar',
                    'Cacatúa - Cariñosa pero demandante',
                    'Loro Gris Africano - Muy inteligente',
                    'Agapornis - Colorido y activo'
                ],
                tips: [
                    'Establece rutinas diarias',
                    'Proporciona juguetes rotativos',
                    'Mantén un ambiente tranquilo para dormir',
                    'Evita teflón y otros vapores tóxicos',
                    'Socializa desde joven'
                ]
            },
            conejo: {
                title: 'Todo sobre los Conejos',
                emoji: '🐰',
                description: 'Los conejos son mascotas adorables y inteligentes que requieren cuidados específicos pero recompensan con mucho cariño.',
                characteristics: [
                    'Herbívoros estrictos con sistema digestivo delicado',
                    'Animales sociales que disfrutan la compañía',
                    'Muy activos, especialmente al amanecer y atardecer',
                    'Comunicación a través de lenguaje corporal',
                    'Necesidad de roer constantemente'
                ],
                care: [
                    'Espacio amplio para correr y saltar',
                    'Dieta rica en heno, verduras frescas y pellets',
                    'Revisiones veterinarias especializadas',
                    'Ambiente a prueba de conejos',
                    'Compañía social (humana u otro conejo)',
                    'Ejercicio diario fuera del recinto'
                ],
                breeds: [
                    'Holandés - Pequeño y dócil',
                    'Lop - Orejas caídas y personalidad tranquila',
                    'Angora - Pelaje largo que requiere cepillado',
                    'Rex - Pelaje suave y textura única',
                    'Gigante de Flandes - Grande y gentil'
                ],
                tips: [
                    'Esteriliza para prevenir problemas de salud',
                    'Proporciona heno ilimitado',
                    'Crea un área segura para ejercicio',
                    'Aprende a leer su lenguaje corporal',
                    'Mantén una temperatura ambiente estable'
                ]
            }
        };
    }
}

const db = new Database();

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchToRegister() {
    closeModal('loginModal');
    openModal('registerModal');
}

function switchToLogin() {
    closeModal('registerModal');
    openModal('loginModal');
}

function register(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (db.users.find(user => user.email === email)) {
        alert('Este email ya está registrado');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        joinDate: new Date().toLocaleDateString(),
        requests: []
    };

    db.users.push(newUser);
    db.saveUsers();

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    closeModal('registerModal');
    openModal('loginModal');
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = db.users.find(u => u.email === email && u.password === password);

    if (user) {
        db.currentUser = user;
        db.saveCurrentUser();
        updateUserInterface();
        closeModal('loginModal');
        alert(`¡Bienvenido, ${user.name}!`);
    } else {
        alert('Email o contraseña incorrectos');
    }
}

function logout() {
    db.currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserInterface();
    closeModal('profileModal');
    alert('Sesión cerrada exitosamente');
}

function updateUserInterface() {
    const guestActions = document.getElementById('guestActions');
    const userActions = document.getElementById('userActions');
    const welcomeUser = document.getElementById('welcomeUser');

    if (db.currentUser) {
        guestActions.style.display = 'none';
        userActions.style.display = 'flex';
        welcomeUser.textContent = `Bienvenido, ${db.currentUser.name}`;
    } else {
        guestActions.style.display = 'flex';
        userActions.style.display = 'none';
    }
}

function showProfile() {
    if (!db.currentUser) {
        alert('Debes iniciar sesión para ver tu perfil');
        return;
    }

    document.getElementById('profileName').textContent = db.currentUser.name;
    document.getElementById('profileEmail').textContent = db.currentUser.email;
    document.getElementById('profilePhone').textContent = db.currentUser.phone;
    document.getElementById('profileDate').textContent = db.currentUser.joinDate;

    const userRequestsDiv = document.getElementById('userRequests');
    const userRequests = db.requests.filter(req => req.userId === db.currentUser.id);

    if (userRequests.length > 0) {
        userRequestsDiv.innerHTML = userRequests.map(req => 
            `<div class="request-item">
                <strong>${req.type}:</strong> ${req.animalName || req.description}
                <br><small>Fecha: ${req.date}</small>
            </div>`
        ).join('');
    } else {
        userRequestsDiv.innerHTML = '<p>No tienes solicitudes pendientes.</p>';
    }

    openModal('profileModal');
}

function editProfile() {
    alert('Función de edición de perfil en desarrollo');
}

function showAnimalInfo(animalType) {
    const info = db.animalInfo[animalType];
    if (!info) return;

    const content = `
        <div class="animal-detail-header">
            <div class="animal-detail-image">${info.emoji}</div>
            <h2>${info.title}</h2>
            <p>${info.description}</p>
        </div>

        <div class="animal-detail-grid">
            <div class="detail-section">
                <h4>Características</h4>
                <ul>
                    ${info.characteristics.map(char => `<li>${char}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>Cuidados Esenciales</h4>
                <ul>
                    ${info.care.map(care => `<li>${care}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>Razas Populares</h4>
                <ul>
                    ${info.breeds.map(breed => `<li>${breed}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>Consejos Importantes</h4>
                <ul>
                    ${info.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    document.getElementById('animalDetailContent').innerHTML = content;
    openModal('animalModal');
}

function showAnimalDetail(animalId) {
    const animal = db.animals[animalId];
    if (!animal) return;

    const content = `
        <div class="animal-detail-header">
            <div class="animal-detail-image">${animal.emoji}</div>
            <h2>${animal.name} - ${animal.type}</h2>
            <p>${animal.description}</p>
        </div>

        <div class="animal-detail-grid">
            <div class="detail-section">
                <h4>Información Básica</h4>
                <p><strong>Edad:</strong> ${animal.age}</p>
                <p><strong>Raza:</strong> ${animal.breed}</p>
                <p><strong>Personalidad:</strong> ${animal.personality}</p>
                <p><strong>Estado de salud:</strong> ${animal.status}</p>
            </div>

            <div class="detail-section">
                <h4>Historia</h4>
                <p>${animal.story}</p>
                <p><strong>Contacto:</strong> ${animal.contact}</p>
            </div>

            <div class="detail-section">
                <h4>Estado de Salud</h4>
                <ul>
                    ${animal.health.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>Requisitos para Adopción</h4>
                <ul>
                    ${animal.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="adoption-actions">
            <h3>¿Interesado en adoptar a ${animal.name}?</h3>
            <button class="btn-adopt" onclick="requestAdoption('${animal.id}')">Solicitar Adopción</button>
            <button class="btn-contact" onclick="contactShelter('${animal.id}')">Contactar Refugio</button>
            <button class="btn-favorite" onclick="addToFavorites('${animal.id}')">Agregar a Favoritos</button>
        </div>
    `;

    document.getElementById('animalDetailContent').innerHTML = content;
    openModal('animalModal');
}

function requestAdoption(animalId) {
    if (!db.currentUser) {
        alert('Debes iniciar sesión para solicitar una adopción');
        closeModal('animalModal');
        openModal('loginModal');
        return;
    }

    const animal = db.animals[animalId];
    const request = {
        id: Date.now(),
        userId: db.currentUser.id,
        type: 'Adopción',
        animalId: animalId,
        animalName: animal.name,
        date: new Date().toLocaleDateString(),
        status: 'Pendiente'
    };

    db.requests.push(request);
    db.saveRequests();

    alert(`Solicitud de adopción para ${animal.name} enviada exitosamente. Te contactaremos pronto.`);
    closeModal('animalModal');
}

function contactShelter(animalId) {
    const animal = db.animals[animalId];
    alert(`Contacta al refugio para más información sobre ${animal.name}:\n${animal.contact}`);
}

function addToFavorites(animalId) {
    if (!db.currentUser) {
        alert('Debes iniciar sesión para agregar favoritos');
        return;
    }

    const animal = db.animals[animalId];
    alert(`${animal.name} agregado a tus favoritos (función en desarrollo)`);
}

function submitLostAnimal(event) {
    event.preventDefault();

    if (!db.currentUser) {
        alert('Debes iniciar sesión para reportar un animal');
        openModal('loginModal');
        return;
    }

    const formData = new FormData(event.target);
    const request = {
        id: Date.now(),
        userId: db.currentUser.id,
        type: 'Animal Perdido',
        description: `${formData.get('animalName')} - ${formData.get('animalType')}`,
        date: new Date().toLocaleDateString(),
        status: 'Activo'
    };

    db.requests.push(request);
    db.saveRequests();

    alert('Reporte de animal perdido enviado exitosamente. Esperamos ayudarte a encontrarlo.');
    event.target.reset();
}

function submitFoundAnimal(event) {
    event.preventDefault();

    if (!db.currentUser) {
        alert('Debes iniciar sesión para reportar un animal');
        openModal('loginModal');
        return;
    }

    const formData = new FormData(event.target);
    const request = {
        id: Date.now(),
        userId: db.currentUser.id,
        type: 'Animal Encontrado',
        description: formData.get('animalType'),
        date: new Date().toLocaleDateString(),
        status: 'Activo'
    };

    db.requests.push(request);
    db.saveRequests();

    alert('Reporte de animal encontrado enviado exitosamente. Gracias por ayudar.');
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    updateUserInterface();

    document.getElementById('loginForm').addEventListener('submit', login);
    document.getElementById('registerForm').addEventListener('submit', register);
    document.getElementById('lostAnimalForm').addEventListener('submit', submitLostAnimal);
    document.getElementById('foundAnimalForm').addEventListener('submit', submitFoundAnimal);

    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    const profileBtn = document.querySelector('.btn-profile');
    if (profileBtn) {
        profileBtn.addEventListener('click', showProfile);
    }
});