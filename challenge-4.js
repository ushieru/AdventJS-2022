function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => b.l - a.l && b.w - a.w && b.h - a.h)
        .every((box, index) => boxes[index + 1] ? box.l > boxes[index + 1].l && box.w > boxes[index + 1].w && box.h > boxes[index + 1].h : true)
}
