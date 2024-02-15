<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time Sheet</title>
</head>
<body>
    <form id="timeSheetForm">
        Employee Name: <input type="text" name="employeeName"><br>
        Work Hours: <input type="text" name="workHours"><br>

        <button type="button" onclick="submitForm()">Submit</button>
    </form>

    <script>
        function submitForm() {
            var formData = new FormData(document.getElementById("timeSheetForm"));

            fetch('URL_TO_GOOGLE_APPS_SCRIPT', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text()) // Extract the response text
            .then(data => {
                // Handle the response as needed
                console.log('Form submitted successfully:', data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error submitting form:', error);
            });
        }
    </script>
</body>
</html>
