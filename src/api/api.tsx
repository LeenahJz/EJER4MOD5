// Definimos los tipos para los usuarios y sus datos relacionados
interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
}

interface TestResult {
  id: number;
  testName: string;
  result: string;
  date: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'doctor' | 'patient';
  name: string;
  specialty?: string;
  appointments?: Appointment[];
  testResults?: TestResult[];
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User',
  },
  {
    id: 2,
    username: 'doctor',
    password: 'doctor123',
    role: 'doctor',
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
  },
  {
    id: 3,
    username: 'patient',
    password: 'patient123',
    role: 'patient',
    name: 'Jane Smith',
    appointments: [
      { id: 1, date: '2023-10-15', time: '10:00 AM', doctor: 'Dr. John Doe' },
    ],
    testResults: [
      { id: 1, testName: 'Blood Test', result: 'Normal', date: '2023-10-10' },
    ],
  },
];

// Función de fetch con autenticación
type FetchOptions = RequestInit & { headers?: HeadersInit };

export const fetchWithAuth = async (url: string, options: FetchOptions = {}): Promise<any> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Request failed');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
