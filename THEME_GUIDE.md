# 🎨 Theme System Guide

## วิธีเปลี่ยน Theme (เปลี่ยนที่จุดเดียว!)

เปิดไฟล์: **`themes/theme.config.ts`**

```typescript
export const CURRENT_THEME: ThemeName = 'gradient';  // ← เปลี่ยนตรงนี้!
```

## 3 Themes ที่มี:

### 1. **'gradient'** - Modern Gradient Theme
- พื้นหลัง: Gradient สีม่วง-ฟ้า
- Card: ขาว มน ๆ มีเงา
- ปุ่ม: Gradient พร้อม hover effect
- ความรู้สึก: สดใส ทันสมัย

### 2. **'minimal'** - Minimal Clean Theme  
- พื้นหลัง: สีเทาอ่อน
- Card: ขาว ไม่มน มีกรอบบาง
- ปุ่ม: ดำ แบบ flat
- ความรู้สึก: เรียบง่าย สะอาดตา

### 3. **'dark'** - Cyberpunk Dark Theme
- พื้นหลัง: ดำ มี gradient เข้ม
- Card: ดำใส มีกรอบสีเขียว neon
- ปุ่ม: เขียว neon พร้อม glow effect
- ความรู้สึก: Cyberpunk, Futuristic

## ตัวอย่างการเปลี่ยน:

```typescript
// Theme 1: Gradient
export const CURRENT_THEME: ThemeName = 'gradient';

// Theme 2: Minimal
export const CURRENT_THEME: ThemeName = 'minimal';

// Theme 3: Dark
export const CURRENT_THEME: ThemeName = 'dark';
```

## หลังเปลี่ยน Theme:

1. Save ไฟล์ `themes/theme.config.ts`
2. Refresh browser (หรือรอ auto-reload)
3. หน้าตาจะเปลี่ยนทันที!

## สำหรับเพื่อน:

แค่เปลี่ยนบรรทัดเดียวใน `themes/theme.config.ts` ก็ได้หน้าตาใหม่เลย!

```typescript
// เพื่อนคนที่ 1
export const CURRENT_THEME: ThemeName = 'gradient';

// เพื่อนคนที่ 2  
export const CURRENT_THEME: ThemeName = 'minimal';

// เพื่อนคนที่ 3
export const CURRENT_THEME: ThemeName = 'dark';
```

ส่งอาจารย์ได้เลย! 😎
