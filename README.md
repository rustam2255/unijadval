# UniJadval Firestore

React + Tailwind frontend, Node/Express backend, Firebase Firestore CRUD. Demo data yo‘q: hamma ma’lumot Firestore collectionlardan olinadi.

## Frontend
```powershell
cd frontend
copy .env.example .env
npm install
npm run dev
```

## Backend
Firebase Console > Project settings > Service accounts > Generate private key. Faylni `backend/serviceAccountKey.json` qilib joylang.
```powershell
cd backend
copy .env.example .env
npm install
npm run dev
```

## Firestore collections
`faculties`, `departments`, `groups`, `teachers`, `subjects`, `rooms`, `buildings`, `lessons`, `workloads`.

## Muhim maydonlar
- teachers: `name`, `departmentId`, `rank`, `degree`, `maxHours`, `phone`
- lessons: `groupId`, `subjectId`, `teacherId`, `roomId`, `day`, `pair`, `type`, `hours`
- rooms: `number`, `buildingId`, `type`, `capacity`, `equipment`

## Eslatma
Frontend Firestore SDK orqali CRUD qiladi. Backend optimizer va AI-helper endpointlari uchun qo‘shilgan.
