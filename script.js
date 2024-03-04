// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select the portfolio button
    var portfolioButton = document.querySelector('.portfolio');
  
    // Add click event listener to the portfolio button
    portfolioButton.addEventListener('click', function() {
      // Call the downloadPDF() function when the button is clicked
      downloadPDF();
    });
  });
  
  function downloadPDF() {
    // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
    var pdfUrl = 'images/cv.pdf';
    
    // Create a temporary anchor element
    var tempLink = document.createElement('a');
    tempLink.href = pdfUrl;
    
    // Set the download attribute to force download
    tempLink.setAttribute('download', 'portfolio.pdf');
    
    // Hide the anchor element
    tempLink.style.display = 'none';
    
    // Append the anchor element to the document body
    document.body.appendChild(tempLink);
    
    // Trigger a click event on the anchor element
    tempLink.click();
    
    // Remove the anchor element from the document body
    document.body.removeChild(tempLink);
  }
  
  // Select the portfolio button
var portfolioButton = document.querySelector('.portfolio');

// Add event listener to the portfolio button
portfolioButton.addEventListener('click', function() {
    // Call the downloadPDF function when the button is clicked
    downloadPDF();
});

