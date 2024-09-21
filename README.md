<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Personal portfolio</h1>

[![Site preview](/public/site-preview.png)](https://hamishw.com)

My design portfolio to showcase a few projects. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://zmmmdf.com).
## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

## Deployment

I've set up the site using Cloudflare for hosting. Deploy the site to Cloudflare Pages:

```bash
npm run deploy
```

## Permissions

Feel free to use the code or any parts of it for your own project—it's open source, and I encourage learning and adapting from it. However, I recommend making changes to the theme and components to give it your own unique touch. If you use the design without significant modification, I’d appreciate a credit as the original designer.

You are welcome to use the code for learning or adapting to your own projects, as it's open source. However, I do not grant permission to present any of my projects as your own, as they are actively being used as part of my portfolio and represent real work I've done. Please respect this when using the code.
## FAQs

<details>
  <summary>How do I get the contact form to work?</summary>
  
  To set up the contact form, create an AWS account and configure SES (Simple Email Service). After that, input your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as environment variables in the Cloudflare dashboard for it to work in production. Alternatively, if you prefer using Gmail, you can use [Nodemailer](https://nodemailer.com/) instead.
</details>
