# 貢獻指南 (Contributing Guidelines)

感謝您對 EIT Touch Simulator 專案的關注！我們歡迎各種形式的貢獻。

## 🤝 如何貢獻

### 回報問題 (Reporting Issues)

如果您發現 bug 或有功能建議，請：

1. **搜尋現有 Issues**：確認問題是否已被回報
2. **建立新 Issue**：如果沒有重複的問題，請建立新的 Issue
3. **提供詳細資訊**：
   - 清楚的標題和描述
   - 重現步驟（如果是 bug）
   - 預期行為 vs 實際行為
   - 截圖或錯誤訊息
   - 瀏覽器和作業系統版本
   - 相關的程式碼片段

### 提交程式碼 (Pull Requests)

#### 開始之前

1. **Fork 專案**：點擊 GitHub 頁面右上角的 "Fork" 按鈕
2. **Clone 到本地**：
   ```bash
   git clone https://github.com/你的帳號/eit-touch-simulator.git
   cd eit-touch-simulator
   ```
3. **建立分支**：
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

#### 開發流程

1. **進行修改**：確保遵循程式碼風格指南（見下方）
2. **測試**：在多個瀏覽器中測試您的修改
3. **提交變更**：
   ```bash
   git add .
   git commit -m "描述您的修改"
   ```
4. **推送到您的 Fork**：
   ```bash
   git push origin feature/your-feature-name
   ```
5. **建立 Pull Request**：
   - 前往您的 Fork 頁面
   - 點擊 "New Pull Request"
   - 填寫 PR 描述，說明修改內容和目的
   - 關聯相關的 Issues（使用 "Fixes #issue-number"）

#### Pull Request 指南

- **清楚的描述**：說明「做了什麼」和「為什麼這樣做」
- **小而專注**：每個 PR 應該只處理一個功能或修復
- **更新文件**：如果需要，更新 README 或其他文件
- **保持同步**：確保您的分支與主分支同步
  ```bash
  git fetch upstream
  git rebase upstream/main
  ```

## 📝 程式碼風格指南

### HTML
- 使用 **4 空格縮排**
- 使用語義化標籤（`<header>`, `<nav>`, `<main>`, `<section>` 等）
- 標籤屬性使用雙引號
- 在註解中使用繁體中文

```html
<!-- 好的範例 -->
<section class="feature-section">
    <h2>功能標題</h2>
    <p>功能描述內容</p>
</section>
```

### CSS
- 使用 **4 空格縮排**
- 建議使用 BEM 命名規範
- 顏色使用 CSS 變數（定義在 `:root` 中）
- 在註解中使用繁體中文

```css
/* 好的範例 */
.feature-section {
    background: var(--gradient-primary);
    padding: 2rem;
    border-radius: 12px;
}

.feature-section__title {
    color: var(--color-primary);
    font-size: 2rem;
}
```

### JavaScript
- 使用 **4 空格縮排**
- 使用 ES6+ 語法
- 變數使用 `const` 或 `let`，避免 `var`
- 函式使用清楚的命名和註解
- 在註解中使用繁體中文

```javascript
// 好的範例
/**
 * 計算電極間的阻抗值
 * @param {number} electrode1 - 第一個電極編號
 * @param {number} electrode2 - 第二個電極編號
 * @returns {number} 阻抗值
 */
function calculateImpedance(electrode1, electrode2) {
    const distance = Math.abs(electrode1 - electrode2);
    return BASE_IMPEDANCE * (1 + distance * 0.1);
}
```

## 🎯 專案結構

了解專案結構有助於您找到正確的修改位置：

```
eit-touch-simulator/
├── index.html              # 首頁
├── pages/                  # 技術文件頁面
│   ├── hardware.html       # 硬體架構
│   ├── theory.html         # 理論原理
│   ├── modeling.html       # 數學建模
│   ├── deeplearning.html   # 深度學習
│   ├── simulation.html     # 互動模擬器
│   ├── applications.html   # 應用案例
│   └── faq.html           # 常見問題
├── assets/
│   ├── css/               # 樣式表
│   ├── js/                # JavaScript 腳本
│   └── images/            # 圖片資源
└── README.md              # 專案說明
```

## 🧪 測試

在提交 PR 之前，請確保：

- [ ] 在 Chrome、Firefox、Safari 中測試過
- [ ] 響應式設計在手機和平板上正常運作
- [ ] 沒有 JavaScript 錯誤（檢查瀏覽器控制台）
- [ ] 所有連結和導航正常運作
- [ ] 模擬器功能正常（如果有修改）

## 📚 文件貢獻

文件改進同樣重要！您可以：

- 修正錯字或文法錯誤
- 改善說明的清晰度
- 新增範例或圖表
- 翻譯內容（如果需要多語言支援）

## 💬 討論和提問

- **GitHub Issues**：技術問題和 bug 回報
- **GitHub Discussions**：一般討論、想法分享
- **Pull Request 評論**：針對特定程式碼的討論

## 🎨 貢獻類型

我們歡迎以下類型的貢獻：

### 程式碼貢獻
- 🐛 修復 bug
- ✨ 新增功能
- 🎨 改善 UI/UX
- ⚡ 效能優化
- ♿ 無障礙改善

### 非程式碼貢獻
- 📝 改善文件
- 🌍 翻譯內容
- 🎨 設計圖表或插圖
- 🧪 測試和 bug 回報
- 💡 功能建議和想法

## ⭐ 貢獻者

感謝所有貢獻者！您的名字將出現在專案的貢獻者列表中。

## 📜 授權

提交貢獻即表示您同意將您的貢獻以 MIT License 授權。

## ❓ 需要協助？

如果您對貢獻流程有任何疑問：

1. 查看 [README.md](README.md)
2. 搜尋現有的 Issues 和 Discussions
3. 建立新的 Discussion 提問
4. 在相關 Issue 中留言

---

**再次感謝您的貢獻！每一個貢獻都讓這個專案更好。** ❤️