# Next.js Login SSR Demo

โปรเจกต์การบ้านสำหรับการเรียนรู้ Next.js App Router พร้อม TypeScript และ Server-Side Rendering

## 📋 คำอธิบายโปรเจกต์

โปรเจกต์นี้เป็นการสาธิตระบบ Login แบบง่าย โดยใช้ Next.js App Router เพื่อแสดงให้เห็นถึง:

- **Server Component**: `app/page.tsx` เป็น Server Component ตาม default ของ App Router
- **Client Component**: `LoginForm` เป็น Client Component ที่มี interactivity
- **API Route Handler**: การตรวจสอบ login อยู่ใน `app/api/login/route.ts` ฝั่ง server
- **ไม่มี Database**: ใช้ hardcoded username/password ใน route handler เพื่อการเรียนรู้

## 🏗️ โครงสร้างโปรเจกต์

```
02_nextjs/
├── app/
│   ├── api/
│   │   └── login/
│   │       └── route.ts          # API endpoint สำหรับตรวจสอบ login
│   ├── page.tsx                   # Server Component หน้าหลัก
│   └── page.module.css            # CSS สำหรับหน้าหลัก
├── components/
│   ├── LoginForm.tsx              # Client Component สำหรับ login form
│   ├── login-form.module.css      # CSS สำหรับ login form
│   ├── EmailStatusCard.tsx        # Component แสดงสถานะอีเมล
│   └── email-status-card.module.css
├── package.json
└── README.md
```

## 🚀 วิธีติดตั้งและรันโปรเจกต์

### 1. ติดตั้ง dependencies

```bash
npm install
```

### 2. รัน development server

```bash
npm run dev
```

### 3. เปิดเบราว์เซอร์

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์

## 🔐 ข้อมูล Login สำหรับทดสอบ

```
Email: admin@gmail.com
Password: Admin123!
```

## 🎨 Theme System (เปลี่ยนหน้าตาได้ที่จุดเดียว!)

โปรเจกต์นี้มี **3 themes** ที่หน้าตาต่างกันโดยสิ้นเชิง:

### วิธีเปลี่ยน Theme:

เปิดไฟล์ **`themes/theme.config.ts`** แล้วเปลี่ยนค่า `CURRENT_THEME`:

```typescript
export const CURRENT_THEME: ThemeName = 'gradient';  // เปลี่ยนตรงนี้!
```

### Themes ที่มี:

1. **`'gradient'`** - Modern Gradient Theme
   - พื้นหลัง gradient สีม่วง-ฟ้า
   - Card ขาวมน มีเงาสวย
   - ปุ่ม gradient พร้อม hover effect

2. **`'minimal'`** - Minimal Clean Theme
   - พื้นหลังสีเทาอ่อน
   - Card ขาวแบบ flat มีกรอบบาง
   - ปุ่มดำแบบเรียบง่าย

3. **`'dark'`** - Cyberpunk Dark Theme
   - พื้นหลังดำ มี gradient เข้ม
   - Card ดำใสมีกรอบเขียว neon
   - ปุ่มเขียว neon พร้อม glow effect

### ตัวอย่าง:

```typescript
// Theme 1
export const CURRENT_THEME: ThemeName = 'gradient';

// Theme 2
export const CURRENT_THEME: ThemeName = 'minimal';

// Theme 3
export const CURRENT_THEME: ThemeName = 'dark';
```

**หมายเหตุ:** แค่เปลี่ยนบรรทัดเดียว หน้าตาเปลี่ยนทั้งหมด! เหมาะสำหรับให้เพื่อนลอกส่งอาจารย์ 😉

## ✨ Features

### 1. LoginForm Component (Client Component)

- รับ input email และ password
- Validation ฝั่ง client ก่อนส่ง request:
  - **Email**: required, รูปแบบ email ถูกต้อง
  - **Password**: required, มากกว่า 8 ตัว, มีตัวใหญ่ 1 ตัว, มีตัวเลข 1 ตัว, มีอักขระพิเศษ 1 ตัว
- แสดง error message สีแดงเมื่อ validation ไม่ผ่าน
- แสดง loading state ระหว่างส่ง request
- แสดง success/error message หลังได้รับ response

### 2. EmailStatusCard Component

- แสดง email address
- แสดงสถานะ Read/Unread
- รับ props: `email` และ `isRead`

### 3. API Route Handler

- อยู่ที่ `app/api/login/route.ts`
- ตรวจสอบ username/password ฝั่ง server
- ไม่ใช้ database (ใช้ตัวแปร hardcoded)
- ไม่ใช้ next-auth, jwt, หรือ session ที่ซับซ้อน
- Response:
  - **Success (200)**: `{ success: true, message: "Login Success" }`
  - **Fail (401)**: `{ success: false, message: "Invalid username or password" }`
  - **Bad Request (400)**: `{ success: false, message: "Email and password are required" }`

## 🎨 UI/UX Features

- Card layout สวยงาม
- Responsive design
- Gradient background
- Hover effects บนปุ่ม
- Success message สีเขียว
- Error message สีแดง
- Loading state ชัดเจน
- Input border สีแดงเมื่อมี error

## 🧪 การทำงานของระบบ

1. ผู้ใช้กรอก email และ password ใน LoginForm
2. Client-side validation ตรวจสอบข้อมูล
3. ถ้าผ่าน validation ส่ง POST request ไปที่ `/api/login`
4. Server-side (route handler) เปรียบเทียบกับค่าที่ hardcoded
5. ส่ง response กลับมาพร้อม status code
6. แสดงผลลัพธ์ใน UI

## 📚 เทคโนโลยีที่ใช้

- **Next.js** (latest version) - React framework
- **TypeScript** - Type safety
- **App Router** - Next.js routing system
- **CSS Modules** - Scoped styling
- **Route Handlers** - API endpoints

## 📝 หมายเหตุ

- โปรเจกต์นี้สร้างขึ้นเพื่อการเรียนรู้เท่านั้น
- ไม่ควรนำไปใช้งานจริงในระบบ production
- ไม่มีการเก็บข้อมูลใน database
- ไม่มีระบบ authentication ที่สมบูรณ์
- Username และ password ถูก hardcoded ใน server code

## 🔧 การพัฒนาต่อ

หากต้องการพัฒนาต่อ สามารถเพิ่ม:

- Database integration (PostgreSQL, MongoDB)
- Authentication library (NextAuth.js)
- Session management
- Password hashing
- JWT tokens
- Protected routes
- User registration

## 📄 License

MIT
