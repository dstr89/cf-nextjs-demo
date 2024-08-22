This is a [Next.js](https://nextjs.org/) demo project based on the [App Router Demo](https://www.contentful.com/blog/integrate-contentful-next-js-app-router/) from [Contenful](https://www.contentful.com/).

## Run Dev Server

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Create Content in Contenful

Create a space and a content model named knowledgeArticle in Contenful. Add the following fields to the content model:
- title (Short text): The title of the article.
- slug (Short text): A URL-friendly version of the title.
- summary (Short text): A brief overview of the article.
- details (Rich text): The main content of the article.
- date (Date & time): The publication date of the article.
- articleImage (Media): An image representing the article.
- authorName (Short text): The name of the article’s author.
- categoryName (Short text): The category to which the article belongs.

Next, populate the content model with sample data and set up Contentful’s Content Delivery API.

## Setting Environment Variables

```
CONTENTFUL_SPACE_ID=<Replace with your Contentful Space ID>
CONTENTFUL_ACCESS_TOKEN=<Replace with your Contentful Access Token>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=<Replace with your Contentful Preview Access Token>
CONTENTFUL_PREVIEW_SECRET=<Replace with your Contentful Preview Secret>
CONTENTFUL_REVALIDATE_SECRET=<Replace with a secret of your choice>
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Don't forget to all set Environment Variables in Vercel.

## Configure Contentful

### Content Revalidation

Log into your Contentful space and go to Settings > Webhooks and click the Add Webhook button. From here you can set the following settings to call the revalidate API for on-demand revalidation. For example: https://contentful-nextjs-app-router.vercel.app/api/revalidation

### Content Preview

Next, navigate to Settings > Content Preview and click the Create preview platform button. Provide Name and Description and then select Knowledge Article from the Select content types dropdown. Under Knowledge Article, point Contentful to our draft API endpoint containing the secret and slug to enable Draft Mode. For example: https://contentful-nextjs-app-router.vercel.app/api/draft?secret=<your content preview secret>&slug={entry.fields.slug}




