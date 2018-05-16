export default function() {
  const form = document.getElementById('unicornForm');

  form.addEventListener(
    'submit',
    function(e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      for (var [key, value] of formData.entries()) {
        console.log(key, value);
      }
    },
    true
  );
}
