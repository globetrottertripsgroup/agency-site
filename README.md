# Globetrotter Trips — Theme Parks & Cruises

A static website for Globetrotter Trips, specializing in Disney Parks, Universal Studios, and Cruise vacations.

## Deploying to Amazon Amplify

### Option A — Connect a GitHub repo (recommended)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/globetrotter-trips.git
   git push -u origin main
   ```

2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click **"New app" → "Host web app"**
4. Choose **GitHub** and authorize AWS
5. Select your repository and the `main` branch
6. Amplify will auto-detect the `amplify.yml` — click **"Save and deploy"**
7. Your site will be live at a generated `.amplifyapp.com` URL in ~2 minutes

### Option B — Deploy manually (no GitHub)

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app" → "Host web app"**
3. Choose **"Deploy without Git provider"**
4. Drag and drop this entire folder (zipped) into the upload area
5. Click **"Save and deploy"**

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main website (single-page) |
| `amplify.yml` | Amplify build configuration |
| `404.html` | Redirects unknown URLs back to home |
| `README.md` | This file |

## Contact Form

The "Plan Your Trip" modal uses [Formspree](https://formspree.io) to deliver submissions to `globetrottertripsgroup@gmail.com`.

**One-time activation required:** The first time a form is submitted, Formspree will send a confirmation email to that address. Click the link in that email to activate delivery.

## Customization

All content, colors, and copy live in `index.html`. Key CSS variables at the top of the `<style>` block:

```css
--royal: #1A56A4;   /* Primary blue */
--gold:  #E8A020;   /* Accent gold  */
--ink:   #0F1B2D;   /* Dark text    */
```
