# A1278 升级排障记录

> 这是一篇示例笔记。以后把你的排障过程直接写在这个文件里就行。

## 硬件信息

- 机型：MacBook Pro 8,1（2011，A1278）
- 硬盘：256GB SSD（曾出现高负载卡死）
- 硬盘排线备件号：`821-1226-A`

## 排障思路

1. 先确认是硬盘本身还是排线问题：
   - 换上机械硬盘 `Hitachi HTS545032B9A302` 交叉测试
   - 交换硬盘位 / 替换排线做逻辑证伪
2. 记录每次改动后的表现，方便回滚。

## 常用命令（示例）

```bash
# 查看磁盘
lsblk
# 烧录镜像
dd if=win7.iso of=/dev/sdX bs=4M status=progress
# 后台跑
nohup dd if=linux.iso of=/dev/sdX bs=4M status=progress &
```

---
*新笔记：在 `docs/notes/mac/` 下新建 `.md` 文件，然后到 `mkdocs.yml` 的 `nav` 里加一行。*
