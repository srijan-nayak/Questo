# Questo

A Q&A site where anyone with access to the site can post questions and selected
admins (domain experts) have access to the CMS to answer them.

## Running the project locally

### Clone and install dependencies

```bash
git clone https://github.com/srijan-nayak/Questo.git
cd Questo
npm install
```

### Configure environment variables

First [create a Sanity project][sanity-create] and copy the [project ID and dataset][sanity-id-dataset]
for the created project. Also, create and copy a [robot API token][sanity-robot-tokens].
Then, with the `.env.local.example` file as a template, create a `.env.local` file
in the project root and replace the values with the previously copied ones.

```bash
cp .env.local.example .env.local
# edit .env.local to replace the dummy values with appropriate ones
```

### Configure CORS

Add `http://localhost:3000` to the [CORS origins][sanity-cors] of the Sanity project.

### Run the dev server

```bash
npm run dev
```

The application will be accessible on [localhost:3000](http://localhost:3000).

[sanity-create]: https://www.sanity.io/docs/create-a-sanity-project "Guide for creating a Sanity project"
[sanity-id-dataset]: https://www.sanity.io/docs/connect-your-content#cce328fef7ba "Guide for figuring out the project ID and dataset name"
[sanity-robot-tokens]: https://www.sanity.io/docs/http-auth#4c21d7b829fe "Guide for creating robot tokens"
[sanity-cors]: https://www.sanity.io/docs/connect-your-content#c9024b135361 "Guide for adding a URL to CORS settings"
