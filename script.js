fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('fruit-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
