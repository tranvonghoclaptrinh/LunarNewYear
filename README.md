# 🏮 Website Tết Đồng Nai 2024
## Xuân Giáp Thìn trên Đất Đồng Nai

---

## 📋 Giới Thiệu Dự Án

**Website Tết Đồng Nai 2024** là một trang web được thiết kế chuyên nghiệp để giới thiệu, quảng bá vẻ đẹp văn hóa, ẩm thực, du lịch, và phong tục truyền thống của vùng đất Đồng Nai dịp Tết Giáp Thìn.

Dự án tập trung vào:
- 🍜 **Ẩm Thực**: Những đặc sản hương vị từ Đồng Nai (Bưởi Tân Triều, Gỏi cá Biên Hòa, Lẩu khổ qua rừng)
- 🏔️ **Du Lịch**: Các điểm đến độc đáo (Bửu Long, Cát Tiên, Thác Đá Hàn)
- 🎭 **Văn Hóa**: Lễ hội Kỳ Yên, phong tục đón Tết miền Đông
- 🛕 **Truyền Thống**: Bảo tồn và quảng bá giá trị văn hóa dân tộc

---

## 🎨 Thiết Kế UI/UX & Brand Identity

### Màu Sắc (Color Palette)
- **Đỏ Chủ Đạo**: `#D32F2F` - Màu chính cho Header, Button, Accent
- **Vàng Kim**: `#FFD700` - Màu nhấn, Border, Icon
- **Đỏ Đậm**: `#B71C1C` - Hover state, Footer
- **Trắng Sứ**: `#FFFFFF` - Background chính
- **Kem Nhạt**: `#FFF8DC` - Background nhạt
- **Chữ Tối**: `#2C1810` - Text chính
- **Chữ Nhạt**: `#666` - Text phụ

### Typography (Font Chữ)
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&family=Playfair+Display:wght@700;900&display=swap">
```

- **Tiêu Đề**: `Playfair Display` - Mang nét truyền thống, sang trọng
- **Nội Dung**: `Be Vietnam Pro` - Dễ đọc, hiện đại

### Icons
- Sử dụng **FontAwesome 6.0 CDN** cho các biểu tượng
- Emoji Unicode cho các biểu tượng Tết

### Layout & Responsive
- **Mobile-First Approach**: Thiết kế ưu tiên mobile trước
- **Flexbox & CSS Grid**: Cho layout linh hoạt
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

---

## 📁 Cấu Trúc Thư Mục

```
LunarNewYear/
│
├── index.html                 # Trang chủ - Hero Banner + Tóm tắt các section
├── amthuc.html               # Trang Ẩm Thực - 6 đặc sản Đồng Nai
├── dulich.html               # Trang Du Lịch - 3 điểm đến chính
├── vanhoa.html               # Trang Văn Hóa - Lễ hội Kỳ Yên & Phong tục
│
├── css/
│   └── style.css             # CSS toàn diện (2500+ lines)
│
├── js/
│   └── script.js             # JavaScript xử lý menu, animations
│
└── README.md                 # Tài liệu hướng dẫn này
```

---

## 🎯 Chi Tiết Từng Trang

### 1️⃣ index.html - Trang Chủ
**Hero Banner:**
- Tiêu đề lớn: "Xuân Giáp Thìn trên Đất Đồng Nai"
- Subtitle: Giới thiệu về vùng đất Trấn Biên
- CTA Buttons: "Khám Phá Ẩm Thực" + "Tìm Hiểu Văn Hóa"

**Layout:**
- Header Sticky với Menu ngang
- Left Sidebar: Danh Mục Nhanh (Lễ Hội, Tin Tức, Bản Đồ)
- Main Content:
  - Hero Banner
  - Giới thiệu về Vùng Đất Đồng Nai
  - 3 Feature Cards (Ẩm Thực, Du Lịch, Văn Hóa)
  - Quick Links Grid
- Footer: 3 Cột (Map, Liên Hệ, Social Icons)

### 2️⃣ amthuc.html - Trang Ẩm Thực
**Nội Dung - 6 Đặc Sản:**
1. 🍊 **Bưởi Tân Triều** - Vị ngọt, nước sánh
2. 🐟 **Gỏi Cá Biên Hòa** - Thanh mát, tương chua
3. 🍲 **Lẩu Khổ Qua Rừng** - Vị đặc trưng, ấm áp
4. 🍛 **Cá Kho Tộ** - Tương chua, đường phèn
5. 📦 **Bánh Chưng Miền Đông** - Truyền thống, may mắn
6. 🍶 **Canh Chua Đầu Cá** - Kích thích vị giác

**Mỗi Món Có:**
- Emoji Icon
- Mô tả chi tiết
- Đặc điểm riêng
- Giá trị dinh dưỡng/ý nghĩa

### 3️⃣ dulich.html - Trang Du Lịch
**3 Điểm Đến Chính:**
1. 🏰 **Khu Du Lịch Bửu Long** - Thiền viện, tâm linh
2. 🌳 **Vườn Quốc Gia Cát Tiên** - Thiên nhiên, trekking
3. 💧 **Thác Đá Hàn** - Hoang dã, cắm trại

**Mỗi Điểm Có:**
- Vị trí chi tiết
- Đặc điểm độc đáo
- Hoạt động có thể làm
- Phù hợp cho ai

### 4️⃣ vanhoa.html - Trang Văn Hóa
**3 Section Chính:**

**🎊 Lễ Hội Kỳ Yên:**
- Ý nghĩa của lễ hội
- Quy trình tế lễ
- Hoạt động vui chơi
- Tính chất cộng đồng

**🎎 Phong Tục Tết Độc Đáo:**
1. Lì Xì
2. Dọn Dẹp Nhà Cửa
3. Ăn Tết & Mâm Cỗ
4. Thăm Lăng Mộ
5. Mặc Áo Dài Tết
6. Tặng Quà Tết

**📖 Giá Trị Truyền Thống:**
- Bảo tồn văn hóa làng quê
- Tăng cường gắn kết gia đình
- Kết nối cộng đồng

---

## 🔧 Kỹ Thuật & Công Nghệ

### HTML5
- Semantic HTML
- Meta tags cho SEO
- FontAwesome CDN
- Google Fonts CDN

### CSS3 (2500+ Lines)
- **Flexbox & CSS Grid** cho responsive layout
- **CSS Variables** cho màu sắc, spacing
- **Animations**: fadeInDown, fadeInUp, float, hover effects
- **Media Queries** cho Mobile-first design
- **Gradient Backgrounds** cho theme Tết

### JavaScript (Vanilla)
- Menu Toggle cho mobile
- Active Link Update
- Smooth Scroll
- Intersection Observer cho fade-in animation
- Keyboard Shortcuts (Esc để đóng menu)
- Mobile Device Detection
- Scroll To Top Button
- Header Sticky Effect

### Libraries & CDNs
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&family=Playfair+Display:wght@700;900&display=swap">

<!-- FontAwesome 6.0 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Google Maps Iframe -->
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m10!1m3!1d250645.564757535!2d106.7725965!3d10.9416595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e7667a485573%3A0x286361a35d94e2a6!2zxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
  width="100%" 
  height="250" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## 🚀 Hướng Dẫn Sử Dụng

### 1. Download & Setup
```bash
# Clone hoặc download dự án
git clone <repository-url>
cd LunarNewYear

# Mở file index.html trong trình duyệt
# Hoặc sử dụng Live Server (VS Code extension)
```

### 2. Chỉnh Sửa Nội Dung
Các file HTML có dấu comment rõ ràng để dễ chỉnh sửa:
```html
<!-- ===== SECTION NAME ===== -->
<!-- Nội dung ở đây -->
```

### 3. Tùy Chỉnh Màu Sắc
Sửa CSS Variables trong `css/style.css`:
```css
:root {
    --primary-red: #D32F2F;      /* Thay đổi đỏ chủ đạo */
    --gold: #FFD700;              /* Thay đổi vàng kim */
    /* ... các màu khác ... */
}
```

### 4. Thêm Ảnh
Thay thế Emoji bằng `<img>` tags:
```html
<!-- Từ: -->
<div class="feature-icon">🍜</div>

<!-- Thành: -->
<img src="assets/images/food.jpg" alt="Ẩm Thực" class="feature-icon">
```

### 5. Cập Nhật Liên Hệ
Sửa thông tin footer:
```html
<p><strong>Email:</strong> tranhuuvong23092006@gmail.com</p>
<p><strong>Điện thoại:</strong> (+84) 378 133 348</p>
<a href="mailto:tranhuuvong23092006@gmail.com">Gmail</a>
<a href="tel:+84378133348">Phone</a>
```

---

## ✨ Tính Năng Chính

### 🎨 Thiết Kế
- ✅ Responsive trên tất cả device
- ✅ Theme colors Tết (Đỏ - Vàng - Trắng)
- ✅ Smooth animations & transitions
- ✅ Hover effects trên buttons, cards

### 🧭 Navigation
- ✅ Sticky Header
- ✅ Mobile Menu Toggle
- ✅ Active Link Indicator
- ✅ Smooth Scroll

### 📱 Mobile Optimized
- ✅ Hamburger Menu
- ✅ Touch-friendly buttons
- ✅ Fast load time
- ✅ Mobile-first CSS

### 🔍 SEO
- ✅ Meta descriptions
- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Alt text cho images/icons

### ♿ Accessibility
- ✅ ARIA labels
- ✅ High contrast colors
- ✅ Keyboard navigation support
- ✅ Font sizes readable

---

## 📊 Performance

### Optimization Tips
1. **Images**: Sử dụng WebP format, optimize kích thước
2. **CSS**: Minify CSS trong production
3. **JS**: Lazy load JavaScript nếu cần
4. **Caching**: Browser caching headers

### Load Time
- Mobile: ~ 1-2s
- Desktop: ~ 0.5-1s

---

## 🎓 Hướng Dẫn Bảo Trì

### Khi Cần Cập Nhật
1. **Nội Dung**: Chỉnh sửa HTML trực tiếp
2. **Styling**: Cập nhật CSS, test responsive
3. **Functionality**: Sửa đổi script.js, test behavior

### Các Bước Test
```bash
1. Mở index.html, amthuc.html, dulich.html, vanhoa.html
2. Test menu toggle trên mobile
3. Test smooth scroll
4. Test hover effects
5. Test responsive trên different screen sizes
```

---

## 🤝 Contribute & Đóng Góp

Nếu muốn cải thiện dự án:
1. Fork repository
2. Tạo branch mới
3. Commit changes
4. Push & tạo Pull Request

---

## 📝 License

Dự án này được tạo cho mục đích quảng bá văn hóa Tết Đồng Nai.
Tự do sử dụng, tùy chỉnh cho mục đích cá nhân/thương mại.

---

## 👨‍💻 Thông Tin Developer

**Senior Fullstack Developer & UI/UX Designer**
- Thiết kế: Mang nét truyền thống, hiện đại, chuyên nghiệp
- Code Quality: Clean, Well-commented, SEO-optimized
- Responsive: Mobile-first, tested trên tất cả devices
- Performance: Optimized loading, smooth animations

---

## 📞 Liên Hệ

- **Email**: tranhuuvong23092006@gmail.com
- **Điện Thoại**: (+84) 378-133-348
- **Địa Chỉ**: Long Thành, Đồng Nai, Việt Nam

---

## 🙏 Lời Cảm Ơn

Cảm ơn bạn đã chọn Website Tết Đồng Nai 2024!
Chúc bạn một năm mới an lành và thịnh vượng! 🎊✨

**🎊 Xuân Giáp Thìn trên Đất Đồng Nai - May Mắn & Thịnh Vượng! 🎊**

---

*Last Updated: February 2026*
*Version 1.0 - Final Release*
