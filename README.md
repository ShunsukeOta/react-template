# React Project Template
このテンプレートは、*React × TypeScript × Vite*で構築しています。

## 🔧 新しいプロジェクトとして使う手順
1. **このリポジトリをクローン（テンプレートとして複製）**
```bash
git clone https://github.com/ShunsukeOta/react-template.git PROJECT_NAME
cd PROJECT_NAME
```
2. `.git`ディレクトリを削除して履歴を切り離す
```bash
rm -rf .git
```
3. 新しくGitを初期化して再設定
```bash
git init
git remote add origin https://github.com/ShunsukeOta/PROJECT_NAME.git
git add .
git commit -m'Commit Message'
git push -u origin main
```

4. 依存パッケージのインストール
```bash
npm install
```

5. 開発サーバーを起動
```bash
npm run dev
```

## 📁 技術スタック
- React 18
- TypeScript
- Vite
- SCSS
- Google Maps API (Places API)
- React Icons

## 🧱 ディレクトリ構成(簡略)
```bash
src/
├── api/               # API
│   └──  
├── components/        # コンポーネント
│   └── ComponentTemplate.tsx
├── hooks/             # カスタムフック
│   └── 
├── utils/             # ユーティリティ
│   └── 
├── styles/            # SCSSスタイル
│   └── App.scss
└── App.tsx            # メイン画面
```

### 👤 作成者
ShunsukeOta