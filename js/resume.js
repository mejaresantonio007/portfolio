
      function openModal(educationId) {
        let modalId = '';
        switch (educationId) {
          case 1:
            modalId = '#educationModal1';
            break;
          case 2:
            modalId = '#educationModal2';
            break;
          case 3:
            modalId = '#educationModal3';
            break;
        }
    
        // Show the modal with the corresponding ID
        const modal = new bootstrap.Modal(document.querySelector(modalId));
        modal.show();
      }
