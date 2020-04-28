function display()
{
    if(document.form.box.value.length < 1)
    {
        alert("hrm seen you havent select your vanue yet!");
        return false;
    }
    if(document.form.name.value.length < 1)
    {
        alert("hrm seen you havent entered your name yet!");
        return false;
    }
    if(document.form.phone.value.length < 10)
    {
        alert("hrm seen your phone number is not valid !");
        return false;
    }
    if(document.form.course.value.length < 10)
    {
        alert("hrm seen you havent entered your course yet!");
        return false;
    }
    if(document.form.event.value.length < 1)
    {
        alert("hrm seen you havent entered your event yet!");
        return false;
    }
    if(document.form.date.value.length < 1)
    {
        alert("hrm seen you havent entered your date yet!");
        return false;
    }
    if(document.form.time.value.length < 1)
    {
        alert("hrm seen you havent entered your time yet!");
        return false;
    }
    if(document.form.number.value.length < 1)
    {
        alert("hrm seen you havent entered your number yet!");
        return false;
    }
   
    
    

    dispWin = window.open('','NewWin', 'toolbar=no, status=no, width=500, height=500')
    message = "<ol type='1'><li><Strong>The Vanue to be rented: </strong>" + document.form.box.value + document.form.classroom.value + "</li>";
    message += "<li><Strong>Name: </Strong>" + document.form.name.value + "</li>";
    message += "<li><Strong>Phone Number: </Strong>" + document.form.phone.value + "</li>";
    message += "<li><Strong>Applicant's course: </Strong>" + document.form.course.value + "</li>";
    message += "<li><Strong>Event Name: </Strong>" + document.form.event.value + "</li>";
    message += "<li><Strong>Event Date: </Strong>" + document.form.date.value + "</li>";
    message += "<li><Strong>Event Time: </Strong>" + document.form.time.value + "</li>";
    message += "<li><Strong>The number of participants: </Strong>" + document.form.number.value + "</li>";
    dispWin.document.write(message);
}
