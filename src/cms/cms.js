import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview'
import ProductPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPostPreview)
