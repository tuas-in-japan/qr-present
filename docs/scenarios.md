# Application Scenario

The application could work according to the following scenario:

1. A teacher logs into the app using their Microsoft account credentials.
2. After logging in, the teacher inputs information about the lecture, and the system generates a QR code.
3. The teacher then displays this code to students.
4. Students scan the code using their mobile phones and log into the app using their Microsoft account credentials.
5. After that, the teacher can access Microsoft Excel through School Office 365 and view the list of students who are present at the lecture.
6. The teacher can then add additional information to the table for each student.

## QR Code Generation

- The QR code is generated based on the geostamp with accuracy sufficient to consider only students in the classroom where the lecture is held.
- The QR code is updated within a time period long enough to complete student registration but short enough to prevent cheating by taking a picture of the QR code and sending it to absent students for registration.
