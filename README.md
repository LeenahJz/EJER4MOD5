# [EJERCICIO PRACTICO 4, MODULO 5]


Este ejercicio se llevó haciendo uso de Typescript y el manejos de errores.

## [GITHUB: https://github.com/LeenahJz/EJER4MOD5.git ]

## To install before execution: 
-npm install msw@latest
-npm install crypto-js 
-npm install dompurify     
-npm install json-server
-npx json-server --watch db.json --port 3000  

## Estructura
```js
├─ node_modules
├─ public
│   └── mockServiceWorker.ts  
├─ src
├── api/                           # API-related utilities
│   ├── api.ts                     # Functions for making API requests
│   └── encryption.ts                     # Functions for encrypt and decrypts passwords 
│
├── auth/                          # Authentication-related files
│   ├── AuthContext.tsx            # Context for managing authentication state
│   └── PrivateRoute.tsx           # Component for protecting routes
│
├── components/                    # Reusable UI components
│   ├── AppointmentForm.tsx        # Form for scheduling appointments
│   ├── DoctorCard.tsx             # Cards for displaying doctors
│   ├── ServiceList.tsx            # List of services
│   ├── Homepage.tsx               # Homepage component
│   └── common/                    # Common reusable components (e.g., buttons, modals)
│       └── ErrorMessage.tsx       # Component for displaying error messages
│   └── hooks/                    
│       └── useForm.ts           # Usage of hooks and errors
│   └── mocks/                    # MockAPI to simulate API calls
│       ├── handlers.ts           # use of handlers for the CryptoJS and appointments manage.       
│       └── browser.ts  
│
├── pages/                         # Page components (views)
│   ├── AdminDashboard.tsx         # Admin dashboard page
│   ├── DoctorDashboard.tsx        # Doctor dashboard page
│   ├── UserDashboard.tsx          # User dashboard page
│   └── Login.tsx                  # Login page
│
├── App.tsx                        # Main application component (routes and layout)
├── main.tsx                       # Entry point for the app
└── index.css                      # Global style
```
## Este código cumple con: 

Consumo de APIs usando Fetch API o Axios 
- Implementa el consumo de datos mediante Fetch API o Axios para interactuar con la
base de datos del hospital:
- Gestiona los datos de pacientes, citas y doctores mediante solicitudes GET,
POST, PUT, y DELETE.
- Muestra los datos obtenidos en la interfaz React de manera dinámica.
- Maneja correctamente los errores de las peticiones y muestra mensajes claros al
usuario si ocurre un problema.

2. Integración de TypeScript en Componentes Clave 
- Refactoriza los componentes principales de la aplicación utilizando TypeScript:
- Define correctamente los tipos de datos, props, y estados dentro de los
componentes.
- Usa TypeScript para mejorar la estructura y el tipado del código, evitando
errores en tiempo de ejecución.
- Aplica interfaces y clases para modelar correctamente los datos de los usuarios
y del sistema.

3. Mejoras en la Seguridad del Front-End 
- Implementa medidas de seguridad en la aplicación React:
- Utiliza React Router DOM para proteger rutas y permitir el acceso solo a
usuarios autenticados.
- Protege las peticiones a la API mediante JWT para asegurar que solo usuarios
con permisos puedan acceder a los datos sensibles.
- Asegura la validación de formularios para evitar XSS y otros ataques comunes.
- Integra encriptación para proteger la información confidencial antes de enviarla
al servidor.

4. Optimización con Hooks y Manejo de Errores
- Utiliza Hooks como useState y useEffect para gestionar el estado y los efectos
secundarios dentro de la aplicación:
- Implementa un Hook personalizado que maneje la lógica repetitiva de la
aplicación, como la autenticación o la gestión de formularios.
- Asegura que los errores durante las peticiones a la API o en la interfaz se
gestionen correctamente, mostrando mensajes al usuario en caso de error.
- Optimiza el rendimiento de la aplicación utilizando dependencias correctamente
en useEffect y evitando renderizados innecesarios.
