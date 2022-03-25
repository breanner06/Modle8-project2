let data = [
  {
    name: 'Option 1',
    price: '30'
  },
  {
    name: 'Option 2',
    price: '32'
  },
  {
    name: 'Option 3',
    price: '20'
  },
  {
    name: 'Option 4',
    price: '27'
  },
  {
    name: 'Option 5',
    price: '22'
  },
  {
    name: 'Option 6',
    price: '34'
  }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'is $' + item.price + '.00' + '</div>';
});

info.innerHTML = details.join('\n');
