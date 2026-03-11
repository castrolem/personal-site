import { getCollection, type CollectionEntry } from "astro:content"

export type PostEntry = CollectionEntry<"posts">
export const POSTS_PER_PAGE = 25

const normalizeTag = (tag: string) => tag.trim().replace(/^#/, "").toLowerCase()

async function getPostsCollection() {
  try {
    return await getCollection("posts", ({ data }) => !data.draft)
  } catch (error) {
    if (error instanceof Error && error.message.includes('collection "posts" does not exist or is empty')) {
      return []
    }

    throw error
  }
}

export async function getPublishedPosts() {
  const posts = await getPostsCollection()

  return posts.sort(
    (left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  )
}

export async function getPostsByTag(tag: string) {
  const normalizedTag = normalizeTag(tag)
  const posts = await getPublishedPosts()

  return posts.filter((post) =>
    post.data.tags.some((postTag) => normalizeTag(postTag) === normalizedTag),
  )
}

export function paginatePosts(posts: PostEntry[], page: number, pageSize = POSTS_PER_PAGE) {
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize))
  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const startIndex = (currentPage - 1) * pageSize

  return {
    posts: posts.slice(startIndex, startIndex + pageSize),
    currentPage,
    totalPages,
    totalPosts: posts.length,
  }
}
