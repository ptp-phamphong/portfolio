# Lưu và lấy lại giao diện cũ bằng git

Mỗi giao diện cũ được giữ lại bằng một **tag**. Tag là một cái tên gắn cố định vào một commit. Sau này `main` có thêm bao nhiêu commit thì tag vẫn trỏ đúng chỗ cũ.

| Tag | Commit | Nội dung |
|---|---|---|
| `design-v1` | `9ed9283` | Giao diện trước đợt v2 (11/2026): nền hố đen, chữ gradient, tiêu đề tự đổi chữ |

Khi chốt xong bản v2, thêm một trong hai dòng:

- `design-v2`: nếu lấy bản mới. Gắn vào commit merge trên `main`.
- `design-v2-draft`: nếu giữ bản cũ. Gắn vào commit cuối của nhánh `portfolio-v2`.

Các lệnh dưới đây chạy trong thư mục `portfolio/`. Lệnh `.\deploy.ps1` chạy ở thư mục cha (`D:\Rasberry_PI`).

## Đợt v2 đang làm (11/2026)

- Bản mới nằm trên nhánh `portfolio-v2`. Nó được đưa lên `portfolio-v2.ptp-phamphong.com` để mọi người xem thử.
- Bản cũ vẫn ở `main` và `ptp-phamphong.com`.
- Các bước chốt "giữ cũ" hay "lấy mới" nằm ở repo `pi-infra`: `document/portfolio-v2-giu-cu-hay-lay-moi.md`.

Nhánh tên `portfolio-v2`, không đặt là `design-v2`. Lý do: `design-v2` dành cho tag. Nếu nhánh và tag trùng tên, git không biết `design-v2` là cái nào.

## 1. Lưu giao diện hiện tại trước khi đổi lớn

```
git tag -a design-v3 -m "Mô tả ngắn"
git push origin design-v3
```

- Chạy khi mọi thứ đã commit xong, **trước khi** bắt đầu sửa giao diện mới.
- Muốn gắn tag vào một commit cũ thì thêm mã commit vào: `git tag -a design-v1 9ed9283 -m "..."`.
- Thêm một dòng vào bảng ở trên.
- Nên làm bản mới trên một nhánh riêng (như `portfolio-v2`), để `main` luôn là bản đang chạy thật.

## 2. Xem lại giao diện cũ ở máy

Mở bản cũ ở một thư mục riêng. Bản đang làm không bị ảnh hưởng:

```
git worktree add ../portfolio-old design-v1
cd ../portfolio-old
npm install
npm run dev
```

Xem xong thì xóa:

```
cd ../portfolio
git worktree remove ../portfolio-old
```

## 3. Lấy lại một file cũ

```
git checkout design-v1 -- components/home/hero.tsx
```

File đó sẽ trở về bản cũ. Các file khác giữ nguyên.

Lưu ý: file cũ có thể cần các file khác đã bị xóa ở bản mới. Ví dụ `hero.tsx` bản v1 dùng `components/backgrounds/hole/hole.tsx`, file này đã bị xóa ở v2. Chạy `npm run build` để kiểm tra.

## 4. Đưa giao diện cũ lên web tạm thời

`deploy.ps1` build thư mục `portfolio/` theo nhánh hoặc tag đang checkout. Vì vậy phải chuyển tạm sang tag:

```
git stash                     # chỉ cần nếu còn thay đổi chưa commit
git checkout design-v1
cd ..
.\deploy.ps1 portfolio        # script hỏi vì không ở nhánh main: gõ y
cd portfolio
git checkout main
git stash pop                 # nếu đã stash ở trên
```

Cách này chỉ là **tạm thời**. Lần deploy sau từ `main` sẽ đè lại giao diện mới. Muốn quay về lâu dài thì dùng mục 5.

Khi trang `portfolio-v2.ptp-phamphong.com` còn tồn tại, có thể đưa bản cũ lên đó thay vì trang chính: thay `.\deploy.ps1 portfolio` bằng `.\deploy.ps1 portfolio-v2`. Trang chính không bị đụng tới.

## 5. Quay hẳn về giao diện cũ trên `main`

Dùng khi đã lấy bản mới, rồi sau này muốn quay lại bản cũ lâu dài. Lịch sử commit được giữ nguyên. Chỉ thêm một commit mới đưa code về đúng như tag:

```
git switch main
git pull
git switch -c quay-ve-v1
git rm -r -q .
git checkout design-v1 -- .
git commit -m "Quay về giao diện v1"
git push -u origin quay-ve-v1
```

- `git rm -r -q .` xóa mọi file đang được git theo dõi. Sau đó `git checkout design-v1 -- .` lấy lại đúng các file của tag. Kết quả: code giống hệt `design-v1`, kể cả việc xóa các file chỉ bản mới có.
- File trong `.gitignore` (như `node_modules/`, `out/`) không bị đụng tới.
- Nội dung thêm vào **sau** khi lấy bản mới (chứng chỉ, dự án mới) sẽ mất. Xem trước những gì sẽ mất bằng: `git diff design-v1 main -- data public`. Thêm lại bằng tay sau khi quay về.
- Tiếp theo: tạo PR từ `quay-ve-v1` vào `main`, merge, rồi `.\deploy.ps1 portfolio` từ `main`.

Trước khi làm, gắn tag cho giao diện đang dùng (mục 1), để sau này còn đường quay lại nó.

## 6. Xem danh sách tag

```
git tag --list
git show design-v1 --stat
```

## Ghi chú

- Tag chỉ dùng để **lưu và xem lại**. Muốn **sửa tiếp** bản cũ song song với bản mới thì tạo nhánh: `git branch design-v1-sua design-v1`.
- Tag tạo ở máy chưa có trên GitHub cho tới khi `git push origin <tên tag>`.
- Lỡ tạo tag sai thì xóa đi rồi tạo lại:
  ```
  git tag -d design-v1
  git push origin --delete design-v1
  ```
