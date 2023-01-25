import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import landingPage from './landing-page'
import sectionCta from './section-cta'
import sectionInfo from './section-info'
landingPage.fields.push(sectionInfo)
landingPage.fields.push(sectionCta)

export const schemaTypes = [post, author, category, blockContent,landingPage]
