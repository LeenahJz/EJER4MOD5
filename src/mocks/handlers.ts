import { http, HttpResponse } from 'msw';
import CryptoJS from 'crypto-js';

const secretKey = 'aespa'; // Must match the frontend key
let appointments: Array<{ id: number; patientName: string; doctor: string; date: string; time: string; phone: string }> = [];

export const handlers = [
  http.post('http://localhost:3000/login', async ({ request }) => {
    const { data } = await request.json();

    // Decrypt the data
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const { username, password } = decryptedData;

    // Define valid users
    const validUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'doctor', password: 'doctor123', role: 'doctor' },
      { username: 'patient', password: 'patient123', role: 'patient' },
    ];

    // Check if the user exists
    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      return HttpResponse.json({ message: 'Login successful', role: user.role });
    } else {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  }),

  // Add appointment handler
  http.post('http://localhost:3000/appointments', async ({ request }) => {
    const newAppointment = await request.json();
    newAppointment.id = appointments.length + 1; // Assign a unique ID
    appointments.push(newAppointment); // Store the appointment
    return HttpResponse.json(newAppointment, { status: 201 });
  }),

  // Fetch appointments for a doctor
  http.get('http://localhost:3000/appointments', ({ request }) => {
    const url = new URL(request.url);
    const doctor = url.searchParams.get('doctor'); // Filter by doctor name
    const doctorAppointments = appointments.filter(
      (appt) => appt.doctor === doctor
    );
    return HttpResponse.json(doctorAppointments);
  }),
];
