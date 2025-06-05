document.addEventListener('DOMContentLoaded', function () {
  flatpickr('#booking-date', {
    minDate: 'today',
    dateFormat: 'Y-m-d'
  });
  const form = document.getElementById('booking-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Bedankt voor je reservering! We nemen contact met je op.');
    form.reset();
  });
});
