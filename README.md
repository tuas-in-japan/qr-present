## Steps to Run the Application

- Open Command Prompt and type the following command to start ngrok:
  `ngrok http 4200`
- Place ngrok url into .env file
- Start the Angular app with the following command:
  `ng serve`
- You are navigated to the display-data view by empty URL in your browser.

### Actions for "Teacher"

- Enter the course name and click "Submit". A QR code will be generated on LAPTOP screen.

### Actions for "Student"

- Scan the QR code with your SMARTPHONE and follow the link.
- On your smartphone, you will be taken to the display-data view by `display-data` URL. The position and name of the course will be taken from the QR code (URL parameters).
