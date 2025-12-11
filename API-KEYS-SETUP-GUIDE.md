# Complete Setup Guide: API Keys for English Learning App

This guide will walk you through creating both API keys needed for your app from scratch.

---

## 🤖 Part 1: Create Gemini API Key (for AI Chatbot)

### Step 1: Go to Google AI Studio
1. Open your browser and go to: **https://aistudio.google.com/app/apikey**
2. Sign in with your Google account (dudumrk@gmail.com)

### Step 2: Create API Key
1. Click the **"Create API Key"** button (or "Get API key" if you don't have any keys yet)
2. You'll see options like:
   - "Create API key in new project" ← **Choose this option**
   - Or select an existing project if you prefer

### Step 3: Copy the API Key
1. After creation, you'll see a popup with your API key
2. The key will look like: `AIzaSyD1234567890abcdefghijklmnopqrstuvw`
3. **Click "Copy"** to copy the entire key
4. **Important**: This key is shown only once, so save it immediately!

### Step 4: Add to .env File
1. Open `d:\AICode\english-app-nadav\.env`
2. Update or add this line (NO quotes, NO spaces):
   ```
   VITE_GEMINI_API_KEY=AIzaSyD1234567890abcdefghijklmnopqrstuvw
   ```
3. Replace with your actual copied key
4. **Save the file**

### Step 5: Test the API Key
Run this command in PowerShell to verify it works:
```powershell
cd d:\AICode\english-app-nadav
node test-api-key.js
```

If you see "✅ API KEY IS VALID!" - you're good to go!

---

## 🔐 Part 2: Create Google OAuth Client ID (for Google Login)

### Step 1: Go to Google Cloud Console
1. Open: **https://console.cloud.google.com/**
2. Sign in with your Google account

### Step 2: Create or Select a Project
1. At the top of the page, click the **project dropdown** (next to "Google Cloud")
2. Click **"New Project"**
3. Enter project name: `English Learning App` (or any name you like)
4. Click **"Create"**
5. Wait a few seconds, then **select your new project** from the dropdown

### Step 3: Enable Google+ API (Optional but Recommended)
1. In the left sidebar, go to: **APIs & Services** → **Library**
2. Search for: "Google+ API"
3. Click on it and click **"Enable"**

### Step 4: Configure OAuth Consent Screen
1. In the left sidebar: **APIs & Services** → **OAuth consent screen**
2. Choose **"External"** user type
3. Click **"Create"**
4. Fill in the form:
   - **App name**: `Nadav's English Learning App`
   - **User support email**: Select your email (dudumrk@gmail.com)
   - **Developer contact information**: Enter your email again
5. Click **"Save and Continue"**
6. On "Scopes" page: Click **"Save and Continue"** (no changes needed)
7. On "Test users" page: 
   - Click **"Add Users"**
   - Add your email: `dudumrk@gmail.com`
   - Click **"Save and Continue"**
8. Click **"Back to Dashboard"**

### Step 5: Create OAuth Client ID
1. In the left sidebar: **APIs & Services** → **Credentials**
2. Click **"+ Create Credentials"** at the top
3. Select **"OAuth client ID"**
4. Choose application type: **"Web application"**
5. Enter name: `English App Web Client`
6. Under **"Authorized JavaScript origins"**, click **"+ Add URI"** and add:
   - `http://localhost:5173`
   - `http://localhost:5174`
   - `http://localhost:5175`
   - (Add multiple ports in case Vite switches ports)
7. Under **"Authorized redirect URIs"** (optional for this app):
   - Can leave empty for now
8. Click **"Create"**

### Step 6: Copy the Client ID
1. You'll see a popup with:
   - **Client ID**: `998055333396-xxxxxxxxxxxxxxxx.apps.googleusercontent.com`
   - Client Secret (you don't need this for frontend apps)
2. **Copy the Client ID**
3. Click **"OK"**

### Step 7: Add to .env File
1. Open `d:\AICode\english-app-nadav\.env`
2. Update or add this line:
   ```
   VITE_GOOGLE_CLIENT_ID=998055333396-xxxxxxxxxxxxxxxx.apps.googleusercontent.com
   ```
3. Replace with your actual Client ID
4. **Save the file**

---

## ✅ Final .env File Format

Your complete `.env` file should look like this:

```env
VITE_GOOGLE_CLIENT_ID=998055333396-xxxxxxxxxxxxxxxx.apps.googleusercontent.com
VITE_GEMINI_API_KEY=AIzaSyD1234567890abcdefghijklmnopqrstuvw
```

**Important Rules:**
- ❌ NO quotes around values
- ❌ NO spaces around the `=` sign
- ✅ Just plain key=value format

---

## 🚀 Restart the App

After adding both keys:

1. **Stop the dev server** (press Ctrl+C in the terminal)
2. **Start it again**:
   ```powershell
   npm run dev
   ```
3. **Open**: http://localhost:5173
4. **Test**:
   - Try Google login (should work without origin_mismatch errors)
   - Try Demo mode → Week 1, Day 5 → Send a chat message (AI should respond)

---

## 🆘 Troubleshooting

### "API key not valid" error
- Make sure you copied the ENTIRE key (should be ~39 characters)
- No quotes or spaces in the .env file
- Restart the dev server after changing .env

### "origin_mismatch" error on Google login
- Go back to Google Cloud Console → Credentials
- Edit your OAuth Client ID
- Make sure your current localhost port (e.g., `http://localhost:5173`) is in "Authorized JavaScript origins"
- Wait 5 minutes for changes to propagate

### Chatbot not responding
1. Check browser console (F12) for errors
2. Run `node test-api-key.js` to verify the key
3. Make sure you restarted the dev server after updating .env

---

## 📝 Notes

- **Security**: Never commit your `.env` file to git (it's already in `.gitignore`)
- **API Quotas**: Gemini API has free tier limits. Monitor usage at https://aistudio.google.com/
- **Testing**: Use Demo mode during development to avoid OAuth setup complexity

---

**Need Help?** 
- Gemini API Docs: https://ai.google.dev/docs
- Google OAuth Docs: https://developers.google.com/identity/protocols/oauth2
