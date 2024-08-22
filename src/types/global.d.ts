// types/global.d.ts
export interface ContentItem {
  id?: number
  header: string
  content: string
}

interface contentProp {
  contents: ContentItem[]
}
