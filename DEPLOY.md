# 🚀 Hướng dẫn Deploy lên Render

## 📋 Chuẩn bị trước khi deploy

1. **Push code lên GitHub** (nếu chưa có):
   ```bash
   git init
   git add .
   git commit -m "Wedding website ready for deploy"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

## 🌐 Deploy lên Render

### Bước 1: Tạo tài khoản Render
- Truy cập: https://render.com
- Đăng ký/đăng nhập bằng GitHub

### Bước 2: Tạo Static Site mới
1. Click **"New"** → **"Static Site"**
2. Connect GitHub repository của bạn
3. Chọn repository chứa wedding website

### Bước 3: Cấu hình Build Settings
```
Build Command: npm run render-build
Publish Directory: public
Branch: main
```

### Bước 4: Cấu hình Environment (tùy chọn)
```
NODE_ENV=production
```

### Bước 5: Deploy!
- Click **"Create Static Site"**
- Render sẽ tự động build và deploy

## 📁 Cấu trúc files cho Render

- ✅ `render.yaml` - Cấu hình tự động
- ✅ `package.json` - Build scripts 
- ✅ `DEPLOY.md` - Hướng dẫn này

## 🔧 Scripts có sẵn

### Development:
```bash
npm run dev          # Chạy local server
```

### Build:
```bash
npm run build        # Build JS files
npm run build:public # Build và tạo folder public
npm run render-build # Build cho Render (alias)
```

### Production:
```bash
npm start           # Chạy production server
```

## 🎯 Domain tùy chỉnh (Optional)

Sau khi deploy thành công:
1. Vào **Settings** → **Custom Domains**
2. Thêm domain của bạn
3. Cập nhật DNS records

## 💡 Lưu ý quan trọng

### Cấu hình API (nếu dùng comments):
- Cập nhật `data-url` trong `<body>` tag
- Thay đổi từ `https://api.ulems.my.id/` thành URL API của bạn

### File paths:
- Tất cả paths đã được cấu hình relative
- Không cần thay đổi gì thêm

### Performance:
- Build tự động minify JS
- Gzip compression tự động
- CDN global của Render

## 🚨 Troubleshooting

### Build fails:
```bash
# Test build local trước:
npm run build:public
# Kiểm tra folder public được tạo chưa
```

### 404 errors:
- Đảm bảo `staticPublishPath: ./public` đúng
- Kiểm tra file `index.html` có trong folder `public`

### CSS/JS not loading:
- Kiểm tra paths trong HTML là relative (không bắt đầu bằng `/`)

## 🎉 Sau khi deploy thành công

Website sẽ có URL dạng: `https://your-site-name.onrender.com`

Bạn có thể:
- Share URL này như thiệp cưới online
- Tùy chỉnh domain name
- Monitor analytics qua Render dashboard

---

🎊 **Chúc mừng! Website thiệp cưới của bạn đã online! 💕**
