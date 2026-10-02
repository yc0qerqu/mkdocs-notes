# 华硕 T6670 + FNOS

> 这是一篇示例笔记。

## 用途

- 作为远程镜像烧录节点，通过 SSH 执行 `dd` 烧录 Win7 / Linux 镜像
- 监控后台进程状态：`ps aux`

## 常用操作

```bash
# SSH 登录后查看磁盘
lsblk

# 监控进程
ps aux | grep dd
```

---
*新笔记：在 `docs/notes/nas/` 下新建 `.md`，并在 `mkdocs.yml` 的 `nav` 中注册。*
