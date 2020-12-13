To let chrome extension doing OAuth workflow, follow the procedure:

## Step 1.

Package the extension Bring up the Extensions management page by going to this URL: `chrome://extensions`

Ensure that the "Developer mode" checkbox in the top right-hand corner is checked. Click the Pack extension
button. A dialog appears.

Go to the `/dist` folder of jobs-tracker project and upload the `dist` folder.

## Step 2.

Click Package. The packager creates two files:

a `.crx` file, which is the actual extension that can be installed, and a `.pem` file, which contains the
private key.

Save these 2 files in safe place.

## Step 3.

https://stackoverflow.com/questions/23873623/obtaining-chrome-extension-id-for-development

In the same directory of the ".pem" file, run the command

**Generate string to be used as "key" in manifest.json (outputs to stdout)**

```bash
$ 2>/dev/null openssl rsa -in key.pem -pubout -outform DER | openssl base64 -A
```

**Calculate extension ID (outputs to stdout)**

```bash
$ 2>/dev/null openssl rsa -in key.pem -pubout -outform DER | shasum -a 256 | head -c32 | tr 0-9a-f a-p
```

## Step 4.

Copy the public key generated in step 3 into the field `key` in root manifest.json

Also, check for the extension id generated in step 3 is the same as the extension ID show in the
`chrome://extensions`

## Step 5:

Go to "Google API Console" web page to generate a OAuth Client Credentials.

Follow this tutorial here:  
https://developer.chrome.com/extensions/tut_oauth
