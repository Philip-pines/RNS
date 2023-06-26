var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var res = document.getElementById("result");

// document.getElementById("num1").addEventListener("change", function(){
//     res.value=parseInt(num1.value)*parseInt(num2.value);
// })

document.getElementById("num2").addEventListener("change", function(){
    res.value=parseInt(num2.value)*parseInt(30);
})

function generatePDF() {
    // Create a new PDF document
    var doc = new jsPDF();

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Set the content of the PDF document
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Message: ${message}`, 10, 30);

    // Generate the PDF
    doc.save('form.pdf');
}

function generateInvoice() {
    // Create a new PDF document
    var doc = new jsPDF();

    // Get the form values
    var invoiceNumber = document.getElementById('invoiceNumber').value;
    var companyName = document.getElementById('companyName').value;
    var customerName = document.getElementById('customerName').value;
    var totalAmount = document.getElementById('totalAmount').value;

    // Set the content of the invoice PDF
    doc.setFontSize(20);
    doc.text('Invoice', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoiceNumber}`, 20, 40);
    doc.text(`Company Name: ${companyName}`, 20, 50);
    doc.text(`Customer Name: ${customerName}`, 20, 60);
    doc.text(`Total Amount: $${totalAmount}`, 20, 70);

    // Generate the PDF
    doc.save('invoice.pdf');
}

function printForm() {
    // Open a new tab
    var printWindow = window.open('', '_blank');

    // Get the form element
    var form = document.getElementById('myForm');

    // Clone the form element
    var clonedForm = form.cloneNode(true);

    // Append the cloned form to the new tab's document
    printWindow.document.body.appendChild(clonedForm);

    // Print the new tab
    printWindow.print();

    // Close the new tab after printing
    printWindow.close();
  }