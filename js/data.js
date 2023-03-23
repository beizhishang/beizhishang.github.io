const data = [
    {
        "logo": "https://debuild.co/favicon.ico",
        "name": "Debuild",
        "description": "Debuild is a platform for developers to showcase their projects and connect with other developers.",
        "url": "https://debuild.co",
        "tag": "developer"
    },
    {
        "logo": "https://www.grammarly.com/favicon.ico",
        "name": "Grammarly",
        "description": "Grammarly is a digital writing assistant that helps you improve your writing and grammar skills.",
        "url": "https://www.grammarly.com",
        "tag": "writing"
    },
    {
        "logo": "https://www.tabnine.com/static/favicon.ico",
        "name": "Tabnine",
        "description": "AI Code Completion Tool",
        "url": "https://www.tabnine.com/",
        "tag": "developer"
    },
    {
        "logo": "https://omnkey.com/favicon.ico",
        "name": "Omnkey",
        "description": "Omnkey is a platform for developers to showcase their projects and connect with other developers.",
        "url": "https://omnkey.com",
        "tag": "developer"
    },
    {
        "logo": "https://core.ai/favicon.ico",
        "name": "Core.ai",
        "description": "Core.ai is an AI-powered platform that helps businesses automate their workflows and improve their productivity.",
        "url": "https://core.ai",
        "tag": "AI"
    },
    {
        "logo": "https://jasperapp.io/favicon.ico",
        "name": "Jasper",
        "description": "Jasper is a platform for creating and sharing interactive data visualizations.",
        "url": "https://jasperapp.io",
        "tag": "data"
    },
    {
        "logo": "https://insilico.com/favicon.ico",
        "name": "Insilico",
        "description": "Insilico Medicine is an artificial intelligence company that develops deep learning methods for drug discovery and aging research.",
        "url": "https://insilico.com",
        "tag": "AI"
    },
    {
        "logo": "https://www.absci.com/wp-content/uploads/2020/06/AbSci-Logo-Primary-Color-1.png",
        "name": "AbSci",
        "description": "AbSci is a synthetic biology company that provides a protein expression platform for biopharmaceutical drug discovery and development.",
        "url": "https://www.absci.com/",
        "tag": "biotech"
    },

    {
        "logo": "https://poe.com/favicon.ico",
        "name": "Poe",
        "description": "Path of Exile is a free online-only action RPG under development by Grinding Gear Games in New Zealand.",
        "url": "https://poe.com",
        "tag": "AI"
    },
    {
        "logo": "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg",
        "name": "Canva",
        "description": "Create beautiful designs with your team. Use Canva's drag-and-drop feature and layouts to design, share and print business cards, logos, presentations and more.",
        "url": "https://www.canva.com",
        "tag": "design"
    },
    {
        "logo": "https://www.notion.so/images/favicon.ico",
        "name": "Notion",
        "description": "A productivity tool for notes, tasks, wikis, and databases.",
        "url": "https://www.notion.so",
        "tag": "productivity"
    },

    {
        "logo": "https://www.trello.com/favicon.ico",
        "name": "Trello",
        "description": "Infinitely flexible. Incredibly easy to use. Great mobile apps. It's free. Trello keeps track of everything, from the big picture to the minute details.",
        "url": "https://www.trello.com",
        "tag": "productivity"
    },
    {
        "logo": "https://www.asana.com/favicon.ico",
        "name": "Asana",
        "description": "Work anytime, anywhere with Asana. Keep remote and distributed teams, and your entire organization, focused on their goals, projects, and tasks with Asana.",
        "url": "https://www.asana.com",
        "tag": "productivity"
    },
    {
        "logo": "https://pixabay.com/favicon-32x32.png",
        "name": "Pixabay",
        "description": "Over 1.8 million+ high quality stock images and videos shared by our talented community.",
        "url": "https://www.pixabay.com",
        "tag": "image"
    },
    {
        "logo": "https://www.unsplash.com/favicon.ico",
        "name": "Unsplash",
        "description": "Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",
        "url": "https://www.unsplash.com",
        "tag": "image"
    },
    {
        "logo": "https://www.pexels.com/assets/static/images/meta/favicon.ico",
        "name": "Pexels",
        "description": "Best free stock photos in one place. Discover and download free images and videos for use in any project.",
        "url": "https://www.pexels.com",
        "tag": "image"
    },
    {
        "logo": "https://colorhunt.co/img/color-hunt-icon-192.png?v4",
        "name": "Color Hunt",
        "description": "Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes",
        "url": "https://colorhunt.co/",
        "tag": "color"
    },
    {
        "logo": "https://coolors.co/assets/img/ios_icon.png",
        "name": "Coolors",
        "description": "The super fast color schemes generator!",
        "url": "https://coolors.co/",
        "tag": "color"
    },
    {
        "logo": "https://color.adobe.com/favicon.ico",
        "name": "Adobe Color",
        "description": "Create color palettes with the color wheel, hex or image. Browse thousands of color combinations for usage in Photoshop, Illustrator etc.",
        "url": "https://color.adobe.com/create/color-wheel",
        "tag": "color"
    },
    {
        "logo": "https://www.materialpalette.com/favicon.ico",
        "name": "Material Palette",
        "description": "Choose your favorite colors and get your Material Design palette generated and downloadable.",
        "url": "https://www.materialpalette.com/",
        "tag": "color"
    },
    {
        "logo": "https://static.colourlovers.com/images/v4.0/_/footer-logo.png?16",
        "name": "Colourlovers",
        "description": "Color Trends + Palettes :: COLOURlovers",
        "url": "https://www.colourlovers.com/",
        "tag": "color"
    },
    {
        "logo": "https://assets.website-files.com/5dd40aa8049df8748c72d0ee/5dd9b94105da589ba59c4907_happy-hues-fav.png",
        "name": "Happy Hues",
        "description": "Happy Hues - Curated colors in context.",
        "url": "https://www.happyhues.co/",
        "tag": "color"
    },
    {
        "logo": "https://www.tensorflow.org/favicon.ico",
        "name": "TensorFlow",
        "description": "An end-to-end open source machine learning platform",
        "url": "https://www.tensorflow.org/",
        "tag": "AI"
    },
    {
        "logo": "https://pytorch.org/assets/images/logo-icon.svg",
        "name": "PyTorch",
        "description": "An open source machine learning framework that accelerates the path from research prototyping to production deployment.",
        "url": "https://pytorch.org/",
        "tag": "AI"
    },
    {
        "logo": "https://www.kaggle.com/static/images/favicon.ico",
        "name": "Kaggle",
        "description": "Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.",
        "url": "https://www.kaggle.com/",
        "tag": "AI"
    },
    {
        "logo": "https://colab.research.google.com/img/favicon.ico",
        "name": "Google Colab",
        "description": "Google Colab is a free cloud service and now it supports free GPU! You can: improve your Python programming language coding skills. develop deep learning applications using popular libraries such as Keras, TensorFlow, PyTorch, and OpenCV.",
        "url": "https://colab.research.google.com/",
        "tag": "AI"
    },
    {
        "logo": "https://www.ibm.com/favicon.ico",
        "name": "IBM Watson",
        "description": "IBM Watson is a data analysis software that uses natural language processing algorithms to reveal insights from large amounts of unstructured data.",
        "url": "https://www.ibm.com/watson",
        "tag": "AI"
    },
    {
        "logo": "https://www.anaconda.com/assets/build/favicons/favicon-32x32-20c6665c85.png",
        "name": "Anaconda",
        "description": "The World's Most Popular Data Science Platform. Anaconda is the birthplace of Python data science.",
        "url": "https://www.anaconda.com/",
        "tag": "AI"
    },
    {
        "logo": "https://www.openai.com/favicon.ico",
        "name": "OpenAI",
        "description": "OpenAI is an AI research laboratory consisting of the forerunners of the AI industry. They are dedicated to creating safe AI and ensuring that the benefits of AI are shared with everyone.",
        "url": "https://www.openai.com/",
        "tag": "AI"
    },
    {
        "logo": "https://www.shutterstock.com/favicon.ico",
        "name": "Shutterstock",
        "description": "Download the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing.",
        "url": "https://www.shutterstock.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.istockphoto.com/favicon.ico",
        "name": "iStock",
        "description": "Explore millions of exclusive, royalty-free, stock photos, images, and videos. Find the perfect image for your project, fast. Search now.",
        "url": "https://www.istockphoto.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.gettyimages.com/favicon.ico",
        "name": "Getty Images",
        "description": "Find high-quality stock photos, editorial news pictures, and video footage by searching among the world's leading creative stock image providers.",
        "url": "https://www.gettyimages.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.freepik.com/favicon.ico",
        "name": "Freepik",
        "description": "Find & Download Free Graphic Resources for Graphic Design. 7+ Million Graphic Resources. Free for commercial use ✓ High Quality Images.",
        "url": "https://www.freepik.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.vectorstock.com/favicon.ico",
        "name": "VectorStock",
        "description": "VectorStock - Vector Art, Images, Graphics & Clipart",
        "url": "https://www.vectorstock.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.flaticon.com/favicon.ico",
        "name": "Flaticon",
        "description": "Free vector icons - SVG, PSD, PNG, EPS & Icon Font - Thousands of free icons",
        "url": "https://www.flaticon.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.pngtree.com/favicon.ico",
        "name": "Pngtree",
        "description": "Millions of PNG Images, Backgrounds and Vectors for Free Download. Pngtree provides free download of png, png images, backgrounds and vector. Millions of high quality free png images, PSD, AI and EPS Files are available.",
        "url": "https://www.pngtree.com/",
        "tag": "image"
    },
    {
        "logo": "https://www.ppttemplate.net/wp-content/uploads/2019/01/cropped-ppttemplate-logo-1.png",
        "name": "PPT Template",
        "description": "Free PowerPoint Templates and Google Slides Themes",
        "url": "https://www.ppttemplate.net/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.slidescarnival.com/wp-content/uploads/2016/08/favicon512-2-225x225.png",
        "name": "Slides Carnival",
        "description": "Free Powerpoint templates and Google Slides themes for your presentations",
        "url": "https://www.slidescarnival.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.free-power-point-templates.com/images/favicon.png",
        "name": "Free PowerPoint Templates",
        "description": "Download free PowerPoint templates and backgrounds! We have the best collection of professional templates, charts and diagrams.",
        "url": "https://www.free-power-point-templates.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.powerpointify.com/wp-content/uploads/2019/06/cropped-Logo-2.png",
        "name": "PowerPointify",
        "description": "Free and Premium PowerPoint Templates",
        "url": "https://www.powerpointify.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.showeet.com/wp-content/uploads/2017/09/cropped-showeet-logo-1.png",
        "name": "Showeet",
        "description": "Free PowerPoint Templates and Google Slides Themes",
        "url": "https://www.showeet.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.slidemodel.com/wp-content/uploads/2016/05/cropped-SlideModel-Logo-1.png",
        "name": "SlideModel",
        "description": "Professional PowerPoint Templates & Slides",
        "url": "https://www.slidemodel.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.presentationgo.com/wp-content/uploads/2018/03/cropped-presentationgo-logo-1.png",
        "name": "PresentationGO",
        "description": "Free PowerPoint Templates and Google Slides Themes",
        "url": "https://www.presentationgo.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.slidescarnival.com/wp-content/uploads/2017/09/favicon.png",
        "name": "Slides Carnival",
        "description": "Free Powerpoint templates and Google Slides themes for your presentations",
        "url": "https://www.slidescarnival.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.51pptmoban.com/favicon.ico",
        "name": "51PPT Template",
        "description": "Provides free PowerPoint templates for various needs, including business, education, and creative presentations.",
        "url": "https://www.51pptmoban.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.pptstore.net/favicon.ico",
        "name": "PPTSTORE",
        "description": "PPTSTORE provides high-quality PPT templates for various needs.",
        "url": "https://www.pptstore.net/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.pptplus.cn/favicon.ico",
        "name": "PPTPlus",
        "description": "PPTPlus provides high-quality PPT templates for various needs.",
        "url": "https://www.pptplus.cn/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.pptbz.com/d/file/2014/12/03/4d7d1d9d5d7d7f7f7d7d7d7f7f7d7d7d.jpg",
        "name": "PPT Treasure",
        "description": "Provides free PowerPoint templates for various needs.",
        "url": "https://www.pptbz.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.51ppt.com.cn/favicon.ico",
        "name": "51PPT",
        "description": "51PPT Template is a professional PPT template download website.",
        "url": "https://www.51ppt.com.cn/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.pptfans.cn/favicon.ico",
        "name": "PPTFans",
        "description": "PPTFans - professional PPT template download website",
        "url": "https://www.pptfans.cn/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.pptbz.com/d/file/2014/12/03/4d7d1d9d5d7d7f7f7d7d7d7f7f7d7d7d.jpg",
        "name": "PPT Home",
        "description": "PPT Home - professional PPT template download website",
        "url": "https://www.pptbz.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.pptok.com/favicon.ico",
        "name": "PPTOK",
        "description": "PPTOK is a professional PPT template download website that provides high-quality PPT templates for various needs.",
        "url": "https://www.pptok.com/",
        "tag": "PPT"
    },
    {
        "logo": "https://www.wikipedia.org/static/favicon/wikipedia.ico",
        "name": "Wikipedia",
        "description": "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.",
        "url": "https://www.wikipedia.org/",
        "tag": "encyclopedia"
    },
    {
        "logo": "https://www.britannica.com/favicon.ico",
        "name": "Encyclopedia Britannica",
        "description": "Explore the fact-checked online encyclopedia from Encyclopaedia Britannica with hundreds of thousands of objective articles, biographies, videos, and images from experts.",
        "url": "https://www.britannica.com/",
        "tag": "encyclopedia"
    },
    {
        "logo": "https://www.howstuffworks.com/favicon.ico",
        "name": "HowStuffWorks",
        "description": "HowStuffWorks explains thousands of topics, ranging from the flu to black holes to conspiracy theories, with video and illustrations so you can learn how everything works.",
        "url": "https://www.howstuffworks.com/",
        "tag": "knowledge"
    },
    {
        "logo": "https://www.quora.com/favicon.ico",
        "name": "Quora",
        "description": "Quora is a place to gain and share knowledge. It's a platform to ask questions and connect with people who contribute unique insights and quality answers.",
        "url": "https://www.quora.com/",
        "tag": "knowledge"
    },
    {
        "logo": "https://www.wolframalpha.com/favicon.ico",
        "name": "Wolfram Alpha",
        "description": "Wolfram|Alpha brings expert-level knowledge and capabilities to the broadest possible range of people—spanning all professions and education levels.",
        "url": "https://www.wolframalpha.com/",
        "tag": "knowledge"
    },
    {
        "logo": "https://www.snopes.com/favicon.ico",
        "name": "Snopes",
        "description": "The definitive Internet reference source for researching urban legends, folklore, myths, rumors, and misinformation.",
        "url": "https://www.snopes.com/",
        "tag": "fact-checking"
    },
    {
        "logo": "https://www.factcheck.org/wp-content/themes/factcheck/images/favicon.ico",
        "name": "FactCheck.org",
        "description": "A nonpartisan, nonprofit “consumer advocate” for voters that aims to reduce the level of deception and confusion in U.S. politics.",
        "url": "https://www.factcheck.org/",
        "tag": "fact-checking"
    },
    {
        "logo": "https://www.politifact.com/apple-touch-icon.png",
        "name": "PolitiFact",
        "description": "PolitiFact is a fact-checking website that rates the accuracy of claims by elected officials and others who speak up in American politics.",
        "url": "https://www.politifact.com/",
        "tag": "fact-checking"
    },
    {
        "logo": "https://www.truthorfiction.com/wp-content/uploads/2019/03/cropped-tf-icon-512x512-192x192.png",
        "name": "Truth or Fiction",
        "description": "Truth or Fiction is a website that provides fact-checking and myth-busting information related to news, politics, and other topics.",
        "url": "https://www.truthorfiction.com/",
        "tag": "fact-checking"
    },
    {
        "logo": "https://www.allsides.com/sites/default/files/favicon_0.ico",
        "name": "AllSides",
        "description": "AllSides provides balanced news, perspectives, and issues across the political spectrum.",
        "url": "https://www.allsides.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.bbc.com/favicon.ico",
        "name": "BBC News",
        "description": "Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
        "url": "https://www.bbc.com/news",
        "tag": "news"
    },
    {
        "logo": "https://www.nytimes.com/favicon.ico",
        "name": "The New York Times",
        "description": "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.",
        "url": "https://www.nytimes.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.theguardian.com/favicon.ico",
        "name": "The Guardian",
        "description": "Latest US news, world news, sports, business, opinion, analysis and reviews from the Guardian, the world's leading liberal voice.",
        "url": "https://www.theguardian.com/us",
        "tag": "news"
    },
    {
        "logo": "https://www.wsj.com/apple-touch-icon.png",
        "name": "The Wall Street Journal",
        "description": "Breaking news and analysis from the U.S. and around the world at WSJ.com. Politics, Economics, Markets, Life & Arts, and in-depth reporting.",
        "url": "https://www.wsj.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.bloomberg.com/favicon.ico",
        "name": "Bloomberg",
        "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
        "url": "https://www.bloomberg.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.reuters.com/resources_v2/images/favicon/favicon.ico",
        "name": "Reuters",
        "description": "Reuters.com brings you the latest news from around the world, covering breaking news in markets, business, politics, entertainment, technology, video and pictures.",
        "url": "https://www.reuters.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.aljazeera.com/favicon.ico",
        "name": "Al Jazeera",
        "description": "News, analysis from the Middle East & worldwide, multimedia & interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "https://www.aljazeera.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.cnn.com/favicon.ico",
        "name": "CNN",
        "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
        "url": "https://www.cnn.com/",
        "tag": "news"
    },
    {
        "logo": "https://www.npr.org/favicon.ico",
        "name": "NPR",
        "description": "NPR delivers breaking national and world news. Also top stories from business, politics, health, science, technology, music, arts and culture. Subscribe to podcasts and RSS feeds.",
        "url": "https://www.npr.org/",
        "tag": "news"
    },
    {
        "logo": "https://www.foxnews.com/favicon.ico",
        "name": "Fox News",
        "description": "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
        "url": "https://www.foxnews.com/",
        "tag": "news"
    },
    {
        "logo": "https://cn.office-converter.com/favicon.ico",
        "name": "Office Converter",
        "description": "Convert various formats of documents, images, audio, video, and archives online for free.",
        "url": "https://cn.office-converter.com/",
        "tag": "conversion"
    },
    {
        "logo": "https://www.iconfinder.com/icons/299087/earth_global_globe_internet_map_planet_world_icon",
        "name": "Iconfinder",
        "description": "Iconfinder provides beautiful icons to millions of designers and developers. Iconfinder now hosts the worlds largest collection of premium icons.",
        "url": "https://www.iconfinder.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.flaticon.com/favicon.ico",
        "name": "Flaticon",
        "description": "Flaticon is the largest icon database. With this extension, you will have free access to our icons for your Google Docs, Slides, Forms and Sheets.",
        "url": "https://www.flaticon.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.iconarchive.com/favicon.ico",
        "name": "IconArchive",
        "description": "IconArchive is a professional tag-based icon search engine with more than 500,000 icons for web developers, end users and graphic artists.",
        "url": "https://www.iconarchive.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.iconshock.com/favicon.ico",
        "name": "Iconshock",
        "description": "Iconshock is a website that provides a huge collection of icons, illustrations, and stock photos with a fast and reliable service. It is a great resource for designers and developers who need high-quality design assets for their projects.",
        "url": "https://www.iconshock.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.iconspedia.com/favicon.ico",
        "name": "Iconspedia",
        "description": "Iconspedia is a website that provides free icons for personal and commercial use. It is a great resource for designers and developers who need high-quality icons for their projects.",
        "url": "https://www.iconspedia.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.transparenttextures.com/favicon.png",
        "name": "Transparent Textures",
        "description": "Transparent Textures is a website that offers free textures for use in web design and graphic design projects.",
        "url": "https://www.transparenttextures.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.toptal.com/designers/subtlepatterns/favicon.ico",
        "name": "Subtle Patterns",
        "description": "Subtle Patterns is a website that offers free textures and patterns for use in web design and graphic design projects.",
        "url": "https://www.toptal.com/designers/subtlepatterns/",
        "tag": "design"
    },
    {
        "logo": "https://cdn.document360.io/logo/3040c2b6-fead-4744-a3a9-d56d621c6c7e/778d06e9a335497ba965629e3b83a31f-MJ_Boat.png",
        "name": "midjourney",
        "description": "midjourney is a website that provides free stock photos, videos, and music for personal and commercial use.",
        "url": "https://www.midjourney.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.dalle2.com/favicon.ico",
        "name": "DALL.E 2",
        "description": "DALL.E 2 is a website that provides free AI-generated images.",
        "url": "https://www.dalle2.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.stablediffusion.com/favicon.ico",
        "name": "Stable Diffusion",
        "description": "Stable Diffusion is a website that provides free textures and patterns for use in web design and graphic design projects.",
        "url": "https://www.stablediffusion.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.netlify.com/favicon.ico",
        "name": "Netlify",
        "description": "Netlify is a web developer platform that multiplies productivity. By unifying the elements of the modern decoupled web, from local development to advanced edge logic, Netlify enables a 10x faster path to much more performant, secure, and scalable websites and apps.",
        "url": "https://www.netlify.com/",
        "tag": "web"
    },
    {
        "logo": "https://www.pega.com/themes/custom/pega_bolt_theme/images/favicons/favicon-32x32.png",
        "name": "Pega",
        "description": "Pega is the leader in cloud software for customer engagement and operational excellence.",
        "url": "https://www.pega.com/",
        "tag": "software"
    },
    {
        "logo": "https://www.species-in-pieces.com/favicon.ico",
        "name": "Species in Pieces",
        "description": "Species in Pieces is a website that showcases endangered species through stunning animated illustrations.",
        "url": "http://www.species-in-pieces.com/#",
        "tag": "design"
    },
    {
        "logo": "https://www.flaticon.com/favicon.ico",
        "name": "Flaticon",
        "description": "Flaticon is the largest icon database. With this extension, you will have free access to our icons for your Google Docs, Slides, Forms and Sheets.",
        "url": "https://www.flaticon.com/",
        "tag": "icon"
    },
    {
        "logo": "https://icons8.com/favicon.ico",
        "name": "Icons8",
        "description": "Icons8 is a website that provides free icons, photos, vectors, music, and tools for use in web design and graphic design projects.",
        "url": "https://icons8.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.iconfinder.com/favicon.ico",
        "name": "IconFinder",
        "description": "IconFinder is a website that provides free and premium icons for use in web design and graphic design projects.",
        "url": "https://www.iconfinder.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.iconfont.cn/favicon.ico",
        "name": "Iconfont",
        "description": "Iconfont is a vector icon library provided by Alibaba, which provides functions such as vector icon download, online storage, and format conversion.",
        "url": "https://www.iconfont.cn/",
        "tag": "icon"
    },
    {
        "logo": "https://thenounproject.com/favicon.ico",
        "name": "The Noun Project",
        "description": "The Noun Project is a website that provides free icons and stock photos for use in web design and graphic design projects.",
        "url": "https://thenounproject.com/",
        "tag": "icon"
    },
    {
        "logo": "https://iconsvg.xyz/favicon.ico",
        "name": "iconsvg",
        "description": "iconsvg is a website that provides free SVG icons for use in web design and graphic design projects.",
        "url": "https://iconsvg.xyz/",
        "tag": "icon"
    },
    {
        "logo": "https://www.streamlineicons.com/favicon.ico",
        "name": "Streamline 3.0",
        "description": "Streamline 3.0 is a website that provides high-quality icons, illustrations, and design assets for use in web design and graphic design projects.",
        "url": "https://www.streamlineicons.com/",
        "tag": "icon"
    },
    {
        "logo": "https://iconmonstr.com/wp-content/themes/iconmonstr/assets/ico/favicon.ico",
        "name": "Iconmonstr",
        "description": "Iconmonstr is a website that provides free icons and illustrations for use in web design and graphic design projects.",
        "url": "https://iconmonstr.com/",
        "tag": "icon"
    },
    {
        "logo": "https://www.helpling.cn/favicon.ico",
        "name": "Helpling",
        "description": "Helpling is an online platform that provides home services, including cleaning, babysitting, maternity matrons, hourly workers, etc.",
        "url": "https://www.helpling.cn/",
        "tag": "service"
    },
    {
        "logo": "https://www.365ppt.com/favicon.ico",
        "name": "365ppt",
        "description": "365ppt provides free PPT templates, PPT charts, PPT background images, PPT materials and other resources for download.",
        "url": "https://www.365ppt.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.edrawsoft.com/favicon.ico",
        "name": "Edraw",
        "description": "Edraw is a powerful charting software that supports various chart types, including flowcharts, organizational charts, network diagrams, P&ID, floor plans, UML, ERD, strategy maps, etc.",
        "url": "https://www.edrawsoft.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.linkedin.com/favicon.ico",
        "name": "LinkedIn",
        "description": "LinkedIn is the world's largest professional social platform, helping users build professional connections, share professional experiences, and get professional opportunities.",
        "url": "https://www.linkedin.com/",
        "tag": "networking"
    },
    {
        "logo": "https://www.slidescarnival.com/favicon.ico",
        "name": "SlidesCarnival",
        "description": "SlidesCarnival provides free PPT templates in multiple fields, including business, education, technology, art, etc.",
        "url": "https://www.slidescarnival.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.speackybox.com/favicon.ico",
        "name": "Speackybox",
        "description": "Speackybox is an online speech manuscript production tool that provides a variety of speech manuscript templates and materials to help users quickly create beautiful speech manuscripts.",
        "url": "https://www.speackybox.com/",
        "tag": "design"
    },
    {
        "logo": "http://www.pptok.com/favicon.ico",
        "name": "PPTOK",
        "description": "PPTOK provides free PPT templates, PPT charts, PPT background images, PPT materials and other resources for download.",
        "url": "http://www.pptok.com/",
        "tag": "design"
    },
    {
        "logo": "https://prezi.com/favicon.ico",
        "name": "Prezi",
        "description": "Prezi is an online presentation creation tool that provides a variety of presentation templates and materials to help users quickly create beautiful presentations.",
        "url": "https://prezi.com/",
        "tag": "design"
    },
    {
        "logo": "https://www.elance.com/favicon.ico",
        "name": "Elance",
        "description": "Elance is a website that connects businesses with freelancers to get work done.",
        "url": "https://www.elance.com/",
        "tag": "freelance"
    },
    {
        "logo": "https://www.fiverr.com/favicon.ico",
        "name": "Fiverr",
        "description": "Fiverr is a website that connects businesses with freelancers to get work done.",
        "url": "https://www.fiverr.com/",
        "tag": "freelance"
    },
    {
        "logo": "https://www.freelancer.com/favicon.ico",
        "name": "Freelancer",
        "description": "Freelancer is a website that connects businesses with freelancers to get work done.",
        "url": "https://www.freelancer.com/",
        "tag": "freelance"
    },
    {
        "logo": "https://www.upwork.com/favicon.ico",
        "name": "Upwork",
        "description": "Upwork is a website that connects businesses with freelancers to get work done.",
        "url": "https://www.upwork.com/",
        "tag": "freelance"
    },
    {
        "logo": "https://www.craigslist.org/favicon.ico",
        "name": "Craigslist",
        "description": "Craigslist is a website that connects businesses with freelancers to get work done.",
        "url": "https://www.craigslist.org/",
        "tag": "freelance"
    },
    {
        "logo": "http://www.powerpointfreelance.com/favicon.ico",
        "name": "Powerpointfreelance.com",
        "description": "Powerpointfreelance.com is a website that connects businesses with freelancers to get PowerPoint work done.",
        "url": "http://www.powerpointfreelance.com/",
        "tag": "freelance"
    },
    {
        "logo": "https://www.guru.com/favicon.ico",
        "name": "Guru",
        "description": "Guru is a website that connects businesses with freelancers to get work done.",
        "url": "https://www.guru.com/",
        "tag": "freelance"
    },
    {
        "logo": "https://99designs.com/favicon.ico",
        "name": "99Designs",
        "description": "99Designs is a website that connects businesses with freelance designers to get design work done.",
        "url": "https://99designs.com/",
        "tag": "design"
    },


];
