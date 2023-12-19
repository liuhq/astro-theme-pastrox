export const postsSort = (posts, usePin) => {
    return posts.toSorted((a, b) => {
        if (usePin) {
            if (a.data.pinned && !b.data.pinned) return -1
            if (b.data.pinned && !a.data.pinned) return 1
        }
        return b.data.date - a.data.date
    })
}
