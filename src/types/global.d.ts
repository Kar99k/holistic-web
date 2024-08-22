import { ReactNode } from 'react'

// types/global.d.ts
export interface ContentItem {
  id?: number
  header: string
  content: string
}

interface contentProp {
  contents: ContentItem[]
}

interface NavbarComponentProps {
  onNavItemClick: (section: 'aboutMe' | 'contact') => void
}

interface TemplateProps {
  children: ReactNode // Define type for children
}
