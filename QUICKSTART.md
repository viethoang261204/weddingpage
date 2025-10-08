# ⚡ Quick Start - 5 Phút Setup

## 🎯 Mục tiêu
Chỉnh sửa và chạy website thiệp cưới trong **5 phút**!

## 📝 Bước 1: Thay đổi thông tin (2 phút)

Mở file `index.html` và tìm/thay đổi:

### 1.1. Tên cô dâu chú rể (dòng 229)
```html
<h2>Thanh Phương &amp; Khương Huy</h2>
```
→ Đổi thành tên của bạn

### 1.2. Ngày cưới (dòng 159)
```html
<body data-time="2025-11-23 11:30:00">
```
→ Đổi thành ngày cưới của bạn (format: YYYY-MM-DD HH:mm:ss)

### 1.3. Địa điểm (dòng 813)
```html
<a href="https://maps.app.goo.gl/uD8V7j4sdS9Pvkb39">
<small>Ấp 4, X.Thạnh trị, T.Vĩnh Long</small>
```
→ Đổi link Google Maps và địa chỉ

### 1.4. Thông tin chuyển khoản (dòng 1052)
```html
<p>Thanh Phương</p>
<p>Tiên Phong Bank - TPBank</p>
<p>0945512895</p>
```
→ Đổi tên, ngân hàng, số tài khoản

## 🖼️ Bước 2: Thay hình ảnh (1 phút)

Thay các file trong `assets/images/`:
- `bg.webp` → Ảnh nền/ảnh cặp đôi chính
- `cowo.webp` → Ảnh chú rể
- `cewe.webp` → Ảnh cô dâu
- `donate.png` → QR Code Momo (nếu có)

💡 **Tip**: Giữ nguyên tên file để không cần sửa HTML!

## 🎵 Bước 3: Thay nhạc nền (30 giây)

Thay file `assets/music/married.mp3` bằng nhạc yêu thích.

## 🚀 Bước 4: Chạy website (1 phút)

```bash
# Install dependencies (chỉ lần đầu)
npm install

# Chạy development server
npm run dev
```

Mở trình duyệt: `http://localhost:8080`

## ✅ Xong!

Website thiệp cưới của bạn đã sẵn sàng! 🎉

---

## 🎨 Tùy chỉnh thêm (Optional)

### Bật/Tắt confetti
File `index.html` dòng 160:
```html
<body data-confetti="true">
```
→ Đổi `true` thành `false` để tắt

### Bật/Tắt nhạc nền
File `index.html` dòng 157:
```html
<body data-audio="./assets/music/married.mp3">
```
→ Xóa dòng này để tắt nhạc hoàn toàn

### Thay video
Thay file `assets/video/265501_tiny.mp4` bằng video của bạn.

---

## 🌐 Deploy (Bonus)

Deploy miễn phí lên Render.com trong 3 phút:

1. Push code lên GitHub
2. Vào [render.com](https://render.com) → New Static Site
3. Chọn repo → Build: `npm run build:public` → Publish: `public`
4. Click Deploy

✅ Website live sau 2-3 phút!

---

**Cần trợ giúp?** Đọc `README.md` để biết thêm chi tiết.

