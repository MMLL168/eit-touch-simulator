# EIT Touch Simulator - 技術文件網站

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://mmll168.github.io/eit-touch-simulator/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

電阻抗斷層掃描 (Electrical Impedance Tomography, EIT) 觸控感測系統的完整技術文件與互動模擬器。

## 🌟 專案簡介

本專案提供了一個全面的多分頁技術文件網站，詳細介紹 EIT 觸控感測技術的原理、實作與應用。包含：

- **互動式模擬器**：即時展示 EIT 觸控感測的運作原理
- **完整技術文件**：從硬體架構到深度學習優化的全方位說明
- **響應式設計**：支援桌面、平板、手機等各種裝置
- **純前端實作**：無需後端伺服器，可直接部署至 GitHub Pages

## 📁 專案結構

```
eit-touch-simulator/
├── index.html                    # 首頁：系統總覽與快速導航
├── pages/                        # 技術文件分頁
│   ├── hardware.html            # 硬體架構與設計
│   ├── theory.html              # 理論原理與信號流程
│   ├── modeling.html            # 數學建模與影像重建
│   ├── deeplearning.html        # 深度學習優化
│   ├── simulation.html          # 互動模擬器
│   ├── applications.html        # 應用案例
│   └── faq.html                 # 常見問題與術語詞典
├── assets/                       # 靜態資源
│   ├── css/
│   │   ├── main.css             # 統一樣式系統
│   │   └── navigation.css       # 導航列樣式
│   ├── js/
│   │   ├── navigation.js        # 導航控制腳本
│   │   └── common.js            # 共用工具函式
│   └── images/
│       └── logo.svg             # 專案 Logo
└── README.md                     # 專案說明文件（本文件）
```

## 🚀 功能特色

### 1. 首頁 (index.html)
- EIT 技術簡介與核心優勢
- 系統架構視覺化圖表
- 快速導航卡片連結各技術章節
- 動畫效果與視覺吸引力

### 2. 硬體架構 (pages/hardware.html)
- 四層結構剖面圖與說明
- 電極配置與佈局設計
- 完整硬體規格表格
- 材料特性分析

### 3. 理論原理 (pages/theory.html)
- SEEIT 掃描模式詳解
- 掃描模式比較分析
- 信號處理流程圖
- 關鍵技術參數說明

### 4. 數學建模 (pages/modeling.html)
- 正向與逆向問題數學推導
- 有限元素法 (FEM) 離散化
- Jacobian 矩陣視覺化
- 正則化方法比較
- 加權質心快速演算法

### 5. 深度學習 (pages/deeplearning.html)
- UNet 網路架構說明
- 訓練策略與數據生成
- 性能對比分析
- TensorFlow.js 瀏覽器部署

### 6. 互動模擬器 (pages/simulation.html)
- 即時 EIT 觸控模擬
- 20 電極圓形陣列視覺化
- 阻抗分布熱圖
- 電壓變化表與訊號圖表
- 觸控定位計算（加權質心法）
- 支援滑鼠與觸控操作
- 自動掃描與數據匯出功能

### 7. 應用案例 (pages/applications.html)
- 六大應用場景分類
- 實際案例研究
- 技術對比分析
- 未來發展方向

### 8. FAQ (pages/faq.html)
- 技術比喻動畫說明
- 常見問題手風琴選單
- 專業術語詞典
- 參考文獻與資源

## 🎨 設計特色

### 統一視覺風格
- **主色調**：藍色漸層 (#1e3c72, #2a5298)
- **輔助色**：紫色 (#667eea, #764ba2)、綠色 (#2ecc71)、紅色 (#e74c3c)
- **漸層按鈕**：具有 hover 動畫效果
- **卡片式設計**：圓角、陰影、過渡動畫

### 響應式導航
- **桌面版**：水平導航列，當前頁面高亮
- **行動版**：漢堡選單，側邊滑出
- **自動偵測**：根據 URL 自動標示當前頁面

### 動畫效果
- **淡入動畫**：頁面載入時的平滑進場
- **懸停效果**：卡片、按鈕的互動回饋
- **滾動動畫**：平滑滾動到錨點

## 🛠️ 本地開發

### 前置需求
- 現代瀏覽器（Chrome, Firefox, Safari, Edge）
- （可選）本地 HTTP 伺服器

### 快速開始

1. **克隆專案**
```bash
git clone https://github.com/MMLL168/eit-touch-simulator.git
cd eit-touch-simulator
```

2. **本地預覽**

方法一：直接開啟 `index.html`
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

方法二：使用本地伺服器（推薦）
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# 瀏覽器訪問
# http://localhost:8000
```

### 檔案編輯
所有 HTML、CSS、JavaScript 檔案都可直接編輯：
- 修改內容後，重新整理瀏覽器即可看到變化
- 無需建置或編譯流程

## 🌐 GitHub Pages 部署

### 自動部署（已設定）
本專案已啟用 GitHub Pages，每次推送至 `main` 分支時會自動部署。

訪問網址：`https://mmll168.github.io/eit-touch-simulator/`

### 手動設定步驟
1. 進入 GitHub 專案頁面
2. 點擊 **Settings** > **Pages**
3. **Source** 選擇 `main` 分支
4. **目錄** 選擇 `/ (root)`
5. 點擊 **Save**
6. 等待數分鐘後訪問提供的 URL

## 📱 瀏覽器相容性

| 瀏覽器 | 最低版本 | 備註 |
|--------|---------|------|
| Chrome | 90+ | ✅ 完全支援 |
| Firefox | 88+ | ✅ 完全支援 |
| Safari | 14+ | ✅ 完全支援 |
| Edge | 90+ | ✅ 完全支援 |
| Mobile Safari | iOS 14+ | ✅ 觸控支援 |
| Chrome Mobile | Android 90+ | ✅ 觸控支援 |

## 🔧 技術棧

- **前端框架**：純 HTML5 + CSS3 + JavaScript (ES6+)
- **數學渲染**：MathJax 3.x（modeling.html）
- **圖表視覺化**：原生 Canvas API
- **響應式設計**：CSS Grid + Flexbox
- **動畫效果**：CSS Transitions + Animations
- **無外部依賴**：除 MathJax CDN 外，所有資源本地化

## 📖 使用指南

### 對於一般使用者
1. 訪問 [GitHub Pages 網站](https://mmll168.github.io/eit-touch-simulator/)
2. 從首頁的導航卡片選擇感興趣的章節
3. 在「互動模擬器」頁面體驗 EIT 觸控效果
4. 查閱「FAQ」解答疑問

### 對於開發者
1. 克隆專案到本地
2. 閱讀 `pages/` 各章節的技術說明
3. 研究 `pages/simulation.html` 的模擬器實作
4. 參考 `assets/js/common.js` 的工具函式
5. 基於此專案開發自己的 EIT 應用

### 對於研究者
1. 閱讀「理論原理」了解 SEEIT 掃描模式
2. 研究「數學建模」章節的演算法
3. 探索「深度學習」章節的 UNet 架構
4. 查閱「參考資料」獲取相關論文

## 🤝 貢獻指南

歡迎提交 Issue 或 Pull Request！

### 回報問題
- 描述問題的復現步驟
- 提供瀏覽器版本與作業系統資訊
- 附上截圖或錯誤訊息

### 提交改進
1. Fork 本專案
2. 建立特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交變更 (`git commit -m 'Add some amazing feature'`)
4. 推送至分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

### 程式碼風格
- HTML：使用 4 空格縮排，語義化標籤
- CSS：BEM 命名規範，變數統一於 `:root`
- JavaScript：ES6+ 語法，函式註解清晰

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權。

## 👥 作者

**MMLL168**
- GitHub: [@MMLL168](https://github.com/MMLL168)

## 🙏 致謝

- EIT 研究社群的技術貢獻
- MathJax 數學公式渲染引擎
- GitHub Pages 免費託管服務

## 📞 聯絡方式

- 透過 [GitHub Issues](https://github.com/MMLL168/eit-touch-simulator/issues) 提問
- 訪問 [專案網站](https://mmll168.github.io/eit-touch-simulator/)

## 🗺️ 專案里程碑

- [x] ✅ 基礎模擬器實作 (2024-Q4)
- [x] ✅ 多分頁架構建立 (2026-Q1)
- [x] ✅ 完整技術文件撰寫
- [x] ✅ 響應式設計優化
- [ ] 🚧 TensorFlow.js 模型整合
- [ ] 🚧 多點觸控支援
- [ ] 🚧 3D 視覺化

---

**⭐ 如果這個專案對你有幫助，請給我們一顆星星！**
