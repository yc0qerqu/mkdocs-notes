# 我的技术小站 — 部署指南

## 这个项目是什么
基于 MkDocs + Material 主题的静态笔记站，写 Markdown 就自动生成带搜索、导航的文档站。

## 部署到 Cloudflare Pages（3 步）

### 第 1 步：上传到 GitHub
1. 在 GitHub 新建一个仓库（比如叫 `my-notes`）
2. 把这个文件夹里的所有文件上传进去（网页拖拽上传即可）
   - 必须包含根目录的 `mkdocs.yml` 和 `docs/` 文件夹

### 第 2 步：Cloudflare Pages 关联
1. 打开 Cloudflare → Workers & Pages → Create → Pages → Connect to Git
2. 授权并选中你的 GitHub 仓库
3. 构建配置这样填：
   - **Framework preset**: MkDocs
   - **Build command**: `pip install mkdocs-material && mkdocs build`
   - **Build output directory**: `site`
4. 点 Save and Deploy，等 1-2 分钟

### 第 3 步：绑定你的域名
1. Cloudflare Pages 项目 → Custom domains → Add custom domain
2. 填入你在 dashboard.digitalplat.org 领的域名
3. 按提示在域名 DNS 里加一条 CNAME 指到 Cloudflare 给你的地址
4. 等证书生效，访问域名即可

## 以后怎么改内容
- 在 GitHub 网页直接编辑 `.md` 文件 → Commit
- Cloudflare 自动重新构建，1 分钟内网站更新
- 新增文章：在 `docs/notes/` 下新建 `.md`，并在 `mkdocs.yml` 的 `nav` 里加一行

## 本地预览（可选）
```bash
pip install mkdocs-material
mkdocs serve
# 浏览器打开 http://127.0.0.1:8000
```
