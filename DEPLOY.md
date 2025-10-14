# 🚀 Hướng dẫn Deploy

## Render.com (Khuyến nghị - Miễn phí)

### Bước 1: Chuẩn bị
   ```bash
   git init
   git add .
git commit -m "Wedding website ready"
   git branch -M main
git remote add origin <your-github-repo>
   git push -u origin main
   ```

### Bước 2: Deploy trên Render
1. Truy cập: https://render.com
2. Đăng ký/đăng nhập bằng GitHub
3. Click **"New"** → **"Static Site"**
4. Chọn repository của bạn
5. Cấu hình:
   - **Build Command:** `npm run build:public`
   - **Publish Directory:** `public`
   - **Branch:** `main`
6. Click **"Create Static Site"**

✅ Website sẽ live sau vài phút!

## Netlify (Thay thế)

1. Drag & drop thư mục `public` (sau khi chạy `npm run build:public`)
2. Hoặc connect GitHub và dùng cùng config như Render

## Vercel (Thay thế)

Tương tự Netlify/Render với cùng build command.

---

💡 **Lưu ý:** Sau khi deploy, URL sẽ có dạng:
- `https://your-site.onrender.com`
- `https://your-site.netlify.app`
- `https://your-site.vercel.app`

Bạn có thể setup custom domain miễn phí!
